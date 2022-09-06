function solution(array) {
	return array.map(product => {
		product.taxes = Math.trunc(product.price * .19);
		return product;
	})
}; 

let array = [
	{
		name: 'product1',
		price: 300,
		stock: 5,
	},
	{
		name: 'product2',
		price: 800,
		stock: 7,
	},
	{
		name: 'product3',
		price: 1200,
		stock: 3,
	},
	{
		name: 'product4',
		price: 1000,
		stock: 2,
	}

];

let newArrays = solution(array);
console.log(newArrays);
