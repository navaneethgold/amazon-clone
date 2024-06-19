const contin=document.querySelector(".con")
const logo=document.querySelector("#logo")
const user=document.querySelector("#ibp")
const pass=document.querySelector("#ibp2")
const mob=document.querySelectorAll("#mob")
const code=document.querySelector("#pass")

contin.addEventListener("click",()=>{
    if(user.value=="navaneeth_gold_1729" && pass.value=="1729abs2006"){
        window.location.href="amazon.html"
    }
    else{
        mob[1].style.color="red"
        code.style.color="red"
        alert("wrong password/username")
    }
    
})
logo.addEventListener("click",()=>{
    window.location.href="amazon.html"
})