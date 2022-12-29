import React from "react";
import {  Button, Form} from "antd";
import { useAuth0 } from "@auth0/auth0-react";

function LoginAuth0() {

    const{loginWithRedirect, isAuthenticated} = useAuth0();
    return(
        <Form layout="vertical">
            <Form.Item>
                {!isAuthenticated && (
                <Button
                    onClick={()=>loginWithRedirect()}
                    type="primary"
                    htmlType="submit"
                    style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#FD7401",
                    }}
                >
                    Auth0
                </Button>
                )}
            </Form.Item>
        </Form>
    )
    
}

export default LoginAuth0