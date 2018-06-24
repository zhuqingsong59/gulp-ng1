module.exports =[
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		//模板目录
		const templatedir = "./tmp/";
		//状态列表
		const stateList= [
			{state:'route1'},
			{state:'route2'}
			// {state:'route3'},
			// {state:'route4'}
		];

		//状态遍历配置 目前只考虑了最多两层路由的情况
		stateList.forEach(function(state){
			if(state.state.indexOf('.') > -1){
				var oneLevel = state.state.split('.')[0];
				var twoLevel = state.state.split('.')[1];
				$stateProvider.state(oneLevel+'.'+twoLevel,{
					url: '/'+ oneLevel +'/'+ twoLevel,
					templateUrl: templatedir + twoLevel + ".html",
					controller: twoLevel + 'Ctrl'
				})
			}
			else {
				$stateProvider.state(state.state,{
					url: '/'+state.state,
					params:state.params,
					cache:false,
					templateUrl: templatedir + state.state + ".html",
					controller: state.state + 'Ctrl'
				})
				// $stateProvider.state(state.state,{
				// 	url: '/'+state.state,
				// 	params:state.params,
        //   templateUrl: templatedir + state.state + ".html",
        //   controller: state.state + 'Ctrl',
				// 	resolve:{
        //     loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
        //             console.log(11);
        //             return $ocLazyLoad.load('./js/controller/'+state.state + 'Ctrl'+'.js')
        //     }]
        //   }
				// })
			}
		})
		// 默认跳转路径
		$urlRouterProvider.otherwise('/'+stateList[0].state);
	}
]
