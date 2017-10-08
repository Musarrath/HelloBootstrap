angularApp.service('empService', function($http){
    
    var url = 'http://localhost:3000/employee';

    this.getEmployees = function(){
        return $http.get(url);
    }
    
});