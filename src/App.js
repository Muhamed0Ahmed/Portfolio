import "./App.css";
import Header from "./Pages/Header.js/Header";
import Home from "./Pages/Home/Home";
// import Skills from "./Pages/Sklls/Skills";
// import Projects from "./Pages/Projects/Projects";
// import Experience from "./Pages/Experience/Experience";
// import { useState } from "react";

function App() {
  // let [page, setPage] = useState("Home");
  // const changePageShow = (pageShow) => {
  //   setPage(pageShow)
  // }
  return (
    <div className="container-fluid container-xxl">
      <Header 
      // setPage ={changePageShow}
      />
     <Home/>
      {/* {page === "Home" ?<Home/> : null}
      {page === "Skills" ?<Skills/>: null}
      {page === "Projects" ?<Projects/>:null}
      {page === "Experience" ?<Experience/>: null}
       */}
      
    </div>
  );
}

export default App;
