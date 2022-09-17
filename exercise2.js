fetch("https://jsonplaceholder.typicode.com/todos")

// In the body of the fetch, you are required to write 
// the code that creates a new array (todoTitles) containing 
// just the 
// titles of all the todos and then displays the array.
// Use the Array.map HOF in your solution. 

.then(response => response.json())
  .then(json => {
     const list = json
     const todoTitles = list.map(function(list) {
        return list.title;
     });
     console.log(todoTitles)
    })
  .catch(function(err) { 
    console.log(err);
  });