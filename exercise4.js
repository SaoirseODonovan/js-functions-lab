// you are required to write the code that 
// computes (and displays) the number of 
// completed todos. 
// Use the Array.reduce HOF in your solution.

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json
     const completed2 = completed.reduce(function(amount, completed) {
        return amount + completed.completed;
     });
     console.log("Amount completed: " + completed2.length)
    })
  .catch(function(err) { 
    console.log(err);
  });
