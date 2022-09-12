//REDUCE RELOADED: es reducir un arrays en un solo objetos con difrentes valores 

const items = [1,3,2,3];

const rta = items.reduce((obj, item) =>{
    //condicion para saber cuants numeros hay 
    if (!obj[item]) {
        //si el numero aparece una sola ve
        obj[item] = 1;
    }else{
        //si parece varias veces ir contando 
        obj[item] = obj[item] + 1;
    }
    //retornar el objeto con los valores 
    return obj;
}, {});

console.log(rta);


//reduce con arryas de objetos 
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];
  
  //concatenacion de metodos o "painaimas"
  const rta1 = data
  //primero se mapea el arrays
  .map(item => item.level)
  //y con el resultado del mapeo se hace el reduce con la respuesta de map
  .reduce((obj, item) => {
      if (!obj[item]) {
          obj[item] = 1;
      } else {
          obj[item] = obj[item] + 1;
      }
      return obj;
  }, {});
  

