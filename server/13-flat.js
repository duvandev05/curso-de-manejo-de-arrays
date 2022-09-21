//FLAT:El método flat es inmutable que consiste en retornar un array donde los 
//sub-arrays han sido aplanados hasta una profundidad especificada.
//El aplanamiento consiste en transformar un array de arrays a una sola dimensión.

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9],
];

//Con for 
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }    
}
console.log('for', newArray);

//con flat
//le tenemos que pasar como parametro hasta que nivel queremos aplanar el arrays,
//en este caso seria 3 niveles para que quede totalmente planos
const rta = matriz.flat(3);
console.log('flat', rta);   
