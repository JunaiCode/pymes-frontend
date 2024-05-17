import { useState } from "react";
import { ProgressEvaluation } from "./ProgressEvaluation";
import Question from "./Question";
import { IoArrowBackCircleOutline ,IoArrowForwardCircleOutline } from "react-icons/io5";

const Questionary = (props:any) => {
    return (
        <div className="w-full h-screen bg-light">
        <div className="flex justify-start items-baseline">
        <div className="w-full h-screen flex flex-col justify-evenly items-center">
            {props.questions.map((question:any, index:number) => (
                <div key={index} className="mb-4 p-12 w-5/6">
                    <ProgressEvaluation percentage="20%" />
                    <p className="text-gray-800 text-lg mb-2">
                        Pregunta {index + 1} de {props.questions.length}
                    </p>

                    <label
                        htmlFor={`question-${index}`}
                        className="block text-gray-700 font-bold mb-2"
                    >
                        {question.title}
                    </label>
                    <p>Selecciona tu respuesta</p>
                    {question.options.map((option:string, index:number) => (
                        <Question
                            id={index}
                            key={index}
                            name={question.title}
                            value={option}
                        />
                    ))}
                </div>
            ))}
            <div className="flex justify-center items-center gap-4">
                <IoArrowBackCircleOutline size={48} className="text-primary text-4xl cursor-pointer" />
                <IoArrowForwardCircleOutline size={48} className="text-primary text-4xl cursor-pointer" />
            </div>
        </div>
        <div className="w-50 mr-8">
                <div className="border-2 p-4 rounded-lg shadow-lg bg-white">
                    <p className="text-lg font-semibold mb-4">Navegación Rápida</p>
                    {props.questions.map((question:any, index:number) => (
                        <div key={index} className="mb-2">
                            <a 
                                href={`#question-${index}`} 
                                className={` p-2 w-full text-center rounded shadow-lg transition-all duration-200 ease-in-out ${question.answered ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-blue-500 hover:text-blue-700'}`}
                            >
                                {index + 1}
                            </a>
                            <div className={`h-1 ${question.answered ? 'bg-green-500' : 'bg-transparent'}`}></div>
                        </div>
                    ))}
                </div>
        </div>
        </div>
        </div>
    );
}

export default Questionary;
