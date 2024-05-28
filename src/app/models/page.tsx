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
            if(data.length === 0) return 
            setData(data)
            console.log(data)
        })
    }, [])

    return (
        <PageTemplate>
            <div className="h-full w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="w-full px-4 py-8 flex flex-row items-start justify-center" id="title">
                    <div >

                        <p className="font-sans text-2xl">Modelos</p>
                        <p className="font-sans text-sm text-gray-600">Los modelos son la base de la aplicacion, en estos podras definir diferentes versiones del mismo modelo y llevar un control de los cambios realizados</p>
                        <p className="font-sans text-sm text-gray-600">Aqui puedes ver los modelos que has creado</p>
                        
                    </div>
                    <button className="ml-auto mt-auto h-fit bg-secondary_old py-2 px-2 text-white rounded-lg position-absolute right-4 top-4"
                        onClick={() => setOpen(true)}
                    >Agregar</button>
                </header>



                <main className="h-full w-full flex flex-col overflow-y-scroll p-4">
                    {data.map((item: any) => (
                        <ModelCard key={item.modelId} {...item} router={router} />
                    ))}
                    {data.length === 0 && (
                        <p className="font-sans text-lg text-gray-400">No hay modelos creados</p>
                    )}
                </main>
            </div>
            <CreateModel isOpen={open} onClose={setOpen} />
        </PageTemplate>
    )
}

export function ModelCard({ name, actualVersion, modelId, date, active, router }: any) {


    return (
        <div id={modelId} className="flex flex-row w-full items-start justify-start my-2  bg-white mr-2 border rounded-lg shadow-lg">
            <section>
                <header className="w-full px-4 pt-4">
                    <p className="font-sans text-xl text-secondary_old">{name}</p>
                </header>
                <section className="w-full p-4">
                    <p className="font-sans text-sm text-gray-600">Version actual: v1.0.0</p>
                    {active && (
                        <p className="font-sans text-sm text-green-500">Activo</p>
                    )}
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