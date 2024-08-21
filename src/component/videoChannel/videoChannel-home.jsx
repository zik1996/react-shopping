import { Link } from "react-router-dom";


export function VideoChannelHome(){
    return(
        <div>
            <h1>VideoChannel - Home</h1>
            <div>
                <Link to="/videos">Videos</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}