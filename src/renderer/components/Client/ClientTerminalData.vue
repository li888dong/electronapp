<script>
	export default {
	    name:'terminalData',
		data(){
	        return{
	            currentPDS:'1',
		        currentChartType:1,
		        selectDate:'',
                timeType:'今天',
				cldDetail:{
                    sjdl:'45452',
                    glys:'0.9',
                    dqzdxl:'3453',
                    dqzt:'运行中',
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
                monitoringShow:2,
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
                        data:['采集电量'],
                        icon:'rect',
                        left:5,
                        top:40,
                        itemWidth:16,
                        itemHeight:16,
                    },
                    color:['#4f8af9','#6ec71e','#f56e6a','#fc8b40','#818af8','#31c9d7','#f35e7a','#ab7aee','#14d68b','#edb00d'],
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
                        right: '13%',
                        bottom: '1%',
                        containLabel: true
                    },
                    series: [
                        {
                            name:'采集电量',
                            type: 'bar',
                            barWidth : 30,
                            data: [184, 160, 74, 60, 207, 158, 75, 156, 217, 253, 298, 30]
                        }
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
                chartOption3:{

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top:'40',
                        left: '10',
                        right: '13%',
                        bottom: 0,
                        containLabel: true
                    },
                    xAxis:{
                        type: 'category',
                        boundaryGap: false,
                        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45'],

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
                            type: 'line',
                            data: [10, 6, 12, 18, 24, 10, 6, 12, 18, 24,10, 6, 12, 18, 24,10, 6, 12, 18, 24, 10, 6, 12, 18, 24, 10, 6, 12, 18]
                        }

                    ]
                },
                chartOption4:{

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        top:'40',
                        left: '10',
                        right: '13%',
                        bottom: 0,
                        containLabel: true
                    },
                    xAxis:{
                        type: 'category',
                        boundaryGap: false,
                        data: ["10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15","10/4", "10/5", "10/6", "10/7", "10/8", "10/9", "10/10", "10/11", "10/12", "10/13", "10/14", "10/15"],

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
                            type: 'line',
                            data: [10, 6, 12, 18, 24, 10, 6, 12, 18, 24,10, 6, 12, 18, 24,10, 6, 12, 18, 24, 10, 6, 12, 18, 24, 10, 6, 12, 18]
                        }

                    ]
                },
	        }
		},
		mounted(){
            this.drawBar1(this.chartOption1);
            this.drawBar2(this.chartOption2);
            this.drawBar3(this.chartOption3);
            this.drawBar4(this.chartOption4);
            this.getTerminalDetail();
            this.onLineJiankng();
            this.equipmentAbnomal();
            this.equipmentLog();
            this.collectJiankongData();

        },
		methods:{
		    drawBar1(option = this.chartOption1) {
		        // 基于准备好的dom，初始化echarts实例
		        let compare1Chart = this.$echarts.init(document.getElementById('chart-main1'));
		        // 绘制图表
		        compare1Chart.setOption(option);
		    },
			drawBar2(option = this.chartOption2){
                // 基于准备好的dom，初始化echarts实例
                let compare1Chart = this.$echarts.init(document.getElementById('chart-jiankong'));
                // 绘制图表
                compare1Chart.setOption(option);
			},
			drawBar3(option = this.chartOption3){
                // 基于准备好的dom，初始化echarts实例
                let compare1Chart = this.$echarts.init(document.getElementById('chart-main2'));
                // 绘制图表
                compare1Chart.setOption(option);
			},
			drawBar4(option = this.chartOption4){
                // 基于准备好的dom，初始化echarts实例
                let compare1Chart = this.$echarts.init(document.getElementById('chart-main3'));
                // 绘制图表
                compare1Chart.setOption(option);
			},
            changeSelect(pds){
                this.currentPDS = pds;
            },
            getTerminalDetail(){
                var id = this.$store.getters.term_id;
                console.log(id);
                this.$http.get(this.$api.CLIENT_TERMINAL_DETAIL+id).then(res=>{
                    var data = res.data.data;
                    console.log(data);
                    this.cldDetail={
                    sjdl:'45452',
                    glys:data.power_factor,
                    dqzdxl:'3453',
                    dqzt:'运行中',
                    zcbj:'1705A0010052',
                    zdh:data.clientid,
                    sccj:data.factory,
                    ccbh:data.serial_no,
                    sblx:data.type,
                    cgrq:'2012-12-12',
                    ycip:'122.97.176.20',
                    txdz:data.mailing_address,
                    ycdk:data.port,
                    btl:'9600',
                    sxrq:'2017-10-21 18:36:40',
                    sshh:data.user_no,
                    gddw:'巩义市供电局',
                    byqrl:'120KW',
                    zt:'已启用'
                    }
                    console.log("2",res);
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            onLineJiankng(){
                var clientid = this.$store.getters.clientid;
                this.$http.post(this.$api.CLIENT_TERMINAL_ONLINE,{clientid:clientid}).then(res=>{
                    console.log("在线监控",res);
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            equipmentAbnomal(){
                this.$http.post(this.$api.CLIENT_EQUIPMENT_REMIND).then(res=>{
                    console.log("设备异常提醒",res);
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            equipmentLog(){
                var clientid = this.$store.getters.clientid;
                this.$http.post(this.$api.CLIENT_EQUIPMENT_LOG,{clientid:'clientid'}).then(res=>{
                     console.log("设备日志",res);
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            collectJiankongData(){
                var clientid = this.$store.getters.clientid;
                this.$http.post(this.$api.CLIENT_COLLECT_DATA,{
                    type:1,
                    time:1,
                    clientid:'fghgf'
                }).then(res=>{
                    console.log("采集监控",res);
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            }
		}
	}
</script>
<template>
	<div class="client-container">
		<Card>
			<h3 slot="title">终端详情</h3>
			<div slot="extra" class="btn-group" style="margin-top: -8px;">
				<Button type="primary" style="height: 28px;line-height: 16px" @click="$router.push('caiji-detail')">数据采集记录</Button>
				<Button type="primary" style="height: 28px;line-height: 16px" @click="$router.push('add-celiang')">+配置测量点</Button>
			</div>

			<Row>
				<div class="pds-container">
					<Row>
						<div class="tab-container">
							<my-tab v-on:changeSelect="changeSelect('1')" v-bind:type="currentPDS === '1'?'disabled':'normal'">10KV配电室-1</my-tab>
							<my-tab v-on:changeSelect="changeSelect('2')" v-bind:type="currentPDS === '2'?'disabled':'normal'">10KV配电室-2  </my-tab>
							<my-tab v-on:changeSelect="changeSelect('3')" v-bind:type="currentPDS === '3'?'disabled':'normal'">10KV配电室-3  </my-tab>
							<my-tab v-on:changeSelect="changeSelect('4')" v-bind:type="currentPDS === '4'?'disabled':'normal'">10KV配电室-4  </my-tab>
							<my-tab v-on:changeSelect="changeSelect('5')" v-bind:type="currentPDS === '5'?'disabled':'normal'">10KV配电室-5 </my-tab>
							<my-tab v-on:changeSelect="changeSelect('6')" v-bind:type="currentPDS === '6'?'disabled':'normal'">10KV配电室-6  </my-tab>
						</div>
					</Row>
					<Row>
						<div class="cld-detail">
							<Row>
								<Col span="10">
									<div class="left">

									<h4 class="title">测量点：河南银河铝业有限公司__鲁庄镇西候村候地工业园区_02 <span style="color: #ccc;">资产编号:{{cldDetail.zcbj}}</span></h4>
									<ul>
										<li style="background-color: #0089f0;"><strong>{{cldDetail.sjdl}}</strong><br><span>实际电量</span></li>
										<li style="background-color: #f57e6a;"><strong>{{cldDetail.glys}}</strong><br><span>功率因数</span></li>
										<li style="background-color: #ab7aee;"><strong>{{cldDetail.dqzdxl}}</strong><br><span>当前最大需量</span></li>
										<li style="background-color: #6ec71e;"><strong>{{cldDetail.dqzt}}</strong><br><span>当前状态</span></li>
									</ul>
								</div>
								</Col>
								<Col span="14">
									<div class="right">
									<table width="100%" cellspacing="15">
										<tbody>
										<tr>
											<td><span>终端号 : </span> {{cldDetail.zdh}}</td>
											<td><span>生产厂家 : </span> {{cldDetail.sccj}}</td>
											<td><span>出厂编号 : </span> {{cldDetail.ccbh}}</td>
											<td><span>设备类型 : </span> {{cldDetail.sblx}}</td>
											<td><span>采购日期 : </span> {{cldDetail.cgrq}}</td>
										</tr>
										<tr>
											<td><span>通信地址 : </span> {{cldDetail.txdz}}</td>
											<td><span>远程端口 : </span> {{cldDetail.ycdk}}</td>
											<td><span> 上线日期 :</span> {{cldDetail.btl}}</td>
											<td><span>所属户号 : </span> {{cldDetail.sshh}}</td>
											<td><span>供电单位 : </span> {{cldDetail.gddw}}</td>

										</tr>
										<tr>

											<td><span>所属变压器容量 : </span> {{cldDetail.byqrl}}</td>
											<td><span>状态 : </span> {{cldDetail.zt}}</td>

										</tr>
										</tbody>
									</table>
								</div>
								</Col>

							</Row>
						</div>
					</Row>
				</div>
			</Row>

		</Card>
		<Card class="terminal-chart">
			<h3 slot="title">数据图表</h3>
			<div slot="extra">
				<Row>
					<div style="display: inline-block;margin-right: 100px;">
						<div class="power-item" :class="{selected:currentChartType===1}" @click="monitoringShow = 2;currentChartType=1">电量</div>
						<div class="power-item" :class="{selected:currentChartType===2}" @click="monitoringShow = 3;currentChartType=2">电流</div>
						<div class="power-item" :class="{selected:currentChartType===3}" @click="monitoringShow = 3;currentChartType=3">电压</div>
						<div class="power-item" :class="{selected:currentChartType===4}" @click="monitoringShow = 3;currentChartType=4">有功功率</div>
						<div class="power-item" :class="{selected:currentChartType===5}" @click="monitoringShow = 3;currentChartType=5">无功功率</div>
						<div class="power-item" :class="{selected:currentChartType===6}" @click="monitoringShow = 3;currentChartType=6">视在功率</div>
						<div class="power-item" :class="{selected:currentChartType===7}" @click="monitoringShow = 3;currentChartType=7">功率因数</div>
						<div class="power-item" :class="{selected:currentChartType===8}" @click="monitoringShow = 3;currentChartType=8">负荷</div>
						<div class="power-item" :class="{selected:currentChartType===9}" @click="monitoringShow = 4;currentChartType=9">最大需量</div>
					</div>
					<div style="text-align: center;display: inline-block">
						<div class="power-item" :class="{selected:currentChartType===10}" @click="monitoringShow = 3;currentChartType=10">采集监控</div>
						<div class="power-item" :class="{selected:currentChartType===11}" @click="monitoringShow = 1;currentChartType=11">在线监控</div>
					</div>
				</Row>
			</div>
			<Row className="terminal-chart-content">
				<div v-show="monitoringShow===1" class="relative" style="height: 500px">
					<p style="margin: -10px 0 10px 10px;clear: both">今日在线时长 :<span style="color: #0089f0;font-size: 16px;"> 12小时35分36秒</span></p>
					<div class="chart-main" id="chart-jiankong" style="width: 1000px;height: 189px;float: left;">

					</div>
					<div class="unusual-commind fr" style="width: 400px;height: 477px;padding-right: 20px;margin-top: -15px;">
						<span style="font-size: 14px;display: inline-block;margin-bottom: 5px;">设备异常提醒</span>
						<Table :columns="columns2" :data="tableData2" height="468"></Table>
					</div >
					<div class="shebei-log absolute" style="left: 5px;top: 255px;">
						<span style="font-size: 14px;display: inline-block;margin-bottom: 5px;">设备日志</span>
						<Table :columns="columns" width="990" :data="tableData1" height="232">
						</Table>
					</div>
				</div>
				<div v-show="monitoringShow===2" class="relative">

					<div class="totalCount">
						当前月度总电量 :
						<span style="font-size: 16px;color: #0089f0">123654.00</span>Kw.h
						<Button class="refresh" type="primary"  style="float: right;margin-right: -15px;">
							<i class="iconfont icon-shuaxin"></i>
						</Button>
					</div>
					<div class="select-time">
						<ul style="position: relative;z-index: 999;left: 30px">
							<li><span>时间选择 :</span></li>
							<li>
								<RadioGroup v-model="timeType" type="button" v-on:on-change="timeTypeSwitch">
									<Radio label="今天"></Radio>
									<Radio label="昨天"></Radio>
									<Radio label="近7天"></Radio>
									<Radio label="近15天"></Radio>
									<Radio label="近30天"></Radio>
								</RadioGroup>
							</li>
							<li> <DatePicker :value="selectDate" type="daterange" placement="bottom-end" placeholder="选择时间区间"></DatePicker></li>
							<li>
								<span>时间粒度:</span>
							</li>
							<li>
								<Select style="width: 100px">
									<Option v-for="item in timeList" :value="item.value" :key="item.value" style="width: 80px">{{ item.label }}</Option>
								</Select>
							</li>
						</ul>
					</div>
					<div class="chart-main" id="chart-main1" style="width: 1640px;height: 430px;"></div>
				</div>
				<div v-show="monitoringShow===3" class="relative">
					<Button class="refresh fr" type="primary">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="chart-main2" style="width: 1640px;height: 430px;"></div>
				</div>
				<div v-show="monitoringShow===4" class="relative">
					<Button class="refresh fr" type="primary">
						<i class="iconfont icon-shuaxin"></i>
					</Button>
					<div class="chart-main" id="chart-main3" style="width: 1640px;height: 430px;"></div>
				</div>
			</Row>
		</Card>
	</div>
</template>
<style scoped>

	.pds-container{
		height: 200px;
	}
	.pds-container li{
		display: inline-block;
		vertical-align: middle;
	}
	.tab-container{
		margin-left: 20px;
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
		margin-top: 35px;
		margin-left: -130px;
	}
	.cld-detail ul{
		margin-top: 10px;
	}
	.cld-detail li{
		width: 87px;
		height: 87px;
		text-align: center;
		margin-right: 10px;
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
		height: 564px;
		overflow: hidden;
		background-color: #fff;
		margin-top: 15px;
	}

	.select-time{
		padding:0 0 15px 600px;
		border-bottom: 1px solid #eee
	}
	.terminal-chart li{
		display: inline-block;
		margin-right: 20px;
	}

	.power-item{
		display: inline-block;
		margin-left: 10px;
		margin-right: 0;
		height: 31px;
		text-align: center;
		line-height: 30px;
		width: 60px;
		cursor: pointer;
		color: #0089f0;
		position: relative;
		top: 2px;
		border: 1px solid transparent;
	}
	.power-item.selected{
		color: #666666;
		border: 1px solid #eee;
		border-bottom-color:transparent ;
		background-color: #fff;
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