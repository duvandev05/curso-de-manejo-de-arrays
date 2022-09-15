//Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición 
//especificada en la función
//En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined
//findIndex muestra la posicion del elemento que encuentre primero, si no encuentra el elemento nos devuelve un -1

const numbers = [1, 30 ,49, 29 ,10, 13];

//como seria con for
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break;
    }    
};
console.log('for', rta);

//con find
const rta2 = numbers.find(item => item === 30);
console.log('find', rta2);




const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

 const rta3 = products.find(item => item.id === '🍔');
 console.log('find', rta3);
 const rta4 = products.findIndex(item => item.id === '🍔');
 console.log('findIndex', rta4);
   