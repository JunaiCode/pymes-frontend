'use client'
import CreateDimension from "@/components/admin/CreateDimension";
import ComboBox from "@/components/ui/ComboBox";
import PageTemplate from "@/components/ui/PageTemplate";
import SearchBar from "@/components/ui/SearchBar";
import { useState, useEffect, useMemo } from "react";
import { IoIosCreate } from "react-icons/io";
import { useRouter } from "next/navigation";

async function fetchModels() {
    const res = await fetch('http://18.218.220.138:8081/model/get/all')
    const data = await res.json()
    return data
}

async function fetchVersions(modelId: string) {
    const res = await fetch(`http://18.218.220.138:8081/model/get/versions/${modelId}`)
    const data = await res.json()
    return data
}

async function fetchDimensions(versionId: string) {
    const res = await fetch(`http://18.218.220.138:8081/version/get/${versionId}`)
    const data = await res.json()
    return data
}


export default function Page() {
    const [modelData, setModelData] = useState([] as any)
    const [versionData, setVersionData] = useState([] as any)
    const [data, setData] = useState([] as any)
    const [loaded, setLoaded] = useState(false)

    const [modelSelected, setModelSelected] = useState("-1");
    const [versionSelected, setVersionSelected] = useState("-1");
    const [enabled, setEnabled] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    useEffect(() => {
        fetchModels().then(data => {
            if(data.length === 0) return
            setModelData(data)
            setModelSelected(data[0].modelId)
        })
    }, [])

    useEffect(() => {
        if (modelSelected !== "-1") {
            fetchVersions(modelSelected).then(data => {
                if (data.length === 0) {
                    setEnabled(false)
                    setVersionData([])
                    console.log("No hay versiones")

                } else {
                    setVersionData(data)
                    setEnabled(true)
                    setVersionSelected("-1")
                    setVersionSelected(data[0].versionId)
                    
                }

            })
        }
    }, [modelSelected])

    useEffect(() => {
        console.log("Version selected: ", versionSelected)
        if (versionSelected !== "-1") {
            fetchDimensions(versionSelected).then(dataRes => {
                setData(dataRes.dimensions)
                setLoaded(true)
            })
        }
    }, [versionSelected])



    return (
        <PageTemplate>
            <main className="h-full w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="w-full px-4 py-8" id="title">
                    <p className="font-sans text-2xl">Dimensiones del modelo</p>
                </header>
                <section className="flex flex-col w-full" id="content">
                    <header className="flex flex-row w-full p-4 justify-end">

                        <ComboBox
                            label="Modelo"
                            optionsLabels={modelData.map((model: any) => model.name)}
                            optionsValues={modelData.map((model: any) => model.modelId)}
                            selected={modelSelected}
                            setSelected={setModelSelected}
                            enabled={true}

                        />
                        <ComboBox label="Version"
                            optionsLabels={versionData.map((version: any) => version.name)}
                            optionsValues={versionData.map((version: any) => version.versionId)}
                            selected={versionSelected}
                            setSelected={setVersionSelected}
                            enabled={enabled}

                        />
                        <button className="ml-auto w-32 h-10 bg-secondary_old text-white rounded-lg" onClick={() => setIsOpen(true)}>Crear</button>
                    </header>
                </section>
                <div className="h-full w-full flex flex-col  overflow-y-scroll  p-4">
                    {loaded && data && data.map((dimension: any) => {
                        return <DimensionCard key={dimension.dimensionId} name={dimension.name} description={dimension.description} id={dimension.dimensionId} router={router} />
                    })}
                    {loaded && data.length === 0 && <p className="font-sans text-lg text-gray-400">No hay dimensiones creadas</p>}
                    {modelData.length === 0 && <p className="font-sans text-lg text-gray-400">No hay modelos creados</p>}
                    {versionData.length === 0 && <p className="font-sans text-lg text-gray-400">No hay versiones creadas</p>}
                </div>
            </main>
            <CreateDimension isOpen={isOpen} onClose={setIsOpen} selectedModel={modelSelected} selectedVersion={versionSelected} />
        </PageTemplate>
    )
}

export function DimensionCard({ name, description, id, router }: { name: string, description: string, id: string, router: any }) {
    return (
        <div id={id} className="flex flex-row w-full items-start justify-start my-2 bg-white mr-2 border rounded-lg shadow-lg">
            <section>
                <header className="w-full px-4 pt-4">
                    <p className="font-sans text-xl text-secondary_old">{name}</p>
                </header>
                <section className="w-full p-4">
                    <p className="font-sans text-sm text-gray-600">{description}</p>
                </section>
            </section>
            <section className="ml-auto h-full">
                <footer className="w-full h-full flex justify-center items-center p-4">
                    <button
                        className="w-fit h-fit flex flex-row justify-around items-center border px-2 py-1 border-secondary_old text-secondary_old rounded-2xl"
                        onClick={() => router.push(`/dimensions/${id}`)}
                    >
                        <IoIosCreate size={20} className="text-secondary_old" />
                        <p className="ml-2 text-sm">Editar</p>
                    </button>
                </footer>
            </section>


        </div>
    )
}