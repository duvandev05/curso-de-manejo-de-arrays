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
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

//se mapea el arrays para sacar un valor en especifico de los objetos,
//en este caso seria el total de todos ellos 
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

//en este caso se le agrega un valor mas, pero abria un error porque se estaria mutando
//o cambiando el array original, y la funcion de .map es no mutar el array original
// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);

//en este caso se agrega la propiedad nueva de la manera correcta, pero si alterar el array original, deonde se 
//hace una copia del original y en esta copia se agrga la propiedad nueva, para esto se utiliza los operadores de 
//propagacion para poder copiar en un array nuevo los elementos del orignal y agregar el nuevo
const rta3 = orders.map((item) => {
  return {
    //operador de propagacion 
    ...item,
    tax: 0.19,
  };
});
console.log("rta3", rta3);
console.log("original", orders);

