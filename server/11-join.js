//JOIN:El método join une los elementos del array, mediante 
//una separación, y retorna un string. Si un elemento es undefined o null, 
//se convierte en una cadena vacía.

const elements = ["Fire", "Air", "Water"];

//Con for
let rtaFinal = ' ';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

//Con join
const rta = elements.join('--');
console.log('join', rta);

//SPLIT
const title = "Curso de manipulacion de arrays";
//con split quitamos los espacios del estring y cada palabra la volvemos un elemento de 
//un array y despues con join lo unimos con el guion, asi creando una url
const urlFinal = title.split(' ').join('-');
console.log(urlFinal)