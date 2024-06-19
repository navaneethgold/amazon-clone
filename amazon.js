const searching=document.querySelector(".search")
const back=document.querySelectorAll("#p1")
const right=document.querySelector("#right")
const left=document.querySelector("#left")
const signin=document.querySelector(".sign")

let n = 0;
for (let i = 0; i < back.length; i++) {
    back[i].style.display = "none";
}

if (n < back.length) {  
    back[n].style.display = "block";
} else {
    console.error("Index n is out of range.");
}


const interval=setInterval(() => {
    if(n==back.length-1){
        n=0;
    }
    else{
        n++;
    }
    // n++;
    slider()
}, 5000);


function slider(){
    for (let i = 0; i < back.length; i++) {
        back[i].style.display = "none";
    }
    
    // Ensure that n is within the valid range
    if (n < back.length) {  
        back[n].style.display = "block";
    } else {
        console.error("Index n is out of range.");
    }
}
left.addEventListener("click",()=>{
    if(n==0){
        n=back.length-1;
    }
    else{
        n--;
    }
    slider()
})
right.addEventListener("click",()=>{
    if(n==back.length-1){
        n=0;
    }
    else{
        n++;
    }
    slider()
})
searching.addEventListener("click",()=>{
    searching.style.border='5px solid #f0ac0e'
})
signin.addEventListener("click",()=>{
    window.location.href="amazon_sign_in.html"
})