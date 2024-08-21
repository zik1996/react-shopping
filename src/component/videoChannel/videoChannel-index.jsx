import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoChannelHome } from "./videoChannel-home";
import { VideoChannelVideos } from "./videoChannel-videos";
import { VideoChannelLogin } from "./videoChannel-login";
import { VideoChannelError } from "./videoChannel-error";

export function VideoChannelIndex(){
    return(
        <div className="container-fluid">
            <header className="p-3 bg-dark text-white text-center">
                <span className="h3">Video Channel - Index</span>
            </header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VideoChannelHome />}/>
                    <Route path="videos" element={<VideoChannelVideos />} />
                    <Route path="login" element={<VideoChannelLogin />} />
                    <Route path="error" element={<VideoChannelError />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}