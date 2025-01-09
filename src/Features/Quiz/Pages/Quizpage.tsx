import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../Shared/Components/Button/Button";
import Header from "../../../Shared/Components/Header/Header";
import { quizData } from "../../../Shared/Data/quizData";

const QuizPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = quizData.find((cat) => cat.id === categoryId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  if (!category) {
    return <p>Category not found!</p>;
  }

  const currentQuestion = category.questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < category.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Navigate to results page
      navigate("/results", { state: { selectedAnswers, category } });
    }
  };

  return (
    <main className="h-screen">
      <Header />
      <section className="w-10/12 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-600 font-bold">
          {category.name} Quiz
        </h1>
        <div className="w-full max-w-screen-md p-10 bg-white shadow-lg rounded-lg my-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-500">
            Question {currentQuestionIndex + 1} of {category.questions.length}
          </h2>
          <p className="mb-6">{currentQuestion.question}</p>
          <div className="flex flex-col gap-4">
            {currentQuestion.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(choice)}
                className={`w-full p-3 text-left text-sm border rounded-lg transition ${
                  selectedAnswers[currentQuestionIndex] === choice
                    ? "bg-blue-100 border-blue-500"
                    : "border-gray-300 hover:border-blue-300"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>

        <Button onClick={handleNextQuestion}>
          {currentQuestionIndex < category.questions.length - 1
            ? "Next Question"
            : "Submit Quiz"}
        </Button>
      </section>
    </main>
  );
};

export default QuizPage;
