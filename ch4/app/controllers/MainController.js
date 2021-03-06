function MainController($scope) {
    $scope.data = {};

    $scope.$on("onSearched", function(event, keyword) {
        $scope.data.keyword = keyword;
    });
    
    $scope.clearSearch = function() {
        $scope.data = {};
        $scope.$broadcast("clearSearch", $scope.data.keyword);
    };
}
