angularApp.controller('empCtrl', function($scope, empService){
    
    $scope.name = 'test'; // $scope is acting like model here

    $scope.employees = [];

    $scope.getEmployees = function(){
        empService.getEmployees().then(function(res){ 
            $scope.employees = res.data;
        });
    }
    
    $scope.clickTest = function(){
        $scope.name = 'Model Name Changed because of click';
    }

    $scope.init = function(){
        var date_input = $('input[name="date"]');  //our date input has the name "date"
        var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
        var options = {
            format: 'dd/mm/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        };
        date_input.datepicker(options);

        $scope.getEmployees();
    }

    
    $scope.init();
});