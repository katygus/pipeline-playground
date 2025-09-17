// Pipeline Playground - Starter
// =============================

// TODO: Create an object to hold your transforms (e.g., toUpperCase, trim, appendExclamation)

// the object holds the functions
const transformObj ={
    input: undefined,
    toUpperCase: function() {
       return this.input.toUpperCase();
    },
    trim: function() {
        return this.input.trim();
    },
    appendExclamation: function() {
       const newString = this.input + '!';
       return newString;
    }

};
// TODO: Write your createPipeline function here
// - It should let you add step functions
// - It should let you run them all in order on some input

// create variables for JS to note if button is cliced
const runButton = document.querySelector('.run-button');
const capButton = document.querySelector('.uppercase-button');
const trimButton = document.querySelector('.trim-button');
const appendButton = document.querySelector('.append-button');
// for each button, add event listener with params of "click", function () -> whatever should happen when clicked

//Learned this on educative.io
//document.getElementById("-idName"-).innerText = "whatever I decide to say here";
document.getElementById(uppercase-button).addEventListener("click", function(){
    document.getElementById("output").innerText = //whatever the output of this function is
})


// CLOSURE: when buttons are clicked, corresponding function needs to be added to a pipeline array so they can be run in order

function createPipeline() {
   const stepArr = [];
   
   return {//returns obj with .add(fn) and .run(initialValue)
    add: function(fn) { //fn is arg of function that was clicked
        //Event - when button is clicked, add fn to array

    },
    run: function(initialValue) {}
   }
    
}

// TODO: Wire up the DOM
// - Grab the input box, buttons, step list, and output
// - When a transform button is clicked, add that step to the pipeline and show it in the list
// - When "Run Pipeline" is clicked, run the pipeline on the input value and display the result
