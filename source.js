/**
 * The following programcontains source code for scientific software whitch calculate triangle.
 * Each input field represents the length of a triangle side.
 * The software displays the triangle according to the input given.
 * There is text written below the triangle that states triangle type.
*/

const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const inputC = document.getElementById("inputC");
const errorMessage = document.getElementById("errorMessage");
const errorField = document.getElementById("errorField");
const canvas = document.getElementById("myCanvas");
var errorMessageText;

/**
 * Function that shows error message to customer.
*/
function showErrorMessage() {
    errorMessage.innerHTML = errorMessageText;
    errorField.style.visibility = "visible";
}

/**
 * Funcion that hides error message from customer.
*/
function hideErrorMessage() {
    errorField.style.visibility = "hidden";
}

/**
 * Function that clears canvas.
*/
function clearCanvas() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Main function to submit information from inputs.
*/
function submit() {
    clearCanvas();
    hideErrorMessage();
    if (isValidInput()) {
        var aLength = Number(inputA.value);
        var bLength = Number(inputB.value);
        var cLength = Number(inputC.value);
        resultOutput(aLength, bLength, cLength, canvas);
    }
    else {
        showErrorMessage();
    }
}

/**
 * Function that validates information from inputs. Checks symbols.
*/
function isValidInput() {
    var result = true;

    if (inputA.value === "" || inputB.value === "" || inputC.value === "") {
        errorMessageText = "Please enter all side lenghts";
        result = false;
    }
    else if (isNaN(inputA.value) || isNaN(inputB.value) || isNaN(inputC.value)) {
        errorMessageText = "Please enter numbers";
        result = false;
    }
    else if (!Number.isInteger(Number(inputA.value))
        ||!Number.isInteger(Number(inputB.value))
        ||!Number.isInteger(Number(inputC.value))) {
        errorMessageText = "Please enter whole numbers";
        result = false;
    }
    else if (Number(inputA.value) <= 0
        || Number(inputB.value) <= 0
        || Number(inputC.value) <= 0) {
        errorMessageText = "Please enter numbers bigger than null";
        result = false;
    }
    
    return result;
}