<script>
    export default {
        name: 'powertimeframe',
	    props:['baseWidth'],
        data() {
            return {
                powerFrameType: 'month',
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
            changeType(type='month') {
                this.powerFrameType = type;
                console.log(this.powerFrameType);
            }
        }
    }
</script>
<template>
	<div class="power-timeframe data-panel ">
		<h3 class="title">用电实时段分布</h3>
		<div class="btn-group fr btn-switch">
			<Button v-bind:type="powerFrameType==='month'?'primary':'default'"@click="changeType('month')">月</Button>
			<Button v-bind:type="powerFrameType==='year'?'primary':'default'"@click="changeType('year')">年</Button>
			<!--<button class="button" v-bind:class="{btnSelected:powerFrameType==='month'}"-->
			        <!--@click="changeType('month')">月-->
			<!--</button>&lt;!&ndash;0-->
			<!--&ndash;&gt;-->
			<!--<button class="button" v-bind:class="{btnSelected:powerFrameType==='year'}"-->
			        <!--@click="changeType('year')">年-->
			<!--</button>-->
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
	</div>
</template>
<style scoped>
	.power-timeframe {
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

	.power-timeframe .power-timeframe-bar {
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