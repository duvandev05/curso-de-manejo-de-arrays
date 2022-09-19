//INCLUDES:El método includes determina si un array o string incluye
// un determinado elemento. Devuelve true o false, si existe o no respectivamente. 

const pets = ['cat', 'dog', 'bat'];

//Como seria con for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

//Con includes, no se le pasa una arrow funtion sino el elemento a buscar 
//directamente como parametro
const rta = pets.includes('dog');
console.log('includes', rta);