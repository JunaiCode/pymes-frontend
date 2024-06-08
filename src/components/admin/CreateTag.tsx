import { useRef } from "react";

interface CreateTagProps {
    isOpen: boolean;
    onClose: (value: boolean) => void;
    dimensionId: string;
}



export default function CreateTag({ isOpen, onClose, dimensionId }: CreateTagProps) {
    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    
    
    const handleCreateTag = () => {
        if (nameRef.current && nameRef.current.value && descriptionRef.current && descriptionRef.current.value) {
            const data = {
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                dimensionId: dimensionId
            }
            
            fetch(`http://18.218.220.138:8081/tag/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameRef.current.value,
                    description: descriptionRef.current.value,
                    dimensionId: dimensionId
                })
            }).then(res => {
                if (res.ok) {
                    alert('Tag creada correctamente')
                    onClose(false)
                    window.location.reload()
                } else {
                    alert('No se pudo crear la tag')
                    console.log(res)
                }
            })
        }else{
            alert('No se pudo crear la tag, todos los campos son requeridos')
        }
    }


    return (
        <div id="authentication-modal"  className= {`${isOpen ? '' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-full justify-center items-center max-h-full`}  aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="relative p-4 w-full max-w-md  max-h-full">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Crear una nueva etiqueta
                        </h3>
                        <button type="button" onClick={() => onClose(!isOpen)} className="p-2 text-gray-500 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-gray-400">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <div className="p-4 md:p-7">
                        <form action="#" method="POST">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre</label>
                                <input type="text" ref={nameRef} id="name" name="name" placeholder="Nombre" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="description" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Descripción</label>
                                <textarea id="description" ref={descriptionRef} name="description" placeholder="Descripción" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                            </div>

                            <div className="mb-6">
                                <button type="button" onClick={handleCreateTag} className="w-full px-3 py-4 text-white bg-primary rounded-md">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
                            



