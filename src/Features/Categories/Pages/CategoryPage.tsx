import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Shared/Components/Button/Button";
import Header from "../../../Shared/Components/Header/Header";
import { quizData } from "../../../Shared/Data/quizData";
import { PageVariants } from "../../../Shared/Motion/Motion";
import CategoryCard from "../Components/CategoryCard";

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
    <motion.main
      variants={PageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="h-screen"
    >
      <Header />
      <section className="w-10/12 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl text-gray-600 font-bold">Select a Category</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 my-10">
          {quizData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              selectedCategory={selectedCategory}
              handleCategorySelect={handleCategorySelect}
            />
          ))}
        </div>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 120,
              },
            }}
          >
            <Button onClick={handleStartQuiz}>Start Quiz</Button>
          </motion.div>
        )}
      </section>
    </motion.main>
  );
};

export default CategoryPage;
