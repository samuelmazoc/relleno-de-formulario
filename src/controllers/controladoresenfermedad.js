
let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermadad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("probabilidadenfermedad")
let probabilidadVidaEnfermedad=document.getElementById("gradoenfermedad")

//crear una variable para asociarla al id del botan que tengo en html paso 3

let botonregistroenfermedad=document.getElementById("botonregistropaciente");

//paso 4 detectamos acciones o eventos en el boton
botonregistroenfermedad.addEventListener("click",function(evento){
    evento.preventDefault()
    // paso 5 se crea un json que capture todos los datos del formulario 
    let datosformularioenfermedad={
        nombres: nombreEnfermedad.value,
        sintomas: sintomasEnfermedad.value,
        clasificacion: clasificacionEnfermedad.value,
        grado: gradoEnfermedad.value,
        probalbilidad: probabilidadVidaEnfermedad.value
    }

    //paso 6 se envian los datos al back
    console.log(datosformularioenfermedad)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})

