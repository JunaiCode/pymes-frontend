import { useRef } from "react";

interface CreateDimensionProps {
    isOpen: boolean;
    onClose: (value: boolean) => void;
    modelId: string;
}

export default function CreateNewVersion({ isOpen, onClose,modelId }: CreateDimensionProps) {
    const nameRef = useRef<HTMLInputElement>(null);
    
    function handleSubmit(e: React.FormEvent) {
        if (nameRef.current) {
            const data = {
                name: nameRef.current.value,
                levels: [],
                dimensions: []
            }
            fetch(`http://18.218.220.138:8081/model/add/version/${modelId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => {
                if (res.ok) {
                    onClose(false)
                    window.location.reload()
                }
            })

        }else{
            alert('Por favor llene todos los campos')
        }
    }

    return (
        <div id="authentication-modal"  className= {`${isOpen ? '' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-full justify-center items-center max-h-full`}  aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="relative p-4 w-full max-w-md  max-h-full">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Crear una nueva version del modelo
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
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de la version</label>
                                <input ref={nameRef} type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="v1.0.1" required/>
                            </div>

                            <div className="flex justify-between">
                                
                                <button className="w-28 bg-primary px-5 py-2.5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary_old" onClick={handleSubmit}>Crear</button>
                                <button type="button" onClick={() => onClose(false)} className="w-28 border px-5 py-2.5 rounded-lg  text-gray-500 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:focus:text-gray-400">Cancelar</button>
                            </div>
                            
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
