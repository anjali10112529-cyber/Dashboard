import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HtmlCssPage from "./pages/HtmlCssPage";
import Javascript from "./pages/javascript";
import Python from "./pages/python";
import Java from "./pages/java";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Layout/>}>
          <Route index element={<h1>Welcome</h1>}/>
            <Route path="tutorial/html-css" element={<HtmlCssPage/>}/>   
            <Route path="tutorial/javascript" element={<Javascript/>}/>   
            <Route path="tutorial/python" element={<Python/>}/>
            <Route path="tutorial/java" element={<Java/>}/>
       </Route>
      </Routes>
    </Router>
  );
};

export default App;
