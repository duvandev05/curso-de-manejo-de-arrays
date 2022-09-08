//calcular la suma de todos los numeros

function solution(numbers) {
	return suma = numbers.reduce((suma, item) => suma + item, 0); 
}; 

const numbers = [1, 2, 3, 4, 5]

const rta = solution(numbers);
console.log(rta);



