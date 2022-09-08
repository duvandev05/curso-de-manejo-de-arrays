//Filter: lo que hace es filtrar el array original en base a una condición,
// los que la cumplan estaran en el nuevo array creado.
//nunca va a modificar el array original, va a crear una copia con los elementos 
//que cumplan la condicion, puede devolver un arrays con 0 elementos, con algunos, o con 
//todos mas nunca devolvera uno con mas elementos que el original.

const words = ['spray', 'limit', 'elite', 'exuberant'];

//como seria un filter con el ciclo for 
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    //condicion para filtrar
    if (item.length >= 6) {
        newArray.push(item);
    }    
};
console.log('newArray', newArray);
console.log('original', words);

//con el metodo .filter

const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);
console.log('original', words);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 4559,
        delivered: false,
      },
    
  ];
  const rt3 = orders.filter(item => item.delivered && item.total > 100);
  console.log('rta3', rt3);

//como hacer un buscador sencillo con filter
const search = (query) => {
    return orders.filter(item => {
        return  item,customerName.incluides(query);
    })
}
 
console.log(search('Nico'));