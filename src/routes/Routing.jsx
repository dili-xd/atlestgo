import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Login from "../pages/Registro";
import Registro from "../pages/Registro";
import Home from "../pages/home";
import Admin from "../pages/Admin";
import Ayuda from "../pages/Ayuda";
import RutasPrivadas from "./RutasPrivadas";
import RutaAdmin from "./RutaAdmin";
function Routing(){
    return(
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Register" element={<Registro/>}/>
            <Route path="/home" element={<RutasPrivadas children={<Home/>}/>}/>
            <Route path="/admin" element={<RutaAdmin children={<Admin/>}/>}/>
            <Route path="/Ayuda" element={<Ayuda/>}/>

            

        </Routes>
    </Router>
    )

}
export default Routing