import { use, useEffect, useState } from "react";
import { ProgressEvaluation } from "./ProgressEvaluation";
import Question from "./Question";
import { IoArrowBackCircleOutline ,IoArrowForwardCircleOutline } from "react-icons/io5";

const Questionary = (props:any) => {
    const [questions, setQuestions] = useState(props.questions);
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [progress, setprogress] = useState({ total: questions.length,completed:0
    });
    const [percentage, setPercentage] = useState("0%");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setPercentage(`${(progress.completed / progress.total) * 100}%`)
    }, [progress]);

    useEffect(() => {
        if (percentage === "100%") {
            console.log("Terminaste el cuestionario");
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

    return (
        <div className="w-full h-screen bg-light">
        <div className="flex justify-start items-baseline w-full">
        <div className="w-full h-screen flex flex-col justify-start items-center">
                <div key={index} className="mt-24 flex flex-col h-5/4 bg-white mr-2 border rounded-lg shadow-lg p-12 w-5/6">
                    <ProgressEvaluation percentage={percentage} />
                    <p className="text-gray-800 text-lg mb-2">
                        Pregunta {index + 1} de {props.questions.length}
                    </p>

                    <label
                        htmlFor={`question-${currentQuestion.title}`}
                        className="block text-gray-700 font-bold mb-2"
                    >
                        {currentQuestion.title}
                    </label>
                    <p>Selecciona tu respuesta</p>
                    {currentQuestion.options.map((option:any, index:number) => (
                        <Question
                            id={index}
                            key={index}
                            name={currentQuestion.title}
                            value={option.title}
                            checked={option.checked}
                            handleCheck={handelcheckOption}
                        />
                    ))
                    }
                    <div className="flex justify-center items-center gap-4 mt-8">
                <IoArrowBackCircleOutline size={48} onClick={handlePreviousQuestion} className="text-primary text-4xl cursor-pointer" />
                <IoArrowForwardCircleOutline size={48} onClick={handleNextQuestion} className="text-primary text-4xl cursor-pointer" />
            </div>
                </div>
        </div>
        <div className="w-50 mr-12">
                <div className="border-2 p-4 rounded-lg shadow-lg bg-white">
                    <p className="text-lg font-semibold mb-4">Navegación Rápida</p>
                    <div className="flex justify-between flex-wrap">
                    {questions.map((question:any, index:number) => (
                        <div key={index} className="mb-2">
                            <a 
                                onClick={() => setCurrentQuestion(question)}
                                className={` p-2 w-full text-center cursor-pointer rounded shadow-lg transition-all duration-200 ease-in-out ${question.answered ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-blue-500 hover:text-blue-700'}`}
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
    );
}

export default Questionary;
