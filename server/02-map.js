//MAP
//Map lo que hace es hacer un nuevo arrays con la transformacion de los elementos 

const letters = ['a', 'b', 'c'];

//Con for seria asi
const newArray = [];
for (let i = 0; i < letters.length; i++){
    const element = letters[i];
    newArray.push(element + '++');
}

console.log('original', letters);
console.log('new', newArray);

//Con el metodo .map()

const newArray2 = letters.map(item => item + '++');
console.log('original',  letters);
console.log('new',  newArray2);
