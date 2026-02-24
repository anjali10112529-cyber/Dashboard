import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"; 

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Topics</h3>
      <ul className="sidebar-list">
        <li><Link to="/tutorial/html-css" className="sidebar-link">HTML & CSS</Link></li>
        <li><Link to="/tutorial/javascript" className="sidebar-link">JavaScript</Link></li>
        <li><Link to="/tutorial/python" className="sidebar-link">Python</Link></li>
        <li><Link to="/tutorial/java" className="sidebar-link">Java</Link></li>
        <li><Link to="/tutorial/cpp" className="sidebar-link">C++</Link></li>
        <li><Link to="/tutorial/react" className="sidebar-link">React</Link></li>
        <li><Link to="/tutorial/sql" className="sidebar-link">SQL</Link></li>
        <li><Link to="/tutorial/mongodb" className="sidebar-link">MongoDB</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
