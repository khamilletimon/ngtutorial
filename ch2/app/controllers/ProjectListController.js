function ProjectListController($scope, projects) {
    var vm = this;
    var init;
    
    init = function() {
        projects.getProjects().then(function(result){
            vm.projects = result;
        });
    };
    
    vm.addProject = function(project_name, is_invalid) {
        if(is_invalid){
            return false;
        }
        
        projects.addProject(project_name).then(function(){
            vm.new_project_name = "";
        });
    };
    
    init();
}