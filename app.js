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

// get number value to the result, without displaying operations
for(var i = 0; i <numbersAmount;i++){
	numbers[i].addEventListener("click",function(e){
        if(result.innerHTML === "0"){
        	result.innerHTML = "";
        }
        result.innerHTML +=e.target.value;
	},false);
}

// get all calues to display input history (including operations)
for(var j = 0; j < allInputsAmount; j++){
	allInputs[j].addEventListener("click",function(e){
		
		 if(historyRes.innerHTML === "0"){
        	historyRes.innerHTML = "";
       	 }

        historyRes.innerHTML += e.target.value;
       
         if(e.target.value === "clear"){
        		clearAll();
        }
	
       
	},false);
}