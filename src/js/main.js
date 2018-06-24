/* jshint esversion:6 */
//init app & convert post&put resquest 初始化app,转换angular post和put 参数传递方式
var app=angular.module(
	'app',
	['ui.router','oc.lazyLoad'],
	require('./config/requestConfig')
);

// state&router 状态路由配置
app.config(require('./config/stateConfig'));
console.log(app);
// controller declaration 控制器声明
const controllerConfig = require('./config/controllerConfig');
// for(var key in controllerConfig){
//   console.log(22);
// 	app.controller(key,controllerConfig[key]);
// }
app.controller('route1Ctrl',['$scope','$state',function($scope,$state){
    // $state.go('route2')
}]);

// service declaration 服务声明
const serviceConfig = require('./config/serviceConfig');
for(var key in serviceConfig){
	app.factory(key,serviceConfig[key]);
}

// directive declaration 指令声明
const directiveConfig = require('./config/directiveConfig');
for(var key in directiveConfig){
	app.directive(key,directiveConfig[key]);
}
