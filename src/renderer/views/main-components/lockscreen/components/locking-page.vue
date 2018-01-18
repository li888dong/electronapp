<template>
    <div style="width: 100%;height: 100%;background: #667aa6">
        <div class="unlock-con">
            <unlock :show-unlock="showUnlock" @on-unlock="handleUnlock"></unlock>
            <div class="date-chart" id="dateChart" style="width: 500px;height: 500px">

            </div>
        </div>
    </div>
</template>

<script>
import unlock from './unlock.vue';
import Cookies from 'js-cookie';
export default {
    components: {
        unlock
    },
    data () {
        return {
            showUnlock: false
        };
    },
	computed:{
		dateChart:function () {
			return this.$echarts.init(document.getElementById('dateChart'))
		},
		chartOption:function () {
			let _this = this;
			var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
			var lunarData = [];
            var pushData;
			for (var i = 1; i < new Date(year,month,0).getDate()+1; i++) {
                pushData = [
                	'2018-01-'+i,
                    i,
                   false,
                    false,
                    false
                ];
                if (i === 5) pushData[1] = true;
                if (i>12&&i<18) pushData[2] = true;
                if (i>15) pushData[3] = true;
                lunarData.push(pushData)
			}

			return  {
				tooltip: {
//					formatter: function (params) {
//						return '降雨量: ' + params.value[1].toFixed(2);
//					}
				},

				calendar: [{
					left: 'center',
					top: 'middle',
					cellSize: ['auto', 50],
					yearLabel: {show: false},
					orient: 'vertical',
					dayLabel: {
						firstDay: 1,
						nameMap: 'cn'
					},
					monthLabel: {
						show: false
					},
					range: year+'-'+month
				}],

				series: [{
					type: 'scatter',
					coordinateSystem: 'calendar',
					symbolSize: 1,
					label: {
						normal: {
							show: true,
							formatter: function (params) {
								return params.value[1]+'\n\n'
							},
							textStyle: {
								color: '#000'
							}
						}
					},
					data: lunarData
				},{
					type: 'scatter',
					coordinateSystem: 'calendar',
					symbolSize: 1,
					label: {
						normal: {
							show: true,
							formatter: function (params) {
								return params.value[2]+'\t'+params.value[3]+'\n\n'+params.value[4]
							},
							textStyle: {
								color: '#000'
							}
						}
					},
					data: lunarData
				},]
			};
		}
	},
    methods: {
    	drawChart(){
			// 基于准备好的dom，初始化echarts实例
			this.dateChart.clear();
			this.dateChart.setOption(this.chartOption);
        },
        handleUnlock () {
            let lockScreenBack = document.getElementById('lock_screen_back');
            this.showUnlock = false;
            lockScreenBack.style.zIndex = -1;
            lockScreenBack.style.boxShadow = '0 0 0 0 #667aa6 inset';
            this.$router.push({
                name: sessionStorage.getItem('last_page_name') // 解锁之后跳转到锁屏之前的页面
            });
        }
    },
    mounted () {
		this.drawChart();
        this.showUnlock = true;
        if (!document.getElementById('lock_screen_back')) {
            let lockdiv = document.createElement('div');
            lockdiv.setAttribute('id', 'lock_screen_back');
            lockdiv.setAttribute('class', 'lock-screen-back');
            document.body.appendChild(lockdiv);
        }
        let lockScreenBack = document.getElementById('lock_screen_back');
        lockScreenBack.style.zIndex = -1;
    }
};
</script>
