import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./Features/Auth/Pages/LoginPage";
import SignupPage from "./Features/Auth/Pages/SignupPage";
import CategoryPage from "./Features/Categories/Pages/CategoryPage";
import Quizpage from "./Features/Quiz/Pages/Quizpage";
import ResultsPage from "./Features/Results/Pages/ResultsPage";
import WelcomePage from "./Features/Welcome/Pages/WelcomePage";
import Loader from "./Shared/Components/Loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="font-primary bg-bg min-h-screen max-w-[100vw] text-primary">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/quiz/:categoryId" element={<Quizpage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
