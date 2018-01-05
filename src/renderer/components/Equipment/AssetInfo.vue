<script>
import mySearch from '@/components/Tool/mySearchTwo'

export default {
    name: 'AssetInfo',
    data(){
        return{
            columns1: [
                {
                    "sortable": true,
                    title: '逻辑地址',
                    key: 'clientid'
                },
                {
                    title: '生产厂家',                    
                    width: 200,
                    key: 'factory'
                },
                {
                    "sortable": true,
                    title: '出厂编号',
                    key: 'serial_no'
                },
                {
                    "sortable": true,
                    title: '采购日期',
                    key: 'pur_date',
                     width: 200,
                },
                {
                    title: '接线方式',
                    key: 'wiring'
                },
                {
                    title: '通信地址',
                    key: 'mailing_address'
                },
                {
                    title: '端口号',
                    key: 'port',
                    width:90,
                },
                {
                    title: '是否已安装',
                    width: '112',
                    key: 'is_install',
                    render:(h,params)=>{
                        if(params.row.is_install == 1){
                            return h('span',{

                           },'安装')
                        }else{
                            return h('span',{

                            },'未安装')
                        }
                        
                    }
                },
                {
                    title: '操作',
                    key: 'n9',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [                            
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.infoTo(params.row.clientid)
                                    }
                                }
                            }, '详情'),
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color: '#36c',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.deleteId = params.row.id;
                                        this.deleteName = params.row.clientid;
                                        this.modal2 = true;
                                    }
                                }                            

                            },'删除')
                        ]);
                    }

                }               
            ],
            data1: [],
            totalPage:0,
            currentPage:1,
            limit:14,
            loading:false,
            modal2:false,
            deleteId:'',
            deleteName:''
        }
    },
    methods: {
        infoTo(id) {
            this.$router.push({path:'EquipmentStatus',query:{id:id}});    
        },
        deleteInfo(){
            this.$http.delete(this.$api.CLIENT_TERMINAL_DELETE+this.deleteId).then(res=>{
               console.log('删除终端',res);
                this.equipmentList();
                this.modal2 = false;
                },err=>{
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.$api.errcallback(err);
             })
        },
        equipmentList(){
           this.loading = true;
           this.$http.post(this.$api.EQUIPMENT_LIST,{com_id:this.com_id,page:this.currentPage,limit:this.limit}).then(res=>{
             console.log("资产信息列表",res);
             var data = res.data.data;
             if(res.data.status==='1'){
                 this.data1 = data.data;
                 this.totalPage = data.total;
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
            this.$http.post(this.$api.EQUIPMENT_LIST,{com_id:this.com_id,page:value,limit:this.limit}).then(res=>{
             console.log("资产信息列表",res);
             var data = res.data.data;
             if(res.data.status==='1'){
                 this.data1 = data.data;
                 this.loading = false;
                 this.totalPage = data.total;
                 this.currentPage = data.current_page;
             }else{
                 this.loading = false;
             }
           },err=>{
             this.$api.errcallback(err);
           }).catch(err=>{
              this.$api.errcallback(err);
           })

        },
        keySeach(){
           this.loading = true;
           this.$http.post(this.$api.EQUIPMENT_LIST,{com_id:this.com_id,page:this.currentPage,limit:this.limit,keyword:this.$store.getters.terminalKey}).then(res=>{
             console.log("资产信息列表",res);
             var data = res.data.data;
             if(res.data.status==='1'){
                 this.data1 = data.data;
                 this.totalPage = data.total;
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
         this.equipmentList();
      }
    },
    computed:{
        com_id:function(){
            return this.$store.getters.com_id;
        }

    },
    components : {
        'mySearch': mySearch
    },
    mounted(){
        this.equipmentList();
    }
}
</script>

<template>
<div class="main-container relative"> <!-- 这是设备资产信息页面 -->
    <Card>
        <div slot="title">
        <!-- <Button type="primary">申请设备入库</Button> -->
        <h3>资产信息</h3>
               
        </div>
        <!--<div slot="extra">-->
             <!--<mySearch placeholder="请输入资产号" swidth="340" style='margin-top: -8px;'></mySearch>-->
        <!--</div>-->
        <div class="AssetInfo">
            <div slot="extra">
                <mySearch placeholder="请输入逻辑地址" swidth="340" style='margin-top: -8px;' v-on:doSearch="keySeach"></mySearch>
            </div>
            <Row class="AssetInfoForm" className="mgt_15">
                <Col span='24'>
                    <Table border :columns='columns1' :data='data1' :loading='loading'></Table>
                </Col>        
            </Row>
        </div>
        <div class="page-center">
        <!--分页-->
        <div class="fenYe">
          <Page :total="totalPage" :current='currentPage' :page-size='limit' show-total show-elevator v-on:on-change='pageChange'></Page><!--  <Button type="primary">确定</Button> -->
        </div>
      </div>           
    </Card>
    <!-- 是否删除蒙版 -->
       <Modal v-model="modal2" width="360" class-name="vertical-center-modal">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>确认删除？</span>
        </p>
        <div style="text-align:center">
            <p>确认删除资产号为：</p>
            <p>{{deleteName}}</p>
        </div>
        <div slot="footer">
            <Button type="default" @click='modal2=false'>取消</Button>
            <Button type="primary" @click='deleteInfo()'>确认</Button>
        </div>
    </Modal>
</div>

</template>

<style scoped>

.AssetInfo{
    height: 825px;
    background-color: #fff;
}

.AssetInfoSearch{
    overflow: hidden;
    height: 34px;
    margin-bottom: 15px;
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
</style>
