import { Link } from "react-router-dom";
import "./home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Learn Programming</h1>
      <p>
        Explore our courses below. Click on any course to start learning!
      </p>

      <div className="course-grid">
        <Link to="/tutorial/html-css" className="course-card html">
          <h2>HTML & CSS</h2>
          <p>Build beautiful websites</p>
        </Link>

        <Link to="/tutorial/javascript" className="course-card js">
          <h2>JavaScript</h2>
          <p>Make your sites interactive</p>
        </Link>

        <Link to="/tutorial/python" className="course-card python">
          <h2>Python</h2>
          <p>Learn programming basics</p>
        </Link>

        <Link to="/tutorial/java" className="course-card java">
          <h2>Java</h2>
          <p>Master OOP concepts</p>
        </Link>

        <Link to="/tutorial/react" className="course-card react">
          <h2>React</h2>
          <p>Build modern web apps</p>
        </Link>
        <Link to="/tutorial/cpp" className="course-card java">
          <h2>C++</h2>
          <p>Efficient Memory Management</p>
        </Link>
        <Link to="/tutorial/mongodb" className="course-card html">
          <h2>MongoDB</h2>
          <p>Store Flexible Documents</p>
        </Link>
        <Link to="/tutorial/angular" className="course-card js">
          <h2>Angular</h2>
          <p>Develop Dynamic Frontends</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
