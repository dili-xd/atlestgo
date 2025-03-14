import { useState } from "react";
import { posData } from "../services/fetch";
import "../styles/Registro.css";

function FormularioRegistro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");
  const [genero, setGenero] = useState("");

  async function guardarDatos(e) {
    e.preventDefault();
    const usuario = {
      
    }
    await posData(usuario, "usuarios");
  }

  return (
    <div className="contenedor">
      <h1 className="titulo">Atletsgo</h1>
      <div className="formulario">
        <h2>Iniciar sesión / Crear cuenta</h2>
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
      <div>
        <p>¿Ayuda?</p>
        <p><strong>Página hecha por Dilii</strong></p>
      </div>
    </div>
  );
}

export default FormularioRegistro;


