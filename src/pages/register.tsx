import React from "react";

const Register: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white">
      <div className="p-5 rounded bg-black shadow-lg" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Register</h1>

        <form>
          
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Full Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-white"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email address</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-white"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-white"
              id="password"
              placeholder="Create a password"
            />
          </div>

          
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-white"
              id="confirmPassword"
              placeholder="Re-enter your password"
            />
          </div>

          
          <button type="submit" className="btn btn-light w-100">
            Register
          </button>

          
          <div className="text-center mt-3">
            <a href="/login" className="text-decoration-none text-white">
              Already have an account? <span className="fw-bold">Login</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
