function FormController(todos) {
    var vm   = this;
    //vm.todos = todos.list;
    
    vm.add = function(todo, invalid) {
        if(invalid) {
            return false;
        }
        todos.addTodo(todo).then(function(){
            vm.newtodo = "";
        });
    };
}