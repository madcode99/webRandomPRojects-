//----------------------Variables---------------------------- 
const btn = document.getElementById('btn-el');
const inputEl = document.getElementById('input-el');
const copyEl = document.getElementById('copy-el');
const randomaTxt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.#$%&!*'; 
const randomLength = randomaTxt.length;
// --------------------Events------------------
btn.addEventListener("click" , function(){
   inputEl.value = random(12);
})
copyEl.addEventListener("click" , function(){
    inputEl.select();
   inputEl.execCommand("copy");
})
// -------------------functions---------------------
function random (length){
let result = '';
for(let i = 0 ;i<length ;i++){
    result+=randomaTxt.charAt(Math.floor(Math.random()*randomLength));
}
return result;
}

