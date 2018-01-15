<style>
	.powerTimeFrame {
		height: 202px;
        width: 100%;

	}
	.title{
		display: inline-block;
		height: 20px;
		line-height: 20px;
		font-size: 16px;
		color: #1c2438;
		font-weight: 700;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
    /*@media (max-width: 1366px) {*/
        /*.powerTimeFrame{*/
            /*width: 382px;*/
        /*}*/
    /*}*/
</style>
<template>
	<Card class="powerTimeFrame">
		<h3 class="title">交易分布</h3>
		<div id="powerTimeFrame" style="position: absolute;left: 0;top: 0;bottom: 0;right: 0;">
		</div>
	</Card>

</template>

<script>
    export default {
        name: 'powertimeframe',
        data() {
            return {
	            tradeData:{
	                month:{
						bidding:0,
		                longpact:0
	                },
		            year:{
                        bidding:0,
                        longpact:0
		            }
	            }
            }
        },
	    computed:{
            chartOption:function () {
                return {
//          鼠标悬浮提示
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: '240',
                        top: '60',
                        itemWidth:16,
                        itemHeight:16,
                        data: ['市场竞价(月)', '长协(月)', '市场竞价(年)', '长协(年)']
                    },
                    series: [
                        {
                            name: '交易来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: ['0', '45px'],
                            center: ['135', '105'],
                            itemStyle: {
                                normal: {
                                    offset:5
                                },
                                emphasis: {}
                            },
                            label: {
                                normal: {
                                    show: false
                                }
                            },

                            data: [
                                {
                                    value: this.tradeData.year.longpact,
                                    name: '长协(年)',
                                    itemStyle: {
                                        normal: {
                                            color: '#ab7aee'
                                        },
                                        emphasis: {
                                            color: '#8757c9'
                                        }
                                    }
                                },
                                {
                                    value: this.tradeData.year.bidding,
                                    name: '市场竞价(年)',
                                    itemStyle: {
                                        normal: {
                                            color: '#31c9d7'
                                        },
                                        emphasis: {
                                            color: '#15aebd'
                                        }
                                    }
                                },
                            ],
                        },
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['65px', '80px'],
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            center: ['135', '105'],
                            data: [
                                {
                                    value: this.tradeData.month.longpact,
                                    name: '长协(月)',
                                    itemStyle: {
                                        normal: {
                                            color: '#edb00d'
                                        },
                                        emphasis: {
                                            color: '#d69d02'
                                        }
                                    }
                                },
                                {
                                    value: this.tradeData.month.bidding,
                                    name: '市场竞价(月)',
                                    itemStyle: {
                                        normal: {
                                            color: '#4fa8f9'
                                        },
                                        emphasis: {
                                            color: '#3077b9'
                                        }
                                    }
                                },
                            ]
                        }
                    ]
                };
            },
		    pieChart:function () {
			    return this.$echarts.init(document.getElementById('powerTimeFrame'))
            }
	    },
        mounted() {
			this.pieChart.showLoading();
            this.$http.post(this.$api.BID_FRAME,{com_id:this.$store.getters.com_id})
                .then(res => {
                    this.pieChart.hideLoading();
	                this.tradeData= res.data.data;
                    console.log('交易分布',this.tradeData);
                    this.drawLine();
                }, err => {
                    this.pieChart.hideLoading();
                    this.drawLine();
                    this.$api.errcallback(err)
                })
                .catch(err=>{
                    this.pieChart.hideLoading();
                    this.drawLine();
                    this.$api.errcallback(err)
                })

        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                this.pieChart.clear();
                this.pieChart.setOption(this.chartOption);
            }
        }
    }
</script>

