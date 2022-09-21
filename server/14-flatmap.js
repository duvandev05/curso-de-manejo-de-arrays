//FLATMAP:El método flatMap es inmutable y consiste en la combinación de los métodos
// map y flat. Primero realiza la iteración de los elementos del array
// (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

const user = [
    {userId: 1, userName: "Tom", attributes: ["Nice","Cute"] },
    {userId: 2, userName: "Mike", attributes: ["Lovely"] },
    {userId: 3, userName: "Nico", attributes: ["Nice","Cool"] },
]

const rta = user.map(user => user.attributes).flat();
console.log('map-flap', rta);
const rta2 = user.flatMap(user => user.attributes);
console.log('flaMap', rta2);

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };
  
  const rta3 = Object.values(calendars).flatMap(item => {
      return item.map(date => date.startDate);
  });
  console.log(rta3);