document.write("<h1>Ecuacion Cuadratica</h1>");
var a=1;
var b=-7;
var c=-18;

var x1=(-b + (Math.sqrt(Math.pow(b, 2)- (4 * a * c))) )/ (2 * a);
var x2=((-b -(Math.sqrt(Math.pow(b, 2)- (4 * a * c))))/ (2 * a));

console.log("El ingreso de las variables a=",a,"b=",b,"c=",c);
console.log("Dieron como resultado x1=",x1,"y","x2=",x2);