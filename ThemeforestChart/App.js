/// <reference path="../Scripts/angular.js" />
/// <reference path="ClientController.js" />




var app = angular.module("ClientWall", []);



app.filter("Jsondate", function () {
    var re = /\/Date\(([0-9]*)\)\//;
    return function (x) {

        if (x) {
            var m = x.match(re);
            return new Date(parseInt(m[1]));
        }
        else
            return null;
    };
});

function Jsondate(r) {
    if (r) {
        return new Date(parseInt(r.match(/\/Date\(([0-9]*)\)\//)[1]));
    }
    return r;
}
//Temp function for sum do not delete using in month end report in finanace
app.filter('Sum', function () {
    debugger;
    return function (obejct) {
        var Total = 0;
        for (i = 0; i < obejct.length; i++) {
            Total = Total + obejct[i].BillingRevenue;
        };
        return Total;
    };
});

app.directive('passwordValidate', function () {
    return {
        require: 'MpwROApp',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue) {

                scope.pwdValidLength = (viewValue && viewValue.length >= 8 ? 'valid' : undefined);
                scope.pwdHasLetter = (viewValue && /[A-z]/.test(viewValue)) ? 'valid' : undefined;
                scope.pwdHasNumber = (viewValue && /\d/.test(viewValue)) ? 'valid' : undefined;

                if (scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber) {
                    ctrl.$setValidity('pwd', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('pwd', false);
                    return undefined;
                }
            });
        }
    }
})



//$(DOMReady());

app.directive("chart", function () {
    return function ($scope) {
        chartready();
    }
});


function chartready() {
    $("[ui-jq]").each(function () {
        debugger;
        var self = $(this);
        var options = eval('[' + self.attr('ui-options') + ']');

        if ($.isPlainObject(options[0])) {
            options[0] = $.extend({}, options[0]);
        }

        uiLoad.load(jp_config[self.attr('ui-jq')]).then(function () {
            self[self.attr('ui-jq')].apply(self, options);
        });
    });

}

app.directive("circular", function () {
    return function ($scope) {
        DOMReady();
    }
});


function DOMReady() {
    //debugger;
    $(".knob").knob({
        readOnly: true,
        lineCap: 'butt',
        thickness: '0.09',
        font: 'arial'

    });


    $(".knob").val(0).trigger('change');
    $(".knob").each(function () {
        $(this).animate({
            value: $(this).attr("data-val-after")
        }, {
            duration: 3000,
            easing: 'swing',
            progress: function () {
                $(this).val(Math.round(this.value)).trigger('change');
                $(this).parent().parent().children('.circular-bar-content').children('.barLabel').html(this.value);
            }
        });
    });



}


app.directive('loading', ['$http', function ($http) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v) {

                if (v) {
                    $(elm).show();// .style.display = "block"; //show();
                } else {
                    $(elm).hide(); //elm.style.display = "none"; //elm.hide();
                }
            });
        }
    };

}]);




app.directive('myRepeatDirective', function () {
    return function (scope, element, attrs) {
        angular.element(element).css('color', 'blue');
        if (scope.$last) {
            window.alert("im the last!");
        }
    };
})
.directive('myMainDirective', function () {
    return function (scope, element, attrs) {
        // angular.element(element).css('border','5px solid red');
    };
});




app.controller('myController', function($scope) {
    var chart1 = {};
    chart1.type = "google.charts.Bar";
    chart1.displayed = false;
    chart1.data = {
        "cols": [{
            //id: "month",
            label: "Month",
            type: "string"
        }, {
            //id: "Clicks",
            label: "",
            type: "number"
        }],
        "rows": [{
            c: [{
                v: "January"
            }, {
                v: 19,
                f: "42 items"
            }]
        }, {
            c: [{
                v: "February"
            }, {
                v: 13
            }]
        }]
    };

    chart1.options = {
        "title": "Sales per month",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit",
            "gridlines": {
                "count": 10
            }
        },
        "hAxis": {
            "title": "Date"
        }
    };
    $scope.myChart = chart1;
}).value('googleChartApiConfig', {
    version: '1.1',
    optionalSettings: {
        packages: ['bar'],
        language: 'en'
    }
});