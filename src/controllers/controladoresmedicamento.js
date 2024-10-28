let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let fechaCaducidadMedicamento=document.getElementById("fechamecaducidaddicamento")
let contraIndicacionesMedicamento=document.getElementById("contraindicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let tieneCopagoMedicamento=document.getElementById("tienecopago")

//crear una variable para asociarla al id del botan que tengo en html paso 3

let botonregistromedicamento=document.getElementById("botonregistropaciente");

//paso 4 detectamos acciones o eventos en el boton
botonregistromedicamento.addEventListener("click",function(evento){
    evento.preventDefault()
    // paso 5 se crea un json que capture todos los datos del formulario 
    let datosformulariomedicamento={
      nombre: nombreMedicamento.value,
      presentacion: presentacionedicamento.value,
      dosis: dosisMedicamento.value,
      laboratorio: laboratorioMedicamento.value,
      fechacaducidad: fechaCaducidadMedicamento.value,
      contraindicaciones: contraIndicacionesMedicamento.value,
      registro: registroMedicamento.value,
      tienecopago: tieneCopagoMedicamento.value
    }
      

    //paso 6 se envian los datos al back
    console.log(datosformulariomedicamento)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})