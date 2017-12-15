<script>
	export default {
	    name:'agreementmanage',
		data(){
	        return{
				single:false,
		        modal1:false,
                column1: [
                    {
                      title:'营销用户编号',
                      key:'user_no'
                    },

                    {
                        title: '用户电压等级',
                        key: 'vol_level',
                    },
                    {
                        title: '报装容量',
                        key: 'packing_capacity',
                    },
                    {
                        title: '用户类型',
                        key: 'unit_type',
                    },
                    {
                        title: '用户单元类型',
                        key: 'category',
                    },
                    {
                        title: '用户地址',
                        key: 'address',
                        width:'350'
                    }
                ],
		        agreementList:[{
		        	con_no:'',
		        	data1:[]

		        },],
            pageTotal:0,
            limit:16,
            currentPage:1,
            loading:true
	        }
		},
		methods:{
		    showModal(){
		        this.modal1 = true
		    },
		    userAgreement(){
		      this.$http.post(this.$api.CLIENT_CONTRACT_AGREEMENT,{cus_id:this.cus_id,page:this.currentPage,limit:this.limit}).then(res=>{
		       	     console.log("合同管理",res);
		       	     if(res.data.status){
		    		 	 this.agreementList[0].con_no = res.data.con_no;
		    		 	 this.agreementList[0].data1 = res.data.data.data;
		    		 	 this.pageTotal = res.data.data.total;
		    		 	 this.loading = false;
 		    		 }else{
 		    		 	 this.loading = false;
 		    		 }
		       },err=>{
		       	   this.loading = false;
		       	   this.$api.errcallback(err);
		       }).catch(err=>{
		       	    this.loading = false;
		       	    this.$api.errcallback(err);
		       })
		    },
		    pageChange(value){
		    	this.$http.post(this.$api.CLIENT_CONTRACT_AGREEMENT,{cus_id:this.cus_id,page:value,limit:this.limit}).then(res=>{
		    		 console.log('合同管理分页',res);
		    		if(res.data.status){
		    		 	 this.agreementList[0].con_no = res.data.con_no;
		    		 	 this.agreementList[0].data1 = res.data.data.data;
		    		 	 this.pageTotal = res.data.data.total;
		    		 	 this.currentPage = res.data.data.current_page;
		    		 	 this.loading = false;
 		    		 }else{
 		    		 	 this.loading = false;
 		    		 }

		    	},err=>{
		    		 this.loading = false;
		    		 this.$api.errcallback(err);
		    	}).catch(err=>{
		    		 this.loading = false;
		    		 this.$api.errcallback(err);
		    	})
		    }
		},
		computed:{
            cus_id:function () {
                return this.$store.getters.cus_id
            },
        },
        watch:{
        	cus_id:function(){
        		this.userAgreement();
        	}
        },
		components : {
		},
		mounted(){
			 this.userAgreement();
		}
	}
</script>
<template>
	<div class="client-container relative">
		<Card class="ht-container">
			<h3 slot="title">合同管理</h3>
			<div class="btn-group" slot="extra">
				<Button type="primary" style="top: -8px;"><Icon type="plus"></Icon><router-link to="/add-hetong" tag="span"> 添加合同</router-link></Button>
			</div>
			<div class="ht-list relative" v-for='item in agreementList'>
						<div class="saleSee">
                            <i class="iconfont icon-jishiben01"></i>
                            <p style="text-align: center;margin-top:-5px;">{{item.con_no}}</p>
                        </div> 
						  <div class="tableBox">
						       <Table border size='small' :columns="column1" :data="item.data1"></Table>
						  </div>
						 
						<div class="caozuoBox">
							<div class="header">操作</div>
						</div>	
						<div class="caozuo">
								<p><router-link to="/add-hetong" tag="a">修改</router-link><a>删除</a></p>
					</div>	
					<Spin fix v-if='loading'></Spin>	
			     </div>
			<div class="page-center">
				<!--分页-->
				<div class="fenYe">
					<Page :total="pageTotal" :page-size='limit' :current='currentPage' show-total show-elevator v-on:on-change='pageChange'></Page> <Button type="primary">确定</Button>
				</div>
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
       border:1px solid #ccc;

	}
	.ht-content{

	}
	.saleSee{
    width: 50px;
    height: 50px;
    padding-top: 50px;
    position: absolute;
    top: 50%;
    left: 3%;
    margin-top: -25px;
  }
   .saleSee i{
    position: absolute;
    top: 7px;
    left: 13px;
    font-size: 30px;
    color: #ccc;
     }
	.tableBox{
      width:80%;
      height: 100%;
      margin-left:11%;
	}
	.caozuoBox .header{
		background-color: #f8f8f9;
		height: 32px;
		text-align: center;
		line-height: 32px;
		border-bottom: 1px solid #dddee1;
	}
	.caozuoBox{
		 width:130px;
		 position: absolute;
		 right:0;
		 top:0;
	}
	.caozuo{
		width: 100px;
		position: absolute;
		top:50%;
		right:10px;
	}
	.caozuo p{
		text-align: center;
		position: absolute;
		top:0;
		left:0;
		bottom: 0;
		right:0;
		display: flex;
		justify-content: center;
	}
	.caozuo a{
		display: inline-block;
		width: 40px;
	}
	.relative .page-center{
		text-align: center;
		position: absolute;
		bottom:0px;
		left:0;
		right:0;
	}
	/* 分页的样式 */
	.page-center  .fenYe {
		width: 100%;
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
		text-align: center;
	}
	.fenYe table{
		border: 0;
	}
	.fenYe ul {
		display: inline-block;
	}
	.fenYe button{
		top: -12px;
		left: 12px;
	}
	.ivu-table-wrapper{
		 height: 100%;
		 border-top:none;
	}
	
</style>