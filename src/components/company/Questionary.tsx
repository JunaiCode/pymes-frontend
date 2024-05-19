import { use, useEffect, useState } from "react";
import { ProgressEvaluation } from "./ProgressEvaluation";
import Question from "./Question";
import { IoArrowBackCircleOutline ,IoArrowForwardCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Questionary = (props:any) => {
    const [questions, setQuestions] = useState([
        {
            title: "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
            options: [
                { title: "Los cargos sénior defienden su uso hasta cierto punto.", checked: false },
                { title: "Los cargos medios, como los directores locales, defienden su uso.", checked: false },
                { title: "Los altos cargos, como el vicepresidente, defienden su uso.", checked: false },
                { title: "Algunos cargos senior como el CMO, CTO o COO, defienden su uso.", checked: false }
            ],
            answered: false
        },
        {
            title: "¿Qué tan importante es la inversión en tecnología para la empresa?",
            options: [
                { title: "No es importante.", checked: false },
                { title: "Es importante.", checked: false },
                { title: "Es muy importante.", checked: false },
                { title: "Es crucial.", checked: false }
            ],
            answered: false
        },
        {
            title: "¿Qué tan importante es la inversión en talento humano para la empresa?",
            options: [
                { title: "No es importante.", checked: false },
                { title: "Es importante.", checked: false },
                { title: "Es muy importante.", checkeded: false },
                { title: "Es crucial.", checkeded: false }
            ],
            answered: false
        }
    ]);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [progress, setprogress] = useState({ total: questions.length,completed:0
    });
    const [finished, setFinished] = useState(false);
    const [percentage, setPercentage] = useState("0%");
    const [index, setIndex] = useState(0);
    const [resultsScreen, setResultsScreen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setPercentage(`${(progress.completed / progress.total) * 100}%`)
    }, [progress]);

    useEffect(() => {
        if (percentage === "100%") {
            setFinished(true);
        }
    }, [percentage]);

    useEffect(() => {
        const newQuestions = questions.map((question:any) => {
            if (question.title === currentQuestion.title) {
                return currentQuestion;
            }
            return question;
        });
        setQuestions(newQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestion]);

    useEffect(() => {
        setIndex(questions.findIndex((question:any) => question.title === currentQuestion.title));
    }, [currentQuestion,questions]);

    const handelcheckOption = (e:any) => {
        let answered = currentQuestion.answered
        if (answered === false) {
            answered = true;
            setprogress((prevProgress:any) => ({
                ...prevProgress,
                completed: prevProgress.completed + 1,
            }));
        }
        const options = currentQuestion.options.map((option:any) => {
            if (option.title === e.target.value) {
                option.checked = true;
            }else{
                option.checked = false;
            }
            return option;
        });
        setCurrentQuestion({...currentQuestion,options,answered});
    };
        

    const handleNextQuestion = () => {
        if (index< questions.length - 1) {
            setCurrentQuestion(questions[index + 1]);
        }
        
    };

    const handlePreviousQuestion = () => {
        if (index > 0) {
            setCurrentQuestion(questions[index - 1]);
        }
    };

    const handleFinishEvaluation = () => {
        setResultsScreen(true);
    };

    return (
        !resultsScreen ? (
            <div className="w-full h-screen bg-light">
                <div className="flex justify-start items-baseline w-full">
                    <div className="w-full h-screen flex flex-col justify-start items-center">
                        <div key={index} className="mt-24 flex flex-col h-5/4 bg-white mr-2 border rounded-lg shadow-lg p-12 w-5/6">
                            <ProgressEvaluation percentage={percentage} />
                            <p className="text-gray-800 text-lg mb-2">
                                Pregunta {index + 1} de {questions.length}
                            </p>
                            <label
                                htmlFor={`question-${currentQuestion.title}`}
                                className="block text-gray-700 font-bold mb-2"
                            >
                                {currentQuestion.title}
                            </label>
                            <p>Selecciona tu respuesta</p>
                            {currentQuestion.options.map((option:any, index:any) => (
                                <Question
                                    id={index}
                                    key={index}
                                    name={currentQuestion.title}
                                    value={option.title}
                                    checked={option.checked}
                                    handleCheck={handelcheckOption}
                                />
                            ))}
                            <div className="flex flex-col justify-center items-center gap-6">
                            <div className="flex justify-center items-center gap-4 mt-8">
                                <IoArrowBackCircleOutline size={48} onClick={handlePreviousQuestion} className="text-primary text-4xl cursor-pointer" />
                                <IoArrowForwardCircleOutline size={48} onClick={handleNextQuestion} className="text-primary text-4xl cursor-pointer" />
                            </div>
                            {finished && (<button className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300" onClick={handleFinishEvaluation}>
                            Terminar evaluación
                            </button>)}
                            </div>
                        </div>
                    </div>
                    <div className="w-50 mr-12">
                        <div className="border-2 p-4 rounded-lg shadow-lg bg-white">
                            <p className="text-lg font-semibold mb-4">Navegación Rápida</p>
                            <div className="flex justify-between flex-wrap">
                                {questions.map((question:any, index:any) => (
                                    <div key={index} className="mb-2">
                                        <a
                                            onClick={() => setCurrentQuestion(question)}
                                            className={`p-2 w-full text-center cursor-pointer rounded shadow-lg transition-all duration-200 ease-in-out ${question.answered ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-blue-500 hover:text-blue-700'}`}
                                        >
                                            {index + 1}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex flex-col justify-center items-center h-screen w-full bg-light">
            <p className="text-2xl font-semibold text-center mt-24 mb-8">¡Gracias por completar la evaluación!</p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300" onClick={()=>{
                router.push("/home")
            }}>
                        Ver mis resultados
            </button>
            </div>

        )
    );    
}

export default Questionary;
