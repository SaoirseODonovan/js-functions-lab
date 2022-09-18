// you are required to implement the exact requirement
// as Exercise 3 BUT replace the map-filter 

//ex.3
// creates an array of uncompleted todo objects, 
// where an object contains a 
// userID and todo title.


// combination with the reduce HOF.

// Hint: The initial value for the reducer's accumulator will be an empty array ( [] ).

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

     const completed2 = json.reduce((total,todo) =>{ 
        todo.completed
        // using ? : conditional operator, shorthand for if-else statement.
        ? total
        : total.push({userId: todo.userId, title: todo.title})
        return total;
        
     },[]);
     console.log(completed2)
    })
  
  .catch(function(err) { 
    console.log(err);
  });