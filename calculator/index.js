const one= document.querySelector("#one")
const two= document.querySelector("#two")
const three= document.querySelector("#three")
const four= document.querySelector("#four")
const five= document.querySelector("#five")
const six= document.querySelector("#six")
const seven= document.querySelector("#seven")
const eight= document.querySelector("#eight")
const nine= document.querySelector("#nine")
const zero= document.querySelector("#zero")

const dot= document.querySelector("#dot")

const add= document.querySelector("#add")
const sub= document.querySelector("#sub")
const mul= document.querySelector("#mul")
const div= document.querySelector("#div")

const res= document.querySelector("#res")

const input= document.querySelector("input")

const clear= document.querySelector("#clear")
const clearall= document.querySelector("#clearall")

const pressNum= function (num) {
    if(input.value!= "") {
        input.value= input.value*10 + num
    } else {
        input.value= num
    }
}

const getRes= function () {
    if(operation == "+") {
        input.value= parseInt(input.value, 10) + prevVal
        
    } else if(operation == "-") {
        input.value= prevVal - parseInt(input.value, 10)  
        
    } else if(operation == '*') {
        input.value= parseInt(input.value, 10) * prevVal
        
    } else {
        input.value= prevVal / parseInt(input.value, 10)  
    }
}

const addNum = function () {
    prevVal= parseInt(input.value, 10)
    input.value= 0;
    operation= "+"
}

const subNum= function () {
    prevVal= parseInt(input.value, 10)
    input.value= 0;
    operation= "-"
}

const divNum= function() {
    prevVal= parseInt(input.value, 10)
    input.value= 0;
    operation= "/"
}

const mulNum= function() {
    prevVal= parseInt(input.value, 10)
    input.value= 0;
    operation= "*"
}
one.addEventListener("click", ()=> {
    pressNum(1);
})
two.addEventListener("click", ()=> {
    pressNum(2)
})
three.addEventListener("click", ()=> {
    pressNum(3)
})
four.addEventListener("click", ()=> {
    pressNum(4)
})
five.addEventListener("click", ()=> {
    pressNum(5)
})
six.addEventListener("click", ()=> {
    pressNum(6)
})
seven.addEventListener("click", ()=> {
    pressNum(7)
})
eight.addEventListener("click", ()=> {
    pressNum(8)
})
nine.addEventListener("click", ()=> {
    pressNum(9)
})
zero.addEventListener("click", ()=> {
    pressNum(0)
})

let prevVal= 0;
let operation;




document.addEventListener("keydown", (event)=> {
    if(event.key == "*") mulNum()
    if(event.key == "+") addNum()
    if(event.key == "-") subNum()
    if(event.key == "/") divNum()
    if(event.key == "1") pressNum(1)
    if(event.key == "2") pressNum(2)
    if(event.key == "3") pressNum(3)
    if(event.key == "4") pressNum(4)
    if(event.key == "5") pressNum(5)
    if(event.key == "6") pressNum(6)
    if(event.key == "7") pressNum(7)
    if(event.key == "8") pressNum(8)
    if(event.key == "9") pressNum(9)
    if(event.key == "0") pressNum(0)
    if(event.key == "Enter") getRes()
    if(event.key == "Backspace") {
        if(input.value) {
            input.value= Math.floor(parseInt(input.value, 10) /10);
        }
    }
})

add.addEventListener("click", ()=> {
    addNum()
})
sub.addEventListener("click", ()=> {
    subNum()
})
mul.addEventListener("click", ()=> {
    mulNum()
})
div.addEventListener("click", ()=> {
    divNum()
})

res.addEventListener("click", ()=> {
    getRes()
})

clear.addEventListener("click", ()=> {
    if(input.value) {
        input.value= Math.floor(parseInt(input.value, 10) /10);
    }
})
clearall.addEventListener("click", ()=> {
    input.value= 0
})