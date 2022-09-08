//Reduce: consiste en coger un array y devolver un solo valor, o una sola expresion 
//de ahi el nombre reducir, tiene dos valores un arrow funtion y un valor inicial 
//.reduce((arrow funtion) => , valor inicial)

const totals = [1,2,3,4];

//con for seria asi
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;    
}
console.log(sum);

//ahora con .reduce 
//totals.reduce((valor acomulador, iterador) => operacion en este caso suma, valor inicial)
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta', rta);
