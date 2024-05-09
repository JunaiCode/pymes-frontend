'use client'
import CreateTag from "@/components/admin/CreateTag";
import ComboBox from "@/components/ui/ComboBox";
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";
import { IoIosCreate } from "react-icons/io";
import { useRouter } from "next/navigation";

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
    const [modelSelected, setModelSelected] = useState("-1");
    const [versionSelected, setVersionSelected] = useState("-1");
    const [dimensionSelected, setDimensionSelected] = useState("-1");
    const [tagData, setTagData] = useState([] as any)
    const router = useRouter();
    const [versionEnabled, setVersionEnabled] = useState(false);
    const [dimensionEnabled, setDimensionEnabled] = useState(false);


    const [open, setOpen] = useState(false)

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
                setTagData(data)
                console.log(data)
            })
        }
    }
        , [dimensionSelected])

    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="w-full px-4 py-8" id="title">
                    <p className="font-sans text-2xl">Tags</p>
                    <p className="font-sans text-sm mt-2">Administra las etiquetas de las preguntas para categorizarlas</p>
                </header>
                <section className="flex flex-row w-full p-4">
                    <header className="flex flex-row w-full p-4 justify-end">
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


                        <button className={`ml-auto  py-2 px-2 text-white rounded-lg bg-${dimensionEnabled ? 'primary' : 'gray-400'}`}
                            onClick={() => setOpen(true)}
                            disabled={!dimensionEnabled}
                        >Agregar</button>
                    </header>

                </section>
                <main className="h-full w-full flex flex-col border overflow-y-scroll border-red-400 p-4">
                    {tagData.length > 0 && tagData.map((tag: any) => {
                        return <TagCard key={tag.tagId} name={tag.name} description={tag.description} id={tag.tagId} router={router} />
                    })}
                    {(tagData.length === 0 || tagData === null) && <p className="font-sans text-lg text-gray-400">No hay tags</p>}
                </main>
            </div>
            <CreateTag isOpen={open} onClose={setOpen} dimensionId={dimensionSelected} />
        </PageTemplate>
    )
}

export function TagCard({ name, description, id, router }: { name: string, description: string, id: string, router: any }) {
    return (
        <div id={id} className="flex flex-row w-full items-start justify-start rounded-lg border my-2 border-gray-300">
            <section>
                <header className="w-full px-4 pt-4">
                    <p className="font-sans text-xl text-secondary_old">{name}</p>
                </header>
                <section className="w-full p-4">
                    <p className="font-sans text-sm text-gray-600">{description}</p>
                </section>
            </section>
            <footer className="w-full h-full flex justify-center items-center p-4">
                <button
                    className="w-fit h-fit flex flex-row justify-around items-center border px-2 py-1 border-secondary_old text-secondary_old rounded-2xl ml-auto"
                    onClick={() => router.push(`/tags/${id}`)}
                >
                    <IoIosCreate size={20} className="text-secondary_old" />
                    <p className="ml-2 text-sm">Editar</p>
                </button>
            </footer>
        </div>
    )
}


