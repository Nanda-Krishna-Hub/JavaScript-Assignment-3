let n = 417;
let number = n;
let digit = 0;
let result = 0;
while(n>0){
    digit = n % 10;
    n = parseInt(n/10);
    result += (digit*digit*digit);
}
if(number == result){
    console.log(`${number} is Armstrong number`);
}
else
console.log(`${number} is not Armstrong number`);
