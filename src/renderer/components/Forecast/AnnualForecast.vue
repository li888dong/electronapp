<script>
    import Pagenation from '@/components/Pagenation'

    export default {
        name: 'annualforecast',
        data() {
            return {
				modalShow:false,
                cur: 1,
                all: 5,
				msg: '',
				columns6: [
					{
						title: '企业名称',
						width: 200,
						key: 'n1'
					},
					{
						title: '1月',
						key: 'n2'
					},
					{
						title: '2月',
						key: 'n3'
					},
					{
						title: '3月',
						key: 'n4'
					},
					{
						title: '4月',
						key: 'n5'
					},
					{
						title: '5月',
						key: 'n6'
					},
					{
						title: '6月',
						key: 'n7'
					},
					{
						title: '7月',
						key: 'n8'
					},
					{
						title: '8月',
						key: 'n9'
					},
					{
						title: '9月',
						key: 'n10'
					},
					{
						title: '10月',
						key: 'n11'
					},
					{
						title: '11月',
						key: 'n12'
					},
					{
						title: '12月',
						key: 'n13'
					},
					{
						title: '合计',
						key: 'n14'
					},
					{
						title: '修改人',
						key: 'n15'
					},
					{
						title: '确认人',
						key: 'n16'
					},     
					{
						title: '状态',
						key: 'n17'
					},               
					{
						title: '操作',
						key: 'change',
						render: (h, params) => {
							return h('div', [
								h('span', {
									style: {
										marginRight: '5px',
										color:'#36c ',
										cursor:'pointer'
									},
									on: {
										click: () => {
											this.modalShow = true
										}
									}
								}, '修改')								
							])
						}
					}
				],
				data6: [
					{
						n1: '河南众企联合售电有限公司',
						n2: '0',
						n3: '0',
						n4: '0',
						n5: '0',
						n6: '0',
						n7: '0',
						n8: '0',
						n9: '0',
						n10: '0',
						n11: '0',
						n12: '0',
						n13: '0',
						n14: '0',
						n15: '王朝辉',
						n16: '王朝辉',
						n17: '已确认',
					},
					{                
						n1: '河南滴滴有限公司',
						n2: '0',
						n3: '0',
						n4: '0',
						n5: '0',
						n6: '0',
						n7: '0',
						n8: '0',
						n9: '0',
						n10: '0',
						n11: '0',
						n12: '0',
						n13: '0',
						n14: '0',
						n15: '王朝辉',
						n16: '王朝辉',
						n17: '已确认',
					},
				],
				cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: '',
				timeList: [
					{
                        value: 'beijing',
                        label: '2011'
                    },
                    {
                        value: 'shanghai',
                        label: '2012'
                    },
                    {
                        value: 'shenzhen',
                        label: '2013'
                    },
                    {
                        value: 'hangzhou',
                        label: '2014'
                    },
                    {
                        value: 'nanjing',
                        label: '2015'
                    },
                    {
                        value: 'chongqing',
                        label: '2016'
                    }
				]
            }
        },
	    methods:{
            pageListen: function (data) {
                this.msg = '当前页码：' + data
            }
        },
        components:{
            'pagenation':Pagenation
	    }
    }
</script>
<template>
	<div class="main-container relative">
		<div class="main-container-panel">
				<div class="header">
					<h3>年度预测</h3>
				</div>
				<Row>
					<div class="tab">
						<Col span='8' class="btn-group ">
							<Button class="Button" type="primary">上一年</Button>
							<i-select :model.sync="model1" style="width:100px" placeholder='年度选择'>								
								<i-option v-for="item in timeList" :value="item.value" :key = 'item.id'>{{ item.label }}</i-option>
							</i-select>
							<Button class="Button" type="primary">下一年</Button>
							
							<i-select :model.sync="model1" style="width:100px" placeholder='区域选择'>								
								<i-option v-for="item in cityList" :value="item.value" :key = 'item.id'>{{ item.label }}</i-option>
							</i-select>
						</Col>
					</div>
					<Col span='4' offset="12" class="search-box btn-group relative fr" style="margin: 10px 0 0 0;">
						<i class="iconfont icon-search absolute"></i><input type="search"><button class="button btnSelected">搜索</button>
					</Col>
				</Row>
				<div class="table-container">
					<Table border ref="selection" :columns="columns6" :data="data6"></Table>
					<!-- <table width="100%" cellspacing="2" style="margin-top: 60px;">
						<thead>
							<tr>
								<th>企业名称</th>
								<th>01月</th>
								<th>02月</th>
								<th>03月</th>
								<th>04月</th>
								<th>05月</th>
								<th>06月</th>
								<th>07月</th>
								<th>08月</th>
								<th>09月</th>
								<th>10月</th>
								<th>11月</th>
								<th>12月</th>
								<th>合计</th>
								<th>修改人</th>
								<th>确认人</th>
								<th>状态</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>河南众企联合售电</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>144.55</td>
								<td>6665554.12</td>
								<td>修改人</td>
								<td>确认人</td>
								<td>状态</td>
								<td style="cursor: pointer;color: #36c" @click="modalShow = true">修改</td>
							</tr>
						</tbody>
					</table> -->
				</div>
				<div v-if="modalShow" class="modal">
					<div class="header">河南众企联合售电有限公司</div>
					<div class="table-container">
						<table width="100%" cellspacing="2" style="margin-top: 15px;">
							<thead>
							<tr>
								<th>2017年月份</th>
								<th>01月</th>
								<th>02月</th>
								<th>03月</th>
								<th>04月</th>
								<th>05月</th>
								<th>06月</th>
								<th>07月</th>
								<th>08月</th>
								<th>09月</th>
								<th>10月</th>
								<th>11月</th>
								<th>12月</th>
								<th>合计</th>

							</tr>
							</thead>
							<tbody>
								<tr>
									<td>户号12345</td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td>355555.55</td>
								</tr>
								<tr>
									<td>户号12345</td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td><input type="text"></td>
									<td>355555.55</td>
								</tr>
								<tr>
									<td>合计</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355555.55</td>
								</tr>
								<tr>
									<td>系统预测</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355555.55</td>
								</tr>
								<tr>
									<td>偏差值</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355.55</td>
									<td>355555.55</td>
								</tr>
							</tbody>
						</table>
						<div class="btn-group" style="margin-left: 40%;">
							<button class="button btnSelected" @click="modalShow = false">确认</button>
							<button class="button" @click="modalShow = false">取消</button>
						</div>
					</div>
				</div>
				<Row class="fenYe">
					<Col span="5" style="margin: 14px">
						<Button type="primary" style="margin-left: 20px">批量确认</Button>
						<Button type="primary">导入</Button>
					</Col>
					<Col span="10">
						<Page :total="100" show-total show-elevator></Page> <Button type="primary">确定</Button>
					</Col>
				</Row>
			<!-- <div class="table-page absolute">
				<span>共44444条记录</span><span>123页</span>
				<span>第 <select name="" id="">
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
							<option value="1">1</option>
						</select>页</span>
			</div>
			<pagenation class="absolute" style="bottom: 20px;right: 40px; " :cur.sync="cur" :all.sync="all" v-on:btn-click="pageListen"></pagenation> -->
		</div>		
	</div>
</template>
<style scoped>
.main-container-panel{
	background-color: #fff;
	padding: 10px;
	height: 945px;
}

.header h3{
	height: 40px;
	border-bottom: 1px solid #E5E5E5;
	background-color: #fff;
	padding-left: 10px;
	padding-top: 10px;
	font-size: 16px;
	font-weight: 400;     
}
.tab .btn-group{
	padding-top: 10px;
	padding-bottom: 15px;
}

.tab button i{
	color: black;
	font-size: 10px;
}
.btn-group input{
	height: 30px;
	width: 200px;
	padding-left: 26px;
}
.btn-group i{
	left: 10px;
	top: 4px;
}


.table-container th{
	height: 30px;
	background-color: #f6f6f6;

}
.table-container td{
	text-align: center;
	height: 30px;
} 
.modal{
		width: 1600px;
		height: 300px;
		background-color: #fff;
		border: 1px solid #828282;
		position: absolute;
		top: 20%;
    	left: 0;
		z-index: 5;
	}
.modal .header{
	height: 50px;
	line-height: 50px;
	padding-left: 20px;
	background-color: #f6f6f6;
	margin:0 auto;
}
.modal td input{
	width: 100px;
	height: 30px;
}
.table-page{
	font-size: 14px;
	color: #36c;
	bottom: 20px;
	right: 300px;
} 


/* 分页的样式 */
.fenYe {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 50px;
    left: 0;
    text-align: center;
}
.fenYe table{
    border: 0;
}
.fenYe ul {
    display: inline-block;
}
.fenYe button{
    top: -12px;
    left: 12px;
}
</style>