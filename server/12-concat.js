//CONCAT: se trata unir los elementos de dos arrays en uno solo, sin modificar
//los arrays originales 

const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

//Con for 
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for', newArray);

//Con concat
const rta = elements.concat(othersElements);
console.log('concat', rta);
