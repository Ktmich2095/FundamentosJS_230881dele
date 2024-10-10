const bg =
  "linear-gradient(11deg, rgba(200,150,360,1) 0%, rgba(260,129,12,1) 33%, rgba(255,19,260,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`;

//Personalización de las salidas a consola

console.warn("Práctica 07: Arreglos en Java Script");

console.log("%c1.- Condicionales Si/Entoces ... (IF)", style_console);

//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toDateString()}`);

//Y si la necesitamos en formato local(?)

const fechaLocalMX = fechaActual.toLocaleString("es-MX", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

console.log(`en formato local (México): ${fechaLocalMX}`);

//Si es antes de las doce saluda con buenos días

if (fechaActual.getHours() < 12)
  console.log(`Buenos días, hoy es ${fechaLocalMX}`);

//Existe un extensor de la sentencia if(Sí) que es else (En Caso contrario)
if (fechaActual.getMonth() <= 6)
  console.log(`Estas en la primera mitad del año`);
else console.log(`Estas en la segunda mitad del año.`);

//que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);

let horarioVerano = false;

if (fechaActual >= inicioPrimavera && fechaActual < inicioVerano) {
  console.log("Estamos en PRIMAVERA...");
  console.log("Los días son más largos y las noches más cortas...")
  console.log("Muchos animales despiertan de la hibernación...")
  estacion = "Verano"
  horarioVerano = true
} else if(fechaActual >= inicioVerano && fechaActual < inicioOtonio){
    console.log("Estamos en VERANO...");
    console.log("En esta temporada nos abundan los días soleados y calurosos...")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire...")
    estacion = "Verano"
    horarioVerano = true
} else if (fechaActual >= inicioOtonio && fechaActual < inicioInvierno){
    console.log("Estamos en OTOÑO...");
    console.log("Los arboles suelen cambiar de follaje")
    console.log("Se registraran temperaturas más templadas")
    console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
    estacion = "Verano"
    horarioVerano = true
} else {
    console.log("Estamos en INVIERNO...");
    console.log("En esta temporada los días son más cortos y las noches más largas...")
    console.log("En algunas regiones suele nevar...")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse")
    estacion = "Invierno"
    horarioVerano = false
}

console.log("%c2.- Operador Ternario ( validacion?cumple:no_cumple)",style_console)
//En javaScript existe una operacion simplificada que valida si una condición se cumple o no y que hacer en cada caso

const edadPersona = 18
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21

let evaluarMayoriaEdad = (edad) =>
    edad >= 18 ? "Eres mayor de edad.": "No eres mayor de edad."

console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, por lo que debemos considerar un segundo parametro en la evaluación

evaluarMayoriaEdad = (edad,pais)=>
(edad>=18 && pais ==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad`;

console.log("Evaluando la mayoria de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"))

console.log("%c3.- SWITCH - CASE (Elección por valor dafinido)",style_console);

//Calculando tu generación en base a tu edad

let asignaGeneración = (anioNacimiento)=>{
    switch(true){
        case(anioNacimiento<1968): //Baby Boomers
        return "Bbay Boomers";

        case(anioNacimiento>1968 && anioNacimiento<=1980):
        return "Generación Z"

        case(anioNacimiento>1980 && anioNacimiento<=1994):
        return "Milenials"

        case(anioNacimiento>1994 && anioNacimiento<=2010):
        return "Centenials";

        case(anioNacimiento>2010):
        return "Krystal";
    }
  }
console.log(`Dado que nací en el año 2005 soy de la generación: ${asignaGeneración(2005)}`);

console.log("%c4.- Manejo de Excepciones (TRY/ CATCH)", style_console);


//En algunos ocasiones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluso de un middleware, pero que si duda debemos controlar para evitar las fallas de ejecución.


console.log("Intentamos dividir : 0/10, el resultado es: ")
try{
    let result= 0/10;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir : 10/0, el resultado es: ")
try{
    let result= 10/0;
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Intentamos dividir : a/10, el resultado es: ")
try{ //intentamos
    let result= "a"/10; //dividir una letra entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+error.message);
}

console.log("Initentamos dividir : a / 10, el resultado es: ")
try{ //intentamos
    let result= a/10; //dividir una letra entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: " + error.message);
}

console.log("Intentamos dividir: el valor de la variable x / entre el valor de la variable y, el resultaso es: ")

try{
  let x = 8, y = 2, result = x/y;
  console.log(result)
}
catch(error){
  console.log("Ocurrio un error: "+error.message);
}

console.log("%c5.- Control de Ciclos (BREAK/CONTINUE)", style_console);

//En alguna ocasiones será importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclo...

console.log("Vamos a contar del 1 al 10...")
for(num=1; num<11; num++){
  if(num==11)
      break;
  else
      console.log(num);
}

console.log("Ahora necesitamos que si llegs al 7 pares de contar... suponiendo que solo poe hoy es de mala suerte...")
for(num=1;num<=10;num++)
  if(num==7)
    break;
  else
    console.log(num);

    console.log("Ahora necesitamos que si llega al 7 te saltes ese numero y continues")
    for(num=1; num<11; num++){
        if(num==7)
            continue;
            console.log(num);
    }
    

console.log("%c6.- Ciclo iterativo - (FOR) ",style_console);
//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los dias de la semana son en orden ascendente: ")
let dias= ["Domingo", "Lunes","Martes", "Miercoles","Jueves", "Viernes","Sabado"]

for(let i=0;i<dias.length;i++)
  console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendente...")
const meses=["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"]

for(let i=meses.length-1; i>=0; i--){
    console.log(meses[i]);
}
console.log("%c7.- Ciclo Condicionales - (WHILE))", style_console);
//Estos ciclos (BUCLE) depende de una condición para continuar ejecutandose 

let finDeSemana= false;
let j=0;
let mensaje= " ";

while(j<dias.length){    
        switch(j) //Usamos "j" para que coincide con los casos
        {
            case 0:
                finDeSemana=false
                mensaje="Mormingooooo... ZzzzZZzzz"
                break;
            case 1:
                finDeSemana=false;
                mensaje="San Lunes a chambiar..."
                break;
            case 2:
                finDeSemana=false
                mensaje="Martes ni te cases, ni te embarques"
                break;
            case 3:
                finDeSemana=false
                mensaje="Ombligo de la semana, sigues chambeando..."
                break;
            case 4:
                finDeSemana=false;
                mensaje="Jueves de racismo..."
                break;
            case 5:
                finDeSemana=false
                mensaje="VIEeeEEEEeeeernes, disfruta el día"
                break;
            case 6:
                finDeSemana=false
                mensaje="Sábado, diviértete"
                break;
        }


        
        //imprimir el nombre del dia y mensaje
    if(!finDeSemana){
        console.log(`Día: ${j} ${dias[j]}`)
        console.log(`Mensaje del día ${mensaje}`)
    }
    j++;
}

console.log("%c8.- Ciclo Condicionalkes, que se ejecutan al menos una vez - (DO WHILE)",style_console);

let episodios = ["Episodio 1: La noche de un día duro","Episodio 2: El primer corte es el más duro","Episodio 3: una batalla ganada, una batalla perdida","Episodio 4: tierra de nadie","Episodio 5: Mueve tus caderas"];
let indice = 0;
let continuarViendo = true; //Esta variable simula la decision del usuario de continuar viendo

do{
  console.log(`Reproduciendo ${episodios[indice]}`);
  //simulamos la reproducion del episodio
  indice++;
  //simulamos una pregunta al usuario si desea seguir viendo
  if(indice<episodios.length){
    continuarViendo = confirm("¿Deseas continuar con el siguiente episodio?");
  }else{
    continuarViendo = false;
  }
}while(continuarViendo && indice < episodios.length);

console.log("Fin de la reproducción")

//ciclo para recorrer objetos iterables como mapas, arreglos, cadenas y conjuntos de datos
console.log("%c9.- Ciclos para recorrer elementos finitos (FOR...OF)",style_console)

let seriesTrending = [
  {nombre: "True beauty",temporadas:1,totalViewers: "1.5M", totalReprods:"3.0M"},
  {nombre: "el goblin",temporadas:1,totalViewers: "1.5M", totalReprods:"3.0M"},
  {nombre: "Escalera al cielo",temporadas:1,totalViewers:"1.5M", totalReprods:"3.0M"},
  {nombre: "Love alarm",temporadas:1,totalViewers:"1.5M", totalReprods:"3.0M"},
  {nombre: "propuesta laboral",temporadas:1,totalViewers:"1.5M", totalReprods:"3.0M"}
];

//usando for..of para recorrer la lista
for(let serie of seriesTrending){
  console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}
try{
  console.log(`La ultima serie leida fue: ${serie.nombre}`)//No va a funcionar por la variable seria ya no existe fuera del ciclo
}catch(error){
  console.log("Mensaje de error  "+error.message)
}

console.log("c10.- Ciclos para recorrer las propiedades de elementos finitos (FOR - IN)",style_console)

//usando for..in para recorrer cada serie
for(let i in seriesTrending){
  console.log(`Serie ${parseInt(i)+1}:`);
  for(let propiedad in seriesTrending[i]){
    console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
  }
  console.log("--------------------------");
}

console.log("%c11.- Ciclos ininterrumpidos para cada uno de los elementos del arreglo (FOR EACH)",style_console)

//Lista de series de TV trending con temporadas, viewers y reproducciones 
let seriesTrending2 = [
  {nombre: "True beauty",temporadas:3, viewers: 80000, reproducciones:127345},
  {nombre: "El goblin",temporadas:2,viewers: 120000, reproducciones:3456456},
  {nombre: "Escalera al cielo",temporadas:3,viewers:30000, reproducciones:876543},
  {nombre: "Love alarm",temporadas:4,viewers:50000, reproducciones:2124500},
  {nombre: "propuesta laboral",temporadas:1,viewers:30000, reproducciones:13456543}
];

//usando forEach para recorrer cada serie y calcular la calificacion
seriesTrending2.forEach((serie,index)=>{
  let calificacion = (serie.reproducciones / serie.viewers).toFixed(2);

  //calcula la calificacion y la redondeamos a 2 decimales
  console.log(`Serie ${index + 1}:`)
  console.log(`Nombre: ${serie.nombre}`)
  console.log(`Temporadas: ${serie.temporadas}`)
  console.log(`Viewers: ${serie.viewers}`)
  console.log(`Reproduccion: ${serie.reproducciones}`)
  console.log(`Calificacion: ${calificacion}`)//muestra la calificacion
  console.log("-------------------------")
})

//Usando filter para filtrar y map para transformar la informacion
//Lista de series que queremos verificar

let seriesDeseadas=["Love Alarm","True beauty","El goblin"];

//usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas = seriesTrending2
.filter(serie=>serie.temporadas<=3)//Filtramos las series que tienen 3 temporadas
.map(serie=>serie.nombre)//Obtenemos solo los nombres de esas series
.filter(nombre=>seriesDeseadas.includes(nombre))//Filtramos las que estan en la lista de series deseadas

//Mostrar los resultados
console.log("Series con 3 temporadas que están en la lista deseada:");
console.log(seriesConTresTemporadas);