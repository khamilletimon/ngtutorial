function FormController($scope, todos) {
    var vm= this;
    vm.todos = todos.list;
    
    vm.add = function(todo, invalid) {
        if(invalid) {
            return false;
        }
        todos.add(todo);
        vm.newtodo = "";
    };
}