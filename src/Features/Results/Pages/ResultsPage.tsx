import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  selectedAnswers: string[];
  category: {
    id: string;
    name: string;
    questions: {
      question: string;
      correctAnswer: string;
      choices: string[];
    }[];
  };
}

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  if (!state || !state.selectedAnswers || !state.category) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">No results found</h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  const { selectedAnswers, category } = state;

  const calculateScore = () => {
    return category.questions.reduce((score, question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const score = calculateScore();
  const totalQuestions = category.questions.length;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">{category.name} Quiz Results</h1>
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">
          You scored {score} out of {totalQuestions}!
        </h2>
        <div className="space-y-4">
          {category.questions.map((question, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <p className="font-semibold">{question.question}</p>
              <p
                className={`mt-2 ${
                  selectedAnswers[index] === question.correctAnswer
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Your Answer: {selectedAnswers[index] || "No answer"}
              </p>
              {selectedAnswers[index] !== question.correctAnswer && (
                <p className="text-blue-600">
                  Correct Answer: {question.correctAnswer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => navigate("/category")}
        className="mt-6 px-6 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultsPage;
