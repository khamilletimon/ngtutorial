function TodoListController(todos, todoList) {
    var vm = this;
    var init;
    
    init = function() {
        vm.todos = todoList;
    };

    vm.remove = function(todo) {
        todos.removeTodo(todo);
    };
    
    vm.editTodo = function(todo) {
        vm.newTodo = angular.copy(todo);
    };
    
    vm.cancelEdit = function() {
        vm.newTodo = false;
    };
    
    vm.setAsDone = function(todo) {
        todos.updateTodo(todo);
    };
    
    vm.saveEdit = function(todo, form) {
        if(form.$invalid) {
            return false;
        }
        
        if(!form.$dirty) {
            vm.cancelEdit();
        } else {
            todos.updateTodo(todo, {id: vm.newTodo.id, title: vm.newTodo.title}).then(function(){
                vm.cancelEdit();
            });
        }
        
    };
    
    vm.add = function(todo, invalid) {
        if(invalid) {
            return false;
        }
        todos.addTodo(todo).then(function(){
            vm.newtodo = "";
        });
    };
    
    init();
}
