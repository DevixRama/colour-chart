console.log("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z")

let box = document.querySelectorAll(".box");
let btn = document.querySelector(".btn")

function randomcolor(){
    let x1 = 0 + Math.random()*255;
    let x2 = 0 + Math.random()*255;
    let x3 = 0 + Math.random()*255;
    return `rgb(${x1}, ${x2}, ${x3})`
}



box.forEach(e => {
    e.style.backgroundColor = randomcolor()
})

btn.addEventListener("click" , ()=>{
    location.reload()
})
