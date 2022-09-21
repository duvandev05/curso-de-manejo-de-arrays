const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  //verificamos que el elemento se encuentra dentro del arrays
  const productIndex = products.findIndex(item => item.id === '🍔');
  if (productIndex !== -1) {
    //si esta dentro del arryas lo agregamos al nuevo arrays
      myProducts.push(products[productIndex]);
      //borramos el elemento del arrays original 
      products.splice(productIndex, 1);
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  // Update
  
  const productsV2 = [
      { title: "Pizza", price: 121, id: "🍕" },
      { title: "Burger", price: 121, id: "🍔" },
      { title: "Hot cakes", price: 121, id: "🥞" },
    ];
    //actualizamos el elemento 
  const update = {
      id: "🥞",
      changes: {
          price: 200,
          description: 'delicioso'
      }
  }
  const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
  //agregamos las nuevas actualizaciones al objeto 
  productsV2[productIndexV2] = {
      ...productsV2[productIndexV2],
      ...update.changes,
  };
  console.log(productsV2);