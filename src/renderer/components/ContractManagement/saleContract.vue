<template>
        <div class="main-container relative">
            <Card>
                <h3 slot="title">售电合同</h3>
                <div slot="extra" class="btn-group">
                    <Button type="primary"  @click="gohetong">+售电合同</Button>
                </div>
                <div class="saleBox">
                   <div class="contract_box" v-for='(item,index) in salecontractList'>
						<p class="header_title relative">合同编号:<span class="user_no">{{item.con_no}}</span><span class="caozuo_box absolute" v-if='bol2'><span class="caozuo" @click='saleContractupdate(item.id)'><i class="fas fa-edit"></i></span><span class="caozuo" @click='deleSaleContract(item.id,item.con_no,index)'><i class="fas fa-trash-alt"></i></span></span></p>
						 <Row>
						      <Col span='3' class="icon_box">
							     <i class="fas fa-file-alt"></i>
						      </Col>
						     <Col span='21'>
							     <table cellspacing='10'>
								     <tbody>
									    <tr>
										     <td><span>合同周期：</span><span>{{item.deadline}}</span></td>
										     <td><span class="contract_title">上年最大负荷：</span><span>{{item.ly_maxload}}MW</span></td>
										     <td style="white-space: nowrap;"><span class="contract_title">上年用电量：</span><span>{{item.ly_used}}MVh</span></td>
										      <td><span>开户银行：</span><span>{{item.bank_name}}</span></td>
									    </tr>
									    <tr>
										     <td><span>合同方式：</span><span>{{item.way}}</span></td>
										     <td><span class="contract_title">本年度预计最大负荷：</span><span>{{item.bndyjzdfh}}MVh</span></td>
										     <td><span class="contract_title">本年预计用电量：</span><span>{{item.bndyjdl}}MVh</span></td>
										     <td><span>银行账户：</span><span>{{item.bank_account}}</span></td>
									    </tr>
								    </tbody>
							     </table>
						     </Col>
						</Row>
						 <Row class="contract_link">
							<table>
								<tbody>
									<tr>
										 <td>合同联系人：<span>{{item.contact}}</span></td>
										 <td>地址：<span>{{item.province+item.city+item.county+item.address}}</span></td>
										 <td>固定电话：<span>{{item.phone}}</span></td>
										 <td>传真：<span>{{item.fax}}</span></td>
									 </tr>
								 </tbody>
							 </table>
						 </Row>
					 </div>
                   <Spin size='large' fix v-if ='loading'></Spin> 
                </div> 
                <div class="page-center">
                     <!--分页-->
                      <div class="fenYe">
                          <Page :total="totalPage" :current='currentPage' :page-size='limit' show-total show-elevator v-on:on-change='pageChange'></Page> <!-- <Button type="primary">确定</Button> -->
                      </div>
                </div>         
            </Card> 
     <Modal
        title="确认信息"
        v-model="saleContractModal"
		@on-ok="deleteSaleContract"
        @on-cancel="cancel2"
        class-name="vertical-center-modal" width='400'>
        <p>确认删合同编号为{{s_num}}的合同？</p>
    </Modal>
          </div>
    </template>
    <script>
    export default {
        data() {
            return {
               saleContractModal:false,
               salecontractList:[
					{
					    con_no:'-',
						deadline:'-',
						ly_maxload:'-',
						ly_used:'-',
						 bank_name:'-',
						 way:'-',
						 bndyjzdfh:'-',
						 bndyjdl:'-',
						 bank_account:'-',
						 contact:'-',
						 province:'-',
						 city:'',
						 county:'',
						 address:'',
						 phone:'-',
						 fax:'-',
				    }
				],
                totalPage:0,
                currentPage:1,
                limit:5,
                loading:false,
                bol2:false,
                s_id:'',
                index2:'',
                s_num:''
            }
        },
        methods: {
            //跳转到添加售电合同
            gohetong(){
                this.$router.push({path:'/add-hetong',query:{cus_name:this.cus_name,active:'添加'}});
            },
            ok (index) {
                console.log(index);
            }, 
             deleSaleContract(id,value,index){
			  this.saleContractModal = true;
			  this.s_id = id;
			  this.index2 = index;
			  this.s_num = value;
		    },
            deleteSaleContract () {
                this.$http.post(this.$api.POWER_SALE_DEL,{id:this.data1[index].id}).then(res=>{
                    console.log('售电合同删除ok',res);
                    if(res.data.status==='1'){
                        this.data1.splice(this.index2, 1);
                        if(this.data1.length === 0){
                            this.currentPage = this.currentPage -1;
                        }
                        // this.$Message.info('删除成功');
                    }
                    this.powerSaleList();
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
                })
            },
            cancel2 () {
                this.saleContractModal = false;
            },
            powerSaleList(){
              this.loading = true;
			   this.$http.post(this.$api.POWER_SALE_LIST,{com_id:this.com_id,limit:this.limit,page:this.currentPage}).then(res=>{
				   console.log('合同管理',res);
				   if(res.data.status === '1'){
					   let data = res.data.data.data;
					   this.salecontractList = [];
					   if(data.length > 0){
						   this.bol2 = true;
                           this.salecontractList = data;
						    for(let i=0;i<data.length;i++){
							   for(let k in data[i]){
								   if(!data[i][k]){
									   data[i][k] = '-';
								   }
							   }
						   }
					   }else{
						  this.bol2 = false;
                          this.salecontractList = [{
							  con_no:'-',
							  deadline:'-',
							  ly_maxload:'-',
							  ly_used:'-',
							  bank_name:'-',
							  way:'-',
							  bndyjzdfh:'-',
							  bndyjdl:'-',
							  bank_account:'-',
							  contact:'-',
							  province:'-',
							  city:'',
							  county:'',
							  address:'',
							  phone:'-',
							  fax:'-',
						  }]
					   }
					   
					   this.totalPage= res.data.data.total;
                       this.currentPage= res.data.data.current_page;
				   }else{
					   this.bol2 = false;
					   this.salecontractList = [{
							  con_no:'-',
							  deadline:'-',
							  ly_maxload:'-',
							  ly_used:'-',
							  bank_name:'-',
							  way:'-',
							  bndyjzdfh:'-',
							  bndyjdl:'-',
							  bank_account:'-',
							  contact:'-',
							  province:'-',
							  city:'',
							  county:'',
							  address:'',
							  phone:'-',
							  fax:'-',
						  }]
				   }
				   this.loading = false;
			   },err=>{
				   this.loading = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.loading = false;
				   this.$api.errcallback(err);
			   })
            },
            pageChange(value){
                this.currentPage = value;
                this.powerSaleList();
           },
		    saleContractupdate(id){
                this.$router.push({path:'/add-hetong',query:{id:id}});
		   },
        },
        watch:{
          com_id:function(){
             this.powerSaleList();
             this.pageChange();
          }
        },
        computed:{
            com_id:function(){
                return this.$store.getters.com_id;
            }
        },
        components : {
        },
        mounted(){
            this.powerSaleList();
        }
  }
    </script>
    <style scoped>
    .btn-group{
		margin-top:-9px;
		z-index:10;
	}
    .saleBox {
        width:100%;
        height: 841px;
        position: relative;
    }
    .relative .page-center{
        text-align: center;
        position: absolute;
        bottom:0px;
        left:0;
        right:0;
        z-index: 999;
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
      /*.fenYe button{
        top: -12px;
        left: 12px;
      }*/
     table{
         width:100%;
     }
    .contract_box{
		 font-size: 12px;
	}
	.contract_box table tr td span:nth-child(2){
		font-weight: bold;
	}
	.contract_box table tr td .contract_title{
		 display: inline-block;
		 text-align: right;
		 width:120px;
    }
    .header_title{
		width:100%;
		height: 36px;
		line-height: 36px;
        background-color: #f5f7f9;
		padding-left:10px;
		color:black;
	    font-weight: bold;
    }
    .icon_box i{
	   padding-left:40px;
	   padding-top:10px;
	   font-size: 46px;
	}
	.icon-jishiben01:before{
        font-size: 46px;
    }
    .caozuo{
		display: inline-block;
		margin-top:3px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		background-color: #fff;
		border: 1px solid #dddee1;
		text-align:center;
		color: #3399ff;
		font-weight: normal;
		cursor: pointer;
	}
	.caozuo_box{
		display: inline-block;
		top:0;
		right:10px;
		z-index:22;
    }
    .contract_link{
		padding:10px 20px;
		border-top:1px solid #dddee1;
	}
    </style>