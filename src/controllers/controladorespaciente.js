//OBJETIVO : Capturar los datos de un formulario

// 1. Por cada input, select , textare del formularion se crea una variable

// 2. por cada varible debo utilizar el DOM para 
// asociar el html con js 
/*
let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let fechanacimientoPaciente=document.getElementById("nacimientopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let tienePoliza=document.getElementById("polizapaciente")
let fechaAfiliacion=document.getElementById("afiliacionpaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("grupopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")

//crear una variable para asociarla al id del botan que tengo en html paso 3

let botonregistropaciente=document.getElementById("botonregistropaciente");

//paso 4 detectamos acciones o eventos en el boton
botonregistropaciente.addEventListener("click",function(evento){
    evento.preventDefault()
    // paso 5 se crea un json que capture todos los datos del formulario 
    let datosformulariopaciente={
        nombres: nombrePaciente.value,
        fechaNacimiento:fechanacimientoPaciente.value,
        ciudad:ciudadPaciente.value,
        correo:correoPaciente.value,
        telefono:telefonoPaciente.value,
        ips:ipsPaciente.value,
        grupoIngreso:grupoIngresoPaciente.value,
        tienePoliza:tienePoliza.value,
        fechaAfiliacion:fechaAfiliacion.value
    }

    //paso 6 se envian los datos al back
    console.log(datosformulariopaciente)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})

*/


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




