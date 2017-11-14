<script>
	export default {
	    name:'terminalData',
		data(){
	        return{
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
                chartOption1:{
                    title: {
                        text: "日电量同比",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'155',
                        top:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15","1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:0
                        }

                    }
                    ,
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
                    dataZoom: [ {
                        type: 'slider',
                        bottom:0,
                        startValue: '1968/10/4',
                        endValue: '1968/10/10'
                    }],
                    series: [
//                        { // For shadow
//                            type: 'bar',
//                            itemStyle: {
//                                normal: {color: 'rgba(0,0,0,0.05)'}
//                            },
//                            barGap:'-100%',
//                            barCategoryGap:'40%',
//                            data: [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
//                            animation: false
//                        },
                        {
                            name: '今年',
                            type: 'bar',
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
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30,184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30]
                        }

                    ]
                },
                chartOption2:{
                    title: {
                        text: "日电量同比",
                        textStyle:{
                            fontSize:'14'
                        },
                        left:'155',
                        top:'5'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis:{
                        type: 'category',
                        data: ["1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15","1968/10/4", "1968/10/5", "1968/10/6", "1968/10/7", "1968/10/8", "1968/10/9", "1968/10/10", "1968/10/11", "1968/10/12", "1968/10/13", "1968/10/14", "1968/10/15"],
                        nameTextStyle:{
                            fontSize:12
                        },
//	                    控制x轴隔几个显示
                        axisLabel :{
                            interval:0
                        }

                    }
                    ,
                    yAxis: [
                        {
                            position:'right',
                            type: 'value',
                            boundaryGap: 0
                        }
                    ],
                    dataZoom: [ {
                        type: 'slider',
                        bottom:0,
                        startValue: '1968/10/4',
                        endValue: '1968/10/10'
                    }],
                    series: [
//                        { // For shadow
//                            type: 'bar',
//                            itemStyle: {
//                                normal: {color: 'rgba(0,0,0,0.05)'}
//                            },
//                            barGap:'-100%',
//                            barCategoryGap:'40%',
//                            data: [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
//                            animation: false
//                        },
                        {
                            name: '今年',
                            type: 'bar',
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
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30,184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30]
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
			}
		}
	}
</script>
<template>
	<div class="terminaldata-container relative">
		<div class="terminal-header">
			<h3 class="title">终端详情</h3>
			<div class="btn-group fr">
				<button class="button"><router-link to="/caiji-detail">数据采集记录</router-link></button>
				<button class="button btnSelected"><router-link to="/add-celiang" tag="span">+配置测量点</router-link></button>
			</div>
		</div>
		<div class="pds-container">
			<ul>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
				<li class="pds">10KV配电室-2</li>
			</ul>
			<div class="cld-detail">
				<div class="left fl">

					<h4 class="title">测量点：河南银河铝业有限公司__鲁庄镇西候村候地工业园区_02</h4>
					<ul>
						<li><span>实际电量</span><br><span>45454</span></li>
						<li><span>功率因数</span><br><span>0.9</span></li>
						<li><span>当前最大需量</span><br><span>3453</span></li>
						<li><span>当前状态</span><br><span>运行中</span></li>
					</ul>
				</div>
				<div class="right fl">
					<table width="900" cellspacing="5">
						<legend>资产编号:{{cldDetail.zcbj}}</legend>
						<tbody>
							<tr>
								<td>终端号:{{cldDetail.zdh}}</td>
								<td>生产厂家:{{cldDetail.sccj}}</td>
								<td>出厂编号:{{cldDetail.ccbh}}</td>
								<td>设备类型:{{cldDetail.sblx}}</td>
								<td>采购日期:{{cldDetail.cgrq}}</td>
							</tr>
							<tr>
								<td>远程ip:{{cldDetail.ycip}}</td>
								<td>通信地址:{{cldDetail.txdz}}</td>
								<td>远程端口:{{cldDetail.ycdk}}</td>
								<td>波特率:{{cldDetail.btl}}</td>
								<td>上线日期:{{cldDetail.sxrq}}</td>
							</tr>
							<tr>
								<td>所属户号:{{cldDetail.sshh}}</td>
								<td>供电单位:{{cldDetail.gddw}}</td>
								<td>所属变压器容量:{{cldDetail.byqrl}}</td>
								<td>状态:{{cldDetail.zt}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="terminal-chart">
			<h3 class="title fl">数据图表</h3>
			<div class="select-time fr">
				<ul>
					<li>时间选择:</li>
					<li>今天</li>
					<li>昨天</li>
					<li>近7天</li>
					<li>近15天</li>
					<li>近30天</li>
					<li><input type="date"></li>
					<li>时间粒度:</li>
					<li><select name="" id="">
						<option value="5">5分钟</option>
					</select></li>
				</ul>
			</div>
			<div class="chart-header">
				<ul class="fl">
					<li class="selected">电量</li>
					<li>电流</li>
					<li>电压</li>
					<li>有功功率</li>
					<li>无功功率</li>
					<li>视在功率</li>
					<li>功率因数</li>
					<li>负荷</li>
					<li>最大需量</li>
				</ul>
				<ul class="fr">
					<li>采集监控</li>
					<li @click="monitoringShow = !monitoringShow" style="cursor: pointer;position: relative;z-index: 999">在线监控</li>
				</ul>
			</div>
			<div v-show="monitoringShow" class="relative" style="height: 500px">
				<div class="chart-main" id="chart-jiankong" style="width: 977px;height: 217px;float: left;">

				</div>
				<div class="unusual-commind fr" style="width: 400px;height: 217px;margin-top: 50px;">
					<table width="400" cellspacing="15">
						<thead>
							<tr>
								<th>时间日期</th>
								<th>事件</th>
								<th>处理结果</th>
							</tr>
						</thead>
						<tbody>

							<tr>
								<td>17-12-12 24:00:00</td>
								<td>掉线</td>
								<td>已自动登录</td>
							</tr>
							<tr>
								<td>17-12-12 24:00:00</td>
								<td>掉线</td>
								<td>等待登录</td>
							</tr>
							<tr>
								<td>17-12-12 24:00:00</td>
								<td>上报失败</td>
								<td>已补抄数据</td>
							</tr>
							<tr>
								<td>17-12-12 24:00:00</td>
								<td>上报失败</td>
								<td>等待抄数据</td>
							</tr>
						</tbody>

					</table>

				</div >
				<div class="shebei-log absolute" style="left: 80px;top: 300px;   ">
					<table width="840" cellspacing="15">
						<thead>
						<tr>
							<th>上线时间</th>
							<th>掉线时间</th>
							<th>在线时长</th>
							<th>远程ip</th>
							<th>端口</th>
						</tr>
						</thead>
						<tbody>
							<tr>
								<td>17-12-12 24:00:00</td>
								<td>17-12-12 24:00:00</td>
								<td>20天20小时20分钟20秒</td>
								<td>192.192.192.192</td>
								<td>1234</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div v-show="!monitoringShow" class="chart-main" id="chart-main" style="width: 1447px;height: 450px;">

			</div>
		</div>
	</div>
</template>
<style scoped>
	.terminal-header .title{
		display: inline-block;
	}
	.terminaldata-container{
		top: 60px;
		left: 205px;

	}
	.terminal-header{
		width: 1447px;
		height: 50px;
		line-height: 50px;
		padding: 0 20px;
		background-color: #fff;
		margin-left: 20px;
		margin-top: 94px;
	}
	.pds-container{
		width: 1447px;
		height: 176px;
		background-color: #fff;
		margin-left: 20px;
		margin-top: 3px;
		padding-top: 15px;
	}
	.pds-container li{
		display: inline-block;
		vertical-align: middle;
	}
	.pds{
		width: 90px;
		height: 30px;
		line-height: 30px;
		margin-left: 10px;
		text-align: center;
		border: 1px solid #333;
	}
	.cld-detail .left,.cld-detail .right{
		margin-top: 20px;
		margin-left: 20px;
	}
	.cld-detail .right{
		margin-left: 50px;
	}
	.cld-detail ul{
		margin-top: 10px;
	}
	.cld-detail li{
		width: 80px;
		height: 68px;
		line-height: 30px;
		background-color: #EAEDF1;
		text-align: center;
		margin-left: 5px;
	}
	.terminal-chart{
		width: 1447px;
		height: 580px;
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
		margin-top: 10px;
	}
	.terminal-chart li{
		display: inline-block;
		margin-right: 20px;
	}
	.chart-header{
		margin-top: 50px;
	}
	.chart-header ul{
		background-color: #F6F6F6;
		height: 50px;
	}
	.chart-header li{
		display: inline-block;
		vertical-align: bottom;
		margin-left: 20px;
		margin-top: 5px;
		height: 45px;
		text-align: center;
		line-height: 50px;
		width: 65px;
	}
	.chart-header li.selected{
		background-color: #fff;
	}
	.terminal-chart th,td{
		text-align: center;
		
	}
	.terminal-chart th{
		background-color: #f6f6f6;
		height: 40px;
	}
</style>