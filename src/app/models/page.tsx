'use client'
import CreateModel from "@/components/admin/CreateModel";
import PageTemplate from "@/components/ui/PageTemplate";
import { IoIosCreate } from "react-icons/io";
import { useState,useRef } from "react";
import { useRouter } from "next/navigation";

const data = [
    {
        id: "1",
        name: "Modelo de madurez de la gestion de proyectos",
        actualVersion: "v1.0",
        date: "10/10/2021"
    },
    {
        id: "2",
        name: "Modelo de madurez de la gestion de proyectos",
        actualVersion: "v5.0",
        date: "10/10/2021"
    },
    {
        id: "3",
        name: "Modelo de madurez de la gestion de proyectos",
        actualVersion: "v6.0",
        date: "10/10/2021"
    },
    {
        id: "4",
        name: "Modelo de madurez de la gestion de proyectos",
        actualVersion: "v1.5",
        date: "10/10/2021"
    },
    {
        id: "5",
        name: "Modelo de madurez de la gestion de proyectos",
        actualVersion: "v13.0",
        date: "10/10/2021"
    },
    {
        id: "6",
        name: "Modelo de madurez de la gestion de proyectos",
        actualVersion: "v1.10",
        date: "10/10/2021"
    }
]

export default function Page() {
    
    const [open, setOpen] = useState(false)
    const router = useRouter()

    
    

    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="w-full px-4 py-8" id="title">
                    <p className="font-sans text-2xl">Modelos</p>
                </header>
                <section className="flex flex-row w-full p-4">
                    <button className="ml-auto bg-secondary_old py-2 px-2 text-white rounded-lg"
                        onClick={() => setOpen(true)}
                    >Agregar</button>
                </section>
                <main className="h-full w-full flex flex-col border overflow-y-scroll border-red-400 p-4">
                    {data.map((item) => (
                        <ModelCard key={item.id} {...item} router={router} />
                    ))}
                </main>
            </div>
            <CreateModel isOpen={open} onClose={setOpen} />
        </PageTemplate>
    )
}

export function ModelCard({ name, actualVersion, id, date, router }: { name: string, actualVersion: string, id: string, date: string , router: any}) {
    
    
    return (
        <div id={id} className="flex flex-row w-full items-start justify-start rounded-lg border my-2 border-gray-300">
            <section>
                <header className="w-full px-4 pt-4">
                    <p className="font-sans text-xl text-secondary_old">{name}</p>
                </header>
                <section className="w-full p-4">
                    <p className="font-sans text-sm text-gray-600">Version actual: {actualVersion}</p>
                    <p className="font-sans text-sm text-gray-600">Fecha de creacion: {date}</p>
                </section>
            </section>
            <section className="ml-auto h-full">
                <footer className="w-full h-full flex justify-center items-center p-4">
                    <button className="w-fit h-fit flex flex-row justify-around items-center border px-2 py-1 border-secondary_old text-secondary_old rounded-2xl"
                        onClick={() => router.push(`/models/${id}`)}
                    >
                        <IoIosCreate size={20} className="text-secondary_old"/>
                        <p className="ml-2 text-sm">Editar</p>
                    </button>
                </footer>
            </section>
        </div>
    )
}