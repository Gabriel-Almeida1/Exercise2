var num = prompt("Número inteiro: ")

var nota100 = 0
var nota50 = 0
var nota10 = 0
var nota5 = 0
var nota1 = 0


if (num >= 100) {
    var nota100 = Math.floor(num/100)
    console.log(num, "nota 100")
    num = num - (nota100 * 100)

} if (num >= 50) {
    var nota50 = Math.floor(num/50)
    console.log(num, "nota 50")
    num = num - (nota50 * 50)

} if (num >= 10) {
    var nota10 = Math.floor(num/10)
    console.log(num, "nota 10")
    num = num - (nota10 * 10)

} if (num >= 5) {
    var nota5 = Math.floor(num/5)
    console.log(num, "nota 5")
    num = num - (nota5 * 5)

} if (num >= 1) {
    var nota1 = Math.floor(num/1)
    console.log(num, "nota 1")
    num = num - (nota1 * 1)

}
 

console.log(nota100, " nota(s) de 100")
console.log(nota50, " nota(s) de 50")
console.log(nota10, " nota(s) de 10")
console.log(nota5, " nota(s) de 5")
console.log(nota1, " nota(s) de 1")
