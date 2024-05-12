'use client'
import ComboBox from "@/components/ui/ComboBox";
import PageTemplate from "@/components/ui/PageTemplate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoTrash, IoWarningSharp } from "react-icons/io5";


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

async function fetchTags(dimensionId: string) {
    const res = await fetch(`http://localhost:8080/tag/get/dimension/${dimensionId}`)
    const data = await res.json()
    return data
}



export default function Page() {
    const [modelData, setModelData] = useState([] as any)
    const [versionData, setVersionData] = useState([] as any)
    const [dimensionData, setDimensionData] = useState([] as any)
    const [tagData, setTagData] = useState([] as any)
    const [modelSelected, setModelSelected] = useState("-1");
    const [versionSelected, setVersionSelected] = useState("-1");
    const [dimensionSelected, setDimensionSelected] = useState("-1");
    const [tagSelected, setTagSelected] = useState("-1");
    const router = useRouter();
    const [versionEnabled, setVersionEnabled] = useState(false);
    const [dimensionEnabled, setDimensionEnabled] = useState(false);
    const [question, setQuestion] = useState({
        model: "",
        version: "",
        dimension: "",
        tag: "",
        question: "",
        points: 0,
        options: [] as any,
        recommendation: {
            projectName: "",
            projectDescription: "",
            steps: [] as any
        },
        priority: 0
    })
    const [sumMatch, setSumMatch] = useState(true);
    const [options, setOptions] = useState([] as any)
    const [steps, setSteps] = useState([] as any)

    const calculateSum = () => {
        if (options.length === 0) {
            return
        }
        let sum = 0;
        options.forEach((option: any) => {
            sum += option.points
        })
        console.log(question.points)
        
        if (sum !== question.points) {
            setSumMatch(false)
        } else {
            setSumMatch(true)
        }
    }



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
            fetchTags(dimensionSelected).then(data => {
                if (data.length === 0) {
                    return
                }
                setTagData(data)
            })
        }
    }, [dimensionSelected])

    const handleAddOption = () => {
        setOptions([...options, { option: "", points: 0 }])
    }



    return (
        <PageTemplate>
            <div className="w-full  flex flex-col items-start justify-start bg-light max-h-screen">
                <header className="w-full px-4 pt-8" id="title">
                    <h1 className="text-2xl font-bold">Nueva pregunta</h1>
                </header>
                <div className="w-full h-full flex flex-row items-start justify-start bg-light p-4 overflow-y-hidden" id="content" >
                    <section className="flex flex-col w-1/2 bg-white mr-2 border rounded-lg shadow-lg h-full p-4 overflow-y-hidden" id="questionDetails">
                        <p className="text-xl font-semibold pb-5">Detalles de la pregunta</p>
                        <div className="flex flex-row w-full items-stretch justify-between ">
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
                                label="Tag"
                                optionsLabels={tagData.map((tag: any) => tag.name)}
                                optionsValues={tagData.map((tag: any) => tag.tagId)}
                                selected={tagSelected}
                                setSelected={setTagSelected}
                                enabled={true}
                            />
                        </div>
                        <label className="text-gray-700 text-xs mt-5" htmlFor="question">Pregunta</label>
                        <input
                            type="text"
                            placeholder="Ejemplo: ¿Cuando fue la independencia de Mexico?"
                            className="w-full p-2.5 border border-gray-300 rounded-lg"
                            id="question"
                        />
                        <label className="text-gray-700 text-xs mt-5" htmlFor="question">Puntos de la pregunta</label>
                        <input
                            type="number"
                            placeholder="Ejemplo: 10"
                            className="w-full p-2.5 border border-gray-300 rounded-lg"
                            id="question"
                            min={1}
                            onChange={(e) => {
                                let numericValue = parseInt(e.target.value)
                                setQuestion({ ...question, points: numericValue })
                                calculateSum()

                            }}
                        />
                        <p className="text-xl font-semibold mt-5">Opciones</p>
                        <p className="text-gray-700 text-sm">Ingresa las opciones de la pregunta junto con el puntaje que se le asignara a cada una</p>
                        <div className="h-full w-full flex flex-col overflow-y-auto p-4 border border-gray-300 rounded-lg my-5">
                            {options.map((option: any, index: number) => (
                                <QuestionOption
                                    key={index}
                                    option={option.option}
                                    points={option.points}
                                    options={options}
                                    setOptions={setOptions}
                                    index={index}
                                    calculateSum={calculateSum}
                                />
                            ))}
                            
                            
                        </div>
                        <div className={`flex flex-row w-full items-center justify-center mb-2 bg-red-600 rounded-lg ${sumMatch ? "hidden" : ""}`}>
                                <IoWarningSharp className="text-white m-2" size={20} />
                                <p className="text-lg font-semibold text-white m-2">La suma de los puntos de las opciones debe ser igual a los puntos de la pregunta</p>
                            </div>
                        <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-fit"
                                onClick={handleAddOption}
                            >Agregar opcion</button>
                    </section>
                    <section className="flex flex-col w-1/2 bg-white ml-2 border rounded-lg shadow-lg h-full p-4">
                        <p className="text-xl font-semibold pb-4">Recomendacion</p>
                        <label className="text-gray-700 text-xs mt-1" htmlFor="projectName">Nombre del proyecto</label>
                        <input
                            type="text"
                            placeholder="Ejemplo: Adquisicion de equipo de computo"
                            className="w-full p-2.5 border border-gray-300 rounded-lg"
                            id="projectName"
                        />
                        <label className="text-gray-700 text-xs mt-5" htmlFor="projectDescription">Descripcion del proyecto</label>
                        
                        <textarea
                            placeholder="Ejemplo: Se requiere adquirir equipo de computo para el area de desarrollo"
                            className="w-full p-2.5 border border-gray-300 rounded-lg resize-none"
                            id="projectDescription"
                            
                        />
                        <label className="text-gray-700 text-xs mt-5" htmlFor="priority">Prioridad</label>
                        <input
                            type="number"
                            placeholder="Ejemplo: 1"
                            className="w-full p-2.5 border border-gray-300 rounded-lg"
                            id="priority"
                            min={0}
                        />
                        <p className="text-xl font-semibold mt-5">Pasos a seguir</p>
                        <p className="text-gray-700 text-sm">Ingresa los pasos que se deben seguir para completar la tarea</p>
                        <div className="h-full w-full flex flex-col overflow-y-auto p-4 border border-gray-300 rounded-lg my-5">
                            {steps.map((step: any, index: number) => (
                                <Step key={index} step={step.step} steps={steps} setSteps={setSteps} index={index} />
                            ))}
                            
                        </div>
                        <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-fit"
                                onClick={() => {
                                    setSteps([...steps, { step: "" }])
                                }}
                            >Agregar paso</button>
                    </section>

                </div>

            </div>

        </PageTemplate>
    )
}

export function QuestionOption({ option, points, options, setOptions, index, calculateSum }: any) {
    return (
        <div className="flex flex-row w-full items-center justify-between my-2">
            <input
                type="text"
                placeholder="Ejemplo: 1810"
                className="w-3/4 p-2.5 border border-gray-300 rounded-lg mr-2"
                onChange={(e) => {
                    options[index].option = e.target.value
                    setOptions([...options])
                }}
            />
            <input
                type="number"
                placeholder="Ejemplo: 10"
                className="w-1/4 p-2.5 border border-gray-300 rounded-lg"
                min={1}
                onChange={(e) => {
                    let numericValue = parseInt(e.target.value)
                    options[index].points = numericValue
                    setOptions([...options])
                    calculateSum()
                }}
            />
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
                onClick={() => {
                    const newOptions = options.filter((_, i) => i !== index)
                    setOptions(newOptions)
                }}
            >

                <IoTrash />
            </button>
        </div>
    )
}

export function Step({ step, steps, setSteps, index }: any) {
    return (
        <div className="flex flex-row w-full items-center justify-between my-2">
            <label className="text-gray-700 text-xs mt-1" htmlFor="step">Paso {index + 1}</label>
            <input
                type="text"
                placeholder="Ejemplo: 1810"
                className="w-3/4 p-2.5 border border-gray-300 rounded-lg mr-2"
                onChange={(e) => {
                    steps[index].step = e.target.value
                    setSteps([...steps])
                }}
            />
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
                onClick={() => {
                    const newSteps = steps.filter((_, i) => i !== index)
                    setSteps(newSteps)
                }}
            >

                <IoTrash />
            </button>
        </div>
    )
}