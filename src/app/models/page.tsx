'use client'
import CreateModel from "@/components/admin/CreateModel";
import PageTemplate from "@/components/ui/PageTemplate";
import { IoIosCreate } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";



async function getModels() {
    const res = await fetch('http://localhost:8080/model/get/all')
    const data = await res.json()
    return data
}


export default function Page() {
    const [data, setData] = useState([] as any)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    
    useEffect(() => {
        getModels().then(data => {
            setData(data)
            console.log(data)
        })
    }, [])

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
                    {data.map((item: any) => (
                        <ModelCard key={item.modelId} {...item} router={router} />
                    ))}
                </main>
            </div>
            <CreateModel isOpen={open} onClose={setOpen} />
        </PageTemplate>
    )
}

export function ModelCard({ name, actualVersion, modelId, date, router }: { name: string, actualVersion: string, modelId: string, date: string, router: any }) {


    return (
        <div id={modelId} className="flex flex-row w-full items-start justify-start rounded-lg border my-2 border-gray-300">
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
                        onClick={() => router.push(`/models/${modelId}`)}
                    >
                        <IoIosCreate size={20} className="text-secondary_old" />
                        <p className="ml-2 text-sm">Editar</p>
                    </button>
                </footer>
            </section>
        </div>
    )
}