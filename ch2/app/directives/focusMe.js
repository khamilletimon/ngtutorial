function focusMe($timeout, $parse) {
    return {
        restrict: 'A',
        link : function(scope, element, attrs) {
          var model = $parse(attrs.focusMe);
          scope.$watch(model, function(value) {
            if(value) { 
                  $timeout(function() {
                      element[0].focus();
                      element[0].setSelectionRange(0, element[0].selectionEnd);
                  });
            }
          });
        }
    };
  }