function todos($http, $q, apiUrl){
    var todos = {};
   
    todos.list = [];
    
    todos.getTodos = function(project_id) {
        var deferred = $q.defer();
        
        $http.get(apiUrl + "/projects/" + project_id + "/todos").then(function(response){
            todos.list = response.data;

            deferred.resolve(todos.list);
        }, function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    todos.getTodo = function(todo_id) {
        var deferred = $q.defer();
        var todo;
        
        if(isNaN(todo_id*1)) {
            deferred.reject("Invalid id format");
            console.log(todo_id, "in first if");
        } else {
            if(todos.list.length > 0) {

                for(var key in todos.list) {
                    if(todos.list[key].id == todo_id) {
                        todo = todos.list[key];

                        break;
                    }
                }

                if(todo) {
                    deferred.resolve(todo);
                } else {
                    deferred.reject("Client not found");
                }
            } else {
                $http.get(apiUrl + "/todos/" + todo_id).then(function(response) {
                    deferred.resolve(response.data);
                }, function(error) {
                    deferred.reject(error);
                });
            }
        }

        return deferred.promise;
    };
    
    todos.addTodo = function(name, project_id) {
        var deferred = $q.defer();
        
        var position = todos.list.length || 0;
        
        $http.post(apiUrl + "/todos", {title: name, done: false, projectId: project_id, position: position}).then(function(response){
            todos.list.push(response.data);
            deferred.resolve(todos.list);
        }, function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    todos.removeTodo = function(todo) {
        var deferred = $q.defer();
        
        $http.delete(apiUrl + "/todos/" + todo.id).then(function(){
            deferred.resolve(todos.list);
        }, function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    todos.updateTodo = function(todo, $data) {
        var deferred = $q.defer();
        
        var data = $data || todo;
        
        $http.put(apiUrl + '/todos/' + todo.id, data).then(function(){
            angular.extend(todo, data);
            deferred.resolve(todos.list);
        },function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    return todos;
    
}