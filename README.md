# Pipeline Playground (Starter)

## What is a "Pipeline"?
In programming, a **pipeline** just means:  
*A sequence of steps that happen one after another, where the output of one step becomes the input of the next step.*  

Think of it like following a recipe or a smoothie bar:  
1. Start with `" hello "`  
2. Step 1: `trim` → `"hello"`  
3. Step 2: `uppercase` → `"HELLO"`  
4. Step 3: `append "!"` → `"HELLO!"`  

That’s it! You’ve built a little “pipeline” of steps to transform your input.

---

## Your Challenge
Build a small web page where you can:
- Type in some text
- Add steps (like “uppercase”, “trim”, “append !”)
- Run all the steps in order and see the final result

---

## Core Requirements
1. Write a function `createPipeline()` that returns an object with:
   - `.add(fn)` → adds a step (a function) to your pipeline
   - `.run(initialValue)` → runs all the steps in order and gives you the final result
2. Provide a few **prebuilt steps** you can add via the UI (e.g., `toUpperCase`, `trim`, `append("...")`).
3. Show the **final result** on the page (not just in the console).
4. Use **vanilla HTML, CSS, and JS** only (no frameworks).

---

## Stretch Goals (optional)
- Add a “memoize” mode: if the same input is run again, return a cached result.
- Add async steps (e.g., wait 1 second before transforming).
- Show the value **after each step** in a trace panel.
- Allow steps to be reordered or deleted.

---

## Getting Started
- Open `index.html` in your browser (no server needed).
- Use the provided input and buttons to add steps, then click **Run**.
- Your main code goes in `app.js`.

---

## Notes
- `prompt()` or `alert()` is okay for testing, but a simple text input and button is preferred.
- This is a **front-end only** project. Use vanilla HTML, CSS, and JavaScript.

---

## Submission (optional)
- Fork this repo, push your code, and add 3–5 sentences to the README under **“What I learned.”**
- Screenshot or short GIF encouraged.

---

## Support
- **Optional drop-ins:** Tue & Thu, 1–2 PM (co-working / Q&A with fellows).
- You can work solo or pair up — your choice.

## What I learned
- How to connect JS to HTML and make them interactive
   - add eventListeners
      - but don't invoke the function within them
   - dynamically add text to a webpage
      - when adding to a list, the createElement func has to be inside each individual eventListener if I need to create a new element for each thing.  Otherwise it just replaces previously created elements
- The importance of diagramming out all the steps first
   - Needed a flowchart to figure out what I was missing and where it needed to take place
   - create clear variable names for each part of the flowchart because it gets really difficult to change them later
- With closure funcs, remember to assign a new variable name to each new user instance of calling that function