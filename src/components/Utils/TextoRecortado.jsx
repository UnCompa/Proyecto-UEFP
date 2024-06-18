import React, { useState } from 'react';

const TextoRecortado = ({ texto, longitudMaxima = 64 }) => {
  const [mostrarCompleto, setMostrarCompleto] = useState(false);
  
  const recortarTexto = (texto, longitud) => {
    if (texto.length <= longitud) {
      return texto;
    }
    return texto.slice(0, longitud) + '...';
  };
  
  const toggleMostrarCompleto = () => {
    setMostrarCompleto(!mostrarCompleto);
  };
  
  return (
    <div className='font-light'>
      {mostrarCompleto || texto.length <= longitudMaxima ? (
        texto
      ) : (
        <>
          {recortarTexto(texto, longitudMaxima)}
          <button onClick={toggleMostrarCompleto}>Ver más</button>
        </>
      )}
    </div>
  );
};

export default TextoRecortado;
