function runProgram(){

let num = Number(document.getElementById("number").value);
let output = "";

output += "Number: " + num + "\n\n";


// 1️⃣ Sum of digits
let temp = num;
let sum = 0;

while(temp > 0){
let digit = temp % 10;
sum += digit;
temp = Math.floor(temp / 10);
}

output += "Sum of digits: " + sum + "\n";

output += "Factors: ";
for(let i = 1; i <= num; i++){
if(num % i === 0){
output += i + " ";
}
}

output += "\n";



let isPrime = true;

if(num <= 1){
isPrime = false;
}

for(let i = 2; i < num; i++){
if(num % i === 0){
isPrime = false;
break;
}
}

output += "Is Prime: " + (isPrime ? "Yes" : "No") + "\n";



let digits = num.toString().length;
temp = num;
let armstrongSum = 0;

while(temp > 0){
let digit = temp % 10;
armstrongSum += Math.pow(digit, digits);
temp = Math.floor(temp / 10);
}

output += "Is Armstrong: " + (armstrongSum === num ? "Yes" : "No");

document.getElementById("output").textContent = output;

console.log(output);

}