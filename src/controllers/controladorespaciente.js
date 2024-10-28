//OBJETIVO : Capturar los datos de un formulario

// 1. Por cada input, select , textare del formularion se crea una variable

// 2. por cada varible debo utilizar el DOM para 
// asociar el html con js 

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













