// In the body of the fetch, you are required to write the code that 
// computes the number of completed todos per user. 
// A user with no completed todos should not appear in the output. 
// Use the Array.reduce HOF in your solution.

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((total, todo) =>{
      if(todo.completed) {
         // using ? : conditional operator, shorthand for if-else statement.
        total[todo.userId] === undefined ? 
        (total[todo.userId] = 1) : 
        (total[todo.userId] += 1);
      }
      return total;
    }, []);
     console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });


// The map() method is used for creating a new array from an existing one, 
//applying a function to each one of the elements of the first array.

// The filter() method takes each element in an array and it applies a conditional statement against it. 
//If this conditional returns true, the element gets pushed to the output array. If the condition returns false, 
//the element does not get pushed to the output array.

// The reduce() method reduces an array of values down to just one value. To get the output value, 
//it runs a reducer function on each element of the array.