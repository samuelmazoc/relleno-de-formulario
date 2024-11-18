//objetivo: resibir datos del back y hacerles render (render= a pintarlos)
//pasi 1 quemar o simular los datos
let signos = [
    {
        nombresignovital: "presion arterial",
        valores: "80/120",
        fechamedida: "11/08/2024"
    },
    {
        nombresignovital: "frecuencia cardíaca",
        valores: "72 bpm",
        fechamedida: "10/08/2024"
    },
    {
        nombresignovital: "temperatura corporal",
        valores: "36.7 °C",
        fechamedida: "11/08/2024"
    },
    {
        nombresignovital: "frecuencia respiratoria",
        valores: "18 rpm",
        fechamedida: "09/08/2024"
    },
    {
        nombresignovital: "saturación de oxígeno",
        valores: "98%",
        fechamedida: "12/08/2024"
    }
    
]



//paso 2 crear una referencia a una etiqueta html donfe vamos a renderizar 


let fila = document.getElementById("fila")

// paso 3 se recorren los datos para obpeterlos de forma separada 
signos.forEach((signo) =>{
    console.log(signo)

    //paso 4 se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    // paso 5 se crean tarjetas 
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //paso 6 se crea una etiqueta para poner el nobre del paciente
    let nombre = document.createElement("h2");
    nombre.textContent=signo.nombresignovital;

    //paso final ordenando las cartas
    tarjeta.appendChild(nombre);
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    

})