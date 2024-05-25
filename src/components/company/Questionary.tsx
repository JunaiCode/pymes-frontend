import { SetStateAction, use, useEffect, useState } from "react";
import { ProgressEvaluation } from "./ProgressEvaluation";
import Question from "./Question";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/navigation";


interface QuestionI {
  question: string;
  questionId: string;
  maxScore: number;
  options: {
    optionId: string;
    description: string;
    value: number;
  }[];
  answer: string;
  marked: boolean;
}

interface ResultsDTO {
  dimensionId: string;
  questionId: string;
  optionId: string;
  marked: string;
}

interface Questions{
  dimensionId: string;
  questions: QuestionI[];
}


const Questionary = (props: any) => {
  const [questions, setQuestions] = useState<Questions[]>([{
    dimensionId: "",
    questions: [],
  }]);
  const [evaluationResults, setevaluationResults] = useState<QuestionI[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionI>({
    maxScore: 0,
    question: "",
    questionId: "",
    options: [],
    answer: "",
    marked: false,
  });
  const [ResultsDTO, setResultsDTO] = useState<ResultsDTO[]>([]);
  const [progress, setProgress] = useState({
    total: evaluationResults.length,
    completed: 0,
  });
  const [finished, setFinished] = useState(false);
  const [percentage, setPercentage] = useState("0%");
  const [index, setIndex] = useState(0);
  const [resultsScreen, setResultsScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;
  const totalPages = Math.ceil(evaluationResults.length / questionsPerPage);
  const router = useRouter();
  const [evaluationId, setEvaluationId] = useState("");
  const companyId = "5891e02d-6865-471b-ad0f-8d66e788288d";
  const versionId ="664e108b9e53d211e63fd583"
  const companyTypeId = "1";
  const baseUrl = "http://localhost:8080";

  const evaluationResultToDTO = (evaluationResults: QuestionI[]) => {
    let resultsDTO: ResultsDTO[] = [];
    evaluationResults.forEach((question: QuestionI) => {
      resultsDTO.push({
        dimensionId: questions.find((questionDimension) => questionDimension.questions.find((question) => question.questionId === question.questionId))?.dimensionId ?? "",
        questionId: question.questionId,
        optionId: question.options.find((option) => option.description === question.answer)?.optionId ?? "",
        marked: question.answer!=null ? "true" : "false",
      });
    });
    return resultsDTO;
  };


  useEffect(() => {
    questions.forEach((questionDimension: any) => {
      questionDimension.questions.forEach((question: any) => {
        let questionFound = evaluationResults.find((evaluationResult: any) => evaluationResult.questionId === question.questionId);
        if (!questionFound) {
          setevaluationResults((prev) => [...prev, question]);
        }
      });
    });
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [questions]);

  useEffect(() => {
    /*
    const sendResults = async () => {
      await fetch(`${baseUrl}/evaluation/${evaluationId}/addAnswers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ResultsDTO),
      }).then((response) => response.json()).then((data) => {
        return data;
      });
    };
    if (ResultsDTO.length > 0) {
      sendResults();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  */
  }
  , [ResultsDTO]);

  useEffect(() => {


    /*
    const getExistingEvaluation = async()=> await fetch(`${baseUrl}/evaluation/get/${companyId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => response.json()).then((data) => {
      if (data.length > 0) {
        setEvaluationId(data[0].evaluationId);
      }
    });
    */

    const createEvaluation = async () => {
      const evaluation = await fetch(`${baseUrl}/evaluation/add/${companyId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => response.json()).then((data) => {
        setEvaluationId(data.evaluationId);
      }
      );
    };

    const getFirstQuestions = async () => {

      const questions = await fetch(`${baseUrl}/version/get/${versionId}/questions/${companyTypeId}/first-level`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => response.json()).then((data) =>{
        let questions: QuestionI[] = [];
        setQuestions(data);
        data.forEach((questionPerDimension: any) => {
          questionPerDimension.questions.forEach((question: any) => {
            questions.push(question);
          });
        });
        setevaluationResults(questions);
        setProgress({
          total: questions.length,
          completed: 0,
        });
        setCurrentQuestion(questions[0]);
      });
    };
    createEvaluation();
    getFirstQuestions();
  }, []);

  useEffect(() => {
    setPercentage(`${(progress.completed / progress.total) * 100}%`);
  }, [progress]);

  useEffect(() => {
    setResultsDTO(evaluationResultToDTO(evaluationResults));
    setProgress({
      total: evaluationResults.length,
      completed: evaluationResults.filter((question) => question.answer).length,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [evaluationResults]);

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
    }else{
      setFinished(false);
    }
  }, [percentage]);

  useEffect(() => {
    const newQuestions = evaluationResults.map((question: any) => {
      if (question.questionId === currentQuestion?.questionId) {
        return currentQuestion;
      }
      return question;
    });
    setevaluationResults(newQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);

  const verifyLevel = async(dimensionId: string) => {
    const questionsDimension = questions.find((questionDimension) => questionDimension.dimensionId === dimensionId);
    let totalValue = 0;
    let totalScore = 0;
    questionsDimension?.questions.forEach((question: any) => {
      totalScore += question.maxScore;
      evaluationResults.forEach((evaluationResult: any) => {
        if (question.questionId === evaluationResult.questionId) {
          totalValue += question.options.find((option: any) => option.description === evaluationResult.answer)?.value;
        }
      });
    });
    if (totalValue === totalScore && totalValue !== 0) {
      let countAnswers = 0;
      let nextLevel: any = null;
      fetch(`${baseUrl}/level/dimension/${dimensionId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => response.json()).then(async (data) => {
        data.forEach((level: any) => {
          level.questions.forEach((question: any) => {
            let questionFound = evaluationResults.find((evaluationResult: any) => evaluationResult.questionId === question);
            if (questionFound) {
              countAnswers += 1;
              if (countAnswers === level.questions.length) {
                if (data.indexOf(level) < data.length - 1) {
                  nextLevel = data[data.indexOf(level) + 1];
                } else {
                  nextLevel = null;
                }
              }
            }
          });
        });
        if (nextLevel !== null) {
          const getNewQuestions: any = await fetch(`${baseUrl}/version/get/questions/company-type/level`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({dimensionId: dimensionId, levelId: nextLevel.levelId, versionId: versionId, companyTypeId: companyTypeId  })
          }).then((response) => response.json()).then((data) => {
            return data[0];
          });

          const newQuestions = questions.map((questionDimension: any) => {
            if (questionDimension.dimensionId === dimensionId) {
              return getNewQuestions;
            }
          });
          setQuestions(newQuestions);
        }        
      })
    }
  };

  useEffect(() => {
    questions.forEach((questionDimension: any) => {
      let totalAnswers = 0;
      questionDimension.questions.forEach((question: any) => {
      evaluationResults.forEach((evaluationResult: any) => {
        if (question.questionId === evaluationResult.questionId) {
          totalAnswers +=  1;
        }
      });
      });
      if(totalAnswers === questionDimension.questions.length){
        verifyLevel(questionDimension.dimensionId);
      }
    });
    setIndex(
      evaluationResults.findIndex
        ((question: any) => question.questionId === currentQuestion?.questionId)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion, evaluationResults]);

  const handleCheckOption = (e: any) => {
    e.preventDefault();
    let answer = currentQuestion?.answer;
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
    /*
    fetch(`${baseUrl}/evaluation/${evaluationId}/setCompleted`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: true,
      }),
    });
    */
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
    currentPage * questionsPerPage + questionsPerPage
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
              htmlFor={`question-${currentQuestion.question}`}
              className="block text-gray-700 font-bold mb-2"
            >
              {currentQuestion.question}
            </label>
            <p>Selecciona tu respuesta</p>
            {currentQuestion.options.map((option: any, index: number) => (
              <Question
                id={option.optionId}
                key={option.optionId}
                name={currentQuestion.question}
                answer={currentQuestion.answer}
                value={option.description}
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
                        question.questionId === currentQuestion.questionId ? "bg-primary" : ""
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
