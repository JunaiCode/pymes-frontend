'use client'
import ComboBox from "@/components/ui/ComboBox";
import PageTemplate from "@/components/ui/PageTemplate";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { IoIosCreate } from "react-icons/io";


async function fetchModels() {
    const res = await fetch('http://localhost:8080/model/get/all')
    const data = await res.json()
    return data
}

async function fetchVersions(modelId: string) {
    const res = await fetch(`http://localhost:8080/model/get/versions/${modelId}`)
    const data = await res.json()
    return data
}

async function fetchQuestions(levelId: string) {
    const res = await fetch(`http://localhost:8080/question/get/level/${levelId}`)
    const data = await res.json()

    return data
}

export default function Page() {
    const [modelData, setModelData] = useState([] as any)
    const [versionData, setVersionData] = useState([] as any)
    const [dimensionData, setDimensionData] = useState([] as any)
    const [modelSelected, setModelSelected] = useState("-1");
    const [versionSelected, setVersionSelected] = useState("-1");
    const [dimensionSelected, setDimensionSelected] = useState("-1");
    const [levelSelected, setLevelSelected] = useState("-1");
    const [levelData, setLevelData] = useState([] as any)
    const [levelEnabled, setLevelEnabled] = useState(false)
    const [questionData, setQuestionData] = useState([] as any)
    const router = useRouter();
    const [versionEnabled, setVersionEnabled] = useState(false);
    const [dimensionEnabled, setDimensionEnabled] = useState(false);



    useEffect(() => {
        fetchModels().then(data => {
            if (data.length === 0) {
                return
            }
            setModelData(data)
            setModelSelected(data[0].modelId)
            setVersionEnabled(true)
        })
    }, [])

    useEffect(() => {
        if (modelSelected !== "-1") {
            fetchVersions(modelSelected).then(data => {
                if (data.length === 0) {
                    return
                }
                setVersionData(data)
                setVersionSelected(data[0].versionId)
            })
        }
    }, [modelSelected])

    useEffect(() => {
        if (versionSelected !== "-1") {
            setDimensionData(versionData.find((version: any) => version.versionId === versionSelected).dimensions)
            setDimensionEnabled(versionData.find((version: any) => version.versionId === versionSelected)?.dimensions?.length > 0);
            setDimensionSelected(
                versionData.find((version: any) => version.versionId === versionSelected)?.dimensions?.[0]?.dimensionId
            )

        }
    }, [versionSelected])

    useEffect(() => {
        if (dimensionSelected !== "-1") {
            
            if (dimensionData.length === 0 || dimensionData.find((dimension: any) => dimension.dimensionId === dimensionSelected).levels.length === 0) {
                setQuestionData([])
                return
            }
            setLevelData(dimensionData.find((dimension: any) => dimension.dimensionId === dimensionSelected).levels)
            setLevelSelected(dimensionData.find((dimension: any) => dimension.dimensionId === dimensionSelected).levels[0].levelId)
            setLevelEnabled(true)
        }

    }, [dimensionSelected])

    useEffect(() => {
        if (levelSelected !== "-1") {
            fetchQuestions(levelSelected).then(data => {

                if (data.length === 0) {
                    setQuestionData([])
                    return
                }
                setQuestionData(data)
            })
        }
    }, [levelSelected])

    return (
        <PageTemplate>
            <div className="h-full w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="w-full px-4 py-8" id="title">
                    <p className="font-sans text-2xl">Preguntas del modelo</p>
                </header>
                <section className="flex flex-row w-full p-4">
                    <ComboBox
                        label="Modelo"
                        optionsLabels={modelData.map((model: any) => model.name)}
                        optionsValues={modelData.map((model: any) => model.modelId)}
                        selected={modelSelected}
                        setSelected={setModelSelected}
                        enabled={true}
                    />

                    <ComboBox
                        label="Version"
                        optionsLabels={versionData.map((version: any) => version.name)}
                        optionsValues={versionData.map((version: any) => version.versionId)}
                        selected={versionSelected}
                        setSelected={setVersionSelected}
                        enabled={versionEnabled}
                    />

                    <ComboBox
                        label="Dimension"
                        optionsLabels={dimensionData.map((dimension: any) => dimension.name)}
                        optionsValues={dimensionData.map((dimension: any) => dimension.dimensionId)}
                        selected={dimensionSelected}
                        setSelected={setDimensionSelected}
                        enabled={dimensionEnabled}
                    />

                    <ComboBox
                        label="Nivel"
                        optionsLabels={levelData.map((level: any) => level.name)}
                        optionsValues={levelData.map((level: any) => level.levelId)}
                        selected={levelSelected}
                        setSelected={setLevelSelected}
                        enabled={levelEnabled}
                    />

                    <button className="ml-auto bg-secondary_old py-2 px-2 text-white rounded-lg h-fit"
                        onClick={() => router.push('/questions/new')}
                    >Agregar</button>
                </section>
                <main className="h-full w-full flex flex-col  overflow-y-scroll p-4">
                    {questionData.map((question: any) => (
                        <QuestionCard question={question} router={router} key={question.questionId} />

                    ))}
                    {questionData.length === 0 && (
                        <p className="font-sans text-lg text-gray-600">No hay preguntas en este nivel</p>
                    )}
                </main>
            </div>
        </PageTemplate>
    )
}

export function QuestionCard({ question, router }: any) {
    return (
        <div className="flex flex-col w-full items-start justify-start my-2 bg-white mr-2 border rounded-lg shadow-lg">
            <header className="w-full px-4 pt-4 border-b-2 pb-1">
                <p className="font-sans font-bold text-xl text-secondary_old">{question.question}</p>
            </header>
            <section className="flex flex-row w-full ">
                <section className="w-full flex flex-row p-4 ">
                    <section className="h-full w-full flex flex-col">
                        <p className="font-sans text-md font-semibold text-gray-600">Informacion de la pregunta</p>
                        <p className="font-sans text-sm text-gray-600">Tipo de empresa: {question.companyTypeId}</p>
                        <p className="font-sans text-sm text-gray-600">Puntaje: {question.scorePositive}</p>
                        <p className="font-sans text-sm text-gray-600">Opciones: {question.options.length}</p>
                    </section>
                    <section className="h-full w-full flex flex-col">
                        <p className="font-sans text-md font-bold text-gray-600">Informacion de la recomendacion</p>
                        <p className="font-sans text-sm text-gray-600">Titulo: {question.recommendation.title}</p>
                        <p className="font-sans text-sm text-gray-600">Pasos: {question.recommendation.steps.length}</p>

                    </section>

                </section>
                <footer className=" h-full flex justify-center items-center p-4">
                    <button
                        className="w-fit h-fit flex flex-row justify-around items-center border px-2 py-1 border-secondary_old text-secondary_old rounded-2xl ml-auto"
                        onClick={() => router.push(`/tags/${question.questionId}`)}
                    >
                        <IoIosCreate size={20} className="text-secondary_old" />
                        <p className="ml-2 text-sm">Editar</p>
                    </button>
                </footer>
            </section>

        </div>
    )
}