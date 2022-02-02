/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const colorDiv = document.querySelector("#color-block");
const colorText = document.querySelector("#color-name");
colorDiv.addEventListener("click",changeColor);
function changeColor(){
    //Write a condition determine what color it should be changed to
    if(colorDiv.style.backgroundColor !== "rgb(230, 230, 250)"){
        //change the background color using JS
        colorDiv.style.backgroundColor = "#e6e6fa";
        //Change the text of the color using the span id color-name
        colorText.textContent = "#E6E6FA";
        console.log("change to new color");
        console.log(colorDiv.style.backgroundColor);
    }
    else{
        //change the background color using JS
        colorDiv.style.backgroundColor = "#f08080";
        //Change the text of the color using the span id color-name
        colorText.textContent = "#F08080";
        console.log("!!!!");
        console.log(colorDiv.style.backgroundColor);
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const num = document.querySelector("#f-input");
const btn = document.querySelector("#convertbtn");
const cOut = document.querySelector("#c-output");
btn.addEventListener("click",convertTemp);
function convertTemp(){
    const numValue = num.value;
    console.log(num.value);
    //Calculate the temperature here
    const cTemp = (numValue-32)*5/9;
    console.log(cTemp);
    //Send the calculated temperature to HTML
    cOut.innerHTML = cTemp;
}


