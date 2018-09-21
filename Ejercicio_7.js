
var bisiesto = (anio) => {
   
    if ((annio % 4 == 0) && (!(annio % 100 == 0) || (annio % 400))) {
       console.log("Bisiesto ");
   } else{
       console.log("No es bisiesto ");
   }
};