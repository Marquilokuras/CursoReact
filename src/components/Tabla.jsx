import React from 'react'
import '../assets/css/Tabla.css'

function Tabla() {
  return (
    <>
        <h2>Tabla de información vital</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Show</th>
                    <th>Año de creación</th>
                    <th>Estudio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Daisy</td>
                    <td>Pato Donald</td>
                    <td>1940</td>
                    <td>Disney</td>
                </tr>
                <tr>
                    <td>Pato Lucas</td>
                    <td>Looney Tunes</td>
                    <td>1937</td>
                    <td>Warner Bros.</td>
                </tr>
                <tr>
                    <td>Los hermanos pato</td>
                    <td>Coraje el perro cobarde</td>
                    <td>2000</td>
                    <td>Wang Film</td>
                </tr>
                <tr>
                    <td>Eric Duckman</td>
                    <td>Duckman</td>
                    <td>1994</td>
                    <td>Klasky Csupo</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default Tabla