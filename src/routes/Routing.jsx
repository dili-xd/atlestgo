import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Login from "../pages/Registro";
import Registro from "../pages/Registro";
function Routing(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Registro/>}/>
            

        </Routes>
    </Router>
    )
}
export default Routing