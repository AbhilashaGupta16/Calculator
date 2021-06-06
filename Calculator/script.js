//alert("Connected")
const calculatorscreen = document.querySelector(".calculator-screen")
const updateScreen = (number)=> {
    calculatorscreen.value = number;
}
 
const numbers = document.querySelectorAll(".number")
numbers.forEach((numbers) =>
{
    number.addEventListener("click",(event)=>
    {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

//defining variables

let prevInput ="0";
let calculationalOperator= ""
let currentInput ="0"

const inputNumber = (number) =>
{
    if(currentInput ==="0"){
        currentInput = number;
    }
    else{
        currentInput = currentInput + number
    }
    const operator = document.querySelectorAll('.operator')
    oprators.forEach((operator)=> {
        operator.addEventListener("click",(event)=>{
            inputOperator(event.target.value)
        })
    })

    const 
    )
} 