window.addEventListener("load", () => {

    fetch("https://pokeapi.co/api/v2/pokemon/9")
    .then(function (data) {
        return data.json()
    })
    .then(function (pokemon) {
        console.log(pokemon)
    })
    .catch(function (error) {
        console.log(error)
    })













    /* sessionStorage vs localStorage */

    localStorage.setItem("nombrePato", "Donald");
    console.log(localStorage.getItem("nombrePato"));
    localStorage.removeItem("nombrePato");
    console.log(localStorage.getItem("nombrePato"));
})