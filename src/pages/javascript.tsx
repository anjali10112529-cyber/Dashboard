import React from "react";
const Javascript: React.FC =() =>{
    return(
        <div className="container m-2 p-2 mb-5">
            <h2>Welcome to learn JavaScript</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem, saepe ad nisi tempore modi dignissimos repellendus praesentium explicabo animi amet quibusdam perferendis sint perspiciatis vero magnam qui officia aperiam.</p>
            <div className="card mx-auto mt-5" style={{width:"fit-content"}}>
                <div className="card-title fs-5 fw-bold text-center mt-3">Create your first web Page</div>
                <div className="card-body">
                    <img src="https://picsum.photos/400/300" alt="random" className="img-fluid"></img> 
                    <p className="my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> In dignissimos vel maxime, corrupti vero id commodi <br></br> distinctio,tenetur sequi enim voluptatum nemo esse illo!</p>
                </div>
            </div>
        </div>
    );
}
export default Javascript;