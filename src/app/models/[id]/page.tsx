'use client'
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";
import CreateNewVersion from "@/components/admin/CreateNewVersion";
import { useRouter } from "next/navigation";

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
    const router = useRouter()
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
            <div className="w-full flex flex-col items-start justify-start bg-light max-h-screen">
                <header className="flex flex-row w-full px-4 py-8" id="title">
                    <div>
                        <p className="font-sans text-2xl mb-2">{model.name}</p>
                        <p className="font-sans text-sm">{model.modelId}</p>
                    </div>
                    <button className="bg-primary ml-auto mt-auto text-white px-4 h-fit py-2 rounded-lg" onClick={() => setOpen(true)}>Crear nueva version</button>
                </header>
                <div className="w-full px-4 py-2" id="description">
                    <textarea className="w-96 border border-gray-400 rounded-lg text-sm" rows={4} value={model.description} onChange={(e) => setModel({ ...model, description: e.target.value })} />
                </div>
                <main className="h-full w-full flex flex-col border overflow-y-scroll overflow-x-hidden p-4">
                    <p className="font-sans text-xl mb-2">Versiones</p>
                    {model.versions && model.versions.length !== 0 && model.versions.map(version => (
                        <VersionCard key={version.versionId} {...version} router={router} modelId={params.id} />
                    ))}
                </main>

            </div>
            <CreateNewVersion isOpen={open} onClose={setOpen} modelId={params.id} />
        </PageTemplate>
    )
}

export function VersionCard({ versionId, name, router, modelId }: { versionId: string, name: string, router: any, modelId: string }) {
    return (
        <div className="flex flex-row w-full items-start justify-start my-2  bg-white mr-2 border rounded-lg shadow-lg">
            <header className="w-full px-4 py-2" id="title">
                <p className="font-sans text-lg">{name}</p>
                <p className="font-sans text-sm">{versionId}</p>
            </header>
            <footer className="w-full h-full flex justify-center items-center p-4">
                <button 
                    className="w-fit h-fit flex flex-row justify-around items-center border px-2 py-1 border-secondary_old text-secondary_old ml-auto rounded-2xl"
                    onClick={() => router.push(`/models/${modelId}/${versionId}`)}
                    >
                    <p className="ml-auto text-sm">Ver</p>
                </button>
            </footer>

        </div>
    )
}