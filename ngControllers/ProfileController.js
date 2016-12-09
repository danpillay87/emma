app.controller('ProfileController', ['$rootScope', '$scope', '$http', '$location',
function ($rootScope, $scope, $http, $location) {
    //$scope.$on('$viewContentLoaded', Accordin);
    //$scope.$on('$viewContentLoaded',
    //    function () {
    //        window.scrollTo(0, 90);
    //    });


    $scope.ProfileDetails = null;
    
    $scope.subscriptions = null;

    $scope.Weeklysreviewlist = null;
    $scope.WeeklyReviewCount = 0;

    
    $scope.profiledata = function () {
        $http.get('/meet_emma/Profile/profiledata'
        ).success(function (data) {
            $scope.ProfileDetails = data;
        })
    }

    $scope.gotochargebee = function () {
        $http.get('/meet_emma/Profile/gotochargebee'
        ).success(function (data) {
            window.location.href = data;
        })
    }
    


    $scope.getaccounts = function () {
        $http.get('/meet_emma/Profile/getaccounts'
            ).success(function (data) {
                $scope.subscriptions = data;
                $scope.count = data.length;
            })
    }

    function DialogCtrl($scope, $mdDialog, Data) {
        $scope.Data = Data;
    }





}]);