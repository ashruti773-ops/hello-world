function checkNumber(){

let num = document.getElementById("number").value;

num = Number(num);

if(num % 2 === 0){
console.log("The number is even");
document.getElementById("result").innerText = "The number is EVEN";
}
else{
console.log("The number is odd");
document.getElementById("result").innerText = "The number is ODD";
}

}