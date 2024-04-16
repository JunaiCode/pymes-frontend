import PageTemplate from "@/components/ui/PageTemplate";

export default function Page({params}: {params: {id: string}}) {
    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light">
                <p>Dimensiones</p>
                <p>{params.id}</p>
            </div>
        </PageTemplate>
    )
}