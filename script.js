let currentNumber="";
let currentOperator="";
let numberArray=[];
let operatorArray=[];
let i=0;
let a=0;
let result = document.getElementById("result");

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
        if (result.textContent==0){
            result.textContent=currentBtn.value;
        }
        else {
            result.textContent=result.textContent+currentBtn.value;
        }
        currentNumber=currentNumber+currentBtn.value;
    });
    i++;
});


const operatorOrder = ["+","-","x","/"];
const operators = document.querySelectorAll('.operator');
operators.forEach(function(currentBtn){
    currentBtn.value = operatorOrder[a];
    currentBtn.addEventListener('mouseover',()=>{
        currentBtn.style.backgroundColor='darkgrey';
    });
    currentBtn.addEventListener('mouseout',()=>{
        currentBtn.style.backgroundColor='rgb(235,235,235)';
    });
    currentBtn.addEventListener('click',()=>{
        numberArray.push(currentNumber);
        currentNumber="";
        operatorArray.push(currentBtn.id);
        result.textContent=result.textContent+currentBtn.value;
    });
    a++;
});

const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('mouseover',()=>{
    equalsBtn.style.backgroundColor='rgba(174, 216, 170, 1.5)';
});
equalsBtn.addEventListener('mouseout',()=>{
    equalsBtn.style.backgroundColor='rgba(174, 216, 170, 0.84)';
});

equalsBtn.addEventListener('click', ()=>{
    numberArray.push(currentNumber);
    currentNumber="";
    operate();

});

function operate(){
    let x=1;
    while(x<numberArray.length) {

        if (operatorArray[0]=="add"){
            numberArray[1]=Number(numberArray[0])+Number(numberArray[1]);
            numberArray.shift();
            operatorArray.shift();
    
        } else if (operatorArray[0]=="subtract"){
            numberArray[1]=Number(numberArray[0])-Number(numberArray[1]);
            numberArray.shift();
            operatorArray.shift();
    
        } else if (operatorArray[0]=="multiply"){
            numberArray[1]=Number(numberArray[0])*Number(numberArray[1]);
            numberArray.shift();
            operatorArray.shift();
        }
    
        else if (operatorArray[0]=="divide"){
            numberArray[1]=Number(numberArray[0])/Number(numberArray[1]);
            numberArray.shift();
            operatorArray.shift();

    
        }


    }
    result.textContent=numberArray[0];
    currentNumber=(numberArray[0]);
    numberArray.shift();
    
    return;

}

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('mouseover',()=>{
    clearBtn.style.backgroundColor='darkgrey';
});
clearBtn.addEventListener('mouseout',()=>{
    clearBtn.style.backgroundColor='rgb(235,235,235)';
});

clearBtn.addEventListener('click', ()=>{
    numberArray=[];
    operatorArray=[];
    result.textContent="0";

});


