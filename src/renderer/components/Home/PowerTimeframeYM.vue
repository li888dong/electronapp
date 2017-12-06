<script>
    export default {
        name: 'powertimeframe',
	    props:['baseWidth','belong'],
        data() {
            return {
                powerFrameType: '月',
	            totalWidth:0,
                barWidth: '',
	            guduanData:0,
	            pingduanData:0,
	            fengduanData:0,
            }
        },
	    mounted(){
            this.totalWidth = this.baseWidth;
            this.changeType()
	    },
        computed:{
            cus_id:function () {
                return this.$store.getters.cus_id
            }
        },
        watch:{
            cus_id:function () {
                this.doAjax(this.belong)
            }
        },
        methods: {
	        doAjax(belong){
	            if (belong === 'com'){
                    this.$http.post(this.$api.POWER_FRAME,{com_id:this.$store.getters.com_id,type:this.powerFrameType})
                        .then(res => {
                            console.log('企业用电时段分布',res);
                        }, err => {
                            this.$api.errcallback(err)
                        })
                        .catch(err=>{
                            this.$api.errcallback(err)
                        })
                }else if (belong === 'cus'){
                    this.$http.post(this.$api.CLIENT_TIMEFRAME,{com_id:this.cus_id,type:this.powerFrameType})
                        .then(res => {
                            console.log('用户用电时段分布',res);
                            this.guduanData = res.data.data.e1;
                            this.pingduanData = res.data.data.e2;
                            this.fengduanData = res.data.data.e3;
                        }, err => {
                            this.$api.errcallback(err)
                        })
                        .catch(err=>{
                            this.$api.errcallback(err)
                        })
	            }

            },
            changeType(type='月') {
                this.powerFrameType = type;
                this.doAjax(this.belong)
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
			                                                    v-bind:style="{width: totalWidth*guduanData/(guduanData+pingduanData+fengduanData) + 'px'}">20%</span>{{guduanData}}Mw.时</span>
			</div>
			<div class="power-timeframe-bar-normal">平段 <span><span class="bar" v-if="pingduanData !==0"
			                                                       v-bind:style="{width: totalWidth*pingduanData/(guduanData+pingduanData+fengduanData) + 'px'}">30%</span>{{pingduanData}}Mw.时</span>
			</div>
			<div class="power-timeframe-bar-high">峰段 <span><span class="bar" v-if="fengduanData !==0"
			                                                     v-bind:style="{width: totalWidth*fengduanData/(guduanData+pingduanData+fengduanData) + 'px'}">50%</span>{{fengduanData}}Mw.时</span>
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