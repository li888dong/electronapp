<script>
    export default {
        name: 'powerframe',
        data() {
            return {

            }
        },
        mounted(){

        },
        methods: {

        }
    }
</script>
<template>
	<div class="power-timeframe data-panel ">
		<h3 class="title">用电实时段分布</h3>
		<div class="power-timeframe-bar">
			<div class="power-timeframe-bar-low">谷段 <br> <span><span class="bar"
			                                                    v-bind:style="{width: 100 + 'px'}">50%</span>228Mw.时</span>
			</div>
			<div class="power-timeframe-bar-normal">平段 <br> <span><span class="bar"
			                                                       v-bind:style="{width: 50 + 'px'}">50%</span>228Mw.时</span>
			</div>
			<div class="power-timeframe-bar-high">峰段 <br> <span><span class="bar"
			                                                     v-bind:style="{width: 100 + 'px'}">50%</span>228Mw.时</span>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.power-timeframe {
		width: 410px;
		height: 202px;
		display: inline-block;
		vertical-align: top;
		margin-left: 20px;
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
		width: 400px;
		height: 150px;
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
		line-height: 35px;
		color: #a8a8a8;
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