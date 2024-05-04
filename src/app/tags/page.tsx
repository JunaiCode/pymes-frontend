import PageTemplate from "@/components/ui/PageTemplate";

export default function Page() {
    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="w-full px-4 py-8" id="title">
                    <p className="font-sans text-2xl">Tags</p>
                    <p className="font-sans text-sm mt-2">Administra las etiquetas de las preguntas para categorizarlas</p>
                </header>
                <section className="flex flex-row w-full p-4">
                    <button className="ml-auto bg-secondary_old py-2 px-2 text-white rounded-lg"
                        
                    >Agregar</button>
                </section>
                <main className="h-full w-full flex flex-col border overflow-y-scroll border-red-400 p-4">
                   
                </main>
            </div>
        </PageTemplate>
    )
}


