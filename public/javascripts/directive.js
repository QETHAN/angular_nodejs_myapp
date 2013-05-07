/**
 * Created with JetBrains WebStorm.
 * User: apple
 * Date: 13-5-7
 * Time: AM9:49
 * To change this template use File | Settings | File Templates.
 */
angular.module('components', [])
    .directive('helloworld', function() {
        return {
            restrict: 'E',
            scope: {
                name1: '@name'
            },
            // template: '<span>hello world</span>'
           templateUrl: '/partials/hello.html'
        }
    }).directive('markdown', function(){
            var converter = new Showdown.converter();
            return {
                restrict: 'E',
                link:function($scope,element,attrs) {
                    var htmlText = converter.makeHtml(element.text());
                    element.html(htmlText);
                }
            }
    });

angular.module('app',['components'])