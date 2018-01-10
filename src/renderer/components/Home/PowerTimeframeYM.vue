<script>
    export default {
        name: 'powertimeframe',
        data() {
            return {
                powerFrameType: 'month',
                yearData: {
                    width: '200'
                },
                monthData: {
                    width: '300'
                },
                barWidth: ''
            }
        },
	    mounted(){
            this.barWidth = this.yearData.width;
            this.changeType()
	    },
        methods: {
            changeType(type='month') {
                this.powerFrameType = type;
                console.log(this.powerFrameType)
                this.powerFrameType === 'month'?this.barWidth = this.monthData.width:this.barWidth = this.yearData.width
            }
        }
    }
</script>
<template>
	<div class="power-timeframe data-panel ">
		<h3 class="title">用电实时段分布</h3>
		<div class="btn-group fr btn-switch">
			<button class="button" v-bind:class="{btnSelected:powerFrameType==='month'}"
			        @click="changeType('month')">月
			</button><!--0
			-->
			<button class="button" v-bind:class="{btnSelected:powerFrameType==='year'}"
			        @click="changeType('year')">年
			</button>
		</div>
		<div class="power-timeframe-bar">
			<div class="power-timeframe-bar-low">谷段 <span><span class="bar"
			                                                    v-bind:style="{width: barWidth + 'px'}">50%</span>228Mw.时</span>
			</div>
			<div class="power-timeframe-bar-normal">平段 <span><span class="bar"
			                                                       v-bind:style="{width: barWidth + 'px'}">50%</span>228Mw.时</span>
			</div>
			<div class="power-timeframe-bar-high">峰段 <span><span class="bar"
			                                                     v-bind:style="{width: barWidth + 'px'}">50%</span>228Mw.时</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.power-timeframe {
		width: 605px;
		height: 202px;
		display: inline-block;
		vertical-align: top;
		margin-left: -5px;
	}

	.power-timeframe .title {
		margin-left: -10px;
	}

	.power-timeframe h3 {
		display: inline-block;
	}

	.power-timeframe .btn-switch {
		margin-top: 0;
	}

	.power-timeframe .btn-switch button {
		float: left;
		padding: 0;
		height: 24px;
		min-width: 24px;
		font-size: 12px;
		line-height: 24px;
		border-radius: 50%;
		margin-left: 20px
	}

	.power-timeframe .power-timeframe-bar {
		width: 540px;
		height: 150px;
		margin-top: 22px;
	}

	.power-timeframe .power-timeframe-bar > div {
		white-space: nowrap;
		width: 100%;
		height: 50px;
	}

	.power-timeframe .power-timeframe-bar > div > span {
		display: inline-block;
		vertical-align: middle;
		background-color: #eee;
		width: 92%;
		line-height: 37px;
		color: #a8a8a8;
		margin-left: 15px;
	}

	.power-timeframe .power-timeframe-bar > div > span .bar {
		background-color: #4FA8F9;
		margin-right: 10px;
		text-align: center;
		color: #fff;
		display: inline-block;
		transition: width 0.5s ease;
	}
</style>