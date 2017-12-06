<script>
import myFenye from '@/components/Tool/myFenye'
	export default {
	    name:'usermanager',
		data(){
	        return{
				column1:[
					{
					    title:'登录ID',
						sortable:true,
						key:'dlid'
					},
					{
					    title:'申请时间',
                        sortable:true,

                        key:'sqsj'
					},
					{
					    title:'手机号码',
                        sortable:true,

                        key:'sjhm'
					},{
					    title:'绑定微信',
                        sortable:true,

                        key:'bdwx'
					},{
					    title:'上次登录时间',
                        sortable:true,

                        key:'scdlsj'
					},{
					    title:'用户密码',
                        sortable:true,

                        key:'yhmm',
					},{
					    title:'审核状态',
                        sortable:true,
                        key:'shzt',
                        render:(h,params)=>{
                            if(params.row.shzt ===0){
                                return h('span',{

                                },'未审核')
                            }else{
                                return h('span',{

                                },'已审核')
                            }
                        }
					},{
					    title:'操作',
                        key:'cz',
                        render: (h, params) => {
                            if (params.row.shzt === 0){
                                return h('div', [
                                    h('span', {

                                        style: {
                                            marginRight: '5px',
                                            color:'#4fa8f9 ',
                                            cursor:'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                console.log(params.row.dlid);
                                                this.userCheck(params.row.dlid,params.row.shzt);
                                            }
                                        }
                                    }, '未审核'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color:'#4fa8f9 ',
                                            cursor:'pointer'
                                        },
                                        on: {
                                            click: () => {
                                                console.log(params.index)

                                            }
                                        }
                                    }, '删除'),
                                ])
                            }else {
                                return h('div', [
                                    h('span', {

                                        style: {
                                            marginRight: '5px',
                                            color:'#999 ',
                                        },
                                    }, '审核'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color:'#4fa8f9 ',
                                            cursor:'pointer'
                                        },
                                        on:{
                                            click:()=>{
                                                console.log(params.row.dlid);
                                                this.userDelect(params.row.dlid);
                                            }
                                        }
                                    }, '删除'),
                                ])

                            }
                        }
					},
				],
		        tableData:[
			        {
			            dlid:'10101010',
				        sqsj:'2017-10-10 10:10:00',
				        sjhm:'13188888888',
				        bdwx:'13188888888',
				        scdlsj:'2017-10-10 10:10:00',
				        yhmm:'88888888',
				        shzt:1
			        }
		        ]
	        }
		},
		components : {
			'myFenye': myFenye,
		},
        methods:{
            userManage(){
            this.$http.post(this.$api.CLIENT_MANAGE,{cus_id:1}).then(res=>{
            console.log("用户管理",res);
            var data = res.data.data;
            for(var i=0;i<data.length;i++){
                var obj = {
                    dlid:data[i].id,
                    sqsj:data[i].created_at,
                    sjhm:'1234567890',
                    bdwx:data[i].weixin,
                    scdlsj:data[i].last_logintime,
                    yhmm:data[i].password,
                    shzt:data[i].status
                }
                this.tableData.push(obj);
            }
          },err=>{
            this.$api.errcallback(err);
          }).catch(err=>{
            this.$api.errcallback(err);
          })
            },
            userCheck(id,status){
                this.$http.put(this.$api.CLIENT_CHECK+id).then(res=>{
                    console.log("审核用户信息",res);
                    if(res.data.status){
                        status =1
                    }
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            userDelect(id){
                this.$http.delete(this.$api.CLIENT_DELECT_USER+id).then(res=>{
                    console.log("删除成功",res);
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            }
         
        },
        mounted(){
             this.userManage();
        }
	}
</script>
<template>
	<div class="client-container">
		<Card>
			<h3 slot="title">用户管理</h3>
			<div class="main">
                <Table :columns="column1" :data="tableData"></Table>
                <myFenye></myFenye>
            </div>
		</Card>
	</div>
</template>
<style scoped>
.main {
    height: 780px;
}
</style>