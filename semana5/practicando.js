// const miPrimerArray = ["html", "css", "javascrips","node"];

// // console.log(miPrimerArray[miPrimerArray.length]);

// let alumnos = [
//     {
//         nombre:"Maria",
//         edad:"16",
//         colorFavorito:"rosado",
//     },
//     {
//         nombre:"Pepe",
//         edad:"15",
//         colorFavorito:"negro",
//     },
//     {
//         nombre:"Elvia",
//         edad:"25",
//         colorFavorito:"blanco",
//     },
//     {
//         nombre:"Maria",
//         edad:"16",
//         colorFavorito:"rosado",
//     },
//     {
//         nombre:"Pepe",
//         edad:"15",
//         colorFavorito:"negro",
//     },
//     {
//         nombre:"Elvia",
//         edad:"25",
//         colorFavorito:"blanco",
//     },
//     {
//         nombre:"Maria",
//         edad:"16",
//         colorFavorito:"rosado",
//     },
//     {
//         nombre:"Pepe",
//         edad:"15",
//         colorFavorito:"negro",
//     },
//     {
//         nombre:"Elvia",
//         edad:"25",
//         colorFavorito:"blanco",
//     },
//     {
//         nombre:"Maria",
//         edad:"16",
//         colorFavorito:"rosado",
//     },
//     {
//         nombre:"Pepe",
//         edad:"15",
//         colorFavorito:"negro",
//     },
//     {
//         nombre:"Elvia",
//         edad:"25",
//         colorFavorito:"blanco",
//     },
//     {
//         nombre:"pepito",
//         edad:"16",
//         colorFavorito:"rosado",
//     },
//     {
//         nombre:"Pepe",
//         edad:"15",
//         colorFavorito:"negro",
//     },
//     {
//         nombre:"Elvia",
//         edad:"25",
//         colorFavorito:"blanco",
//     },
// ];
// // console.log(alumnos[1].colorFavorito);
// console.log(alumnos.length);
// // alumnos.unshift({nombre: 'Carlos', edad: '17', colorFavorito: 'rojo'})
// alumnos.shift();
// console.log(alumnos);


// let numerito = 0;*****************************************

// if (numerito <10){
//     numerito ++ 
//     console.log(numerito);
// };
// while (numerito <10){
//     numerito ++ 
//     document.write(numerito + "<br>");
// };


// for(let i=0; i< alumnos.length ;i++){
//  if(alumnos[i].nombre ==="Elvia"){continue;};
// console.log(i);
// };

// //sirve como un filter 
// for(let i=0; i< alumnos.length ;i++){
//  if(alumnos[i].nombre ==="Elvia"){continue;}
// console.log(alumnos[i].nombre);
// }


//practicando foreach
// const arreglito = [2,5,9,4,8];

// arreglito.forEach( function(esElElemento, esElIndice, esElArreglo, otro){
//   console.log(esElElemento + 2);
//   console.log(esElIndice);
//   console.log(esElArreglo);
//   console.log("_________");//undefined

// });



// //PRACTICANDO CONDICIONALES**********************************************************************************
// function validarComoIrAEstudiar(hora, dinero) {
//     if (hora < 7) {
//       // Me levante temprano. puedo tomar desayuno
//       console.log(`son las ${hora} am`,"te levantaste temprano, anda en micro");
//       if (dinero > 5) {
//         console.log(`tienes ${dinero} soles`, "comprate un rico desayuno");
//       } else if (dinero > 2.5) {
//         console.log(`tienes ${dinero} soles`,"compra desayuno de tia mosca");
//       } else {
//         console.log(`tienes ${dinero} soles`,"ya no tomes desayuno");
//       }

//     } else if (hora >= 7) {
//       console.log(`son las ${hora} am`,"Te levantaste tarde");
//       // Si tengo dinero
//       if (dinero >12) {
//         console.log(`tienes ${dinero} soles`,"toma taxi y comprate desayuno");
//       } else if (dinero > 6)
//       console.log(`tienes ${dinero} soles`,"toma moto y comprate desayuno");
//     } else {
//      console.log(`tienes ${dinero} soles`,"toma moto y no desayunes");
//     }
//   }
  
//   // casi 1
//   console.log("Caso 1");
//   validarComoIrAEstudiar(6,2);
 
// // casi 1
// console.log("Caso 2");
// validarComoIrAEstudiar(7,12);
// // casi 1
// console.log("Caso 3");
// validarComoIrAEstudiar(5,10);
// // casi 1
// console.log("Caso 4");
// validarComoIrAEstudiar(9,5);


//**************************** */ ******************************************

  
// //   function validarUsandoOperadores(username, password) {
// //     // && => and => Y
// //     // || => or => O
// //     if (username === "linder3hs" && password === "123456") {
// //       console.log("Ingreso");
// //     } else {
// //       console.log("Datos invalidos");
// //     }
  
// //     if (username === "linder3hs" || password === "123456") {
// //       console.log("Ingreso 2");
// //     } else {
// //       console.log("Datos invalidos 2");
// //     }
// //   }
  
// //   validarUsandoOperadores("linder34", "123456"); // Datos invalidos ==> or // Ingreso2
// //   validarUsandoOperadores("linder3hs", "123456"); // Ingreso ==> or // Ingreso2
// //   validarUsandoOperadores("linder34", "12456"); // Datos invalidos // Datos invalidos2 



//****************RETO FIZZBUZZ*************************************
// for(let i=1; i<=100;i++){
//     if(i % 15 ==0){
//         console.log("fizzbuzz");
//     } else if (i % 3 == 0){
//     console.log("fizz");
// } else if (i % 5 == 0){
//     console.log("buzz");
//     }else console.log(i);

// }



//RETO AREA DEL POLIGONO ******************************************

// function area(nLados, base, altura){
//     if(nLados==3){
//         return base*altura/2
//     }else if (nLados==4){
//         return base*altura
//     }
    
// }
// let lados = prompt("cuantos lados tiene la figura")
// let base = prompt("cuanto mide su base")
// let altura = prompt("cuanto mide su altura")


// console.log(area(lados,base,altura));



// OBJETOS **************** ******************************************

// let alumno = {
//     nombre:"Elvia",
//     edad:"25",
//     sexo:"femenino",
//     talla:"168 cm",
//     getName: function() {
//         document.write(`Mi nombre es: ${this.nombre}<br>Mi edad es: ${this.edad} años<br>
//         Mi sexo es: ${this.sexo}<br> Mi talla es: ${this.talla}`)
//     }
// };

// alumno.getName();


var dia = new Date;
var day = dia.getMinutes();

console.log(day); // 25