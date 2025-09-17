// Pipeline Playground - Starter
// =============================

// TODO: Create an object to hold your transforms (e.g., toUpperCase, trim, appendExclamation)

// the object holds the functions
// MAYBE need input which will update after each method
let inputText;
const transformObj ={
    capitalize: function() {
       return inputText.toUpperCase();
    },
    trimIt: function() {
        return inputText.trim();
    },
    appendExclamation: function() {
       const newString = inputText + '!';
       return newString;
    }

};
// TODO: Write your createPipeline function here
// - It should let you add step functions
// - It should let you run them all in order on some input


// CLOSURE: when buttons are clicked, corresponding function needs to be added to a pipeline array so they can be run in order

function createPipeline(input) {// input is inputText
   const stepArr = [];
   return {//returns obj with .add(fn) and .run(initialValue)
    add: function(fn) { //fn is arg of function that was clicked
        //Event - when button is clicked, add fn to array

    },
    run: function(initialValue) {}
   }
    
}

// variables for the form and input
const userForm = document.getElementById('userForm');
const userInput = document.getElementById("userText");


userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formInput = userInput.value;
   inputText = formInput;
   return inputText;
})

// create variables for JS to note if button is clicked
// take inputText 
// transform inputText, then reasign inputText val 
/*AM I DOING THIS RIGHT??
Each of these variables checks if button is clicked and, if so, invokes the add method in createPipline
NEXT: make the add method add the variable to the array*/
const capButton = document.getElementById('uppercase-button').addEventListener('click', function() {
   createPipeline.add(transformObj.capitalize(inputText));    
});
const trimButton = document.getElementById('trim-button').addEventListener('click', function() {
    createPipeline.add(transformObj.trimIt(inputText));
});
const appendButton = document.getElementById('append-button').addEventListener('click', function() {
    createPipeline.add(transformObj.appendExclamation(inputText));
});
// for each button, add event listener with params of "click", function () -> whatever should happen when clicked
const runButton = document.getElementById('run-button').addEventListener('click', function() {
    if (!inputText) {
        // print message telling user to input something before pressing run button
    } else { // call each function in the array in order, passing the updated inputText in to each

    }

});



// TODO: Wire up the DOM
// - Grab the input box, buttons, step list, and output
// - When a transform button is clicked, add that step to the pipeline and show it in the list
// - When "Run Pipeline" is clicked, run the pipeline on the input value and display the result
