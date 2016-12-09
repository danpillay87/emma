
app.controller('LayoutController', ['$rootScope', '$location', '$cookieStore', '$http', '$scope',
    function ($rootScope, $location, $cookieStore, $http,  $scope) {

        //$scope.selectedItem = null;
        //$scope.selectedPublisherItem = null;
        //$scope.querySearchPublisher = querySearchPublisher;

        //$rootScope.$on('$viewContentLoaded', DOMReady);
        $rootScope.setUrl = function () {
            $rootScope.CuurentHash = $location.hash();
        }
        //$rootScope.BodyHeight = document.body.offsetHeight;
        //$rootScope.BodyHeight = {
        //    "height": (document.body.offsetHeight - 150) + 'px'
        //}
        $rootScope.Url = $location.url();
        $rootScope.absUrl = $location.absUrl();

        
        //$rootScope.Menus1 = null;
        //$http.get('/jsonconfig/menus.json').success(function (r) {
        //    debugger;
        //    $rootScope.Menus1 = r;
        //})

        $scope.menuclick = function () {
            debugger
            var _window = $(window),
                _mb = 768,
                wrap = $('.app-aside'),
                next,
                backdrop = '.dropdown-backdrop';
            var aside = document.getElementById("leftMenu");
            aside.className = "app-aside hidden-xs bg-black"; 
        }


    }]);