export interface Category {
  id: string;
  name: string;
  description: string;
  questions: {
    id: string;
    question: string;
    choices: string[];
    correctAnswer: string;
  }[];
}

export const quizData: Category[] = [
  {
    id: "1",
    name: "General",
    description: "Test your knowledge.",
    questions: [
      {
        id: "1",
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        id: "2",
        question: "Who wrote 'Hamlet'?",
        choices: [
          "Charles Dickens",
          "William Shakespeare",
          "J.K. Rowling",
          "Jane Austen",
        ],
        correctAnswer: "William Shakespeare",
      },
    ],
  },
  {
    id: "2",
    name: "Science",
    description: "Explore the world of science.",
    questions: [
      {
        id: "1",
        question: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
      },
      {
        id: "2",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
      },
    ],
  },
  {
    id: "3",
    name: "History",
    description: "Explore the world of science.",
    questions: [
      {
        id: "1",
        question: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
      },
      {
        id: "2",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
      },
    ],
  },
  {
    id: "4",
    name: "Geography",
    description: "Explore the world of science.",
    questions: [
      {
        id: "1",
        question: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
      },
      {
        id: "2",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O",
      },
    ],
  },
];
