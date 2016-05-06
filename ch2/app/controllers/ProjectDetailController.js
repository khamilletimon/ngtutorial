function ProjectDetailController(projects, todos, projectDetail, projectTodos) {
    var vm = this;
    var init;
    
    init = function() {
        vm.project = projectDetail;
        vm.project.todos = projectTodos;
    };
    
    vm.remove = function(todo) {
        todos.removeTodo(todo).then(function(){
            vm.project.todos.splice(vm.project.todos.indexOf(todo), 1);
        });
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
            todos.updateTodo(todo, vm.newTodo).then(function(){
                vm.cancelEdit();
            });
        }
        
    };
    
    vm.add = function(todo, invalid, project_id) {
        if(invalid) {
            return false;
        }
        
        todos.addTodo(todo, project_id).then(function(){
            vm.newtodo = "";
        });
    };
    
    
    init();
}