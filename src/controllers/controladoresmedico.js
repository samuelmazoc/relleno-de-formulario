let nombreMedico=document.getElementById("nombremedico")
let matriculaProfesionalMedico=document.getElementById("matriculamedico")
let especialidadMedico=document.getElementById("especialidadmedico")
let salarioMedico=document.getElementById("salariomedico")
let ipsMedico=document.getElementById("ipsmedico")
let correoMedico=document.getElementById("correomedico")
let telefonoMedico=document.getElementById("telefonomedico")
let direccionMedico=document.getElementById("Direccionmedico")
let disponibleFinDeSemanaMedico=document.getElementById("disponiblemedico")

//crear una variable para asociarla al id del botan que tengo en html paso 3

let botonregistromedico=document.getElementById("botonregistropaciente");

//paso 4 detectamos acciones o eventos en el boton
botonregistromedico.addEventListener("click",function(evento){
    evento.preventDefault()
    // paso 5 se crea un json que capture todos los datos del formulario 
    let datosformularmedico={
        nombres: nombreMedico.value,
        matricula: matriculaProfesionalMedico.value,
        especialidad: especialidadMedico.value,
        salario: salarioMedico.value,
        ips:ipsMedico.value,
        correo: correoMedico.value,
        telefono: telefonoMedico.value,
        direccion: direccionMedico.value,
        disponiblefinesdemesana: disponibleFinDeSemanaMedico.value


    }

    //paso 6 se envian los datos al back
    console.log(datosformularmedico)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})

// //objetivo: resibir datos del back y hacerles render (render= a pintarlos)
// //pasi 1 quemar o simular los datos
// let medico = [
//     {
//         matricula:890,
//         nombre:"carl galager",
//         especialidad: "urgenciologo",
//         salario: "Medellín",
//         correo: "carl@gmai.com",
//         telefono: "3012384494",
//         ips: "mayorca",
//         disponiblefinesdemesana:"no"
        
//     },
//     {
//         matricula:890,
//         nombre:"marlon soto",
//         especialidad: "cirujano cardiotorasico",
//         salario: "2000000",
//         correo: "marlon@gmai.com",
//         telefono: "3012384494",
//         ips: "mayorca",
//         disponiblefinesdemesana:"si"
//     },
//     {
//         matricula:890,
//         nombre:"mario perez",
//         especialidad: "cirujano cardiotorasico",
//         salario: "2000000",
//         correo: "mariop@gmai.com",
//         telefono: "3012384494",
//         ips: "mayorca",
//         disponiblefinesdemesana:"si"
//     },
//     {
//         matricula:890,
//         nombre:"camila paiagua soto",
//         especialidad: "cirujano cardiotorasico",
//         salario: "2000000",
//         correo: "camip@gmai.com",
//         telefono: "3012384494",
//         ips: "mayorca",
//         disponiblefinesdemesana:"no"
//     }
// ]



// //paso 2 crear una referencia a una etiqueta html donfe vamos a renderizar 


// let fila = document.getElementById("fila")

// // paso 3 se recorren los datos para obpeterlos de forma separada 
// pacientes.forEach(function(paciente){
//     console.log(paciente)

//     //paso 4 se crean columnas 
//     let columna=document.createElement("div")
//     columna.classList.add("col")

//     // paso 5 se crean tarjetas 
//     let tarjeta=document.createElement("div")
//     tarjeta.classList.add("card", "p-5", "h-100", "shadow")

//     //paso 6 se crea una etiqueta para poner el nobre del paciente
//     let nombre=document.createElement("h2")
//     nombre.textContent=paciente.nombre

//     //paso final ordenando las cartas
//     tarjeta.appendChild(nombre)
//     columna.appendChild(tarjeta)
//     fila.appendChild(columna)

// })