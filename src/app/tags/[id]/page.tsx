'use client'
import PageTemplate from "@/components/ui/PageTemplate";
import { useEffect, useRef, useState } from "react";

async function fetchTag(id: string) {
    const res = await fetch(`http://localhost:8080/tag/get/${id}`)
    const data = await res.json()
    return data
}


export default function Page({ params }: { params: { id: string } }) {



    const [tag, setTag] = useState({
        description: "",
        name: "",
        dimensionId: ""
    })

    useEffect(() => {
        fetchTag(params.id).then(data => {
            setTag(data)
        })
    }, [])

    const handleSave = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(tag);

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`http://localhost:8080/tag/update/${params.id}`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    return (
        <PageTemplate>
            <div className="flex flex-col w-full">
                <header className="flex flex-col w-full px-4 py-4" id="title">
                    <p className="font-sans text-2xl">{tag.name}</p>
                    <p className="font-sans text-sm">Id: {params.id}</p>
                </header>
                <div className="w-full px-4" id="description">
                    <textarea
                        className="w-full border border-gray-400 rounded-lg text-sm"
                        rows={4}
                        value={tag.description}
                        onChange={(e) => setTag({ ...tag, description: e.target.value })}
                    >
                    </textarea>
                </div>
                <button
                    className="ml-auto py-2 px-2 text-white rounded-lg bg-primary absolute bottom-4 right-4"
                    onClick={handleSave}
                >
                    Guardar
                </button>

            </div>
        </PageTemplate>
    )
}