<template>
    <div class="main-container relative">
        <Card>
            <h3 slot="title">售电合同</h3>
            <div class="saleBox">
                <div class="listBox" v-for="(item,index) in data1">
                    <ul class="hetongNav">
                        <li>{{item.cus_name}}</li>
                        <li>合同编号：{{item.con_no}}</li>
                        <li>合同方式：{{item.way}}</li>
                        <li>上年用电量：{{item.ly_used}} MWh</li>
                        <li>上年最大负荷：{{item.ly_maxload}} MWh</li>
                        <li>本年度预计电量：{{item.bndyjdl}} MWh</li>
                        <li>本年度预计最大负荷：{{item.bndyjzdfh}} MWh</li>
                        <li class="change">
                            <router-link  :to="{path:'/add-hetong',query:{id:item.id,cus_name:item.cus_name,con_no:item.con_no,way:item.way,way_param:item.way_param,deadline:item.deadline,ly_used:item.ly_used,ly_maxload:item.ly_maxload,bndyjdl:item.bndyjdl,bndyjzdfh:item.bndyjzdfh,usernos:item.usernos,user_nums:item.user_nums}}" tag="span" style="cursor: pointer; ">修改</router-link>
                            <span>
                                <!-- 气泡提示模板 -->
                                <Poptip
                                    placement="left-end"
                                    confirm
                                    title="您确认删除这条内容吗？"
                                    @on-ok="ok(index)"
                                    @on-cancel="cancel">
                                    <span>删除</span>
                                </Poptip>
                            </span>
                        </li>
                    </ul>
                    <div class="htData">
                       <div class="saleSee">
                            <i class="iconfont icon-jishiben01"></i>
                        </div>   
                        <i-table                         
                        size='small'
                        :columns="columns1"
                        :data="item.usernos" 
                        style = 'margin-left:10%;'
                        ></i-table>
                    </div>
                </div>
             <Spin size='large' fix v-if = 'loading'></Spin> 
            </div> 
                      <div class="page-center">
        <!--分页-->
        <div class="fenYe">
          <Page :total="totalPage" :current='currentPage' :page-size='limit' show-total show-elevator v-on:on-change='pageChange'></Page> <!-- <Button type="primary">确定</Button> -->
        </div>
      </div>         
        </Card> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns1: [
                {
                    title: '营销用户编号',
                    key: 'user_no',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户电压等级',
                    key: 'vol_level',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '报装容量',
                    key: 'packing_capacity',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户类型',
                    key: 'category',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户单元类型',
                    key: 'unit_type',
                    width: '140',
                    align: 'center'
                },
                {
                    title: '用户地址',
                    key: 'address',
                    align: 'center'
                }
            ],
            data1: [{
               cus_name:'暂无客户签订合同',
               con_no:'暂无数据',
               way:'暂无数据',
               ly_used:'0',
               ly_maxload:'0',
               bndyjdl:'0',
               bndyjzdfh:'0',
               usernos:[],
            }],
            totalPage:0,
            currentPage:1,
            limit:5,
            loading:false
        }
    },
    methods: {
        ok (index) {
            console.log(index);
            
            this.$http.post(this.$api.POWER_SALE_DEL,{id:this.data1[index].id}).then(res=>{
                console.log('售电合同删除ok',res);
                if(res.data.status==='1'){
                    this.data1.splice(index, 1);
                }
            },err=>{
                this.$api.errcallback(err);
            }).catch(err=>{
                this.$api.errcallback(err);
            })
        },
        cancel () {
            this.$Message.info('点击了取消');
        },
        // removeItem (index) {
        //     console.log(index);
        //     this.data1.splice(index, 1)
        // }
        powerSaleList(){
          this.loading =true;
           this.$http.post(this.$api.POWER_SALE_LIST,{com_id:this.com_id,page:this.currentPage,limit:this.limit}).then(res=>{
              console.log("售电合同列表",res);
              console.log(res.data.data);
              if(res.data.status==='1'){
                if(res.data.data.data.length > 0){
                   this.data1=res.data.data.data;
                   console.log(this.data1);
                   this.totalPage = res.data.data.total;
                }
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
          this.loading = true;
             this.$http.post(this.$api.POWER_SALE_LIST,{com_id:this.com_id,page:value,limit:this.limit}).then(res=>{
              console.log("售电合同列表",res);
              console.log(res.data.data);
              if(res.data.status==='1'){
                this.data1=res.data.data.data;
                 console.log(this.data1);
                 this.totalPage = res.data.data.total;
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
.saleBox {
    height: 841px;
    position: relative;
}
.hetongNav{
    height: 50px;
    background-color: #f8f8f9;
    padding-left: 15px;
    position: relative;
    /*margin-bottom: 15px;*/
    font-size: 14px;
    font-weight: 400;
    border:1px solid #eeeeee;
    border-bottom: none;
}
.hetongNav li{
    float: left;
    line-height: 50px;
    padding-right: 30px;
}
.hetongNav .change{
    position: absolute;
    right: 30px;
    top: 0;
    color: #108CEE;
    cursor: pointer;
}
.saleList div{
    height: 44px;
    text-align: center;
    font-size: 12px;
    color: #202020;
}
.saleList td{
    width: 100px;
    height: 44px;
    border: 1px solid #000;
}
.listBox {
    margin-bottom: 10px;
}
.htData {
    position: relative;
    border: 1px solid #e9eaec;
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
.bhNumber {
    width: 90px;
    text-align: center;
    display: inline-block;
    margin-left: -20px;
    color:#108CEE;
}
.listChange {
    position: absolute;
    top: 50%;
    right: 10%;
    color: #4fa8f9;
}
.listChange span {
    cursor: pointer;
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
  @media (min-width: 1365px) and (max-width: 1919px) {
      .hetongNav .change{
          right:0px;
          padding-right:10px;
      }
    .hetongNav li{
    float: left;
    line-height: 50px;
    padding-right: 12px;
     }
  }
</style>