/* eslint-disable jsx-a11y/iframe-has-title */

import { Link } from "react-router-dom";


export function VideoChannelError(){
    return(
        <div>
            <h1>VideoChannel - Error</h1>
            <div className="text-danger">
                Invalid Credential
            </div>
            <p><Link to="/login">Back to Login</Link></p>
        </div>
    )
}