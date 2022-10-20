const textEl = document.getElementById("freeform");
const charEl=document.getElementById("totalChar");
const remEL= document.getElementById("remaining");


textEl.addEventListener("keyup",()=>{

updateCounter();
    
})

function updateCounter(){
    let x =textEl.value.length;
    charEl.innerText= `Toatal characters: ${x}` 
    let y= 50;
    let z;
    z=y-x;
    remEL.innerText=`remaining: ${z} `
}