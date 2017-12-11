<script>
	export default {
	    name:'dataindex',
		data(){
	        return{
				indexData:{
                    "1": {
                        "num": 13,
                        "chainratio": 0,
                        "yearonyear": 0,
                        "devratio": 0
                    },
                    "2": {
                        "fordev": -1,
                        "chainratio": "1.00"
                    },
                    "3": {
                        "num": -1,
                        "chainratio": "1.00"
                    },
                    "4": {
                        "mdev": 0,
                        "chainratio": "0.00"
                    }
				},
		        trendUp:true,
		        trendDown:true
	        }
		},
		mounted(){
            this.$http.post(this.$api.DATA_INDEX,{com_id:this.$store.getters.com_id})
                .then(res => {
                    console.log('数据指数',res);
                    this.indexData = res.data.data
                }, err => {
                    this.$api.errcallback(err)
                })
                .catch(err=>{
                    this.$api.errcallback(err)
                })
		}
	}
</script>
<template>

	<Card class="data-index relative">
		<h3 slot="title">数据指数</h3>
		<Row gutter="15">

		<Col span="9">
			<Row className="data-title">
				<Col span="6">
					<span>实际月用电量</span>
				</Col>

				<Col span="6">
					<span>同比</span>
				</Col>

				<Col span="6">
					<span>环比</span>
				</Col>

				<Col span="6">
					<span>偏差</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="6">
				<span >{{indexData[1].num}}</span>
				</Col>

				<Col span="6">
				<span>{{indexData[1].devratio}}%<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>

				<Col span="6">
				<span>{{indexData[1].chainratio}}%<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>

				<Col span="6">
				<span>{{indexData[1].yearonyear}}<i class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>

				</Col>

			</Row>
		</Col>

		<Col span="5">
			<Row className="data-title">
				<Col span="12">
					<span >预测月偏差</span>
				</Col>
				<Col span="12">
					<span >环比</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="12">
				<span>{{indexData[2].fordev}}</span>

				</Col>
				<Col span="12">
				<span>{{indexData[2].chainratio}}%<i class="trend" v-bind:class="{trendUp:!trendUp,trendDown:trendDown}"></i></span>

				</Col>
			</Row>
		</Col>
		<Col span="5">
			<Row className="data-title">
				<Col span="12">
				<span>申报月偏差</span>
				</Col>
				<Col span="12">
				<span >环比</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="12">
				<span>{{indexData[3].num}}</span>

				</Col>
				<Col span="12">
				<span>{{indexData[3].chainratio}}%<i class="trend" v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>
			</Row>
		</Col>
		<Col span="5">
			<Row className="data-title">
				<Col span="12">
				<span>上月监测偏差</span>
				</Col>
				<Col span="12">
				<span >环比</span>
				</Col>
			</Row>
			<Row className="data-content">
				<Col span="12">
				<span>{{indexData[4].chainratio}}</span>
				</Col>
				<Col span="12">
				<span>{{indexData[4].mdev}}%<i class="trend " v-bind:class="{trendUp:trendUp,trendDown:!trendDown}"></i></span>

				</Col>
			</Row>
		</Col>
		</Row>

	</Card>

</template>
<style scoped>
	/*数据指数*/
	.data-index {
		height: 129px;
	}

	.data-title{
		background-color:#f2f7fb;
	}
	.data-content,.data-title{
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	
	.data-index h3{
		margin-bottom: 10px;
	}
	.trend {
		display: inline-block;
		width: 15px;
		height: 15px;
		line-height: 15px;
		margin-left: 5px;
		vertical-align: middle;
	}

	.trendUp {

		background: url('../../assets/icons.png') no-repeat -385px -85px;
	}

	.trendDown {
		background: url('../../assets/icons.png') no-repeat -385px -103px;
	}

</style>