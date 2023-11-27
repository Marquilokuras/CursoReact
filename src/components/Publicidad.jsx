import React from 'react';
import '../assets/css/Publicidad.css';

function Publicidad(props) {
  return (
   <React.Fragment>
    <div className="publicidad">
      <p>---Inicio de espacio publicitario</p>
      <div>
        {props.children}
      </div>
      <p>---Fin de espacio publicitario</p>
    </div>
   </React.Fragment>
  )
}

export default Publicidad