# gulp-ng1
基于gulp对angular1项目web部分做模块化处理的项目模版
angular：v1.3.9
angular-ui-router：v0.2.13

## 目录
	- gulpfile.js : gulp配置文件
	- package.json : gulp依赖包
	- src : 项目源文件目录
	- src/font : 字体样式
	- src/img : 图片资源
	- src/less : less目录
	- src/lib : 引用的js插件和扩展（默认有angular和angular-ui-router）
	- src/tmp : html页面及模版
	- src/scr/main.js : angular初始化
	- src/js/config/ : 控制器／指令／service／路由／请求等配置
	- src/js/controller/ : 控制器模块
	- src/js/directive/ : 指令模块
	- src/js/service/ : service模块

## gulp命令
 	gulp: 编译并watch
	gulp copy_xx(tmp/css/js/font/img/lib): 编译／拷贝目录
	gulp clean_xx(tmp/css/js/font/img/lib): 删除目录
