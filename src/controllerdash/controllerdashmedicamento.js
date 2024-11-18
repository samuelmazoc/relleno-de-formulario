//objetivo: resibir datos del back y hacerles render (render= a pintarlos)
//pasi 1 quemar o simular los datos
let medicamento = [
    {
        nombre:"ibuprofeno",
        presentacion:"tableta",
        dosis:"5",
        laboratorio:"medicare",
        fechacaducidad:"11/08/2030",
        contraindicaciones:"sueño",
        registro:"15795695",
        tienecopago:"no"
        
    },
    {
        "nombre": "omeprazol",
        "presentacion": "cápsula",
        "dosis": "20 mg",
        "laboratorio": "BioPharma",
        "fechacaducidad": "14/06/2029",
        "contraindicaciones": "alergia a benzimidazoles",
        "registro": "32658941",
        "tienecopago": "no"
    },
    {
        "nombre": "amoxicilina",
        "presentacion": "suspensión",
        "dosis": "250 mg/5 ml",
        "laboratorio": "Salud Plus",
        "fechacaducidad": "30/09/2027",
        "contraindicaciones": "reacciones alérgicas a penicilinas",
        "registro": "75432189",
        "tienecopago": "sí"
    },
    {
        "nombre": "diclofenaco",
        "presentacion": "gel",
        "dosis": "1%",
        "laboratorio": "ArthroCare",
        "fechacaducidad": "12/01/2032",
        "contraindicaciones": "piel dañada o irritada",
        "registro": "89214753",
        "tienecopago": "no"
    },
    {
        "nombre": "loratadina",
        "presentacion": "jarabe",
        "dosis": "5 mg/5 ml",
        "laboratorio": "AllergyMed",
        "fechacaducidad": "18/07/2026",
        "contraindicaciones": "embarazo",
        "registro": "62135784",
        "tienecopago": "sí"
    }
    
]



//paso 2 crear una referencia a una etiqueta html donfe vamos a renderizar 


let fila = document.getElementById("fila")

// paso 3 se recorren los datos para obpeterlos de forma separada 
medicamento.forEach(function(medicamento){
    console.log(medicamento)

    //paso 4 se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    // paso 5 se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //paso 6 se crea una etiqueta para poner el nobre del paciente
    let nombre=document.createElement("h2")
    nombre.textContent=medicamento.nombre

    //paso final ordenando las cartas
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})