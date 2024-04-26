'use client'
import CreateDimension from "@/components/admin/CreateDimension";
import ComboBox from "@/components/ui/ComboBox";
import PageTemplate from "@/components/ui/PageTemplate";
import SearchBar from "@/components/ui/SearchBar";
import { useState, useEffect, useMemo } from "react";
import { IoIosCreate } from "react-icons/io";
import { useRouter } from "next/navigation";


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

    const modelComboBoxOptions = useMemo(() => [
        { label: "Modelo 1", value: "1" },
        { label: "Modelo 2", value: "2" },
        { label: "Modelo 3", value: "3" },
    ], []);

    const versionComboBoxOptions = useMemo(() => [
        { label: "Version 1", value: "1" },
        { label: "Version 2", value: "2" },
        { label: "Version 3", value: "3" },
    ], []);

    const [modelSelected, setModelSelected] = useState("1");
    const [versionSelected, setVersionSelected] = useState("1");

    const [search, setSearch] = useState<string>("");
    const [filteredData, setFilteredData] = useState(data);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();


    useEffect(() => {
        setFilteredData(
            data.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, data]);

    return (
        <PageTemplate>
            <main className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="w-full px-4 py-8" id="title">
                    <p className="font-sans text-2xl">Dimensiones del modelo</p>
                </header>
                <section className="flex flex-col w-full" id="content">
                    <header className="flex flex-row w-full p-4 justify-end">
                        <SearchBar setSearch={setSearch} />
                        <ComboBox label="Modelo" options={modelComboBoxOptions} selected={modelSelected} setSelected={setModelSelected} />
                        <ComboBox label="Version" options={versionComboBoxOptions} selected={versionSelected} setSelected={setVersionSelected} />
                        <button className="ml-auto w-32 h-10 bg-secondary_old text-white rounded-lg" onClick={() => setIsOpen(true)}>Crear</button>
                    </header>
                </section>
                <div className="h-full w-full flex flex-col border overflow-y-scroll border-red-400 p-4">

                    {filteredData.map((item) => (
                        <DimensionCard key={item.id} name={item.name} description={item.description} id={item.id.toString()} router={router} />
                    ))}

                </div>
            </main>
            <CreateDimension isOpen={isOpen} onClose={setIsOpen} />
        </PageTemplate>
    )
}

export function DimensionCard({ name, description, id, router }: { name: string, description: string, id: string , router: any}) {
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