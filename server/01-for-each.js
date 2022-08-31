//forEach: sirve para recorrer cada puesto y elemento dentro del arrays

const letters = ["a", "b", "c",];

//Como se haria el recorrido con un for 
for (let index = 0; index <letters.length; index++){
    const element = letters[index];
    console.log('for', element);
}

//Con forEach
letters.forEach(item => console.log('forEach', item));