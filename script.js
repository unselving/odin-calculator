let currentNumber="";
let currentOperator="";
let numberArray=[];
let operatorArray=[];
let i=0;

const numberOrder = [7,8,9,4,5,6,1,2,3,0];
const numbers = document.querySelectorAll('.number');
numbers.forEach(function(currentBtn){
    currentBtn.value = numberOrder[i];
    currentBtn.addEventListener('mouseover',()=>{
        currentBtn.style.backgroundColor='darkgrey';
    });
    currentBtn.addEventListener('mouseout',()=>{
        currentBtn.style.backgroundColor='rgb(235,235,235)';
    });
    currentBtn.addEventListener('click',()=>{
        currentNumber=currentNumber+currentBtn.value;
        console.log(currentNumber);
    });
    i++;
});

const operators = document.querySelectorAll('.operator');
operators.forEach(function(currentBtn){
<<<<<<< HEAD
=======
    currentBtn.addEventListener('mouseover',()=>{
        currentBtn.style.backgroundColor='darkgrey';
    });
    currentBtn.addEventListener('mouseout',()=>{
        currentBtn.style.backgroundColor='rgb(235,235,235)';
    });
>>>>>>> calculator-ui
    currentBtn.addEventListener('click',()=>{
        numberArray.push(currentNumber);
        currentNumber="";
        console.log(numberArray);
        operatorArray.push(currentBtn.id);
        console.log(operatorArray)
    });
});

const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', operate());

function operate(){
    switch(operatorArray[0]){
        case "add":
            console.log("add");
            break;
        case "subtract":
            console.log("subtract");
            break;
        case "multiply":
            console.log("multiply");
            break;
        case "divide":
            console.log("divide");
            break;
    }
}

