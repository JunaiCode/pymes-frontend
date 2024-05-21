'use client'
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";

async function fetchModel(id: string) {
    const res = await fetch(`http://localhost:8080/model/get/${id}`)
    const data = await res.json()
    return data
}

async function fetchVersion(id: string) {
    const res = await fetch(`http://localhost:8080/version/get/${id}`)
    const data = await res.json()
    return data
}

export default function Page({ params }: { params: { id: string, versionId: string } }) {
    
    const [model, setModel] = useState({
        description: "",
        modelId: "",
        name: "",
    })

    const [version, setVersion] = useState({
        versionId: "",
        name: "",
        dimensions: []
    })
            

    useEffect(() => {
        fetchModel(params.id).then(data => {
            setModel(data)
        })
        fetchVersion(params.versionId).then(data => {
            setVersion(data)
        })

    }, [])

    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-start bg-light max-h-screen">
                <header className="flex flex-row w-full px-4 py-8" id="title">
                    <div>
                        <p className="font-sans text-md ">{model.name}</p>
                        <p className="font-sans text-2xl mb-2">{version.name}</p>
                    </div>
                </header>
                <main className="h-full w-full flex flex-col border overflow-y-scroll  p-4">
                    <p className="font-sans text-xl mb-2">Dimensiones de la versión</p>
                    {version.dimensions.length !== 0 && version.dimensions.map((item: any) => (
                        <DimensionCard key={item.dimensionId} {...item} />
                    ))}
                </main>
                
            </div>
        </PageTemplate>
    )
}

export function DimensionCard({ name, description, dimensionId }: { name: string, description: string, dimensionId: string }) {
    return (
        <div id={dimensionId} className="flex flex-row w-full items-start justify-start my-2 bg-white mr-2 border rounded-lg shadow-lg">
            <section>
                <header className="w-full px-4 pt-4">
                    <p className="font-sans text-xl text-secondary_old">{name}</p>
                </header>
                <section className="w-full p-4">
                    <p className="font-sans text-sm text-gray-600">{description}</p>
                </section>
            </section>
        </div>
    )
}