import React from "react";
const Python: React.FC =() =>{
    return(
        <div className="container m-2 p-2 mb-5">
            <h2>Welcome to learn Python</h2>
            <p className="p-2" style={{textAlign:"justify"}}>Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It is widely admired for its simple and readable syntax, which often resembles plain English, making it one of the most beginner-friendly languages. Python supports multiple programming paradigms, including object-oriented, functional, and procedural approaches, giving developers flexibility in how they design solutions. Over the years, it has grown into a versatile tool used in web development, data science, machine learning, artificial intelligence, automation, scientific computing, and more. Its popularity is driven by a vast ecosystem of libraries and frameworks, strong community support, and cross-platform compatibility. A simple Python program can be written in just a few lines, such as print("Hello, World!"), yet the language is powerful enough to build complex applications. Today, Python is considered one of the most influential programming languages, powering everything from small scripts to large-scale enterprise systems.</p>
            <h5>Syntax:</h5>
            <div className="card mt-3" style={{width:"fit-content"}}>
                <div className="card-title fs-5 fw-bold text-center mt-3">Conditional Statement</div>
                <div className="card-body">
                    <p className="my-2">
                        if condition:<br></br>
    # code block runs if condition is True<br></br>
elif another_condition:<br></br>
    # code block runs if the first condition is False<br></br>
    # but this condition is True<br></br>
else:<br></br>
    # code block runs if none of the above conditions are True<br></br>

                    </p>
                </div>
            </div>
        </div>
    );
}
export default Python;