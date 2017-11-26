<script>
	import MyTab from '@/components/Tool/MyTab.vue'
	export default {
	    name:'terminalData',
		components:{
	        'my-tab':MyTab
		},
		data(){
	        return{
	            currentPDS:'1',
		        currentChartType:1,
		        selectDate:'',
				cldDetail:{
					zcbj:'1705A0010052',
					zdh:'1705A0010052',
					sccj:'深电能',
					ccbh:'236413132165',
					sblx:'终端表计',
					cgrq:'2012-12-12',
					ycip:'122.97.176.20',
					txdz:'1705A0010052',
					ycdk:'37173',
					btl:'9600',
					sxrq:'2017-10-21 18:36:40',
					sshh:'7020620794',
					gddw:'巩义市供电局',
					byqrl:'120KW',
					zt:'已启用'
				},
                monitoringShow:false,
		        timeList:[
			        {
			            label:'15分钟',
				        value:'15'
			        },
			        {
			            label:'一天',
				        value:'24'
			        },
			        {
			            label:'一个月',
				        value:'30'
			        },
		        ],
                columns:[
	                {
	                    title:'掉线时间',
		                sortable:true,
		                key:'dxsj'
	                },
	                {
	                    title:'上线时间',
                        sortable:true,
                        key:'sxsj'
	                },
	                {
	                    title:'在线时长',
                        sortable:true,
                        key:'zxsc'
	                },

                ],
		        columns2:[
			        {
			            title:'日期时间',
				        sortable:true,
				        key:'rqsj'
			        },
			        {
			            title:'事件',
				        sortable:true,
				        width:'80',
				        key:'sj'
			        },
			        {
			            title:'处理结果',
				        sortable:true,
				        key:'cljg'
			        },
		        ],
		        tableData1:[
			        {
			            dxsj:'07-09-23 00:00:00',
				        sxsj:'07-09-23 00:00:00',
				        zxsc:'20天20小时20分钟20秒',
				        ycip:'192.168.222.222',
				        dk:'8080'
			        },
			        {
			            dxsj:'07-09-23 00:00:00',
				        sxsj:'07-09-23 00:00:00',
				        zxsc:'20天20小时20分钟20秒',
				        ycip:'192.168.222.222',
				        dk:'8080'
			        },
			        {
			            dxsj:'07-09-23 00:00:00',
				        sxsj:'07-09-23 00:00:00',
				        zxsc:'20天20小时20分钟20秒',
				        ycip:'192.168.222.222',
				        dk:'8080'
			        },
			        {
			            dxsj:'07-09-23 00:00:00',
				        sxsj:'07-09-23 00:00:00',
				        zxsc:'20天20小时20分钟20秒',
				        ycip:'192.168.222.222',
				        dk:'8080'
			        },
			        {
			            dxsj:'07-09-23 00:00:00',
				        sxsj:'07-09-23 00:00:00',
				        zxsc:'20天20小时20分钟20秒',
				        ycip:'192.168.222.222',
				        dk:'8080'
			        },
		        ],
		        tableData2:[
			        {
			            rqsj:'07-09-23 00:00:00',
				        sj:'掉线',
				        cljg:'已自动登录'
			        },
			        {
			            rqsj:'07-09-23 00:00:00',
				        sj:'掉线',
				        cljg:'已自动登录'
			        },
			        {
			            rqsj:'07-09-23 00:00:00',
				        sj:'掉线',
				        cljg:'已自动登录'
			        },
			        {
			            rqsj:'07-09-23 00:00:00',
				        sj:'掉线',
				        cljg:'已自动登录'
			        },
		        ],
                chartOption1:{

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data:['采集电量', '修正电量'],
                        icon:'rect',
                        left:5,
                        top:40,
                        itemWidth: 20,             // 图例图形宽度
                        itemHeight: 14,            // 图例图形高度
                    },
                    color: ['#0089f0','#31c9d7'],
                    xAxis:{
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:0
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                    }
                    ,
                    yAxis: [
                        {
                            position:'left',
                            type: 'value',
                            boundaryGap: 0,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
                    grid: {
                        top:'80',
                        left: '10',
                        right: '10%',
                        bottom: '1%',
                        containLabel: true
                    },
                    series: [
                        {
                            name:'采集电量',
                            type: 'bar',
                            barWidth : 30,
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30]
                        },
                        {
                            name:'修正电量',
                            type: 'bar',
                            barWidth : 30,
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30].map(i=>i*1.5)
                        },
                    ]
                },
                chartOption2:{

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top:'10',
                        left: '10',
                        right: '13',
                        bottom: '15',
                        containLabel: true
                    },
                    xAxis:{
                        type: 'category',
                        data: ["10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15","10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:0
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },

                    }
                    ,
                    yAxis: [
                        {
                            position:'left',
                            type: 'value',
                            boundaryGap: 0,
	                        max:24,
                            interval:6,
                            minInterval: 1,
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                        }
                    ],
                    dataZoom: [
                        {
	                        type: 'slider',
	                        bottom:0,
	                        start:0,
		                    end:80
	                    }
                    ],
                    series: [
                        {
                            name: '今年',
                            type: 'bar',
	                        barWidth:'30',
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#83bff6'},
                                            {offset: 0.5, color: '#188df0'},
                                            {offset: 1, color: '#188df0'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: [0, 6, 12, 18, 24, 0, 6, 12, 18, 24,0, 6, 12, 18, 24,0, 6, 12, 18, 24, 0, 6, 12, 18, 24, 0, 6, 12, 18]
                        }

                    ]
                },
	        }
		},
		mounted(){
            this.drawBar1(this.chartOption1);
            this.drawBar2(this.chartOption2);

        },
		methods:{
		    drawBar1(option = this.chartOption1) {
		        // 基于准备好的dom，初始化echarts实例
		        let compare1Chart = this.$echarts.init(document.getElementById('chart-main'));
		        // 绘制图表
		        compare1Chart.setOption(option);
		    },
			drawBar2(option = this.chartOption2){

                console.log(this.monitoringShow);
                // 基于准备好的dom，初始化echarts实例
                let compare1Chart = this.$echarts.init(document.getElementById('chart-jiankong'));
                // 绘制图表
                compare1Chart.setOption(option);
			},
            changeSelect(pds){
                this.currentPDS = pds;
            },
		}
	}
</script>
<template>
	<div class="terminaldata-container relative">
		<div class="terminal-header">
			<h3 class="title">终端详情</h3>
			<div class="btn-group fr">
				<Button type="error" style="height: 28px;line-height: 16px"><router-link to="/caiji-detail" tag="span">数据采集记录</router-link></Button>
				<Button type="primary" style="height: 28px;line-height: 16px"><router-link to="/add-celiang" tag="span">+配置测量点</router-link></Button>
			</div>
		</div>
		<div class="pds-container">
			<div class="tab-container">
				<my-tab v-on:changeSelect="changeSelect('1')" v-bind:type="currentPDS === '1'?'zd':'normal'">10KV配电室-1</my-tab>
				<my-tab v-on:changeSelect="changeSelect('2')" v-bind:type="currentPDS === '2'?'zd':'normal'">10KV配电室-2  </my-tab>
				<my-tab v-on:changeSelect="changeSelect('3')" v-bind:type="currentPDS === '3'?'zd':'normal'">10KV配电室-3  </my-tab>
				<my-tab v-on:changeSelect="changeSelect('4')" v-bind:type="currentPDS === '4'?'zd':'normal'">10KV配电室-4  </my-tab>
				<my-tab v-on:changeSelect="changeSelect('5')" v-bind:type="currentPDS === '5'?'zd':'normal'">10KV配电室-5 </my-tab>
				<my-tab v-on:changeSelect="changeSelect('6')" v-bind:type="currentPDS === '6'?'zd':'normal'">10KV配电室-6  </my-tab>
			</div>

			<div class="cld-detail">
				<div class="left fl">

					<h4 class="title" style="margin-left: 5px;">测量点：河南银河铝业有限公司__鲁庄镇西候村候地工业园区_02 <small style="font-size: 12px;color: #999999">资产编号:{{cldDetail.zcbj}}</small></h4>
					<ul>
						<li style="background-color: #0089f0;"><strong>45454</strong><br><span>实际电量</span></li>
						<li style="background-color: #f57e6a;"><strong>0.9</strong><br><span>功率因数</span></li>
						<li style="background-color: #ab7aee;"><strong>3453</strong><br><span>当前最大需量</span></li>
						<li style="background-color: #6ec71e;"><strong>运行中</strong><br><span>当前状态</span></li>
					</ul>
				</div>
				<div class="right fl">
					<table width="860" cellspacing="10">
						<tbody>
							<tr>
								<td><span>终端号 : </span> {{cldDetail.zdh}}</td>
								<td><span>生产厂家 : </span> {{cldDetail.sccj}}</td>
								<td><span>出厂编号 : </span> {{cldDetail.ccbh}}</td>
								<td><span>设备类型 : </span> {{cldDetail.sblx}}</td>
								<td><span>采购日期 : </span> {{cldDetail.cgrq}}</td>
							</tr>
							<tr>
								<td><span>远程ip : </span> {{cldDetail.ycip}}</td>
								<td><span>通信地址 : </span> {{cldDetail.txdz}}</td>
								<td><span>远程端口 : </span> {{cldDetail.ycdk}}</td>
								<td><span>波特率 : </span> {{cldDetail.btl}}</td>
								<td><span>上线日期 : </span> {{cldDetail.sxrq}}</td>
							</tr>
							<tr>
								<td><span>所属户号 : </span> {{cldDetail.sshh}}</td>
								<td><span>供电单位 : </span> {{cldDetail.gddw}}</td>
								<td><span>所属变压器容量 : </span> {{cldDetail.byqrl}}</td>
								<td><span>状态 : </span> {{cldDetail.zt}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="terminal-chart">
			<h3 class="title fl">数据图表</h3>

			<div class="chart-header">
				<ul class="fl">
					<li :class="{selected:currentChartType===1}" @click="monitoringShow = false;currentChartType=1">电量</li>
					<li :class="{selected:currentChartType===2}" @click="monitoringShow = false;currentChartType=2">电流</li>
					<li :class="{selected:currentChartType===3}" @click="monitoringShow = false;currentChartType=3">电压</li>
					<li :class="{selected:currentChartType===4}" @click="monitoringShow = false;currentChartType=4">有功功率</li>
					<li :class="{selected:currentChartType===5}" @click="monitoringShow = false;currentChartType=5">无功功率</li>
					<li :class="{selected:currentChartType===6}" @click="monitoringShow = false;currentChartType=6">视在功率</li>
					<li :class="{selected:currentChartType===7}" @click="monitoringShow = false;currentChartType=7">功率因数</li>
					<li :class="{selected:currentChartType===8}" @click="monitoringShow = false;currentChartType=8">负荷</li>
					<li :class="{selected:currentChartType===9}" @click="monitoringShow = false;currentChartType=9">最大需量</li>
					<li :class="{selected:currentChartType===10}" @click="monitoringShow = false;currentChartType=10" style="margin-left: 500px;">采集监控</li>
					<li :class="{selected:currentChartType===11}" @click="monitoringShow = true;currentChartType=11" style="cursor: pointer;position: relative;z-index: 999">在线监控</li>
				</ul>
			</div>
			<div v-show="monitoringShow" class="relative" style="height: 500px">
				<br>
				<p style="margin: -10px 0 0 10px;">今日在线时长 :<span style="color: #0089f0;font-size: 16px;"> 12小时35分36秒</span></p>
				<div class="chart-main" id="chart-jiankong" style="width: 963px;height: 189px;float: left;">

				</div>
				<div class="unusual-commind fr" style="width: 420px;height: 217px;margin-top: 10px;">
					<span style="font-size: 14px;display: inline-block;margin-bottom: 5px;">设备异常提醒</span>
					<Table :columns="columns2" width="397" height="442" :data="tableData2"></Table>
				</div >
				<div class="shebei-log absolute" style="left: 5px;top: 255px;">
					<span style="font-size: 14px;display: inline-block;margin-bottom: 5px;">设备日志</span>
					<Table :columns="columns" width="947" :data="tableData1" height="232">
					</Table>
				</div>
			</div>
			<div v-show="!monitoringShow" class="relative">

				<div class="totalCount">
					当前月度总电量 :
					<span style="font-size: 16px;color: #0089f0">123654.00</span>Kw.h
					<i class="iconfont icon-shuaxin" style="float: right;margin-right: 20px;"></i>
				</div>
				<div class="select-time">
					<ul style="position: relative;z-index: 999;left: 115px">
						<li><span>时间选择 :</span></li>
						<li><Button type="primary">今天</Button></li>
						<li><Button type="default">昨天</Button></li>
						<li><Button type="default">近7天</Button></li>
						<li><Button type="default">近15天</Button></li>
						<li><Button type="default">近30天</Button></li>
						<li> <DatePicker :value="selectDate" type="daterange" placeholder="选择时间区间"></DatePicker></li>
						<li>
							<span>时间粒度:</span>
						</li>
						<li>
							<Select style="width:100px">
								<Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
						</li>
					</ul>
				</div>
				<div class="chart-main" id="chart-main" style="width: 1547px;height: 430px;"></div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.title{
		font-size: 14px;
	}
	.terminal-header .title{
		display: inline-block;
	}
	.terminaldata-container{
		top: -35px;
		left: 200px;

	}
	.terminal-header{
		width: 1440px;
		height: 50px;
		line-height: 50px;
		padding: 0 20px;
		background-color: #fff;
		margin-left: 20px;
		margin-top: 94px;
	}

	.pds-container{
		width: 1440px;
		height: 220px;
		background-color: #fff;
		margin-left: 20px;
		margin-top: 3px;
		padding-top: 15px;
	}
	.pds-container li{
		display: inline-block;
		vertical-align: middle;
	}
	.tab-container{
		margin-left: 25px;
		margin-bottom: 20px;
	}
	.tab-container span{
		margin-right: 5px;
	}
	.cld-detail{
		height: 120px;
	}
	.cld-detail .left{
		margin-top: 20px;
		margin-left: 20px;
	}
	.cld-detail .right{
		margin-top: 50px;
		margin-left: -130px;
	}
	.cld-detail ul{
		margin-top: 10px;
	}
	.cld-detail li{
		width: 87px;
		height: 87px;
		text-align: center;
		margin-left: 10px;
		box-sizing: border-box;
		color: #ffffff;
	}
	.cld-detail li strong,span{
		display: inline-block;
	}
	.cld-detail li strong{
		font-size: 18px;
		margin-top: 16px;
	}
	.cld-detail li span{
		margin-top: 16px;
	}
	.terminal-chart{
		width: 1440px;
		height: 564px;
		overflow: hidden;
		padding: 0 20px;
		background-color: #fff;
		margin-left: 20px;
		margin-top: 15px;
	}
	.terminal-chart .title{
		margin-top: 10px;
	}
	.select-time{
		padding:10px 0 10px 400px;
		border-bottom: 1px solid #eee
	}
	.terminal-chart li{
		display: inline-block;
		margin-right: 20px;
	}
	.chart-header{
		height: 30px;
		margin-top: 10px;
		clear: both;
	}
	.chart-header ul:nth-child(1){
		margin-left: 50px;
	}
	.chart-header ul{
		height: 30px;
		border-bottom: 1px solid #eee;
	}
	.chart-header li{
		display: inline-block;
		margin-left: 10px;
		margin-right: 0;
		height: 30px;
		text-align: center;
		line-height: 30px;
		width: 60px;
		cursor: pointer;
		color: #0089f0;
	}
	.chart-header li.selected{
		border: 1px solid #eee;
		background-color: #fff;
		border-bottom: none;
		position: relative;
		color: #000;
	}

	.terminal-chart th,.terminal-chart td{
		text-align: left;
	}
	.right td>span{
		color: #999999!important;
	}
	.terminal-chart th{
		background-color: #f6f6f6;
		height: 40px;
	}
	.totalCount{
		position: absolute;
		width: 1405px;
		top: 63px;
		left: 9px;
		z-index: 999;
	}
</style>