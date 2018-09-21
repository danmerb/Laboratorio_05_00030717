
var palindrome = (palabra) => {
    let palAux=palabra.split("");
    palabra=palabra.split("");
    palabra.reverse();
    
    if (palabra.join("")==palAux.join("")){
        console.log("Palabra palindrome");
    }
    else{
        console.log("La palabra no es palindrome");
    }

    

};