import { useRef } from "react";

interface CreateDimensionProps {
    isOpen: boolean;
    onClose: (value: boolean) => void;
    selectedModel: string;
    selectedVersion: string;
}

export default function CreateDimension({ isOpen, onClose, selectedModel, selectedVersion }: CreateDimensionProps) {
    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);


    const handleCreateDimension = () => {
        if (nameRef.current && descriptionRef.current && nameRef.current.value && descriptionRef.current.value) {
            const data = {
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                levels: []
            }
            fetch(`http://18.218.220.138:8081/dimension/add/${selectedVersion}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => {
                if (res.ok) {
                    alert('Dimension creada correctamente')
                    onClose(false)
                    window.location.reload()
                } else {
                    alert('No se pudo crear la dimension')
                    console.log(res)
                }
            })
        }else{
            alert('No se pudo crear la dimension, todos los campos son requeridos')

        }
    }

    return (
        <div id="authentication-modal"  className= {`${isOpen ? '' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-full justify-center items-center max-h-full`}  aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="relative p-4 w-full max-w-md  max-h-full">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Crear una nueva dimension
                        </h3>
                        <button type="button" onClick={() => onClose(false)} className="p-2 text-gray-500 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-gray-400">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <div className="p-4 md:p-5">
                        <div className="space-y-4" >
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la dimension</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                    placeholder="Procesos" 
                                    required 
                                    ref={nameRef}
                                    />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                                <textarea 
                                id="description" 
                                name="description" 
                                rows={3} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Dimension que contempla la madurez de los procesos de la empresa, lo que incluye la calidad de los procesos, la capacidad de innovacion, etc." 
                                required
                                ref={descriptionRef}
                                ></textarea>
                            </div>
                            <div className="flex justify-between">
                                
                                <button type="submit" onClick={() => handleCreateDimension()} className="w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
                                <button type="button" onClick={() => onClose(false)} className="w-28 border px-5 py-2.5 rounded-lg  text-gray-500 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-gray-400">Cancelar</button>
                            </div>
                            
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
