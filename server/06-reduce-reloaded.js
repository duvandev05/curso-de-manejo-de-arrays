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

