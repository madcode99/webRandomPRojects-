const inputEl = document.getElementById('input-el');
// function for clear btn 
function Clear(){
    inputEl.value = "";
}
// function for displayin something on the input el
function display(value){
    inputEl.value += value; 
}
// function for the calculation 
function calculate (){
    let nums = inputEl.value;
    let ans = eval(nums);
    inputEl.value = ans;
}