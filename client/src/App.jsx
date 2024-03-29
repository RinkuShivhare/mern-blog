import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Dashboard from "../src/pages/Dashboard"
import SignIn from "../src/pages/SignIn"
import SignUp from "../src/pages/SignUp"
import Projects from "../src/pages/Projects"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}
