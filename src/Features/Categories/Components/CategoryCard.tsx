import { motion } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.1,
  },
};

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    questions: {
      id: string;
      question: string;
      choices: string[];
      correctAnswer: string;
    }[];
  };
  selectedCategory: string | null;
  handleCategorySelect: (categoryId: string) => void;
}

const CategoryCard = ({
  category,
  selectedCategory,
  handleCategorySelect,
}: CategoryCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onClick={() => handleCategorySelect(category.id)}
      className={`p-4 w-44 h-44 flex flex-col items-center justify-center border-2 rounded-lg cursor-pointer ${
        selectedCategory === category.id ? "border-accent" : ""
      }
      ${category.name === "Programming" ? "bg-red-300" : "bg-white"}
      ${category.name === "Frontend" ? "bg-yellow-300" : "bg-white"}
      ${category.name === "Backend" ? "bg-pink-300" : "bg-white"}
      ${category.name === "React" ? "bg-purple-300" : "bg-white"}
      ${category.name === "Typescript" ? "bg-blue-300" : "bg-white"}
      ${category.name === "Django" ? "bg-green-500" : "bg-white"}
      ${category.name === "Kotlin" ? "bg-orange-300" : "bg-white"}
        `}
    >
      <h2 className="text-lg font-semibold">{category.name}</h2>
      <p className="text-sm text-center">{category.description}</p>
    </motion.div>
  );
};

export default CategoryCard;
