/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function VideoChannelVideos(){

    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies("username");

    useEffect(()=>{
        if(cookies['username'] === undefined){
            navigate("/login")
        }
    })

    function LogoutClick(){
        removeCookie("username")
        navigate("/")
    }
    return(
        <div>
            <h1>VideoChannel - Videos  -- {cookies["username"]} <button className="btn btn-link" onClick={LogoutClick}>Logout</button></h1>
            
            <iframe src="https://www.youtube.com/embed/KUN5Uf9mObQ" width="400px" height="280px">

            </iframe>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    )
}