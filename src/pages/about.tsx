import React from "react";
import { Link } from "react-router-dom";
const About: React.FC = () => {
  return (
    <div className="container py-5">
    
      <h1 className="text-center mb-4">About CodeTech</h1>

      
      <p className="lead mb-4" style={{textAlign:"justify"}}>
        CodeTech is an online learning platform dedicated to helping learners
        master programming languages and modern web technologies. We provide
        structured courses in HTML & CSS, JavaScript, Python, Java, C++, React,
        SQL, MongoDB, AngularJS, and more. Our goal is to make coding simple,
        practical, and accessible for everyone.
      </p>

    
      <div className="text-center mt-4">
       <Link to="/register" className="btn rounded-pill bg-black text-white">
            Register
          </Link>
      </div>
    </div>
  );
};

export default About;
