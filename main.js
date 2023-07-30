const Persona = function(nombre,apellido,edad,pais){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.pais=pais
}

let persona1 = new Persona("Ulises","Rodriguez",20, "Argentina")
let persona2 = new Persona("Luca","Rodriguez",23, "Argentina")
let persona3 = new Persona("Jose","Fernandez",25, "Uruguay")
let persona4 = new Persona("Luis","Fernandez",21, "Uruguay")
let persona5 = new Persona("Agustin","Gonzales",15,"Mexico")

let lista = [persona1,persona2,persona3,persona4,persona5]

function filtroPersonas(){
    let palabraClave = prompt("ingresa el nombre o apellido de la persona que queres buscar").trim().toUpperCase()

    let resultado = lista.filter((persona) => (persona.nombre)&&(persona.apellido).toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: " + palabraClave)
    }
}

filtroPersonas()


function agregarPersonas(){
    let nombre = prompt("Ingrese el nombre de la persona: ")
    let apellido = prompt("Ingrese el apellido de la persona: ").trim()
    let edad = parseInt(prompt("Ingrese la edad de la persona: "))
    let pais = prompt("Ingrese el pais de origen de la persona: ").trim()

    if(isNaN(edad) || apellido === "	"|| nombre === "	" || pais === "	"){//si los datos estan vacios,salta un alert
        alert("por favor ingresa datos validos")
        return;
    }
    let persona = new Persona (nombre, apellido, edad, pais)

    if (lista.some((p)=> p.nombre === persona.nombre && p.apellido === persona.apellido )){
        alert("la persona ya existe")
        return;
    }

    lista.push(persona)

    console.table(lista)
}

agregarPersonas()