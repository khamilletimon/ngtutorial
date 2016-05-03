function todos(){
    var todos = {};
    
    todos.list=["eat breakfast", "wash dishes", "clean the room"];
    
    todos.add = function(test){
       todos.list.push(test);  
    };
    
    todos.remove = function(index) {
        todos.list.splice(index, 1);
    };
    
    return todos;
    
}