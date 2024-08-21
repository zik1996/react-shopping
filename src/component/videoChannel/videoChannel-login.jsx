
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function VideoChannelLogin(){

    let navigate = useNavigate();

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const [cookies, setCookie, removeCookie] = useCookies("username")

    function handleNameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    function LoginClick(){
        if(password ==="admin"){
            setCookie("username", username);
            navigate("/videos")
        }else{
            navigate("/error")
        }
    }
    return(
        <div>
            <h1>Video Channel -- Login</h1>
            <Link to="/">Back to home</Link>
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <form className="p-3 border border-1 border-dark rounded rounded-2" style={{boxShadow:"2px 2px 2px grey"}}>
                    <h2>User Login <span className="bi bi-person-fill"></span></h2>
                    <dl>
                        <dt>Username</dt>
                        <dd><input type="text" onChange={handleNameChange} className="form-control" /></dd>
                        <dt>Password</dt>
                        <dd><input type="text" onChange={handlePasswordChange} className="form-control" /></dd>
                    </dl>
                    <button className="btn btn-primary w-100" onClick={LoginClick}>Login</button>
                </form>
            </div>
        </div>
    )
}