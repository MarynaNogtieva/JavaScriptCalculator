"use strict"
var isEqualPressed = false;
var isNegative = false;
//operators for validation without .
var operators1 = ["+","-","/","*"];

var operators2 = ["."];

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
	if(val !== ""){
		result.innerHTML = eval(val);
		historyRes.innerHTML += eval(val);
		isEqualPressed = true;
	}
	else{
		historyRes.innerHTML = "0";
	}

}

function updateResult(val){
		if(result.innerHTML === "0" && val !=="."){
        	result.innerHTML = "";
        }
        //last carachter of the history
        var historyLastCharIndex = historyRes.innerHTML.length - 1;
        //check if validation operators have operator
        //if yes, update result to a new value
        if(operators1.includes(historyRes.innerHTML.charAt(historyLastCharIndex))){
        	result.innerHTML =val;
        }
         else if(val === "." && historyRes.innerHTML.indexOf(".") !== -1){
        	console.log("cannot duplicate operator rightaway");
        }

        else{
        		if(isEqualPressed)
	           	{
	           		result.innerHTML = val;

	           	}

	           	else{
	           		result.innerHTML +=val;
	           	}
        	
        }
       		 
}

function upadteHistory(val){
         ///debugger;
		if(historyRes.innerHTML === "0" && val !=="." && operators1.includes(val) === false){
        	historyRes.innerHTML = "";
       	 }
        
		//last carachter of the history
        var historyLastCharIndex = historyRes.innerHTML.length - 1;
        

        //check if validation operators have operator
        //if yes, update result to a new value
        if(operators1.includes(historyRes.innerHTML.charAt(historyLastCharIndex)) && (val==="=" || val==="+" || val==="-" || val === "*" || val === "/")  ){
        	console.log("cannot duplicate operator rightaway");
        }
        else if( val === "."  && historyRes.innerHTML.indexOf(".") !== -1){
        	console.log("cannot duplicate operator rightaway");
        }

        else{
        	 //make shure that first thing updated is number and not sign
        	 if( operators1.includes(val) && historyRes.innerHTML === "0"){
             //console.log("cannot start with sigh");
              	//historyRes.innerHTML = "0";
              	historyRes.innerHTML += val;
         	}

           else{ 
           	if(isEqualPressed)
           	{
           		historyRes.innerHTML = val;
           	}
           	else if(val === "negative"){
        	   //check if there is negative sign initially, then change it on the opposite
        	   if(isNegative){
        	   	 historyRes.innerHTML = historyRes.innerHTML.splice(0,1);
        	   	 isNegative = false;
        	   }
        	   else{
        	   	historyRes.innerHTML = "-"+historyRes.innerHTML;
        	   }
             }

           	else{
           		historyRes.innerHTML += val;
           	}
           
           }
        }
    
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
             console.log(expression);

             //pass expression value to get result
            getTotal(expression);
	      }
	      else if(e.target.value === "negative"){
	      	isNegative = true;
	      }
	      else{
	      	isEqualPressed = false;
	      	isNegative = false;
	      }
       
	},false);
}