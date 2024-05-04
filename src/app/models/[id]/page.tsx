'use client'
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";
import CreateNewVersion from "@/components/admin/CreateNewVersion";

async function fetchModel(id: string) {
    const res = await fetch(`http://localhost:8080/model/get/${id}`)
    const data = await res.json()
    
    return data 
}

async function fetchVersions(id: string) {
    const res = await fetch(`http://localhost:8080/model/get/versions/${id}`)
    const data = await res.json()
    return data
}

export default function Page({ params }: { params: { id: string } }) {
    const [model, setModel] = useState({
        description: "",
        modelId: "",
        name: "",
        versions: [
            {
                versionId: "",
                name: "",
                dimensions: [],
                levels: [],
            }
        ]
    })

    const [open, setOpen] = useState(false);


    useEffect(() => {
        //Fecth data with id
        fetchModel(params.id).then(data => {
            setModel(data)

        })
        fetchVersions(params.id).then(data => {
            setModel(prev => ({ ...prev, versions: data }))
            
        })
        console.log(model)
    }, [])



    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="flex flex-row w-full px-4 py-8" id="title">
                    <div>
                        <p className="font-sans text-2xl mb-2">{model.name}</p>
                        <p className="font-sans text-sm">{model.modelId}</p>
                    </div>
                    <button className="bg-primary ml-auto mt-auto text-white px-4 h-fit py-2 rounded-lg" onClick={() => setOpen(true)}>Crear nueva version</button>
                </header>
                <div className="w-full px-4 py-2" id="description">
                    <textarea className="w-full border border-gray-400 rounded-lg text-sm" rows={4} value={model.description} onChange={(e) => setModel({ ...model, description: e.target.value })} />
                </div>
                <div className="w-full px-4 py-2" id="versions">
                    <p className="font-sans text-xl mb-2">Versiones</p>
                    <ul className="w-full">

                        
                        {model.versions && model.versions.length !== 0 && model.versions.map(version => (
                            <li key={version.versionId} className="w-full flex flex-row items-center justify-between border-b border-gray-400 py-2">
                                <p className="font-sans text-sm">{version.name}</p>
                                
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <CreateNewVersion isOpen={open} onClose={setOpen} modelId={params.id} />
        </PageTemplate>
    )
}

export function VersionCard({ versionId, name }: { versionId: string, name: string }) {
    return (
        <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
            <header className="w-full px-4 py-8" id="title">
                <p className="font-sans text-2xl">{name}</p>
                <p className="font-sans text-sm">Version actual: {versionId}</p>
            </header>

        </div>
    )
}