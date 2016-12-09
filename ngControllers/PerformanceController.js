app.controller('PerformanceController', ['$rootScope', '$scope', '$http',
function ($rootScope, $scope, $http) {
    //$scope.$on('$viewContentLoaded', Accordin);
    //$scope.$on('$viewContentLoaded',
    //    function () {
    //        window.scrollTo(0, 90);
    //    });


    $scope.keywords = null;
    $scope.adgroup = null;

    $scope.clicks = 0;
    $scope.prev_clicks = 0;

    $scope.cost = 0;
    $scope.prev_cost = 0;

    $scope.conv = 0;
    $scope.prev_conv = 0;

    $scope.cpc = 0;
    $scope.prev_cpc = 0;

    $scope.imps = 0;
    $scope.prev_imps = 0;

    var vm = this;
    vm.strclicksData;
    vm.strcostData;

    $scope.clicksData = null;  
    $scope.costData = null;
    



    $scope.adgroupdata = function () {
        $http.get('/meet_emma/Performance/adgroupdata'
        ).success(function (data) {
            debugger
            $scope.adgroup = data;
        })
    }


    $scope.keyworddata = function () {
        $http.get('/meet_emma/Performance/keyworddata'
        ).success(function (data) {
            $scope.keywords = data;
        })
    }

    $scope.getchartdata = function () {
        $http.get('/meet_emma/Performance/getChartdataWeekly'
            ).success(function (data) {
                $scope.clicks = data.clicks; $scope.prev_clicks = data.prev_clicks;
                $scope.cost = data.cost; $scope.prev_cost = data.prev_cost;
                $scope.conv = data.conv; $scope.prev_conv = data.prev_conv;
                $scope.cpc = data.cpc; $scope.prev_cpc = data.prev_cpc;

                vm.strclicksData = "[\
                                    { data: [ [0,0],[1," + data.clicks1 + "],[2," + data.clicks2 + "],[3," + data.clicks3 + "],[4," + data.clicks4 + "],[5," + data.clicks5 + "] ], label:'Last Month Clicks', points: { show: true, radius: 1}, splines: { show: true,  lineWidth: 1, fill: 0.8 } },\
                                    { data: [ [0,0],[1," + data.prev_clicks1 + "],[2," + data.prev_clicks2 + "],[3," + data.prev_clicks3 + "],[4," + data.prev_clicks4 + "],[5," + data.prev_clicks5 + "]  ], label:'Previous Month Clicks', points: { show: true, radius: 1}, splines: { show: true, lineWidth: 1, fill: 0.8 } }\
                                    ],\
                    {\
                    colors: ['#23b7e5', '#7266ba'],series: { shadowSize: 3 },xaxis:{ font: { color: '#a1a7ac' } },yaxis:{ font: { color: '#a1a7ac' }, max:1000 },\
                    grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#a7aaac' },tooltip: true,\
                    tooltipOpts: { content: 'Clicks of %x.1 week is %y.4',  defaultTheme: false, shifts: { x: 10, y: -25 } }\
                    }";
                $scope.clicksData = vm.strclicksData;

                vm.strcostData = "[\
                                    { data: [ [0,0],[1," + data.cost1 + "],[2," + data.cost2 + "],[3," + data.cost3 + "],[4," + data.cost4 + "],[5," + data.cost5 + "] ], label:'Last Month Cost', points: { show: true, radius: 1}, splines: { show: true,  lineWidth: 1, fill: 0.8 } },\
                                    { data: [ [0,0],[1," + data.prev_cost1 + "],[2," + data.prev_cost2 + "],[3," + data.prev_cost3 + "],[4," + data.prev_cost4 + "],[5," + data.prev_cost5 + "]  ], label:'Previous Month Cost', points: { show: true, radius: 1}, splines: { show: true, lineWidth: 1, fill: 0.8 } }\
                                    ],\
                    {\
                    colors: ['#23b7e5', '#7266ba'],series: { shadowSize: 3 },xaxis:{ font: { color: '#a1a7ac' } },yaxis:{ font: { color: '#a1a7ac' }, max:1500 },\
                    grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#a7aaac' },tooltip: true,\
                    tooltipOpts: { content: 'cost of %x.1 week is %y.4',  defaultTheme: false, shifts: { x: 10, y: -25 } }\
                    }";
                $scope.costData = vm.strcostData;
            })
    }
}]);