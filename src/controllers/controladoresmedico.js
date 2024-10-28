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
