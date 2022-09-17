// creates an array of uncompleted todo objects, 
// where an object contains a 
// userID and todo title.

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const todos = json;
        const uncompleted = todos.filter(function(todos) {
            return todos.completed === false;
        });
        const titles = uncompleted.map(function(uncompleted) {
            return {
                title: uncompleted.title,
                userId: uncompleted.userId
            }
        });
        console.log(titles);
    })

.catch(function(err) {
    console.log(err);
});