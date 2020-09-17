function calc(result){
    calculator.display.value=calculator.display.value+result;		
}
function clearText()  
{
    calculator.display.value="";
} 
function bckspc()
{
    calculator.display.value=calculator.display.value.slice(0,-1);
}