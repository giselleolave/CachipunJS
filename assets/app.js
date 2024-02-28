console.log("Vinculado");
var num1;
var num2;
num1 = prompt("Ingresa el primer número: ");
num2 = prompt("Ingresa el segundo número: ");
if(num1 <= num2) {
alert("El primer número ingresado NO ES MAYOR que el segundo número");
}
if(num2 >= 0) {
alert("El segundo número que ingresaste es positivo, Mayor o igual que 0");
}
if(num1 != 0 || num1 < 0) {
alert("El primer número que ingresaste es distinto de 0 o es negativo");
}