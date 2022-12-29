import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, Form, Input } from "antd";
import LoginAuth0 from "../../components/LoginAuth0/LoginAuth0";
import LogoutAuth0 from "../../components/LoginAuth0/LogoutAuth";
import ProfileAuth0 from "../../components/LoginAuth0/ProfileAuth0";

function LoginAdmin() {
    const [username, setUserName] = useState('');
    const [password, setPasswor] = useState('');
    const navigate = useNavigate()
    const onFinish = ((e) => {
      // username: 'kminchelle',
      // password: '0lelplR',
      e.preventDefault();
      fetch("http://localhost:3000/user/" + username).then((res) => {
        return res.json();
    }).then((resp) => {
        //console.log(resp)
        if (Object.keys(resp).length === 0) {
            console.log('Please Enter valid username');
        } else {
            if (resp.password === password) {
                console.log('Success');
                sessionStorage.setItem('username',username);
                navigate('/')
            }else{
                console.log('Please Enter valid credentials')
            }
        }
    }).catch((err) => {
      console.log('bbbbb')
    });
      },[])

    return(
      <div className="row">
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={onFinish} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>Login into your account</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => setUserName(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPasswor(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin