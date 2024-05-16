import { ProgressEvaluation } from "./ProgressEvaluation";
import Question from "./Question";
import { IoArrowBackCircleOutline ,IoArrowForwardCircleOutline } from "react-icons/io5";

const Questionary = (props:any) => {
    return (
        <div className="w-full h-screen">
        <div className="w-full h-screen flex flex-col justify-evenly items-center">
            {props.questions.map((question:any, index:number) => (
                <div key={index} className="mb-4 w-5/6">
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
        </div>
    );
}

export default Questionary;
