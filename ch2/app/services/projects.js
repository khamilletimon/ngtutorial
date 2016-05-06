function projects($http, $q, apiUrl) {
    var projects = {};
    
    projects.list = [];
    
    projects.addProject = function(project_name) {
        var deferred = $q.defer();
        
        $http.post(apiUrl + "/projects", {name: project_name} ).then(function(results){
            projects.list.push(results.data);
            deferred.resolve(projects.list);
        }, function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    projects.getProjects = function(){
        var deferred = $q.defer();
        
        $http.get(apiUrl + "/projects").then(function(results){
            projects.list = results.data;
            
            deferred.resolve(projects.list);
        }, function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    projects.getProject = function(project_id) {
        var deferred = $q.defer();
        
        $http.get(apiUrl + "/projects/" + project_id ).then(function(results){
            deferred.resolve(results.data);
        }, function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    projects.getProjectTodos = function(project_id) {
        var deferred = $q.defer();
        
        $http.get(apiUrl + "/projects/" + project_id + "/todos").then(function(results){
            deferred.resolve(results.data);
        }, function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    return projects;
    
}