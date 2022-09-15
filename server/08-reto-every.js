//Comprobar  que todos son menores a 15 años


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta = team.every(obj => obj.age <= 15);
  console.log('rta', rta);//false 

