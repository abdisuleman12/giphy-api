var app = angular.module('myApp', []);

app.controller('GiphyController', ['$http', function ($http) {
    console.log('controller loaded');

    var self = this;

    self.search;

    self.searchGiphy = function (input) {
        var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
        baseUrl += 'q=' + input; 
        baseUrl += '&api_key=' + giphyAPIKey; 
        baseUrl += '&limit=5'

        console.log(baseUrl)

        $http.get(baseUrl).then(function (response) {
            console.log('search giphys ', response.data)
            self.search = response.data;
        })

    }

    self.random = { list : []};

    var giphyAPIKey = 'fe6211bc5035493fa403dc0b72064eb0';   // your API Key

    self.getRandomGiphy = function () {
        // example request:
        //http:api.giphy.com/v1/gifs/random&api_key=YOUR_API_KEY&limit=5
        console.log('button clicked')

        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += 'api_key=' + giphyAPIKey;    // api key 
        // baseUrl += '&limit=5'; // limit of results


        // <img ng-src = "{{vm.random.list.data.image_original_url}} " >

        $http.get(baseUrl).then(function (response) {
            console.log('random giphys ', response.data);
            self.random.list = response.data
            
            console.log('random' , self.random)

        });
    };



}]);
