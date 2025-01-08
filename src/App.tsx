import { Route, Routes } from "react-router-dom";
import LoginPage from "./Features/Auth/Pages/LoginPage";
import SignupPage from "./Features/Auth/Pages/SignupPage";
import CategoryPage from "./Features/Categories/Pages/CategoryPage";
import Quizpage from "./Features/Quiz/Pages/Quizpage";
import ResultsPage from "./Features/Results/Pages/ResultsPage";
import WelcomePage from "./Features/Welcome/Pages/WelcomePage";

const App = () => {
  return (
    <div className="font-primary bg-bg max-h-screen max-w-[100vw] text-primary">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/quiz/:categoryId" element={<Quizpage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
};

export default App;
