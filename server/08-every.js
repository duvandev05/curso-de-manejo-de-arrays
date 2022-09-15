//EVERY: es lo contrario a some, aca todos los elementos del array tienen que cumplir 
//con la codicion para que sea true, de lo contrario seria false 

const numbers = [1, 30, 49, 29, 10, 13];

//como seria con for 
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
    }
};
console.log('for', rta);

//con every
const rta2 = numbers.every(item => item <= 40);
console.log('every', rta2);
