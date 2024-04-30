
import { Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header.js/Header";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Sklls/Skills";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/skills" Component={Skills}/>
        <Route path="/projects" Component={Projects}/>
        <Route path="/experiece" Component={Experience}/>
       
      </Routes>
      
      
    </div>
  );
}

export default App;
