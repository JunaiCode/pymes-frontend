import { useEffect, useState } from "react";
import { ProgressEvaluation } from "./ProgressEvaluation";
import Question from "./Question";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Questionary = (props: any) => {
  const [evaluationResults, setevaluationResults] = useState([
    {
      id: 1,
      dimension: "id",
      title:
        "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
      options: [
        { title: "Los cargos sénior defienden su uso hasta cierto punto." },
        {
          title:
            "Los cargos medios, como los directores locales, defienden su uso.",
        },
        {
          title: "Los altos cargos, como el vicepresidente, defienden su uso.",
        },
        {
          title:
            "Algunos cargos senior como el CMO, CTO o COO, defienden su uso.",
        },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 2,
      title:
        "¿Qué tan importante es la inversión en tecnología para la empresa?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 3,
      title: "¿Cómo se mide el éxito de las campañas de marketing?",
      options: [
        { title: "No se mide." },
        { title: "Se mide por la cantidad de ventas." },
        { title: "Se mide por la cantidad de leads." },
        { title: "Se mide por el ROI." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 4,
      title: "¿Qué tan importante es la segmentación de la audiencia?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 5,
      title:
        "¿Qué tan importante es la personalización de la experiencia del cliente?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 6,
      dimension: "id",
      title:
        "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
      options: [
        { title: "Los cargos sénior defienden su uso hasta cierto punto." },
        {
          title:
            "Los cargos medios, como los directores locales, defienden su uso.",
        },
        {
          title: "Los altos cargos, como el vicepresidente, defienden su uso.",
        },
        {
          title:
            "Algunos cargos senior como el CMO, CTO o COO, defienden su uso.",
        },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 7,
      title:
        "¿Qué tan importante es la inversión en tecnología para la empresa?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 8,
      title: "¿Cómo se mide el éxito de las campañas de marketing?",
      options: [
        { title: "No se mide." },
        { title: "Se mide por la cantidad de ventas." },
        { title: "Se mide por la cantidad de leads." },
        { title: "Se mide por el ROI." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 9,
      title: "¿Qué tan importante es la segmentación de la audiencia?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 10,
      title:
        "¿Qué tan importante es la personalización de la experiencia del cliente?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 11,
      dimension: "id",
      title:
        "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
      options: [
        { title: "Los cargos sénior defienden su uso hasta cierto punto." },
        {
          title:
            "Los cargos medios, como los directores locales, defienden su uso.",
        },
        {
          title: "Los altos cargos, como el vicepresidente, defienden su uso.",
        },
        {
          title:
            "Algunos cargos senior como el CMO, CTO o COO, defienden su uso.",
        },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 12,
      title:
        "¿Qué tan importante es la inversión en tecnología para la empresa?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 13,
      title: "¿Cómo se mide el éxito de las campañas de marketing?",
      options: [
        { title: "No se mide." },
        { title: "Se mide por la cantidad de ventas." },
        { title: "Se mide por la cantidad de leads." },
        { title: "Se mide por el ROI." },
      ],
      answer: null,
      marked: false,
    },
    {
      ide: 14,
      title: "¿Qué tan importante es la segmentación de la audiencia?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 15,
      title:
        "¿Qué tan importante es la personalización de la experiencia del cliente?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 16,
      dimension: "id",
      title:
        "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
      options: [
        { title: "Los cargos sénior defienden su uso hasta cierto punto." },
        {
          title:
            "Los cargos medios, como los directores locales, defienden su uso.",
        },
        {
          title: "Los altos cargos, como el vicepresidente, defienden su uso.",
        },
        {
          title:
            "Algunos cargos senior como el CMO, CTO o COO, defienden su uso.",
        },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 17,
      title:
        "¿Qué tan importante es la inversión en tecnología para la empresa?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 18,
      title: "¿Cómo se mide el éxito de las campañas de marketing?",
      options: [
        { title: "No se mide." },
        { title: "Se mide por la cantidad de ventas." },
        { title: "Se mide por la cantidad de leads." },
        { title: "Se mide por el ROI." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 19,
      title: "¿Qué tan importante es la segmentación de la audiencia?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 20,
      title:
        "¿Qué tan importante es la personalización de la experiencia del cliente?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 21,
      dimension: "id",
      title:
        "¿Desde qué nivel de la jerarquía de la organización se aboga por el marketing basado en datos?",
      options: [
        { title: "Los cargos sénior defienden su uso hasta cierto punto." },
        {
          title:
            "Los cargos medios, como los directores locales, defienden su uso.",
        },
        {
          title: "Los altos cargos, como el vicepresidente, defienden su uso.",
        },
        {
          title:
            "Algunos cargos senior como el CMO, CTO o COO, defienden su uso.",
        },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 22,
      title:
        "¿Qué tan importante es la inversión en tecnología para la empresa?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 23,
      title: "¿Cómo se mide el éxito de las campañas de marketing?",
      options: [
        { title: "No se mide." },
        { title: "Se mide por la cantidad de ventas." },
        { title: "Se mide por la cantidad de leads." },
        { title: "Se mide por el ROI." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 24,
      title: "¿Qué tan importante es la segmentación de la audiencia?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
    {
      id: 25,
      title:
        "¿Qué tan importante es la personalización de la experiencia del cliente?",
      options: [
        { title: "No es importante." },
        { title: "Es importante." },
        { title: "Es muy importante." },
        { title: "Es crucial." },
      ],
      answer: null,
      marked: false,
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(evaluationResults[0]);
  const [progress, setProgress] = useState({
    total: evaluationResults.length,
    completed: evaluationResults.filter((question) => question.answer !== null)
      .length,
  });
  const [finished, setFinished] = useState(false);
  const [percentage, setPercentage] = useState("0%");
  const [index, setIndex] = useState(0);
  const [resultsScreen, setResultsScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;
  const totalPages = Math.ceil(evaluationResults.length / questionsPerPage);

  const router = useRouter();
  const companyId = "66398ae089a64c1384ae4d51";

  useEffect(() => {
    const baseUrl = "https://localhost:8080";

    const evaluationsResults = async () => {
      const evaluationResults = await fetch(
        `${baseUrl}/evaluation/663989e2c925c715e33ee2c1/results`
      );
      const evaluationData = await evaluationResults.json();
      if (evaluationData.length === 0) {
        createEvaluation();
      } else {
        setevaluationResults(evaluationData);
      }
    };

    const createEvaluation = async () => {
      const evaluation = await fetch(`${baseUrl}/evaluation/add/${companyId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          evaluationDTO: {
            date: new Date().toLocaleDateString(),
            completed: false,
          },
        }),
      }).then((response) => response.json());
      console.log(evaluation);
    };

    const getEvaluationResult = async () => {
      const evaluationResults = await fetch(
        `${baseUrl}/evaluation/${companyId}`
      );
      const evaluationData = await evaluationResults.json();
      if (evaluationData.length === 0) {
        createEvaluation();
      } else {
        setevaluationResults(evaluationData);
      }
    };

    evaluationsResults();
  }, []);

  useEffect(() => {
    setPercentage(`${(progress.completed / progress.total) * 100}%`);
  }, [progress]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextQuestion();
      } else if (e.key === "ArrowLeft") {
        handlePreviousQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (percentage === "100%") {
      setFinished(true);
    }
  }, [percentage]);

  useEffect(() => {
    const newQuestions = evaluationResults.map((question: any) => {
      if (question.id === currentQuestion.id) {
        return currentQuestion;
      }
      return question;
    });
    setevaluationResults(newQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);

  useEffect(() => {
    setIndex(
      evaluationResults.findIndex(
        (question: any) => question.id === currentQuestion.id
      )
    );
  }, [currentQuestion, evaluationResults]);

  const handleCheckOption = (e: any) => {
    e.preventDefault();
    let answer = currentQuestion.answer;
    if (answer === null) {
      currentQuestion.answer = e.target.value;
      e.target.style.backgroundColor = "white";
      setProgress((prevProgress: any) => ({
        ...prevProgress,
        completed: prevProgress.completed + 1,
      }));
    } else {
      currentQuestion.answer = e.target.value;
    }
    e.target.blur();
    setCurrentQuestion({ ...currentQuestion });
  };

  const handleNextQuestion = () => {
    if (index < evaluationResults.length - 1) {
      if ((index + 1) % questionsPerPage === 0) {
        handlePageChange(currentPage + 1);
      }
      setCurrentQuestion(evaluationResults[index + 1]);
    }
  };

  const handlePreviousQuestion = () => {
    if (index > 0) {
      if (index % questionsPerPage === 0) {
        handlePageChange(currentPage - 1);
      }
      setCurrentQuestion(evaluationResults[index - 1]);
    }
  };

  const handleFinishEvaluation = () => {
    setResultsScreen(true);
  };

  const handleMarkQuestion = () => {
    setCurrentQuestion((prev) => ({
      ...prev,
      marked: !prev.marked,
    }));
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  const questionsToShow = evaluationResults.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );
  return !resultsScreen ? (
    <div className="w-full h-screen bg-light">
      <div className="flex justify-start items-baseline w-full">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div
            key={index}
            className="flex flex-col justify-center h-5/4 bg-white mr-2 border rounded-lg shadow-lg p-12 w-5/6"
          >
            <div className="flex justify-end">
              <button
                onClick={handleMarkQuestion}
                className="bg-secondary_old text-white p-2 mb-4 rounded shadow-lg"
              >
                {currentQuestion.marked
                  ? "Desmarcar Pregunta"
                  : "Marcar Pregunta"}
              </button>
            </div>
            <ProgressEvaluation percentage={percentage} />
            <p className="text-gray-800 text-lg mb-2">
              Pregunta {index + 1} de {evaluationResults.length}
            </p>
            <label
              htmlFor={`question-${currentQuestion.title}`}
              className="block text-gray-700 font-bold mb-2"
            >
              {currentQuestion.title}
            </label>
            <p>Selecciona tu respuesta</p>
            {currentQuestion.options.map((option: any, index: number) => (
              <Question
                id={index}
                key={index}
                name={currentQuestion.title}
                answer={currentQuestion.answer}
                value={option.title}
                handleCheck={handleCheckOption}
              />
            ))}
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex justify-center items-center gap-4 mt-8">
                <IoChevronBack
                  size={48}
                  onClick={handlePreviousQuestion}
                  className={`text-primary text-4xl cursor-pointer`}
                />
                {questionsToShow.map((question: any, questionIndex: any) => (
                  <div key={questionIndex}>
                    <a
                      onClick={() => setCurrentQuestion(question)}
                      className={`p-2 w-full text-center cursor-pointer rounded shadow-lg transition-all duration-200 ease-in-out ${
                        question.answer
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-blue-500 hover:text-blue-700"
                      } ${question.marked ? "border-2 border-yellow-500" : ""}`}
                    >
                      {currentPage * questionsPerPage + questionIndex + 1}
                    </a>
                    <hr
                      className={` h-0.5 w-full mt-4 ${
                        question.id === currentQuestion.id ? "bg-primary" : ""
                      }`}
                    />
                  </div>
                ))}
                <IoChevronForward
                  size={48}
                  onClick={handleNextQuestion}
                  className="text-primary text-4xl cursor-pointer"
                />
              </div>
              {finished && (
                <button
                  className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
                  onClick={handleFinishEvaluation}
                >
                  Terminar evaluación
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-light">
      <p className="text-2xl font-semibold text-center mt-24 mb-8">
        ¡Gracias por completar la evaluación!
      </p>
      <button
        className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
        onClick={() => {
          router.push("/home");
        }}
      >
        Ver mis resultados
      </button>
    </div>
  );
};

export default Questionary;
