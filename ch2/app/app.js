var app = angular.module("MyApp", ['ngRoute']);

app.constant("apiUrl", "http://localhost:3000");

app.constant("appUrl", "http://localhost/ngtutorial/ch2");

app.factory('todos', ['$http', '$q', 'apiUrl', todos]);

app.factory('projects', ['$http', '$q', 'apiUrl', projects]);

app.factory('comments', ['$http', '$q', 'apiUrl', comments]);

app.config(['$routeProvider', 'appUrl', routeInit]);

app.controller('MainController', ['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event) {

        $location.url('/404');
        $location.replace();
    });
}]);

app.controller('ProjectListController', ['$scope', 'projects', ProjectListController]);

function routeInit($routeProvider, appUrl) {
    $routeProvider
        .when("/", {
            template: "<h1>Wecome!</h1>"
        })
        .when('/project/:projectId', {
            templateUrl: appUrl + '/app/views/todo-list.html',
            controller: ['projects', 'todos', 'projectDetail', 'projectTodos', ProjectDetailController],
            controllerAs: 'projectDetailCtrl',
            resolve: {
                projectDetail: ['$route','projects', function($route, projects){
                    return projects.getProject($route.current.params.projectId);
                }],
                projectTodos: ['$route','todos', function($route, todos){
                    return todos.getTodos($route.current.params.projectId);
                }]
            }
        })
        .when('/todo/:todoId', {
            templateUrl: appUrl + '/app/views/todo-detail.html',
            controller: ['todos', 'comments', 'todoDetail', 'todoComments', TodoDetailController],
            controllerAs: 'todoDetailCtrl',
            resolve: {
                todoDetail: ['$route','todos', function($route, todos){
                    return todos.getTodo($route.current.params.todoId);
                }],
                todoComments: ['$route','comments', function($route, comments){
                    return comments.getComments($route.current.params.todoId);
                }]
            }
        })
        .when('/404', {
            template: '<h2>Sorry, Page Not Found!</h2>'
        })
        .otherwise({
            redirectTo: '/'
        });
}

app.directive("focusMe" ,['$timeout', '$parse', focusMe]);