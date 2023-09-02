let currentNumber=0;
let newNumber=0;
let i=0;

const numberOrder = [7,8,9,4,5,6,1,2,3,0];
const numbers = document.querySelectorAll('.number');
numbers.forEach(function(currentBtn){
    currentBtn.value = numberOrder[i];
    currentBtn.addEventListener('click',()=>{
        newNumber=currentBtn.value;
        alert(newNumber);
    });
    i++;
});