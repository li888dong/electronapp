<script>
    export default {
        name: 'powertimeframe',
	    props:['baseWidth'],
        data() {
            return {
                powerFrameType: '月',
	            totalWidth:0,
                barWidth: '',
	            guduanData:200,
	            pingduanData:300,
	            fengduanData:500,
            }
        },
	    mounted(){
            this.totalWidth = this.baseWidth;
            this.changeType()
	    },
        methods: {
            changeType(type='月') {
                this.powerFrameType = type;
                console.log(this.powerFrameType);
            }
        }
    }
</script>
<template>
	<Card class="power-timeframe">
		<h3 slot="title">用电实时段分布</h3>
		<div slot="extra" class="btn-group">
			<RadioGroup v-model="powerFrameType" type="button" v-on:on-change="changeType">
				<Radio label="月"></Radio>
				<Radio label="年"></Radio>
			</RadioGroup>
		</div>
		<div class="power-timeframe-bar" :style="{width:totalWidth+'px'}">
			<div class="power-timeframe-bar-low">谷段 <span><span class="bar" v-if="guduanData !==0"
			                                                    v-bind:style="{width: totalWidth*guduanData/(guduanData+pingduanData+fengduanData) + 'px'}">20%</span>228Mw.时</span>
			</div>
			<div class="power-timeframe-bar-normal">平段 <span><span class="bar" v-if="pingduanData !==0"
			                                                       v-bind:style="{width: totalWidth*pingduanData/(guduanData+pingduanData+fengduanData) + 'px'}">30%</span>228Mw.时</span>
			</div>
			<div class="power-timeframe-bar-high">峰段 <span><span class="bar" v-if="fengduanData !==0"
			                                                     v-bind:style="{width: totalWidth*fengduanData/(guduanData+pingduanData+fengduanData) + 'px'}">50%</span>228Mw.时</span>
			</div>
		</div>
	</Card>
</template>
<style scoped>
	.power-timeframe {
		height: 202px;
	}
	.btn-group{
		margin-top: -8px;
	}
	.power-timeframe .power-timeframe-bar {
		height: 120px;
		margin-left: 20px;
	}

	.power-timeframe .power-timeframe-bar > div {
		white-space: nowrap;
		width: 100%;
		height: 42px;
	}

	.power-timeframe .power-timeframe-bar > div > span {
		display: inline-block;
		vertical-align: middle;
		background-color: #eee;
		width: 92%;
		line-height: 34px;
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