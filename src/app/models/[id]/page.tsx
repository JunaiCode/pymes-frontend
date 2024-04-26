'use client'
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";
import CreateNewVersion from "@/components/admin/CreateNewVersion";

export default function Page({ params }: { params: { id: string } }) {
    const [model, setModel] = useState({
        id: "",
        name: "",
        description: "",
        actualVersion: "",
        date: "",
        versions: [
            {
                id: "",
                name: "",
                date: ""
            }
        ]
    })

    const [open, setOpen] = useState(false);


    useEffect(() => {
        //Fecth data with id
        setModel({
            id: "1",
            name: "Modelo de madurez de la gestion de proyectos",
            description: "Modelo de madurez de la gestion de proyectos",
            actualVersion: "v1.0",
            date: "10/10/2021",
            versions: [
                {
                    id: "1",
                    name: "v1.0",
                    date: "10/10/2021"
                },
                {
                    id: "2",
                    name: "v1.1",
                    date: "10/10/2021"
                },
                {
                    id: "3",
                    name: "v1.2",
                    date: "10/10/2021"
                },
                {
                    id: "4",
                    name: "v1.3",
                    date: "10/10/2021"
                },
                {
                    id: "5",
                    name: "v1.4",
                    date: "10/10/2021"
                },
                {
                    id: "6",
                    name: "v1.5",
                    date: "10/10/2021"
                },
                {
                    id: "7",
                    name: "v1.6",
                    date: "10/10/2021"
                },
                {
                    id: "8",
                    name: "v1.7",
                    date: "10/10/2021"
                },
            ]
        })

    }, [])



    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="flex flex-row w-full px-4 py-8" id="title">
                    <div>
                        <p className="font-sans text-2xl mb-2">{model.name}</p>
                        <p className="font-sans text-sm">Version actual: {model.actualVersion}</p>
                        <p className="font-sans text-sm">Fecha: {model.date}</p>
                    </div>
                    <button className="bg-primary ml-auto mt-auto text-white px-4 h-fit py-2 rounded-lg" onClick={() => setOpen(true)}>Crear nueva version</button>
                </header>
                <div className="w-full px-4 py-2" id="description">
                    <textarea className="w-full border border-gray-400 rounded-lg text-sm" rows={4} value={model.description} onChange={(e) => setModel({ ...model, description: e.target.value })} />
                </div>
                <div className="w-full px-4 py-2" id="versions">
                    <p className="font-sans text-xl mb-2">Versiones</p>
                    <ul className="w-full">
                        {model.versions.map((version) => (
                            <li key={version.id} className="w-full flex flex-row items-center justify-between border-b border-gray-400 py-2">
                                <p className="font-sans text-sm">{version.name}</p>
                                <p className="font-sans text-sm">{version.date}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <CreateNewVersion isOpen={open} onClose={setOpen} />
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