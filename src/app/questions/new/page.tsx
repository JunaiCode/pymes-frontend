'use client'
import ComboBox from "@/components/ui/ComboBox";
import PageTemplate from "@/components/ui/PageTemplate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoTrash, IoWarningSharp } from "react-icons/io5";

const companySizeOptions = [
    { label: "Microempresa", value: "1" },
    { label: "Pequeña empresa", value: "2" },
    { label: "Mediana empresa", value: "3" },
]


async function fetchModels() {
    const res = await fetch('http://18.218.220.138:8081/model/get/all')
    const data = await res.json()
    console.log(data)
    return data
}

async function fetchVersions(modelId: string) {
    const res = await fetch(`http://18.218.220.138:8081/model/get/versions/${modelId}`)
    const data = await res.json()
    console.log(data)
    return data
}

async function fetchTags(dimensionId: string) {
    const res = await fetch(`http://18.218.220.138:8081/tag/get/dimension/${dimensionId}`)
    const data = await res.json()
    console.log(data)
    return data
}




export default function Page() {
    const [modelData, setModelData] = useState([] as any)
    const [versionData, setVersionData] = useState([] as any)
    const [dimensionData, setDimensionData] = useState([] as any)
    const [levelData, setLevelData] = useState([] as any)
    const [tagData, setTagData] = useState([] as any)


    const [modelSelected, setModelSelected] = useState("-1");
    const [versionSelected, setVersionSelected] = useState("-1");
    const [dimensionSelected, setDimensionSelected] = useState("-1");
    const [tagSelected, setTagSelected] = useState("-1");
    const [levelSelected, setLevelSelected] = useState("-1");
    const [companySizeSelected, setCompanySizeSelected] = useState("1")
    const router = useRouter();
    const [versionEnabled, setVersionEnabled] = useState(false);
    const [dimensionEnabled, setDimensionEnabled] = useState(false);
    const [question, setQuestion] = useState({
        model: "",
        version: "",
        dimension: "",
        tag: "",
        question: "",
        points: 0,
        options: [] as any,
        recommendation: {
            projectName: "",
            projectDescription: "",
            steps: [] as any
        },
        priority: 0
    })
    const [sumMatch, setSumMatch] = useState(true);
    const [options, setOptions] = useState([] as any)
    const [steps, setSteps] = useState([] as any)
    const [stepCount, setStepCount] = useState(0)

    const calculateSum = (updatedOptions: any) => {
        let sum = updatedOptions.reduce((acc: number, option: any) => acc + option.points, 0);
        setSumMatch(sum === question.points);
    };

    const calculateSumWeight = (value: string) => {
        let newValue = parseInt(value)
        let sum = 0
        for (let i = 0; i < options.length; i++) {
            sum += options[i].points
        }
        setSumMatch(sum === newValue)
    }

    const handleDeleteStep = (id: any) => {
        // Filter out the step with the given id
        console.log(id)
        setSteps(steps.filter((step: any) => step.id !== id));
        setStepCount(stepCount - 1)

    };


    useEffect(() => {
        fetchModels().then(data => {
            if (data.length === 0) {
                /*Set all data to empty*/
                setModelData([])
                setVersionData([])
                setDimensionData([])
                setTagData([])
                setLevelData([])
                setModelSelected("-1")
                setVersionSelected("-1")
                setDimensionSelected("-1")
                setTagSelected("-1")
                setLevelSelected("-1")
                return
            }
            setModelData(data)
            setModelSelected(data[0].modelId)
            setVersionEnabled(true)
        })
    }, [])

    useEffect(() => {
        if (modelSelected !== "-1") {
            fetchVersions(modelSelected).then(data => {
                if (data.length === 0) {
                    /*Set all data to empty*/
                    setVersionData([])
                    setDimensionData([])
                    setTagData([])
                    setLevelData([])
                    setVersionSelected("-1")
                    setDimensionSelected("-1")
                    setTagSelected("-1")
                    setLevelSelected("-1")
                    return
                }
                setVersionData(data)
                setVersionSelected(data[0].versionId)
            })
        }
    }, [modelSelected])

    useEffect(() => {
        if (versionSelected !== "-1") {
            if (versionData.find((version: any) => version.versionId === versionSelected)?.dimensions?.length === 0) {
                setDimensionData([])
                setTagData([])
                setLevelData([])
                setDimensionEnabled(false)
                return
            }
            setDimensionData(versionData.find((version: any) => version.versionId === versionSelected).dimensions)
            setDimensionEnabled(versionData.find((version: any) => version.versionId === versionSelected)?.dimensions?.length > 0);
            setDimensionSelected(
                versionData.find((version: any) => version.versionId === versionSelected)?.dimensions?.[0]?.dimensionId
            )
        }
    }, [versionSelected])

    useEffect(() => {
        if (dimensionSelected !== "-1") {
            fetchTags(dimensionSelected).then(data => {
                if (data.length === 0) {
                    setTagData([])
                    setLevelData([])
                    return
                }

                setTagData(data)
                setTagSelected(data[0].tagId)
                setLevelData(dimensionData.find((dimension: any) => dimension.dimensionId === dimensionSelected).levels)
                setLevelSelected(dimensionData.find((dimension: any) => dimension.dimensionId === dimensionSelected).levels[0].levelId)
            })
        }
    }, [dimensionSelected])

    const handleAddOption = () => {
        setOptions([...options, { option: "", checked: false }]);
    }

    const handleSubmit = () => {
        if (!checkAllFields()) {

            return
        }
        let optionsDTO = [] as any
        for (let i = 0; i < options.length; i++) {
            optionsDTO.push({
                description: options[i].option,
                value: options[i].checked ? question.points : -1 - i
            })
        }

        let stepsDTO = [] as any
        for (let i = 0; i < steps.length; i++) {
            stepsDTO.push({
                description: steps[i].step,
                order: i + 1
            })
        }

        const data = {
            question: question.question,
            weight: 1,
            scorePositive: question.points,
            options: optionsDTO,
            recommendation: {
                title: question.recommendation.projectName,
                description: question.recommendation.projectDescription,
                steps: stepsDTO
            },
            versionId: versionSelected,
            dimensionId: dimensionSelected,
            tagId: tagSelected,
            companyTypeId: companySizeSelected,
            levelId: levelSelected,
        }

        console.log(data)

        fetch('http://18.218.220.138:8081/version/add/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                alert("Pregunta creada correctamente")
                router.push("/questions")
            } else {
                alert("Error al crear la pregunta")
                console.error('Error:', response);
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    function checkAllFields() {
        /*Check every field and do an alert if any of them is empty*/
        if (question.question === "") {
            alert("Favor de llenar el campo de pregunta")
            return false
        }
        if (question.points === 0) {
            alert("Favor de llenar el campo de puntos")
            return false
        }
        if (question.recommendation.projectName === "") {
            alert("Favor de llenar el campo de nombre del proyecto")
            return false
        }
        if (question.recommendation.projectDescription === "") {
            alert("Favor de llenar el campo de descripcion del proyecto")
            return false
        }
        if (steps.length === 0) {
            alert("Favor de llenar el campo de pasos a seguir")
            return false
        }
        if (tagSelected === "-1") {
            alert("Favor de seleccionar un tag, si no hay tags favor de crear uno")
            return false
        }
        if (dimensionSelected === "-1") {
            alert("Favor de seleccionar una dimension, si no hay dimensiones favor de crear una")
            return false
        }
        if (versionSelected === "-1") {
            alert("Favor de seleccionar una version, si no hay versiones favor de crear una")
            return false
        }
        if (modelSelected === "-1") {
            alert("Favor de seleccionar un modelo, si no hay modelos favor de crear uno")
            return false
        }
        if (levelSelected === "-1") {
            alert("Favor de seleccionar un nivel, si no hay niveles favor de crear uno")
            return false
        }
        
        if (options.length === 0) {
            alert("Favor de agregar al menos una opcion")
            return false
        }
        let oneChecked = false
        for (let i = 0; i < options.length; i++) {
            if (options[i].option === "") {
                alert("Favor de llenar todas las opciones")
                return false
            }
            if(options[i].checked){
                oneChecked = true
            }
        }
        if(!oneChecked){
            alert("Favor de selecciona la correcta")
            return false
        }
        for (let i = 0; i < steps.length; i++) {
            if (steps[i].step === "") {
                alert("Favor de llenar todos los pasos")
                return false
            }
        }
        return true
    }

    const handleDeleteOption = (index: number) => {
        setOptions((prevOptions: any) => prevOptions.filter((_: any, i: number) => i !== index));
    }



    return (
        <PageTemplate>
            <div className="h-full w-full  flex flex-col items-start justify-start bg-light max-h-screen">
                <header className="w-full px-4 pt-8" id="title">
                    <h1 className="text-2xl font-bold">Nueva pregunta</h1>
                </header>
                <div className="w-full h-full flex flex-row items-start justify-start bg-light p-4 overflow-y-hidden" id="content" >
                    <section className="flex flex-col w-1/2 bg-white mr-2 border rounded-lg shadow-lg h-full p-4 overflow-y-hidden" id="questionDetails">
                        <p className="text-xl font-semibold pb-5">Detalles de la pregunta</p>
                        <div className="flex flex-row w-full items-stretch justify-between ">


                            <ComboBox
                                label="Modelo"
                                optionsLabels={modelData.map((model: any) => model.name)}
                                optionsValues={modelData.map((model: any) => model.modelId)}
                                selected={modelSelected}
                                setSelected={setModelSelected}
                                enabled={true}
                            />

                            <ComboBox
                                label="Version"
                                optionsLabels={versionData.map((version: any) => version.name)}
                                optionsValues={versionData.map((version: any) => version.versionId)}
                                selected={versionSelected}
                                setSelected={setVersionSelected}
                                enabled={versionEnabled}
                            />

                            <ComboBox
                                label="Dimension"
                                optionsLabels={dimensionData.map((dimension: any) => dimension.name)}
                                optionsValues={dimensionData.map((dimension: any) => dimension.dimensionId)}
                                selected={dimensionSelected}
                                setSelected={setDimensionSelected}
                                enabled={dimensionEnabled}
                            />

                            <ComboBox
                                label="Nivel"
                                optionsLabels={levelData.map((level: any) => level.name)}
                                optionsValues={levelData.map((level: any) => level.levelId)}
                                selected={levelSelected}
                                setSelected={setLevelSelected}
                                enabled={true}
                            />

                            <ComboBox
                                label="Tag"
                                optionsLabels={tagData.map((tag: any) => tag.name)}
                                optionsValues={tagData.map((tag: any) => tag.tagId)}
                                selected={tagSelected}
                                setSelected={setTagSelected}
                                enabled={true}
                            />
                        </div>
                        <label className="text-gray-700 text-xs mt-5" htmlFor="question">Pregunta</label>
                        <input
                            type="text"
                            placeholder="Ejemplo: ¿Cuando fue la independencia de Mexico?"
                            className="w-full p-2.5 border border-gray-300 rounded-lg"
                            id="question"
                            onChange={(e) => {
                                setQuestion({ ...question, question: e.target.value })
                            }}
                        />
                        <label className="text-gray-700 text-xs mt-5" htmlFor="question">Puntos de la pregunta</label>
                        <input
                            type="number"
                            placeholder="Ejemplo: 10"
                            className="w-32 p-2.5 border border-gray-300 rounded-lg mb-5"
                            id="question"
                            min={1}
                            onChange={(e) => {
                                let numericValue = parseInt(e.target.value)
                                setQuestion({ ...question, points: numericValue })
                                
                            }}
                        />
                        <ComboBox
                            label="Tamaño de la empresa"
                            optionsLabels={companySizeOptions.map((option: any) => option.label)}
                            optionsValues={companySizeOptions.map((option: any) => option.value)}
                            selected={companySizeSelected}
                            setSelected={setCompanySizeSelected}
                            enabled={true}
                            
                        />
                        <p className="text-xl font-semibold mt-5">Opciones</p>
                        <p className="text-gray-700 text-sm">Ingresa las opciones de la pregunta y selecciona la respuesta correcta</p>
                        
                        <div className="h-full w-full flex flex-col overflow-y-auto p-4 border border-gray-300 rounded-lg my-5">
                            {options.map((option: any, index: number) => (
                                <QuestionOption
                                    key={index}
                                    option={option.option}
                                    points={option.points}
                                    options={options}
                                    setOptions={setOptions}
                                    index={index}
                                    calculateSum={calculateSum}
                                    handleDeleteOption={handleDeleteOption}
                                    maxPoints={question.points}
                                    checked={option.checked}
                                />
                            ))}


                        </div>
                        <div className={`flex flex-row w-full items-center justify-center mb-2 bg-red-600 rounded-lg ${sumMatch ? "hidden" : ""}`}>
                            <IoWarningSharp className="text-white m-2" size={20} />
                            <p className="text-lg font-semibold text-white m-2">La suma de los puntos de las opciones debe ser igual a los puntos de la pregunta</p>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-fit"
                            onClick={handleAddOption}
                        >Agregar opcion</button>
                    </section>
                    <section className="flex flex-col w-1/2 bg-white ml-2 border rounded-lg shadow-lg h-full p-4">
                        <p className="text-xl font-semibold pb-4">Recomendacion</p>
                        <label className="text-gray-700 text-xs mt-1" htmlFor="projectName">Nombre del proyecto</label>
                        <input
                            type="text"
                            placeholder="Ejemplo: Adquisicion de equipo de computo"
                            className="w-full p-2.5 border border-gray-300 rounded-lg"
                            id="projectName"
                            onChange={(e) => {
                                setQuestion({ ...question, recommendation: { ...question.recommendation, projectName: e.target.value } })
                            }}
                        />
                        <label className="text-gray-700 text-xs mt-5" htmlFor="projectDescription">Descripcion del proyecto</label>

                        <textarea
                            placeholder="Ejemplo: Se requiere adquirir equipo de computo para el area de desarrollo"
                            className="w-full p-2.5 border border-gray-300 rounded-lg resize-none"
                            id="projectDescription"
                            onChange={(e) => {
                                setQuestion({ ...question, recommendation: { ...question.recommendation, projectDescription: e.target.value } })
                            }}

                        />
                        <label className="text-gray-700 text-xs mt-5" htmlFor="priority">Prioridad</label>
                        <input
                            type="number"
                            placeholder="Ejemplo: 1"
                            className="w-full p-2.5 border border-gray-300 rounded-lg"
                            id="priority"
                            min={0}
                            onChange={(e) => {
                                let numericValue = parseInt(e.target.value)
                                setQuestion({ ...question, priority: numericValue })
                            }}
                        />
                        <p className="text-xl font-semibold mt-5">Pasos a seguir</p>
                        <p className="text-gray-700 text-sm">Ingresa los pasos que se deben seguir para completar la tarea</p>
                        <div className="h-full w-full flex flex-col overflow-y-auto p-4 border border-gray-300 rounded-lg my-5">
                            {steps.map((step: any, index: number) => (
                                <Step
                                    key={index}
                                    step={step.step}
                                    id={step.id}
                                    steps={steps}
                                    setSteps={setSteps}
                                    index={index}
                                    handleDeleteStep={handleDeleteStep}
                                />
                            ))}
                            

                        </div>

                        <div className="flex w-full flex-row">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-fit"
                                onClick={() => {
                                    setSteps([...steps, { step: "", id: Math.random() }])
                                    setStepCount(stepCount + 1)
                                }}
                            >Agregar paso</button>
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ml-auto w-fit"
                                onClick={handleSubmit}
                            >
                                Crear pregunta
                            </button>

                        </div>


                    </section>

                </div>

            </div>

        </PageTemplate>
    )
}

export function QuestionOption({ option, points, options, setOptions, index, calculateSum, handleDeleteOption, maxPoints, checked }: any) {
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newOptions = options.map((opt: any, i: number) =>
            i === index ? { ...opt, option: e.target.value } : opt
        );
        setOptions(newOptions);
    };

    const handleOptionChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newOptions = options.map((opt: any, i: number) =>
            i === index ? { ...opt,  checked: true } : { ...opt, checked: false }
        );
        setOptions(newOptions);
    }

    return (
        <div className="flex flex-row w-full items-center justify-between my-2">
            <input
                type="text"
                placeholder="Ejemplo: 1810"
                className="w-3/4 p-2.5 border border-gray-300 rounded-lg mr-2"
                value={option}
                onChange={handleOptionChange}
            />

            <input
                type="checkbox"
                className="mr-2 w-4 h-4 text-blue-600  border-gray-300 rounded   "
                checked={checked}
                onChange={handleOptionChecked}

            />

            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
                onClick={() => handleDeleteOption(index)}
            >
                <IoTrash />
            </button>
        </div>
    );
}


export function Step({ step, id, steps, setSteps, index, handleDeleteStep }: any) {

    const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSteps = steps.map((stp: any, i: number) =>
            i === index ? { ...stp, step: e.target.value } : stp
        );
        setSteps(newSteps);
    };

    return (
        <div className="flex flex-row w-full items-center justify-start my-2">
            <label className="text-gray-700 text-xs mt-1 mr-5" htmlFor="step">Paso {index + 1}</label>
           
            <input
                type="text"
                placeholder="Ejemplo: 1810"
                className="w-3/4 p-2.5 border border-gray-300 rounded-lg mr-2"
                onChange={(e) => {
                    handleStepChange(e)
                }}
                value={step}
            />
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
                onClick={() => handleDeleteStep(id)}
            >
                <IoTrash />
            </button>
        </div>
    )
}