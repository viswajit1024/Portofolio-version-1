import videoBg from "../assets/bgVideo.mp4"
import BlinkingText from "./BlinkingText";

function Background(){
    return(
       <div className="relative w-full h-[700px] overflow-hidden ">
          <video className="absolute top-[45px] left-0 z-0 h-[700px] w-full object-cover" src={videoBg} autoPlay loop muted />
          <div className="absolute top-0 left-0 w-full h-[700px] bg-black bg-opacity-50"></div>
          <div className="relative z-[5]">
            <BlinkingText />
          </div>
       </div>  
    )
}

export default Background;