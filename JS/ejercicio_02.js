let miCliente;
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
miCliente = "Michelle";
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
miCliente = 123;
console.log("El cliente es: ", miCliente)
console.log("El tipo de dato de la variable cliente es: ",typeof(miCliente));
//Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium?: ${esPremium}`)
console.log("El tipo de dato de la variable cliente es: ",typeof(esPremium));
console.log("Asignando el valor 'true' a la variable")
esPremium = true
console.log("El tipo de dato de la variable cliente es: ",typeof(esPremium));
console.log(`¿Es el cliente Premium?: ${esPremium}`)
esPremium=0
if(esPremium)
    console.log("El cliente pago por usar el servicio.");
else 
    console.log("El cliente que recibe los servicios gratuitos")
// 3. NUMBER
var cantidad;
const costo_producto = 10.50;
let saldo_cuenta = -2500.40;
let monto_transacción;
console.warn("---Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos.`);
console.log(`El importe total de la compra es:  ${(cantidad*costo_producto)}`);
saldo_cuenta = saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_transacción=1500;
console.log(`Tu abono de ${monto_transacción} ha sido recibida, tu nuevo saldo es de: ${(saldo_cuenta+monto_transacción)}`)

//tipos de datos
const alumno = "Michelle"
let producto;
console.warn("--- Tipo de Dato - STRING (cadenas de texto)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof producto}`)
producto = "Monitor 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof producto}`)
//manipulando los strings
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones 
    específicas cómo convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`)
/*BIGINT (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o 
espaciales donde se requiere de una excelente precisión numérica
*/
console.warn("--- Tipo de Datos - BIGINT (Número Amplio)")
const numeroGrande = 1234567890
const numeroGrandeDos = 1234567890123456790
const numeroGrandeTres = 1234567890123456789001234567890
console.log(`El primer experimento de un número grande es: ${numeroGrande}, que si es soportado por 
    NUMBER, y su tipo de dato es: ${typeof numeroGrande}`)
    console.log(`El primer experimento de un número grande es: ${numeroGrandeDos}, que si es soportado por 
        NUMBER, y su tipo de dato es: ${typeof numeroGrandeDos}`)    
        console.log(`El primer experimento de un número grande es: ${numeroGrandeTres}, que si es soportado por 
            NUMBER, y su tipo de dato es: ${typeof numeroGrandeTres}`)        
// const numero = "30"
// const numeroDos = 30
// console.log(typeof numero)
// console.log(typeof numeroDos)
//BigInt
// const numeroGrande = BigInt(9876212345678876543234234554567896)
// console.log(typeof numeroGrande)
// const numero = 10
// const numeroDos = 20 
// console.log(numero + Number(numeroGrande))
// const numero = "30"
// const numeroDos = 30
// console.log(typeof String(numeroDos))
// console.log(typeof Number(numero))
//Symbol
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)
// console.log(primerSymbol === segundoSymbol)
// console.log(primerSymbol.valueOf())
// console.log(segundoSymbol.valueOf())
//null
// const descuento = null
// console.log(typeof descuento)