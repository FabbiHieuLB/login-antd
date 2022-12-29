import React from "react";
import { Button, Form } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutAuth0() {
    const{logout, isAuthenticated} = useAuth0();

    return(
        <div>
            <Form.Item>
                {isAuthenticated && (
                <Button
                    onClick={()=>logout()}
                    type="primary"
                    htmlType="submit"
                    style={{
                        height: "40px",
                        backgroundColor: "#FD7401",
                    }}
                >
                  Logout
                </Button>
                )}
                
            </Form.Item>
        </div>
    )
}

export default LogoutAuth0