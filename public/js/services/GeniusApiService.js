// angular.module('MainService', []).factory('Main', ['$http', function($http) {
angular.module('cutupApp').factory('GeniusApi', ['$http', function($http) {

    geniusResponseFactory = {};
    geniusResponseFactory.get = function(searchStr) {
        return $http.get('/api/segments/'+ searchStr);
    };

    // geniusResponseFactory.geniusResults = [];
    return geniusResponseFactory;

}]);


