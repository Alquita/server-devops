const { suma, resta, multiplicar } = require('./math');

console.assert(suma(2, 3) === 5, 'Error en suma');
console.assert(resta(5, 2) === 3, 'Error en resta');
console.assert(multiplicar(4, 3) === 12, 'Error en multiplicar');

console.log("✅ Todos los tests pasaron correctamente");
