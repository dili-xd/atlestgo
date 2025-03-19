import { useState } from "react";
import { getInfo, posData } from "../services/fetch";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Registro.css";

function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");
  const [genero, setGenero] = useState("");
  const [mostrar,setMostrar] = useState(false)
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [claveUsuario, setClaveUsuario] = useState("");
  const [correoUsuario,setCorreoUsuario]= useState("");
  const navigate = useNavigate()

  async function guardarDatos(e) {
    e.preventDefault();
    const usuario = {
      "nombre":nombre,
      "email":correo,
      "password":clave,
      "edad":edad,
      "peso":peso,
      "genero":genero,
      "estatura":estatura 
    }
    await posData(usuario, "usuarios");
  }
  async function validarUsuario(e) {
    e.preventDefault()
    const datos = await getInfo("usuarios")
    const usuarioValido = datos.find(usuario=>usuario.nombre === nombreUsuario && usuario.password === claveUsuario && usuario.email === correoUsuario)

    if(usuarioValido){
      navigate("/home");
    }
   
  }
  return (
    <div className="contenedor">
      <h1 className="titulo">Atletsgo</h1>
      {/* CREAR CUENTA */}
        <h2 className="nobotones"><span onClick={()=>setMostrar(false)}>Iniciar sesión</span> / <span onClick={()=>setMostrar(true)}>Crear cuenta</span></h2>
        {mostrar &&
       <div className="formulario">
        <form>
          <input type="text" placeholder="Nombre completo" onChange={(e) => setNombre(e.target.value)} />
          <input type="email" placeholder="Correo electrónico" onChange={(e) => setCorreo(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={(e) => setClave(e.target.value)} />
          <input type="number" placeholder="Edad" onChange={(e) => setEdad(e.target.value)} />
          <div className="fila">
            <input type="number" placeholder="Peso" onChange={(e) => setPeso(e.target.value)} />
            <input type="number" placeholder="Estatura" onChange={(e) => setEstatura(e.target.value)} />
          </div>
          <input type="text" placeholder="Género" onChange={(e) => setGenero(e.target.value)} />
          <button className="boton" onClick={guardarDatos}>Crear cuenta</button>
        </form>
      </div>
    }
      {/* FIN CREAR CUENTA */}

      {/* INICIO SESIÓN */}

      {mostrar == false && 
        <>
        <div className="formulario">
          <form>
          <input type="text" placeholder="Nombre completo" onChange={(e) => setNombreUsuario(e.target.value)} />
          <input type="email" placeholder="Correo electrónico" onChange={(e) => setCorreoUsuario(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={(e) => setClaveUsuario(e.target.value)} />
          <button className="boton" onClick={validarUsuario}>Ingresar</button>
          </form>
          </div>
        </>
        
      }
      <div>
        <p ><Link className="link" to="/Ayuda">Ayuda?</Link></p>
        <p><strong>Página hecha por Dilii</strong></p>
      </div>
    </div>
  );
}

export default FormularioRegistro;


