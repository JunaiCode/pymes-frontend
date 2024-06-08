'use client'
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useState } from "react";

async function fetchDimension(id: string) {
    const res = await fetch(`http://18.218.220.138:8081/dimension/get/${id}`)
    const data = await res.json()
    return data
}

async function fetchDimensionTags(dimensionId: string) {
    const res = await fetch(`http://18.218.220.138:8081/tag/get/dimension/${dimensionId}`)
    const data = await res.json()
    console.log(data)
    return data
}


export default function Page({ params }: { params: { id: string } }) {
    const [dimension, setDimension] = useState({
        description: "",
        dimensionId: "",
        name: "",
        tags: [{ tagId: "", name: "" }]
    })


    useEffect(() => {
        fetchDimension(params.id).then(data => {
            setDimension(data)
        })
        fetchDimensionTags(params.id).then(data => {
            setDimension({ ...dimension, tags: data })
        })

        console.log(dimension)
    }, [])

    const handleSave = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(dimension);

        const requestOptions:any = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`http://18.218.220.138:8081/dimension/update/${dimension.dimensionId}`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    return (
        <PageTemplate>
            <div className="w-full flex flex-col items-start justify-center bg-light max-h-screen">
                <header className="flex flex-col w-full px-4 py-4" id="title">
                    <p className="font-sans text-2xl">{dimension.name}</p>
                    <p className="font-sans text-sm">Id: {dimension.dimensionId}</p>
                </header>
                <div className="w-full px-4" id="description">
                    <textarea
                        className="w-full border border-gray-400 rounded-lg text-sm"
                        rows={4}
                        value={dimension.description}
                        onChange={(e) => setDimension({ ...dimension, description: e.target.value })}
                    >

                    </textarea>
                </div>
                <div className="h-full w-full flex flex-col p-4" id="info">
                    <p className="font-sans text-xl">Informacion sobre la dimension</p>

                </div>
                <button onClick={() => handleSave()} className="bg-primary text-white px-4 h-fit py-2 rounded-lg absolute bottom-4 right-4">Guardar</button>
            </div>
        </PageTemplate>
    )
}