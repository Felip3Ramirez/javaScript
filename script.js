
// console.log("Hola Mundo") 

// prompt("Ingrese Cualquier Cosa")

// Variables

// var insulto = "Cara Economica"
// var nombre = prompt("Ingrese Nombre: ")
// console.log(nombre+" "+insulto)
// prompt () siempre va a ser String 

// var num1 = parseInt( prompt("Ingresa El Primer Numero")) /*Elimina las pocisiones desimales */
// var num2 = Number( prompt("Ingresa El Segundo Numero"))  /*Acepta valores enteros y desimales igual que el parseFloat*/
// var resultado= num1+num2
// console.log(resultado)

// console.log("2"+2+"2")
// console.log(("2"+2)+"2")
// console.log(("2"+2)-"2")
// console.log("2"+"2"-"2")

/* Tipos de Datos */

// var variable = 23
// console.log(typeof(variable)+" "+variable)
// var variable = "23"
// console.log(typeof(variable)+" "+variable)
// var variable = true
// console.log(typeof(variable)+" "+variable)
// var variable
// console.log(typeof(variable)+" "+variable) /*undefined*/
// var variable = null
// console.log(typeof(variable)+" "+variable)


/*1.Suma de 2 numeros*/

// var num1 = Number(prompt("Ingrese el Primer Numero"));
// var num2 = Number(prompt("Ingrese el Segundo Numero"));
// var resultado;
// var opc = Number(prompt("1.suma 2.resta 3.multiplicacion 4.dividir"))

// switch(opc){
//     case 1:
//         resultado = num1+num2;
//         console.log("El resultado es : "+resultado);
//         break;
//     case 2:
//         resultado = num1-num2;
//         console.log("El resultado es : "+resultado);
//         break;
//     case 3:
//         resultado = num1*num2;
//         console.log("El resultado es : "+resultado);
//         break;
//     case 4:
//         resultado = num1/num2;
//         console.log("El resultado es : "+resultado);
//         break;
//     default:
//         console.log("Opcion Invalida");
//         break;
// }

/*Promedio de 3 numeros*/

// var num1 = Number(prompt("Ingrese la Primer Nota"));
// var num2 = Number(prompt("Ingrese la Segundo Nota"));
// var num3 = Number(prompt("Ingrese la Tercer Nota"));
// var resultado;
// var promedio;

// resultado = num1+num2+num3;
// promedio = resultado/3;
// console.log("Tu promedio es de :"+promedio)

/*Area de un triangulo */

// var base= Number(prompt("Dame la base"));
// var altura= Number(prompt("Dame la altura"));
// var area = (base*altura)/2;
// console.log("El area del triangulo es :"+area)

/* Conversión de grados Celsius a Fahrenheit */

// var Celsius =  Number(prompt("Dame la temperatura en grados Celsius"));
// var Fahrenheit =  (Celsius*9/5)+32;
// console.log("la temperatura  en grados Fahrenheit es :"+Fahrenheit);

/* Conversión de kilómetros a millas*/

// var  kilómetros =  Number(prompt("Dame la distancia en kilómetros"));
// var millas =   kilómetros*0.621371;
// console.log("la distancia en millas es :"+millas);

/*Cálculo del IVA*/

// var precio  =  Number(prompt("Ingresa el precio del producto"));
// var  iva =  precio*0.19;
// var total = precio + iva;
// console.log("El precio con IVA es :"+total);

/* Cálculo de salario semanal */

// var horasTrabajadas =Number(prompt("Ingrese las horas trabajadas"));
// var valorhora =Number(prompt("Ingrese valor por hora"));
// var salarioSemana = horasTrabajadas * valorhora;
// console.log("Tu salario semanal es de :"+salarioSemana);

/*Conversión de días a horas, minutos y segundos */

// var dias =   Number(prompt("Dame la cantidad de dias"));
// var horas =  dias*24;
// var minutos = horas*60;
// var segundos = minutos*60;
// console.log("La cantidad de dias "+dias+" es igual a: ");
// console.log("- "+horas+ " horas ");
// console.log("- "+minutos+ " minutos ");
// console.log("- "+segundos+ " segundos ");

/* Precio total con descuento */

// var precio = Number(prompt("Ingresa el precio del producto "));
// var descuento = (10/100);
// var precioConDescuento = precio - (precio * descuento);
// console.log("El precio original es: "+precio);
// console.log("El precio con descuentodel 10% es: "+precioConDescuento);

/*Intercambio de valores */

// var num1 = Number(prompt("Ingresa el primer numero"));
// var num2 = Number(prompt("Ingresa el segundo numero"));
// console.log(num2+" , "+num1);

/*Cálculo del perímetro de un rectángulo */

// var base = Number(prompt("ingrese la base del rectangulo"));
// var altura = Number(prompt("ingrese la altura del rectangulo"));
// var perimetro = 2 * (base + altura);
// console.log("El perimetro del rectangulo es: "+perimetro);

/*Conversión de libras a kilogramos */

// var libras = Number(prompt("Ingrese la libras a convertir :"));
// var kilogramos = libras * 0.45359237;
// console.log(libras+" libras son iguales a: "+kilogramos+" kilogramos");

/* Cálculo de hipotenusa */


// let cateto1 = parseFloat(prompt("Ingrese el primer cateto: "));
// let cateto2 = parseFloat(prompt("Ingrese el segundo cateto: "));
// let hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
// console.log("La hipotenusa del triángulo rectángulo es: "+hipotenusa);

/* Costo total de una compra */

// var producto1 = Number(prompt("Ingrese el precio del primer producto"));
// var producto2 = Number(prompt("Ingrese el precio del segundo producto"));
// var producto3 = Number(prompt("Ingrese el precio del tercer producto"));
// var total = producto1+producto2+producto3;
// console.log("El costo total de la compra es: "+total);

// /*Conversión de minutos a horas y minutos restantes */

// var minutos = Number(prompt("Ingrese los minutos a convertir: "));
// var horas = Math.floor(minutos / 60);
// var minutosRestantes = minutos % 60;
// console.log(minutos+" minutos son iguales a: "+horas+" horas y "+minutosRestantes+"minutos");

/*Multiplicación de tres números */

// var num1 = Number(prompt("Ingrese el primer numero a multiplicar"));
// var num2 = Number(prompt("Ingrese el segundo numero a multiplicar"));
// var num3 = Number(prompt("Ingrese el tercer numero a multiplicar"));
// var resultado = num1 * num2 * num3;
// console.log(num1+" * "+num2+" * "+num3+" = "+resultado);

/* Calcular el interés simple */

// var capital  = Number(prompt("Ingrese el capital: "));
// var  interes  = Number(prompt("Ingrese el interés: "));
// var tiempo = Number(prompt("Ingrese el tiempo en años: "));
// var interesSimple = capital * interes * tiempo ;
// console.log("El interés simple es: "+interesSimple);

/*Cálculo del área de un círculo */

// var  radio = Number(prompt("Ingrese el radio del círculo: "));
// var  area = Math.PI * Math.pow (radio , 2);
// console.log("El área del círculo es: "+area);

/*Conversión de segundos a horas, minutos y segundos restantes */

// var segundos  = Number(prompt("Ingrese los segundos a convertir: "));
// var horas = Math.floor(segundos / 3600);
// var minutos = Math.floor((segundos % 3600) / 60);
// var segundosRestantes = segundos % 60;
// console.log(segundos+" segundos son iguales a: "+horas+" horas, "+minutos+" minutos "+segundosRestantes+ " segundos ");

/*Cálculo del volumen de un cilindro */

// var radio = Number(prompt("ingrese el radio del cilindro"));
// var altura = Number(prompt("ingrese la altura del cilindro"));
// var volumen = Math.PI * Math.pow(radio, 2) * altura;
// console.log("El volumen del cilindro es: "+volumen);







