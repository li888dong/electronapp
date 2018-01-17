import Main from '@/views/Main.vue';
import { resolve } from 'url';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '易采智电'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: resolve => { require(['@/views/form/article-publish/preview.vue'], resolve); }
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['@/views/main-components/lockscreen/components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); } },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: resolve => { require(['@/views/advanced-router/component/order-info.vue'], resolve); } }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['@/views/advanced-router/component/shopping-info.vue'], resolve); } }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } },
        { path: 'client', title: '客户', name: 'client_index', component: resolve => { require(['@/components/Client/Client.vue'], resolve); } ,
			children: [
				{
					path: '/client-zonglan',
					name: 'client-zonglan',
					title:'客户总览',
					component: require('@/components/Client/ClientZonglan').default
				},
				{
					path: '/client-compare',
					name: 'client-compare',
					title:'客户指数',
					component: require('@/components/Client/ClientIndexCompare').default
				},
				{
					path: '/client-piancha',
					name: 'client-piancha',
					title:'客户偏差',
					component: require('@/components/Client/ClientPianCha').default
				},
				{
					path: '/client-detail',
					name: 'client-detail',
					title:'客户详情',
					component: require('@/components/Client/ClientDetail').default
				},
				{
					path: '/client-terminal',
					name: 'client-terminal',
					title:'终端详情',
					component: require('@/components/Client/ClientTerminalData').default
				},
				{
					path: '/caiji-detail',
					name: 'caiji-detail',
					title:'终端采集记录',
					component: require('@/components/Client/ClientCaiji').default
				},
				{
					path: '/add-celiang',
					name: 'add-celiang',
					title:'添加测量点',
					component: require('@/components/Client/ClientAddCeliang').default
				},
				{
					path: '/hetong',
					name: 'agreement',
					title:'客户合同',
					component: require('@/components/Client/ClientAgreement').default
				},
				{
					path: '/user-manager',
					name: 'user-manager',
					title:'用户管理',
					component: require('@/components/Client/ClientUserManagement').default
				},
				{
					path: '/database',
					name: 'database',
					title:'电量数据库',
					component: require('@/components/Client/PowerDatabase').default
				},
				{
					path: '*',
					redirect: '/client-zonglan'
				}
			]
		},
		{
			path: '/client-zonglan',
			name: 'client-zonglan',
			title:'客户总览',
			component: require('@/components/Client/ClientZonglan').default
		},
		{
			path: '/client-compare',
			name: 'client-compare',
			title:'客户指数',
			component: require('@/components/Client/ClientIndexCompare').default
		},
		{
			path: '/client-piancha',
			name: 'client-piancha',
			title:'客户偏差',
			component: require('@/components/Client/ClientPianCha').default
		},
		{
			path: '/client-detail',
			name: 'client-detail',
			title:'客户详情',
			component: require('@/components/Client/ClientDetail').default
		},
		{
			path: '/client-terminal',
			name: 'client-terminal',
			title:'终端详情',
			component: require('@/components/Client/ClientTerminalData').default
		},
		{
			path: '/caiji-detail',
			name: 'caiji-detail',
			title:'终端采集记录',
			component: require('@/components/Client/ClientCaiji').default
		},
		{
			path: '/add-celiang',
			name: 'add-celiang',
			title:'添加测量点',
			component: require('@/components/Client/ClientAddCeliang').default
		},
		{
			path: '/hetong',
			name: 'agreement',
			title:'客户合同',
			component: require('@/components/Client/ClientAgreement').default
		},
		{
			path: '/user-manager',
			name: 'user-manager',
			title:'用户管理',
			component: require('@/components/Client/ClientUserManagement').default
		},
		{
			path: '/database',
			name: 'database',
			title:'电量数据库',
			component: require('@/components/Client/PowerDatabase').default
		},
		{
			path: '/planInfo',
			name: 'planInfo',
			title:'计划进度',
			component: require('@/components/planInfo').default
		},
		{
			path: '/AddClient',
			name: 'AddClient',
			title:'添加用户',
			component: require('@/components/Client/AddClient').default
		},
		{
			path: '/AddContractManagement',
			name: 'AddContractManagement',
			title:'长协合同管理',
			component: require('@/components/ContractManagement/AddContractManagement').default
		},
		{
			path: '/EquipmentException',
			name: 'EquipmentException',
			title:'设备入库',
			component: require('@/components/equipment/EquipmentException').default
		},
		{
			path: '/matching-management',
			name: 'matching-management',
			title:'交易匹配管理',
			component: require('@/components/TradeManagement/MatchingManagement').default
		},
		{
			path: '/add-hetong',
			name: 'addAgreement',
			title:'添加用户售电合同',
			component: require('@/components/Client/ClientAddAgreement').default
		},
		{
			path: '/import-data',
			name: 'import-data',
			title:'导入数据',
			component: require('@/components/Forecast/ImportData').default
		},
		{
			path: '/client-situation',
			name: 'client-situation',
			title:'客户概况',
			component: require('@/components/Client/ClientSituation').default
		},
		{
			path: '/weather',
			name: 'weather',
			component: require('@/components/Weather').default
		},
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/home',
        icon: 'icon-zonglan-hui',
        name: 'home',
        title: '概况',
        component: Main,
        children: [
            { path: 'index', title: '概况', name: 'home_index', component: resolve => { require(['@/components/home.vue'], resolve); } }
        ]
    },
    {
        path: '/access-test',
        icon: 'lock-combination',
        title: '权限测试页',
        name: 'accesstest',
        access: 0,
        component: Main,
        children: [
            { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: resolve => { require(['@/views/access/access-test.vue'], resolve); } }
        ]
    },
    // {
    //     path: '/international',
    //     icon: 'earth',
    //     title: {i18n: 'international'},
    //     name: 'international',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: resolve => { require(['@/views/international/international.vue'], resolve); } }
    //     ]
    // },
    {
        path: '/client_center',
        icon: 'icon-numberlist',
        title: '客户中心',
        name: 'client_center',
		access:1,
        component: Main,
        children: [
            {
                path: 'client_list',
                title: '客户列表',
                name: 'client_list',
                component: resolve => { require(['@/components/Client/ClientList.vue'], resolve); }
            },
        ]
    },
    {
        path: '/forecast',
        icon: 'icon-fenxi',
        title: '预测分析',
        name: 'forecast',
        component: Main,
        children: [
            {
                path: 'annual',
                title: '用户申报',
				icon:'icon-fenxi',
                name: 'forecast_annual',
                component: resolve => { require(['@/components/Forecast/UserForecast.vue'], resolve); }
            },
            {
                path: 'month',
                title: '月度预测',
				icon:'icon-xieyi',
                name: 'forecast_month',
                component: resolve => { require(['@/components/Forecast/MonthForecast.vue'], resolve); }
            },
            {
                path: 'year',
                title: '年度预测',
				icon:'icon-xieyi',
                name: 'forecast_year',
                component: resolve => { require(['@/components/Forecast/YearForecast.vue'], resolve); }
            }
        ]
    },
    {
        path: '/trade',
        icon: 'icon-jiaoyiguanli',
        title: '交易管理',
        name: 'trade',
        component: Main,
        children: [
            {
                path: '/trade_situation',
                title: '交易概况',
				icon: 'icon-jiaoyiguanli',
                name: 'situation',
                component: resolve => { require(['@/components/TradeManagement/TradeSituation.vue'], resolve); }
            },
			{
				path: '/biding_management',
				title: '竞价管理',
				icon:'icon-zhuzhuangtutubiao',
				name: 'biding',
				component: resolve => { require(['@/components/TradeManagement/BidManagement.vue'], resolve); }
			}
			,
            {
                path: '/changxie_management',
                title: '长协管理',
				icon:'icon-xieyi',
                name: 'changxie',
                component: resolve => { require(['@/components/TradeManagement/ChangxieManagement.vue'], resolve); }
            }
        ]
    },
	{
		path: '/equipment',
		icon: 'icon-shebei1',
		title: '设备管理',
		name: 'equipment',
		component: Main,
		children: [
			{ path: 'equ_situation', title: '设备概况',icon:'icon-shebei', name: 'equ_situation', component: resolve => { require(['@/components/Equipment/Equipment.vue'], resolve); } },
			{ path: 'equ_info', title: '资产信息',icon:'icon-lifangti', name: 'equ_info', component: resolve => { require(['@/components/Equipment/AssetInfo.vue'], resolve); } },
			{ path: 'equ_log', title: '统计日志',icon:'icon-lifangti', name: 'equ_log', component: resolve => { require(['@/components/Equipment/EquipmentStatus.vue'], resolve); } },
		]
	},
    {
		path: '/contract',
		icon: 'icon-wenjianjia',
		title: '合同管理',
		name: 'contract',
		component: Main,
		children: [
            { path: '/contract_changxie', 
              title: '长协合同',
              icon:'icon-jishiben01', 
              name: 'contract_changxie', 
              component: resolve => { require(['@/components/ContractManagement/ChangxieContract.vue'], resolve); } 
            },
            { path: '/contract_shoudian', 
              title: '售电合同',
              icon:'icon-jishiben01', 
              name: 'contract_shoudian', 
              component: resolve => { require(['@/components/ContractManagement/saleContract.vue'], resolve); } 
            },
        ]
    },
    {
        path:'/compare',
        icon:'icon-zhuzhuangtutubiao',
        title:'行业指数',
        name:'index-compare',
        component: Main,
        children: [
            { path: 'index_compare', title: '行业指数', name: 'index_compare', component: resolve => { require(['@/components/IndexCompare.vue'], resolve); } },
        ]
    },
    {
        path:'/sand',
        icon:'icon-qizi',
        title:'售电沙盘',
        name:'sand-table',
        component: Main,
        children: [
            { path: 'sand_table', title: '售电沙盘', name: 'sand_table', component: resolve => { require(['@/components/SandTable.vue'], resolve); } },
        ]
    }
    // {
    //     path: '/component',
    //     icon: 'social-buffer',
    //     name: 'component',
    //     title: '组件',
    //     component: Main,
    //     children: [
    //         {
    //             path: 'text-editor',
    //             icon: 'compose',
    //             name: 'text-editor',
    //             title: '富文本编辑器',
    //             component: resolve => { require(['@/views/my-components/text-editor/text-editor.vue'], resolve); }
    //         },
    //         {
    //             path: 'md-editor',
    //             icon: 'pound',
    //             name: 'md-editor',
    //             title: 'Markdown编辑器',
    //             component: resolve => { require(['@/views/my-components/markdown-editor/markdown-editor.vue'], resolve); }
    //         },
    //         {
    //             path: 'image-editor',
    //             icon: 'crop',
    //             name: 'image-editor',
    //             title: '图片预览编辑',
    //             component: resolve => { require(['@/views/my-components/image-editor/image-editor.vue'], resolve); }
    //         },
    //         {
    //             path: 'draggable-list',
    //             icon: 'arrow-move',
    //             name: 'draggable-list',
    //             title: '可拖拽列表',
    //             component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); }
    //         },
    //         {
    //             path: 'area-linkage',
    //             icon: 'ios-more',
    //             name: 'area-linkage',
    //             title: '城市级联',
    //             component: resolve => { require(['@/views/my-components/area-linkage/area-linkage.vue'], resolve); }
    //         },
    //         {
    //             path: 'file-upload',
    //             icon: 'android-upload',
    //             name: 'file-upload',
    //             title: '文件上传',
    //             component: resolve => { require(['@/views/my-components/file-upload/file-upload.vue'], resolve); }
    //         },
    //         {
    //             path: 'count-to',
    //             icon: 'arrow-graph-up-right',
    //             name: 'count-to',
    //             title: '数字渐变',
    //             component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
    //         },
    //         {
    //             path: 'split-pane-page',
    //             icon: 'ios-pause',
    //             name: 'split-pane-page',
    //             title: 'split-pane',
    //             component: resolve => { require(['@/views/my-components/split-pane/split-pane-page.vue'], resolve); }
    //         }
    //     ]
    // },
    // {
    //     path: '/form',
    //     icon: 'android-checkbox',
    //     name: 'form',
    //     title: '表单编辑',
    //     component: Main,
    //     children: [
    //         { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: resolve => { require(['@/views/form/article-publish/article-publish.vue'], resolve); } },
    //         { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['@/views/form/work-flow/work-flow.vue'], resolve); } }
	//
    //     ]
    // },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    // {
    //     path: '/tables',
    //     icon: 'ios-grid-view',
    //     name: 'tables',
    //     title: '表格',
    //     component: Main,
    //     children: [
    //         { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['@/views/tables/dragable-table.vue'], resolve); } },
    //         { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: resolve => { require(['@/views/tables/editable-table.vue'], resolve); } },
    //         { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
    //         { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } },
    //         { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: resolve => { require(['@/views/tables/table-to-image.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/advanced-router',
    //     icon: 'ios-infinite',
    //     name: 'advanced-router',
    //     title: '高级路由',
    //     component: Main,
    //     children: [
    //         { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: resolve => { require(['@/views/advanced-router/mutative-router.vue'], resolve); } },
    //         { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: resolve => { require(['@/views/advanced-router/argument-page.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/error-page',
    //     icon: 'android-sad',
    //     title: '错误页面',
    //     name: 'errorpage',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '错误页面', name: 'errorpage_index', component: resolve => { require(['@/views/error-page/error-page.vue'], resolve); } }
    //     ]
    // }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
