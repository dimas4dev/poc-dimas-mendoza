import React, { useState } from 'react';
import './createUser.css'; // Asegúrate de crear este archivo CSS

function CreateUser() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Datos del usuario a enviar
    const userData = { nombre, email, direccion, pass: password };
  
    try {
      // Realiza la petición POST al servidor
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Usuario creado con éxito:", data);
        // Aquí puedes manejar la respuesta, como limpiar el formulario o redirigir al usuario
      } else {
        console.error("Error al crear el usuario:", await response.text());
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error("Error en la red o servidor:", error);
      // Maneja errores de red o del servidor
    }
  };
  

  return (
    <div className="create-user-container">
      <form onSubmit={handleSubmit} className="create-user-form">
        <h2 className="form-title">Crear Usuario</h2>
        <div className="form-field">
          <label>Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Dirección</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Crear Usuario</button>
      </form>
    </div>
  );
}

export default CreateUser;
