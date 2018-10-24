// Instanciamos un nuevo objeto.
const xhttp = new XMLHttpRequest();

// Creamos una funcion que es la que va a ejecutar el pedido
const pedirData = idPlanet =>{

    // Definimos la url a la cual le vamos a pedir la data
    const url = `https://swapi.co/api/planets/${idPlanet}/`

    // Le asignamos al metodo onreadystatechange una funcion la cual va a traer la informacion 
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Respuesta que nos da el servidor
         
        console.log(xhttp.response);
        actualizarDatos(xhttp.response)
       
        } else if (this.status === 404) {
            actualizarDatos(infoError)
        }
    };
    // Iniciamos la peticion de datos.
    xhttp.open("GET", url , true);
    xhttp.responseType = 'json';
    xhttp.send();
};



function actualizarDatos (info) {

    document.getElementById("nombrePlaneta").innerHTML = info.name
    document.getElementById("poblacion").innerHTML = info.population
    document.getElementById("clima").innerHTML = info.climate

};

let input = document.getElementById("buscador")
let boton = document.getElementById("botonbuscar")

boton.addEventListener("click", function(){

    let valor = parseInt(input.value)
    
    if (isNaN(valor)) {

        alert("ingrese un numero")

    } else {
        pedirData(valor)
        
    }
    
    
})


infoError = {
    name: "No se encontró planeta",
    population: "No se encontraron datos",
    climate: "No se encontraron datos",
}