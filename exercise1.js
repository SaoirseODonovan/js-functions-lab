fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json
     const completed2 = completed.filter(function(completed) {
        return completed.completed === true;
     });
     console.log(completed2)
    })
  .catch(function(err) { 
    console.log(err);
  });

// You are required to complete the above script so 
// that the console.log statement displays only the 
// completed todos. 
// Use the Array.filter Higher Order Function in your solution.