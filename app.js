// Pipeline Playground - Starter
// =============================

let inputText; //global variable to hold the string input by the user

// object to hold transormation methods
const transformObj = {
  capitalize: function (input) {
    return input.toUpperCase();
  },
  trimIt: function (input) {
    return input.trim();
  },
  appendExclamation: function (input) {
    const newString = input + '!';
    return newString;
  },
}

// TODO: Write your createPipeline function here
// - It should let you add step functions
// - It should let you run them all in order on some input

//STEP 3
function createPipeline() {
  const stepArr = [];
  return {
    //returns obj with .add(fn) and .run(initialValue)
    add: function (fn) {
      //fn is arg of function that was clicked
      stepArr.push(fn); //Event - when button is clicked, add fn to array
    },
    run: function transformer(input, array = stepArr) {
      // recursion (initialValue is the stepArr -> REMOVED)

      if (!input) {
        alert(
          `Type something in the form and click the "submit" button.  Then choose how you want to transform your text.`
        ); // conditional to check if there is input to transform
      }
      if (!array[0]) {
        //base: input array is empty
        return input;
      } else {
        //recursive: reassign input to the result of invoking func at index 0
        const transformedInput = array[0](input);
        
        return transformer(transformedInput, array.slice(1));
        //return the function with a diff array index and transformed inputText
      }
    },
  };
}

const myPipeline = createPipeline();

//STEP 1 - when user types in the form and clicks submit, inputText is reassigned to the value of their input string
const userForm = document.getElementById('userForm');
const userInput = document.getElementById('userText');
userForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formInput = userInput.value;
  inputText = formInput; 
  return inputText;
    
});

/*
Each of these variables checks if button is clicked and, if so, invokes the add method in createPipline
*/
//STEP 2
const capButton = document.getElementById('uppercase-button');
capButton.addEventListener('click', function () {
    myPipeline.add(transformObj.capitalize);
  });
const trimButton = document.getElementById('trim-button');
trimButton.addEventListener('click', function () {
    myPipeline.add(transformObj.trimIt);
  });
const appendButton = document.getElementById('append-button');
appendButton.addEventListener('click', function () {
    myPipeline.add(transformObj.appendExclamation);
  });

function changeOutput(text) {
  // func to change existing text in output area to transformed text
  const preElem = document.getElementById('output');
  preElem.textContent = text;
}

//MAYBE need to change order for run button
//STEP 4
const runButton = document
  .getElementById('run-button')
  .addEventListener('click', function () {
    changeOutput(myPipeline.run(inputText));
  });

// TODO: Wire up the DOM
// - Grab the input box, buttons, step list, and output
// - When a transform button is clicked, add that step to the pipeline and show it in the list
// - When "Run Pipeline" is clicked, run the pipeline on the input value and display the result
