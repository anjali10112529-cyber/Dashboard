import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";
const Layout: React.FC = () => {
    return(
        <div>
            <Navbar/>
            <div style={{display:"flex"}}>
                <Sidebar/>
                <main style={{marginTop:"150px", marginLeft:"220px", padding:"20px",flex:1}}>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}
export default Layout;