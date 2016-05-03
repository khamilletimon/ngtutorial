function MainController($scope, todos) {
    console.log(todos);
    var vm = this;
    vm.todos = todos.list;

    vm.remove = function(index) {
        todos.remove(index);
    };
}
