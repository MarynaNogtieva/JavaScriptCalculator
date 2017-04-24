"use strict"
var operation,
	zero;

var result = document.getElementById("result");
var historyRes = document.getElementById("historyResult");



var numbers = document.querySelectorAll(".numberValue ");
var allInputs = document.querySelectorAll(".calc");

console.log(allInputs);

var numbersAmount = numbers.length;
var allInputsAmount = allInputs.length;

function clearAll(){
	result.innerHTML = "0";
	historyRes.innerHTML = "0";

}

function getTotal(val){
result.innerHTML = eval(val);
historyRes.innerHTML += eval(val);
}

function updateResult(val){
		if(result.innerHTML === "0" && val !=="."){
        	result.innerHTML = "";
        }
       		 result.innerHTML +=val;
}

function upadteHistory(val){
		if(historyRes.innerHTML === "0" && val !=="."){
        	historyRes.innerHTML = "";
       	 }

        historyRes.innerHTML += val;
}



// get number value to the result, without displaying operations
for(var i = 0; i <numbersAmount;i++){
	numbers[i].addEventListener("click",function(e){
		var currentValue = e.target.value;
		updateResult(currentValue);
        
	},false);
}

// get all calues to display input history (including operations)
for(var j = 0; j < allInputsAmount; j++){
	allInputs[j].addEventListener("click",function(e){
		var currentValue = e.target.value;
		upadteHistory(currentValue);
		 
       
         if(e.target.value === "clear"){
        		clearAll();
        }
	     else if(e.target.value === "="){
             // getTotal(historyRes.innerHTML);
             //get expression without = sigh
             var expression = historyRes.innerHTML.substr(0,historyRes.innerHTML.length-1);
             //pass expression value to get result
             getTotal(expression);
	      }
       
	},false);
}