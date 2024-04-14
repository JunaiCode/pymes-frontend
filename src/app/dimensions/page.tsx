'use client'
import PageTemplate from "@/components/ui/PageTemplate";
import SearchBar from "@/components/ui/SearchBar";
import { useState, useEffect, useMemo } from "react";
import { IoIosCreate } from "react-icons/io";


export default function Page() {
    const data = useMemo(() => [
        {
            id: 1,
            name: "Tecnologia",
            description: "Dimension que contempla la madurez tecnologica de la empresa, lo que incluye la infraestructura, la calidad de los sistemas, la capacidad de innovacion, etc.",
        },
        {
            id: 2,
            name: "Procesos",
            description: "Dimension que contempla la madurez de los procesos de negocio de la empresa, lo que incluye la calidad de los procesos, la eficiencia, la eficacia, la capacidad de innovacion, etc.",
        },
        {
            id: 3,
            name: "Personas",
            description: "Dimension que contempla la madurez de los recursos humanos de la empresa, lo que incluye la calidad de los recursos humanos, la capacidad de innovacion, etc.",
        },
        {
            id: 4,
            name: "Estrategia",
            description: "Dimension que contempla la madurez de la estrategia de la empresa, lo que incluye la calidad de la estrategia, la capacidad de innovacion, etc.",
        },
        {
            id: 5,
            name: "Gestion",
            description: "Dimension que contempla la madurez de la gestion de la empresa, lo que incluye la calidad de la gestion, la capacidad de innovacion, etc.",
        },
    ], []);

    const [search, setSearch] = useState<string>("");
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(
            data.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, data]);

    return (
        <PageTemplate>
            <main className="w-full flex flex-col items-start justify-center bg-light">
                <header className="w-full px-4 py-8" id="title">
                    <p className="font-sans text-2xl">Dimensiones del modelo</p>
                </header>
                <section className="flex flex-col w-full" id="content">
                    <header className="flex flex-row w-full p-4 justify-end">
                        <SearchBar />
                        <section className="ml-auto">
                            <button className="w-32 h-10 bg-secondary_old text-white rounded-lg">Agregar</button>
                        </section>
                    </header>
                </section>
                <div className="h-full w-full flex flex-col border border-red-400 p-4">
                    <DimensionCard name="Tecnologia" description="Dimension que contempla la madurez tecnologica de la empresa, lo que incluye la infraestructura, la calidad de los sistemas, la capacidad de innovacion, etc." />
                </div>
            </main>
        </PageTemplate>
    )
}

export function DimensionCard({ name, description }: { name: string, description: string }) {
    return (
        <div className="flex flex-row w-full items-start justify-start rounded-lg border border-gray-300">
            <section>
                <header className="w-full px-4 pt-4">
                    <p className="font-sans text-xl text-secondary_old">{name}</p>
                </header>
                <section className="w-full p-4">
                    <p className="font-sans text-sm text-gray-600">{description}</p>
                </section>
            </section>
            <section className="ml-auto">
                <footer className="w-full p-4">
                    <button className="w-24 h-10 flex flex-row justify-around items-center bg-secondary_old text-white rounded-lg">
                        <IoIosCreate size={24} className="text-white"/>
                        Editar
                        </button>
                </footer>
            </section>
        </div>
    )
}