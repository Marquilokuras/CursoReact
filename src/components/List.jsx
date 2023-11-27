import React from 'react';
import '../assets/css/List.css';
import PropTypes from 'prop-types';

function List(props) {

  return (
    <React.Fragment>
      <h4> Cantidad de peliculas: {props.amount} </h4>
      <ul className="movies-list">
        {props.movies.map((movie, i) =>{
          return <li key={i+"ListLiKey"}>
            {movie}
          </li>
        })}
      </ul>
    </React.Fragment>
  )
}

List.defaultProps = {
  amount: "No pasaron la cantidad de peliculas, revisar el componente App.js",
  movies: ["Error"]
}

/* import PropTypes from 'prop-types'; */
List.propTypes = {
  amount: PropTypes.number,
  movies: PropTypes.array
}

export default List