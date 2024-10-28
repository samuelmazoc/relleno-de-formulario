let nombreSignoVital=document.getElementById("nombresignovital")
let valoresSignoVital=document.getElementById("valoressignovital")
let fechaMedidaSignoVital=document.getElementById("fechasignovital")

//crear una variable para asociarla al id del botan que tengo en html paso 3

let botonregistrosignovital=document.getElementById("botonregistropaciente");

//paso 4 detectamos acciones o eventos en el boton
botonregistrosignovital.addEventListener("click",function(evento){
    evento.preventDefault()
    // paso 5 se crea un json que capture todos los datos del formulario 
    let datosformulariosignovital={
        nombre: nombreSignoVital.value,
        valor: valoresSignoVital.value,
        fechamedida: fechaMedidaSignoVital.value

    }

    //paso 6 se envian los datos al back
    console.log(datosformulariosignovital)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})
