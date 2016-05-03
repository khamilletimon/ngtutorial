function SearchController($scope) {
    $scope.search = {};

    $scope.doSearch = function() {
        $scope.$emit("onSearched", $scope.search.keyword);
        $scope.search.searched = true;
    };
    
    $scope.$on("clearSearch", function(event, keyword){
        $scope.search = {};
    });
    
    
}
