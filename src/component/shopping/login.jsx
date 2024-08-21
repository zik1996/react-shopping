import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Login(){
    let navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies('username')
    const [username, setUsername] = useState('')

    function handleNameChange(e){
        setUsername(e.target.value)
    }
    function UserLoginClick(){
        setCookie("username", username)
        navigate("/")
    }
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <form className="p-3 border border-1 border-dark rounded rounded-2" style={{boxShadow:"2px 2px 2px grey"}}>
                <h2>User Login <span className="bi bi-person-fill"></span></h2>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" onChange={handleNameChange} className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="text" className="form-control" /></dd>
                </dl>
                <button className="btn btn-primary w-100" onClick={UserLoginClick}>Login</button>
            </form>
        </div>
    )
}