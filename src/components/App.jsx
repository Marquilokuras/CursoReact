import React from 'react';
import '../assets/css/App.css';

import List from './List';
import Publicidad from './Publicidad';
import Tabla from './Tabla';

function App() {
  /* Estos datos pueden ser estáticos, o traerlos de un medio externo como una API */
  let movies1 = ["Minions", "Doctor strange", "Encanto"];
  let movies2 = ["El padrino", "ET", "2001: Odisea en el espacio", "La lista de Schindler", "Casablanca"];
  return (
    <React.Fragment>
      	<h1>Nuestro proyecto de React</h1>
        <Publicidad>
          <h2>Publicidad sencilla!</h2>
        </Publicidad>
        <List movies={movies1} amount={movies1.length}/>
        <List/>
        <Publicidad>
          <h2>Publicidad compleja!</h2>
          <p>Publicidad nueva</p>
          <p>Compre ya!</p>
        </Publicidad>
        <List movies={movies2} amount={movies2.length}/>
        <Publicidad>
          <ul>
            <li><img src="https://picsum.photos/200/300" alt="Random pic"></img></li>
            <li><img src="https://picsum.photos/200/300" alt="Random pic"></img></li>
            <li><img src="https://picsum.photos/200/300" alt="Random pic"></img></li>
            <li><img src="https://picsum.photos/200/300" alt="Random pic"></img></li>
          </ul>
        </Publicidad>
        <Tabla/>
    </React.Fragment>
  );
}

export default App;
