import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route,Routes,useNavigate } from "react-router-dom";
function App(){
  return(
    <div>
        <Navbar />
    </div>
  )
}

export default App;