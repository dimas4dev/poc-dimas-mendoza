import React, { useState, useEffect } from 'react';
import './ProductCards.css';

function ProductCards() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []);

  return (
    <div className="product-cards-container">
      {productos.map(producto => (
        <div key={producto.id} className="card">
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p className="price">${producto.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
