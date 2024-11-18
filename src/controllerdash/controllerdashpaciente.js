//objetivo: resibir datos del back y hacerles render (render= a pintarlos)
//pasi 1 quemar o simular los datos
let pacientes = [
    {
        id:890,
        nombre:"carl galager",
        fechaNacimiento: "2004-08-11",
        ciudad: "Medellín",
        correo: "samuel@gmai.com",
        telefono: "3012384494",
        ips: "mayorca",
        grupoIngreso:"c",
        fechaAfiliacion:"2005-08-11"
    },
    {
        "id": "891",
        "nombre": "Andrea Martínez",
        "fechaNacimiento": "2003-02-15",
        "ciudad": "Bogotá",
        "correo": "andrea.martinez@gmail.com",
        "telefono": "3104567890",
        "ips": "Santa Fe",
        "grupoIngreso": "B",
        "fechaAfiliacion": "2006-02-20"
    },
    {
        "id": 892,
        "nombre": "Luis González",
        "fechaNacimiento": "2005-05-22",
        "ciudad": "Cali",
        "correo": "luisg@outlook.com",
        "telefono": "3159876543",
        "ips": "Imbanaco",
        "grupoIngreso": "A",
        "fechaAfiliacion": "2007-05-22"
    },
    {
        "id": 893,
        "nombre": "Carolina Torres",
        "fechaNacimiento": "2004-10-05",
        "ciudad": "Medellín",
        "correo": "carotorres@yahoo.com",
        "telefono": "3048765432",
        "ips": "San Vicente",
        "grupoIngreso": "C",
        "fechaAfiliacion": "2005-10-10"
    }
]



//paso 2 crear una referencia a una etiqueta html donfe vamos a renderizar 


let fila = document.getElementById("fila")

// paso 3 se recorren los datos para obpeterlos de forma separada 
pacientes.forEach(function(paciente){
    console.log(paciente)

    //paso 4 se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    // paso 5 se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //paso 6 se crea una etiqueta para poner el nobre del paciente
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombre

    //paso final ordenando las cartas
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})