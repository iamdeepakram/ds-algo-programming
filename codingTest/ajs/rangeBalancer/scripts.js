// Write your JavaScript code over here

const maxSum = document.getElementById("max-sum");

const rangeAInput = document.getElementById("range-a");
const rangeBInput = document.getElementById("range-b");

const rangeAValue = document.getElementById('range-a-value');
const rangeBValue = document.getElementById('range-b-value');

const sumDivision = document.getElementById('sum');


// show sum at start 
sumDivision.textContent = parseInt(rangeAInput.max)+parseInt(rangeBInput.max); 
// show range value
// a
rangeAValue.style = 'display:inline';
rangeAValue.textContent = rangeAInput.value; 
// b 
rangeBValue.style = 'display:inline';
rangeBValue.textContent = rangeBInput.value;

// show sum after change in range a and b

rangeBInput.addEventListener('input', ()=>{
    rangeBValue.textContent = rangeBInput.value;
    const adjustedSliderAValue = maxSum.value - rangeBInput.value;
    rangeAInput.max = adjustedSliderAValue;
    sumDivision.textContent = parseInt(rangeAInput.max)+parseInt(rangeBInput.max); 

});

rangeAInput.addEventListener('input', ()=>{
    rangeAValue.textContent = rangeAInput.value;
    const adjustedSliderAValue = maxSum.value - rangeAInput.value;
    rangeBValue.textContent = adjustedSliderAValue;
    rangeBInput.max = adjustedSliderAValue;
    sumDivision.textContent = parseInt(rangeAInput.max)+parseInt(rangeBInput.max); 
});

maxSum.addEventListener('input', ()=>{
    rangeAInput.max = maxSum.value- rangeBInput.value;
    rangeAInput.value = maxSum.value- rangeBInput.value;
    rangeAValue.textContent = rangeAInput.value;
});




