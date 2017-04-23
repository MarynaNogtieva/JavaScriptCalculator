var operation,
	zero;

var result = document.getElementById("result");
var history = document.getElementById("historyResult");
var numbers = document.querySelectorAll(".numberValue ");
console.log(numbers);


var numbersAmount = numbers.length;

for(var i = 0; i <numbersAmount;i++){
	numbers[i].addEventListener("click",function(e){
        console.log(e.target.value);
        result.innerHTML +=e.target.value;
	},false);
}