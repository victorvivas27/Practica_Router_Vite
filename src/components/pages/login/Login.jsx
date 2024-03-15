import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [datos, setDatos] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const navegar=useNavigate()

  const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handelChange = (evento) => {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (validarEmail(datos.email) && datos.password.length > 6) {
      setError(false);
      console.log("Formulario enviado: ", datos);
      setDatos({ email: "", password: "" });
      alert("Formulario enviado");
      navegar("/")

    } else {
      console.log("Error en el formulario");
      setError(true);
    }
  };

  const mostrar = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return (
    <>
      <h1>Login</h1>
      <div className="contenedor-form">
        <form className="form" onSubmit={manejarEnvio}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handelChange}
            value={datos.email}
          />

          <input
            type={mostrarPassword ? "text" : "password"}
            placeholder="Contraseña"
            name="password"
            onChange={handelChange}
            value={datos.password}
          />
          <label>
            <input
              type="checkbox"
              checked={mostrarPassword}
              onChange={mostrar}
            />
            {mostrarPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
          </label>
          {error && (
            <p style={{ color: "red" }}>
              Por favor, revisa que la información sea correcta
            </p>
          )}
          <button type="submit">Enviar</button>
        </form>
      <NavLink  className="volver-home"to={"/"}>Volver al Home</NavLink>
      </div>
    </>
  );
};

export default Login;