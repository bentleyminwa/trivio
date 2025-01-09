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
    <div
      onClick={() => handleCategorySelect(category.id)}
      className={`p-4 w-40 h-40 flex flex-col items-center justify-center border-2 rounded-lg cursor-pointer ${
        selectedCategory === category.id
          ? "border-accent/30 bg-accent/30 text-white"
          : "border-gray-300 hover:border-accent/30"
      }`}
    >
      <h2 className="text-lg font-semibold">{category.name}</h2>
      <p className="text-sm text-center">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
