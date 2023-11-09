const box= document.getElementById("box")
const setBtn= document.querySelector(".set-btn")
const resetBtn= document.querySelector(".reset-btn")
const input= document.getElementsByTagName("input")


const topLeft= document.getElementById("top-left")
const topRight= document.getElementById("top-right")
const bottomLeft= document.getElementById("bottom-left")
const bottomRight= document.getElementById("bottom-right")


const setCSS = () => {
    box.style.whiteSpace = "pre-line"; 
    box.textContent = "border-top-left-radius: " + (topLeft.value!= "" ? topLeft.value : "0") + "px;\n" +
                    "border-top-right-radius: " + (topRight.value!= "" ? topRight.value : "0")  + "px;\n" +
                    "border-bottom-left-radius: " + (bottomLeft.value!= "" ? bottomLeft.value : "0")  + "px;\n" +
                    "border-bottom-right-radius: " + (bottomRight.value!= "" ? bottomRight.value : "0")  + "px;";
}

const addBorder= ()=> {
    box.style.borderTopLeftRadius= topLeft.value  + "px"
    box.style.borderTopRightRadius= topRight.value + "px"
    box.style.borderBottomLeftRadius= bottomLeft.value + "px"
    box.style.borderBottomRightRadius= bottomRight.value + "px"
}
setBtn.addEventListener("click", (event)=> {
    event.preventDefault()
    addBorder()
})
for(let i=0; i<4; i++) {

    input[i].addEventListener("input", ()=> {
        addBorder()
        setCSS()
    })
}
resetBtn.addEventListener("click", ()=> {
    box.style.borderRadius= ""
    bottomLeft.value= ""
    topRight.value= ""
    topLeft.value= ""
    bottomRight.value= ""
    setCSS()
})