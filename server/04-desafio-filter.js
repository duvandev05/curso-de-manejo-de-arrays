//DESAFIO: retornar solo palabras de 4 letras o mas 

function solution(array) {
	return letras = array.filter(item => item.length >= 4);
}; 

const array = ['tu', 'ellos', 'el', 'todos', 'unos'];

solution(array);
console.log(letras);