<script>
	export default {
	    name:'agreementmanage',
		data(){
	        return{
				single:false,
		        modal1:false,
                column1: [

                    {
                        title: '用户电压等级',
                        key: 'n2',
                    },
                    {
                        title: '报装容量',
                        key: 'n3',
                    },
                    {
                        title: '用户类型',
                        key: 'n4',
                    },
                    {
                        title: '用户单元类型',
                        key: 'n5',
                    },
                    {
                        title: '用户地址',
                        key: 'n6',
                    }
                ],
		        data1:[
                {

                    n2: '10kv',
                    n3: '10ktv',
                    n4: '大工业用电',
                    n5: '第二产业(工业)',
                    n6: '河南省高新区电子商业大厦'
                },
                {

                    n2: '10kv',
                    n3: '10ktv',
                    n4: '大工业用电',
                    n5: '第二产业(工业)',
                    n6: '河南省高新区电子商业大厦'
                },
                {

                    n2: '10kv',
                    n3: '10ktv',
                    n4: '大工业用电',
                    n5: '第二产业(工业)',
                    n6: '河南省高新区电子商业大厦'
                },
                {

                    n2: '10kv',
                    n3: '10ktv',
                    n4: '大工业用电',
                    n5: '第二产业(工业)',
                    n6: '河南省高新区电子商业大厦'
                },
                {

                    n2: '10kv',
                    n3: '10ktv',
                    n4: '大工业用电',
                    n5: '第二产业(工业)',
                    n6: '河南省高新区电子商业大厦'
                }

            ]
	        }
		},
		methods:{
		    showModal(){
		        this.modal1 = true
		    }
		}
	}
</script>
<template>
	<div class="client-container relative">
		<panel class="ht-container">
			<h3 class="title-lv3">合同管理</h3>

			<div class="btn-group">
				<Button type="primary"><router-link to="/add-hetong" tag="span">+添加合同</router-link></Button>
			</div>
			<Row className="ht-content">
				<Col span="4" class="border">
					<div class="hetongChat">
						<div class="header">营销用户编号</div>
						<div style="margin-top: 20%;">
							<Checkbox v-model="single"></Checkbox>
							<span class="icon-container">
								<i class="iconfont icon-jishiben01" style="font-size: 32px;vertical-align: middle"></i>
							</span>
							<span style="color: #999;">12315848-99</span>

							<p style="width: 140px"><a style="padding-left: 70px;">查看</a></p>
						</div>
					</div>
				</Col>
				<Col span="16">
					<Table border="true" :columns="column1" :data="data1"></Table>
				</Col>
				<Col span="4" class="border">
					<div class="hetongChat">
						<div class="header">操作</div>
						<div class="caozuo">
							<p><a @click="showModal">修改</a><a>删除</a></p>
						</div>
					</div>
				</Col>
			</Row>
		</panel>
		<Modal v-model="modal1">
			<p>Content of dialog</p>
			<p>Content of dialog</p>
			<p>Content of dialog</p>
		</Modal>
	</div>
</template>
<style scoped>

	.ht-container{
		height:800px;
	}
	.ht-container td{
		text-align: center;
	}
	.ht-content{
		width: 100%;
		margin: 20px;
	}
	.hetongChat{
		background-color: #fff;
		height: 280px;
		width: 240px;
		text-align: center;
	}
	.hetongChat .header{
		background-color: #4FA8F9;
		height: 39px;
		color: #ffffff;
		text-align: center;
		line-height: 40px;
	}
	.border{
		border: 1px solid #eeeeee;
	}
	.caozuo a{
		display: inline-block;
		width: 40px;
		margin-top: 50%;
	}
	.icon-container{
		display: inline-block;
		width: 64px;
		height: 64px;
		background-color: #31C8D8;
		border-radius: 50%;
		color: #ffffff;
		line-height: 64px;
	}
</style>