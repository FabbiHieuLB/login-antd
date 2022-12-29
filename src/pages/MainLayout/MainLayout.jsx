import React from "react";
import {  useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function MainLayout() {
    const{isAuthenticated} = useAuth0();
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("accessToken")
        navigate("/")
    }
    return <div>
        <h2>Main Layout</h2>
        {isAuthenticated && (
        <button onClick={logout}>Logout</button>)}
    </div>
}

export default MainLayout