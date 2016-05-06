function TodoDetailController(todos, comments, todoDetail, todoComments) {
    var vm = this;
    var init;
 
    init = function() {
        vm.todo = todoDetail;
        vm.todo.comments = todoComments;
    };
    
    //console.log(vm.todo, vm.todo.comments);
    
    init();
}
