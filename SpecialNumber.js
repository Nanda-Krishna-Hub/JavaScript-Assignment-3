function factorial(n){
    let a =1;
    if(n == 0 || n == 1){
        return a;
    }
    else{
        for(var i = n; i>=1; i--){
            a = a*i;
        }
        return a;
    }
}


let n = 2;
let number = n;
let digit = 0;
let result = 0;
let fact = 0;
while(n>0){
    digit = n % 10;
    fact = factorial(digit);
    n = parseInt(n/10);
    result += fact;
}

if(number == result)
    console.log(`${number} is Special number`);
else
console.log(`${number} is not Special number`);


