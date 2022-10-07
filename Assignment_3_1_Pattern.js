let n = 5;
let string = "";
let count = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += " " +  count;
    count++;
  }
  string += " \n";
}
console.log(string);