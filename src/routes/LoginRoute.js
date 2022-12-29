import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginAdmin from "../pages/Account/LoginAdmin";
import MainLayout from "../pages/MainLayout/MainLayout";
import { useAuth0 } from "@auth0/auth0-react";

function LoginRoute() {
    // 1. Login 
    // phải xử lý router => 
    // có access token => push main
    // 2. Auth0 => access token => localstorage => xử lý như bước 1
    return(
        <Router>
            <Routes>
                {
                    localStorage.getItem("accessToken") ? <Route path="/main" element={<MainLayout/>}/> : <Route path="/" element={<LoginAdmin/>}/>
                }
                {/* <Route path="/admin" render={() => {
                    return localStorage.getItem("accessToken") ? <Admin/> : <Navigate to="/" replace={true}/>
                }}/> */}
                <Route path="/" element={<LoginAdmin />}/> 
            </Routes>
        </Router>
    )
}

export default LoginRoute