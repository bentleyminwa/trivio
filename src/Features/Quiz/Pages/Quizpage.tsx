import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { quizData } from "../../../Shared/Data/quizData";

const QuizPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = quizData.find((cat) => cat.id === categoryId);
  console.log(category);

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
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">{category.name} Quiz</h1>
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          Question {currentQuestionIndex + 1} of {category.questions.length}
        </h2>
        <p className="mb-6">{currentQuestion.question}</p>
        <div className="flex flex-col gap-4">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(choice)}
              className={`w-full p-3 text-left border rounded-lg transition ${
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
      <button
        onClick={handleNextQuestion}
        className="mt-6 px-6 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
      >
        {currentQuestionIndex < category.questions.length - 1
          ? "Next Question"
          : "Submit Quiz"}
      </button>
    </div>
  );
};

export default QuizPage;
