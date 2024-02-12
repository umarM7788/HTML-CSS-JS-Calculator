let calcInput = document.getElementById("display");

function appendToDisplay(input){ // Input parameter contains the value of button pressed
    calcInput.value += input; //To append the value
}

function clearDisplay(){
    calcInput.value = '' // To clear the display
}

function calculate(){
   try {
    calcInput.value = eval(display.value);  // You need to give a parameter to eval to calculate
    
   } catch (error) {
    calcInput.value = "Error" // Error given if user enters a single number and an operator 
    
   }
}