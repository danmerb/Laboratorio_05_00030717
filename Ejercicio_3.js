var fibonacci = (num) => {
    var num1 = 0;
    var num2 = 1;    
    var num3;
    if (num == 1){
        console.log(num1);
    }
    if (num == 2){
        console.log(num1);
        console.log(num2);
    }
    if (num > 2){
        console.log(num1);
        console.log(num2);
    }
    for(let i = 3; i <= num; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;        
        console.log(num3);
    }
}

