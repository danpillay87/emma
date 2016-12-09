app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {


        $routeProvider
            .when('/Chargebee', {
                templateUrl: '/meet_emma/Profile/Chargebee',
                controller: 'ProfileController'
            })
            .when('/Performance',
            {
                templateUrl: '/meet_emma/Performance/performance',
                controller: 'PerformanceController'
            })
            .when('/Profile',
           {
               templateUrl: '/meet_emma/Profile/Profile',
               controller: 'ProfileController'
           })
            .when('/linkaccounts',
           {
               templateUrl: '/meet_emma/Profile/LinkAccounts',
               controller: 'ProfileController'
           })
            .otherwise(
           {
               templateUrl: '/meet_emma/Performance/performance',
               controller: 'PerformanceController'
           });

        //$locationProvider.html5Mode(true);
        // $locationprovider.html5mode(true)

    }]);