//Comentarios de una sola línea
/*
    Comentarios multi línea
*/
// EJERCICIO 01 : DECLARACIÓN DE VARIABLES
// a) var
var miNombre = "Michelle";
var misApellidos;
var miEdad = 19;
/*El objeto de consola nos  permite enviar datos a la terminal y poder visualizar el valor 
de una variable o resultado*/
console.warn("--- Declaración de variables usando: VAR")
console.log("Intentando leer las variables: ",miNombre, misApellidos);
misApellidos = "Castro Otero"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas : ",miNombre, misApellidos)
//Una variable puede cambiar en el proceso de ejecución del programa
     
    //b) Const
console.warn("--- Declaración de variables usando: CONST")
const miUniversidad = "UT Xicotepec"
const miMatricula = 230881
console.log("Hola, ", miNombre, " ",misApellidos, " se que estudias actualmente en: ",miUniversidad,
    "asignaron la matricula: ",miMatricula," y tienes una edad de: ", miEdad," años."
)
//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOf()
console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es del tipo: ",typeof(miNombre))
console.log("misApellidos es del tipo: ",typeof(misApellidos))
console.log("miUniversidad es del tipo: ",typeof(miUniversidad))
console.log("miEdad es del tipo: ",typeof(miEdad))
console.log("miMatricula es del tipo: ",typeof(miMatricula))
    // c) LET
let miFechaNacimiento = "2005-08-10"
let miColorFavorito;
console.warn("---   Declaración de variable locales usando : LET")
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el: ",miFechaNacimiento,
    " y tu colorFavorito es: mmmmm dejame pensar...")
miColorFavorito = "Morado"
console.log("Creo que es ", miColorFavorito, "le atine?") /* La manera de mezclar textos fijos 
con el valor actual de la variables se le conoce cómo: interpoblación y deben iniciar y finalizar
en un backtic - tilde inversa*/
console.log("miFechaNacimiento es del tipo: ",typeof(miFechaNacimiento))
console.log("miColorFavorito es del tipo: ",typeof(miColorFavorito))