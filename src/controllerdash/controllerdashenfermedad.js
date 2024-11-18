//objetivo: resibir datos del back y hacerles render (render= a pintarlos)
//pasi 1 quemar o simular los datos
let enfermedad = [
    {
        nombre:"hipertrofia",
        sintomas:"calambres, dolor en articulaciones",
        clasificacion:"urgencia",
        grado:"2",
        probabilidad:"80%"
        
    },
    {
        "nombre": "hipotermia",
        "sintomas": "escalofríos, piel pálida, confusión mental",
        "clasificacion": "emergencia",
        "grado": "3",
        "probabilidad": "90%"
    },
    {
        "nombre": "hiperglucemia",
        "sintomas": "sed excesiva, visión borrosa, fatiga",
        "clasificacion": "urgencia",
        "grado": "2",
        "probabilidad": "75%"
    },
    {
        "nombre": "deshidratación",
        "sintomas": "boca seca, mareos, orina oscura",
        "clasificacion": "urgencia",
        "grado": "2",
        "probabilidad": "85%"
    },
    {
        "nombre": "insuficiencia respiratoria",
        "sintomas": "dificultad para respirar, cianosis, debilidad extrema",
        "clasificacion": "emergencia",
        "grado": "4",
        "probabilidad": "95%"
    },
    {
        "nombre": "hipotensión",
        "sintomas": "mareos, desmayos, visión borrosa",
        "clasificacion": "urgencia",
        "grado": "2",
        "probabilidad": "70%"
    }
]



//paso 2 crear una referencia a una etiqueta html donfe vamos a renderizar 


let fila = document.getElementById("fila")

// paso 3 se recorren los datos para obpeterlos de forma separada 
enfermedad.forEach(function(enfermedad){
    console.log(enfermedad)

    //paso 4 se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    // paso 5 se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //paso 6 se crea una etiqueta para poner el nobre del paciente
    let nombre=document.createElement("h2")
    nombre.textContent=enfermedad.nombre

    //paso final ordenando las cartas
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})