//objetivo: resibir datos del back y hacerles render (render= a pintarlos)
//pasi 1 quemar o simular los datos
let medico = [
    {
        matricula:890,
        nombre:"carl galager",
        especialidad: "urgenciologo",
        salario: "Medellín",
        correo: "carl@gmai.com",
        telefono: "3012384494",
        ips: "mayorca",
        disponiblefinesdemesana:"no"
        
    },
    {
        matricula:890,
        nombre:"marlon soto",
        especialidad: "cirujano cardiotorasico",
        salario: "2000000",
        correo: "marlon@gmai.com",
        telefono: "3012384494",
        ips: "mayorca",
        disponiblefinesdemesana:"si"
    },
    {
        matricula:890,
        nombre:"mario perez",
        especialidad: "cirujano cardiotorasico",
        salario: "2000000",
        correo: "mariop@gmai.com",
        telefono: "3012384494",
        ips: "mayorca",
        disponiblefinesdemesana:"si"
    },
    {
        matricula:890,
        nombre:"camila paiagua soto",
        especialidad: "cirujano cardiotorasico",
        salario: "2000000",
        correo: "camip@gmai.com",
        telefono: "3012384494",
        ips: "mayorca",
        disponiblefinesdemesana:"no"
    }
]



//paso 2 crear una referencia a una etiqueta html donfe vamos a renderizar 


let fila = document.getElementById("fila")

// paso 3 se recorren los datos para obpeterlos de forma separada 
medico.forEach(function(medico){
    console.log(medico)

    //paso 4 se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    // paso 5 se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //paso 6 se crea una etiqueta para poner el nobre del paciente
    let nombre=document.createElement("h2")
    nombre.textContent=medico.nombre

    //paso final ordenando las cartas
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})