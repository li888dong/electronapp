<script>
import myFenye from '@/components/Tool/myFenye'

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
		},
		components : {
			'myFenye': myFenye,
		}
	}
</script>
<template>
	<div class="client-container relative">
		<Card class="ht-container">
			<p slot="title">合同管理</p>
			<div class="btn-group" slot="extra">
				<Button type="primary"><Icon type="plus"></Icon><router-link to="/add-hetong" tag="span"> 添加合同</router-link></Button>
			</div>
			<div class="ht-list">
				<Row className="ht-content">
					<Col span="4" class="border" style="border-right: 0;">
						<div class="hetongChat">
							<div class="header">营销用户编号</div>
							<div style="margin-top: 35%;">
								<!-- <Checkbox v-model="single"></Checkbox> -->
								<span class="icon-container">
									<i class="iconfont icon-jishiben01" style="font-size: 32px;vertical-align: middle"></i>
								</span>
								<p style="width: 166px"><a style="padding-left: 70px;">12315848-99</a></p>
							</div>
						</div>
					</Col>
					<Col span="16">
						<Table border="true" :columns="column1" :data="data1"></Table>
					</Col>
					<Col span="4" class="RigthBorder border">
						<div class="hetongChat">
							<div class="header">操作</div>
							<div class="caozuo">
								<p><router-link to="/add-hetong" tag="a">修改</router-link><a>删除</a></p>
							</div>
						</div>
					</Col>				
				</Row>
				<myFenye></myFenye>
			</div>
		</Card>
	</div>
</template>
<style scoped>

	.ht-container{
		height:856px;
	}
	.ht-container td{
		text-align: center;
	}
	.ht-list {

	}
	.ht-content{

	}
	.hetongChat{
		background-color: #fff;
		height: 279px;
		width: 237px;
		text-align: center;
	}
	.hetongChat .header{
		background-color: #f8f8f9;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border-bottom: 1px solid #dddee1;
	}
	.border{
		border: 1px solid #dddee1;
	}
	.RigthBorder {
		border-left: 0;
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
		margin-bottom: 6px;
	}
</style>