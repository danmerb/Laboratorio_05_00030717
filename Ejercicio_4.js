var rad=prompt("");

var area= (rad) => {
    area=(3.1416)*(rad)**2;

    if (area>=0){
        console.log("ERROR:El radio debe ser mayor que cero.")
    }
};