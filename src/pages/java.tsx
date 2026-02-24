import React from "react";
const Java: React.FC =() =>{
    return(
        <div className="container m-2 p-2 mb-5">
            <h2>Welcome to learn Java</h2>
            <p className="p-2" style={{textAlign:"justify"}}>Java is a high-level, object-oriented programming language originally developed by Sun Microsystems in 1995 and now owned by Oracle. It is designed to be platform-independent, meaning programs written in Java can run on any operating system that has a Java Virtual Machine (JVM). This “write once, run anywhere” capability made Java one of the most widely adopted languages in the world. It is used extensively for building desktop applications, web applications, mobile apps (especially Android), enterprise systems, and even embedded devices. Java emphasizes reliability and security through strong memory management and exception handling, while also supporting multithreading for efficient concurrent execution. Its rich set of standard libraries and frameworks simplifies development across diverse domains. With more than three billion devices running Java, it remains one of the most popular and influential programming languages, valued for its versatility, scalability, and strong community support.</p>
            <h5>Use of Conditional Statement: </h5>
            <div className="card mt-3" style={{width:"fit-content"}}>
                <div className="card-title fs-5 fw-bold text-center mt-3">If-Else Ladder</div>
                <div className="card-body">
                    <p className="my-1 p-2" style={{textAlign:"justify"}}>
                        The Java grading program using an if–else ladder works by checking a student’s score against different ranges and assigning the appropriate grade. The program begins with a variable score and evaluates it step by step. First, it checks if the score is greater than or equal to 90; if so, it prints “Grade: A.” If that condition is false, it moves to the next condition, checking if the score is greater than or equal to 80, and prints “Grade: B” if true. This process continues down the ladder with conditions for scores greater than or equal to 70 and 60, printing “Grade: C” or “Grade: D” respectively. If none of these conditions are met, the program defaults to the else block and prints “Grade: F.” Only one block of code executes, depending on which condition is satisfied first. This structure makes the program efficient and easy to read, as it clearly organizes multiple possible outcomes in a logical order.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Java;