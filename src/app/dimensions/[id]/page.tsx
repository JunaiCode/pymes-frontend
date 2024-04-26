import PageTemplate from "@/components/ui/PageTemplate";

export default function Page({params}: {params: {id: string}}) {
    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="flex flex-col w-full px-4 py-4" id="title">
                    <p className="font-sans text-2xl">Tecnologia</p>
                    <p className="font-sans text-sm">Modelo: Modelo de madurez de la gestion de proyectos</p>
                    <p className="font-sans text-sm">Version: v1.0</p>
                </header>
                <div className="w-full px-4" id="description">
                    <textarea className="w-full border border-gray-400 rounded-lg text-sm" rows={4}  />
                </div>
                <div className="h-full w-full flex flex-col p-4" id="info">
                    <p className="font-sans text-xl">Informacion sobre la dimension</p>
                   
                </div>
            </div>
        </PageTemplate>
    )
}