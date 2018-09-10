#Instructions

### Part 1: 
In `app.js` create a `render()` function that will use a `console.log` to display every element of the `fullJobList` array in the console.


### Part 2: 
In `dom.js`, build an `append()` function that will append HTML content to every element in the `nodeList`. 

*Hint:* This function should look very similar to the `html()` function. Instead of overwriting the existing HTML, it should add to it. 

### Part 3: 
Use the `append()` function in `dom.js` to append a div containing each of the `fullJobList` elements to the div with the id of `#job-board`.

At this point, all the jobs should be rendering to the page. 

### Part 4: 
In `app.js`, create a new function called `addJob()` that gets the user input and pushes it onto the `fullJobList` array and then calls the `render()` function.

When the `#add` button is clicked, call the `addJob()` function. 

### Part 5: 
You'll notice that every time you add a new job, it renders the entire list again and you have duplicates. Let's fix that issue! 

In `dom.js` create an `empty()` function that loops through the `nodeList` and removes the existing `innerHTML` from each element. 

### Part 6: 
Inside the `render()` function, call the `empty()` function on the `#job-board` div to empty it before you append new content. This will prevent duplicates. 

### Part 7: 
Create a new empty array called `activeList`. 

In `app.js` create a new function called `searchJob()` that gets the user input and push every element in `fullJobList` that includes the user input onto the `activeList`. 

When the user clicks `search`, call the `searchJob()` function.

`console.log` the `activeList` to make sure it worked. 

### Part 8: 
At the end of the `searchJob()` function, call the `render()` function. You will notice that `render()` is still rendering the `fullJobList`. Let's change that to the `activeJobList`. 

Refresh the page and you'll notice that nothing is rendering. 

### Part 9: 
Add logic inside your `render()` function to render the `activeJobList` if it's not empty. Render the `fullJobList` otherwise. 

### Part 10:
Style the website. 

### Part 11:
Add some polish.