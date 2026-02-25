import React from "react";

const Login: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
      style={{
        height: "calc(100vh - 80px)", // full visible content height
        width: "100%",
      }}
    >
      <div className="p-5 rounded bg-black" style={{ width: "400px" }}>
        <h1 className="text-center mb-4">Login</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email address
            </label>
            <input
              type="email"
              className="form-control bg-dark text-white border-white"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control bg-dark text-white border-white"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-light w-100">
            Login
          </button>

          <div className="text-center mt-3">
            <a href="/register" className="text-decoration-none text-white">
              Don’t have an account? <span className="fw-bold">Register</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;