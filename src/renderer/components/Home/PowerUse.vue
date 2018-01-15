<script>
    import {ipcRenderer} from 'electron';
	export default {
	    name:'poweruse',
		props:['belong'],
		data(){
	        return{
				yigou:0,
		        yiyong:0,
		        chaochu:0,
		        piancha:0,
		        yiyongRate:0,
		        chaochuRate:0,
		        startWidth:500
	        }
		},
		mounted(){
            this.doAjax(this.belong);
            window.onresize=function(){
        		var width = ipcRenderer.sendSync('width-change','change');
        		console.log(width);
        		if(width > 1366){
        			  this.startWidth = 400;
        		}else{
        			 this.startWidth = 500;
        		}
        	 
        	}
		},
        computed:{
            cus_id:function () {
                return this.$store.getters.cus_id
            }
        },
        watch:{
            cus_id:function () {
                this.doAjax(this.belong);
            }
        },
		methods:{
		    doAjax(belong){
		        if (belong === 'com'){
                    this.$http.post(this.$api.USED_SCHEDULE,{com_id:this.$store.getters.com_id})
                        .then(res => {
                            console.log('公司用电实时进度',res);
                            this.yigou = res.data.data.purchased;
                            this.yiyong = res.data.data.actual_used;
                            this.chaochu = res.data.data.beyond;
                            this.piancha = res.data.data.dev;

//                            if (this.yigou<this.yiyong&&this.chaochu===0){
//                                this.chaochu=parseInt(Math.abs(this.yiyong - this.yigou)*100)/100||0;
//                                this.piancha=parseInt((this.chaochu/this.yigou)*100)/100||0;
//                            }

                            this.yiyongRate = parseInt(Math.min(this.yiyong,this.yigou)/(this.yigou+this.chaochu)*100)/100||0;
                            console.log('++++++',this.yiyongRate)
                            this.chaochuRate = parseInt((this.chaochu/this.yiyong)*100)/100||0;
                        }, err => {
                            this.$api.errcallback(err)
                        })
                        .catch(err=>{
                            this.$api.errcallback(err)
                        })
		        }else if (belong === 'cus'){
                    this.$http.post(this.$api.CLIENT_USED,{cus_id:this.cus_id})
                        .then(res => {
                            console.log('用户用电实时进度',res);
                            this.yigou = res.data.data.purchase;
                            this.yiyong = res.data.data.has_used;
                            this.chaochu = res.data.data.over_used;
                            this.piancha = res.data.data.used_dev;

                            if (this.yigou<this.yiyong&&this.chaochu===0){
                                this.chaochu=parseInt(Math.abs(this.yiyong - this.yigou)*100)/100||0;
                                this.piancha=parseInt((this.chaochu/this.yigou)*100)/100||0;
                            }

                            this.yiyongRate = parseInt(Math.min(this.yiyong,this.yigou)/(this.yigou+this.chaochu)*100)/100||0;
                            this.chaochuRate = parseInt((this.chaochu/this.yiyong)*100)/100||0;
                        }, err => {
                            this.$api.errcallback(err)
                        })
                        .catch(err=>{
                            this.$api.errcallback(err)
                        })
		        }

		    }
		}
	}
</script>
<template>
	<Card :class="{power_use_cus:belong==='cus',power_use_com:belong==='com'}">
		<h3 slot="title">
			用电实时进度
			<small>单位：<span style="color: #4FA8F9;display:inline;vertical-align:bottom">Mw.h</span> (每十五分钟一更新)</small>
		</h3>
		<div class="power-realTime-progress relative" :class="{power:belong==='com'}">

			<ul class="legend">
				<li> <i class="square legend-yigou"></i>已购电量</li>
				<li> <i class="square legend-yiyong"></i>已用电量</li>
				<li> <i class="square legend-chaochu"></i>超出电量</li>
			</ul>
			<div class="progress-bar absolute">
				<div class="progress-bar-frame frame-high" :style="{width:(startWidth*yiyongRate)+34+'px',maxWidth:startWidth+'px'}">{{(yiyong>yigou?100:(yiyongRate*100).toFixed(2))+'%'}}</div>
				<div class="progress-bar-frame frame-normal"></div>
				<div class="progress-bar-frame frame-low" v-if="chaochu !== 0"  :style="{width:(startWidth*chaochuRate)+'px',paddingLeft:25+'px'}"></div>
			</div>
			<div class="deviation-data">
				<ul>
					<li><span>已购:</span><strong>{{yigou}}</strong></li>
					<li><span>已用:</span><strong>{{yiyong}}</strong></li>
					<li><span>超出:</span><strong>{{chaochu}}</strong></li>
					<li><span>偏差:</span><strong>{{piancha}}</strong></li>
				</ul>
			</div>
		</div>
	</Card>
</template>
<style scoped>
	/*用电实时进度*/
	.power_use_cus {
		height: 202px;
	}
	.power_use_com {
		height: 100%;
	}
	.power{
		margin: 0 auto;
	}
	/*.power-realTime-progress {*/
		/*width: 500px;*/
		/*height: 140px;*/
		/*display: inline-block;*/
		/*vertical-align: middle;*/
	/*}*/

	small {
		color: #999999;
		font-weight:normal;
	}

	.power-realTime-progress .legend {
		position: absolute;
		top: 10px;
		left: 0px;
	}

	.power-realTime-progress .legend li {
		display: inline-block;
		vertical-align: top;
		margin-left: 15px;
	}

	.power-realTime-progress .legend .square {
		display: inline-block;
		width: 16px;
		height: 16px;
		margin-right: 5px;
		vertical-align: -4px;
		border: none;
	}

	.legend-yigou {
		background-color: #EEEEEE;
	}

	.legend-yiyong {
		background-color: #4FA8F9;
	}

	.legend-chaochu {
		background-color: #F35E7A;
	}

	.power-realTime-progress .progress-bar {
		width: 500px;
		height: 34px;
		border-radius: 34px;
		overflow: hidden;
		background-color: #EEEEEE;
		top: 50px;
		left: 15px;
	}

	.power-realTime-progress .progress-bar .progress-bar-frame {
		display: inline-block;
		vertical-align: top;
		height: 34px;
		font-size: 14px;
		color: white;
		text-align: center;
		line-height: 34px;
		position: absolute;
		box-sizing: border-box;
	}

	.frame-high {
		background-color: #4fa8f9;
		border-radius: 34px;
		border:1px solid transparent;
		top: 0;
		left: 0;
		z-index: 3;
	}
	.frame-normal {
		background-color: #eeeeee;
		border-top-right-radius: 34px;
		border-bottom-right-radius: 34px;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.frame-low {
		background-color: #FBCED7;
		border-top-right-radius: 34px;
		border-bottom-right-radius: 34px;
		border:2px dotted #F35E7A;
		top: 0;
		right: 0;
		z-index: 1;
	}

	.deviation-data {
		position: relative;
		top: 120px;
		width: 600px;
		height: 30px;
	}
	.deviation-data ul {
		padding: 0;
		margin-left: -10px;
		width: 600px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-around;
	}
	.deviation-data li {
		margin-top: -15px;
		width: 100px;
		height: 43px;
		position: relative;
	}

	.deviation-data li span, .deviation-data li strong {
		width: inherit;
		font-weight: normal;
	}

	.deviation-data li span {
		color: #6a6a6a;
	}

	.deviation-data li strong {
		font-size: 24px;
		color: #0089F0;
		position: absolute;
		top: -11px;
		left: 34px;
		font-weight: bold;
	}
	@media (min-width: 1365px) and (max-width: 1919px) {
	   .power-realTime-progress .progress-bar{
	   	 width:400px;
	   }
	   .deviation-data ul{
          width:450px;
	   }
	}

</style>