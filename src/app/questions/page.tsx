'use client'
import ComboBox from "@/components/ui/ComboBox";
import PageTemplate from "@/components/ui/PageTemplate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Page() {
    const [modelData, setModelData] = useState([] as any)
    const [versionData, setVersionData] = useState([] as any)
    const [dimensionData, setDimensionData] = useState([] as any)
    const [modelSelected, setModelSelected] = useState("-1");
    const [versionSelected, setVersionSelected] = useState("-1");
    const [dimensionSelected, setDimensionSelected] = useState("-1");
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

    }, [dimensionSelected])

    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
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

                    <button className="ml-auto bg-secondary_old py-2 px-2 text-white rounded-lg h-fit"
                        onClick={() => router.push('/questions/new')}
                    >Agregar</button>
                </section>
                <main className="h-full w-full flex flex-col border overflow-y-scroll border-red-400 p-4">

                </main>
            </div>
        </PageTemplate>
    )
}