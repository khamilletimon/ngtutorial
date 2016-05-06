function comments($http, $q, apiUrl) {
    var comments = {};
    
    comments.list = [];
    
    comments.getComments = function(todo_id) {
        var deferred = $q.defer();
        
        $http.get(apiUrl + '/todos/' + todo_id + "/comments").then(function(response){
            comments.list = response.data;
            deferred.resolve(comments.list);
        },function(error){
            deferred.reject(error);
        });
        
        return deferred.promise;
    };
    
    return comments;
}