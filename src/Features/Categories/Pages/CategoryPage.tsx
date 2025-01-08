import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "../../../Shared/Data/quizData";

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // when user clicks start quiz, they are navigated to the category's set of questions
  const handleStartQuiz = () => {
    if (selectedCategory) {
      navigate(`/quiz/${selectedCategory}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">Select a Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {quizData.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`p-4 w-40 h-40 flex flex-col items-center justify-center border-2 rounded-lg cursor-pointer transition ${
              selectedCategory === category.id
                ? "border-blue-500 bg-blue-100"
                : "border-gray-300 hover:border-blue-300"
            }`}
          >
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <p className="text-sm text-gray-600 text-center">
              {category.description}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={handleStartQuiz}
        disabled={!selectedCategory}
        className={`px-6 py-2 rounded-md text-white font-semibold transition ${
          selectedCategory
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default CategoryPage;
