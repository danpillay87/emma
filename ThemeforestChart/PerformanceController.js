

app.controller('PerformanceController', ['$rootScope', '$scope', '$http',
function ($rootScope, $scope, $http) { 


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

        $scope.clicksData = null;
    alert()
        $scope.getchartdata = function () {
            $http.get('/ClientWall/Performance/getChartdataWeekly'
                ).success(function (data) {
                    //$scope.clicks = data.clicks; $scope.prev_clicks = data.prev_clicks;
                    //$scope.cost = data.cost; $scope.prev_cost = data.prev_cost;
                    //$scope.conv = data.conv; $scope.prev_conv = data.prev_conv;
                    //$scope.cpc = data.cpc; $scope.prev_cpc = data.prev_cpc; 
                //    vm.strclicksData = "[\
                //                { data: [ [0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,7] ], label:'TV', points: { show: true, radius: 1}, splines: { show: true, tension: 0.4, lineWidth: 1, fill: 0.8 } },\
                //                { data: [ [0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3] ], label:'Mag', points: { show: true, radius: 1}, splines: { show: true, tension: 0.4, lineWidth: 1, fill: 0.8 } }\
                //                ],\
                //{\
                //colors: ['#23b7e5', '#7266ba'],series: { shadowSize: 3 },xaxis:{ font: { color: '#a1a7ac' } },yaxis:{ font: { color: '#a1a7ac' }, max:20 },\
                //grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#dce5ec' },tooltip: true,\
                //tooltipOpts: { content: 'Visits of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 10, y: -25 } }\
                    //    }";
                    debugger 
                        vm.strclicksData = "[\
                                    { data: [ [0,0],[1," + data.clicks1 + "],[2," + data.clicks2 + "],[3," + data.clicks3 + "],[4," + data.clicks4 + "],[5," + data.clicks5 + "] ], label:'Last Month Clicks', points: { show: true, radius: 1}, splines: { show: true,  lineWidth: 1, fill: 0.8 } },\
                                    { data: [ [0,0],[1," + data.prev_clicks1 + "],[2," + data.prev_clicks2 + "],[3," + data.prev_clicks3 + "],[4," + data.prev_clicks4 + "],[5," + data.prev_clicks5 + "]  ], label:'Previous Month Clicks', points: { show: true, radius: 1}, splines: { show: true, lineWidth: 1, fill: 0.8 } }\
                                    ],\
                    {\
                    colors: ['#23b7e5', '#7266ba'],series: { shadowSize: 3 },xaxis:{ font: { color: '#a1a7ac' } },yaxis:{ font: { color: '#a1a7ac' }, max:1000 },\
                    grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#dce5ec' },tooltip: true,\
                    tooltipOpts: { content: 'Visits of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 10, y: -25 } }\
                    }";
                


                    //alert(angular.toJson(vm.strclicksData));

                    $scope.clicksData = vm.strclicksData;

                    //bindcharts();
                })
        }
    
}]);