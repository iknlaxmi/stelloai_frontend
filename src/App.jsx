import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OrganizationStructure from "./components/OrganizationStructure";
import Managers from "./components/Managers";

function App() {
  return (
    <>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-medium tracking-widest text-sm ">
                S T E L L O
              </span>
              <span className="ml-4 font-medium tracking-widest text-sm ">
                A I
              </span>
            </div>
            <div className="hidden md:block">
              <a href="/" className="text-gray-300 hover:text-white mr-16">
                Organizational Chart
              </a>
              <a href="/managers" className="text-gray-300 hover:text-white">
                Managers & Salaries
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<OrganizationStructure />} />
          <Route path="/managers" element={<Managers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
