const personas = []
function crearPersona(){
    let persona = {
    nombre:"Elvia",
    edad: 25,
    talla: 168,
    curso: "programación",
    //funcion1: verificar si es adulto
    is_adult: function(){
        return this.edad >=18;
    },
    //funcion2: pasar de centimetros a pulgadas 
    inches: function(){
        return this.talla / 2.54;
    },
    //funcion 3: convertiremos el nombre en mayusculas
    mayusculas: function(){
        return this.nombre.toUpperCase();
    },
    //funcion4: convertire la primera letra de curso en mayuscula
    letraCapital: function(){
        return this.curso.substring(0,1).toUpperCase() + this.curso.substring(1,this.curso.length).toLowerCase();
    }
    };

 personas.push(persona);
 console.log(personas);
    // alert("Se creo correctamente")
console.log(persona.is_adult());
console.log(persona.inches());
console.log(persona.mayusculas());
console.log(persona.letraCapital());
}

function crear3Personas(){
    let persona1 = {
        nombre:"Elvia",
        edad: 25,
        talla: 168,
        curso: "programación",
    };
    let persona2 = {
        nombre:"Juan",
        edad: 27,
        talla: 178,
        curso: "matematicas",
    };
    let persona3 = {
        nombre:"Camilo",
        edad: 20,
        talla: 158,
        curso: "fisica",
    };
    personas.push(persona1);
    personas.push(persona2);
    personas.push(persona3);
    console.log(personas);

};
//crear una clase - constructorc ************************************************************

class Persona {
    constructor(nombre, edad, talla, curso){
        this.nombre = nombre;
        this.edad = edad;
        this.talla = talla;
        this.curso = curso;
    };
    //funcion1: verificar si es adulto
    is_adult(){
        return this.edad >=18;
    };
    //funcion2: pasar de centimetros a pulgadas 
    inches(){
        return this.talla / 2.54;
    };
    //funcion 3: convertiremos el nombre en mayusculas
    mayusculas(){
        return this.nombre.toUpperCase();
    };
    //funcion4: convertire la primera letra de curso en mayuscula
    letraCapital(){
        return this.curso.substring(0,1).toUpperCase() + this.curso.substring(1,this.curso.length).toLowerCase();
    };
    }; 
      

function crearPersonasClass(){
   const persona1 = new Persona ("Elvia",25, 168, "programacion");
   const persona2 = new Persona ("Carlos",16, 178, "matematicas");
   const persona3 = new Persona ("Jorge",50, 180, "musica");
   const persona4 = new Persona ("Magali",45, 165, "arte");


personas.push(persona1);
personas.push(persona2);
personas.push(persona3);
personas.push(persona4);

console.log(personas);
};

//crear una clase - desde prompt ***********************************************************

function crearPersonasCustom(){
    let nombre = prompt ("Nombre:");
    let edad = prompt ("Edad:");
    let talla = prompt ("Talla:");
    let curso = prompt ("Curso:");
    const persona = new Persona (nombre,edad, talla, curso);

 
 personas.push(persona);
 console.log(personas);
 };

 //FUNCION EDAD MINIMA ********************************************************************
 function edadMinima(){
 let edadMinima = 100;
 personas.forEach((persona)=>{
    edadMinima = Math.min(edadMinima, persona.edad);
 })
 console.log("Nueva edad Mínima", edadMinima);
}

//BUSCAR POR NOMBRE ********************************************************************
function buscarNombre() {
    let nombre = prompt ("¿Cuál es tu nombre?");
    let persona_match;
    personas.forEach((persona) =>{
        if(persona.nombre == nombre){
            persona_match = persona;
        };
    });
    //devolvemos la edad del nombre buscado
    console.log(persona_match.edad);
}
