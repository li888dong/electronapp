<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'EquipmentException',
    data(){
        return{
            columns1: [
                {
                    "sortable": true,
                    title: '逻辑地址',
                    key: 'clientid'
                },
                {
                    "sortable": true,
                    title: '生产厂家',                    
                    width: 200,
                    key: 'factory'
                },
                {
                    "sortable": true,
                    title: '当前状态',
                    key: 'status',
                    render:(h,params)=>{
                        if(params.row.status == 0){
                            return h('span',{},'异常')
                        }else{
                            return h('span',{},'无异常')
                        }
                    }
                },
                { 
                    title: '异常编码',
                    key: 'coding'
                },
                {
                    "sortable": true,
                    title: '异常类别',
                    key: 'type'
                },
                {
                    title: '异常出现时间',
                    key: 'error_time'
                },
                {
                    "sortable": true,
                    title: '操作人',
                    key: 'operator'
                },
                
                {
                    title: '操作',
                    key: 'n8',
                    align: 'center',
                    width: 150,
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
                                        
                                    }
                                }
                            }, '修正完成'),
                            h('span', {
                                style: {
                                    marginLeft: '10px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        
                                    }
                                }
                            }, '拆除设备')                                        
                        ]);
                    }

                }               
            ],
            data1:[],
            cityList: [
                {
                    value: '所有区域',
                    label: '所有区域'
                },
                {
                    value: '河南',
                    label: '河南'
                },
                {
                    value: '河北',
                    label: '河北'
                },
                {
                    value: '江西',
                    label: '江西'
                },
                {
                    value: '山东',
                    label: '山东'
                },
                {
                    value: '山西',
                    label: '山西'
                },
                {
                    value: '陕西',
                    label: '陕西'
                }
            ],
            model1: '',
            value: '',
            totalPage:0,
            currentPage:1,
            limit:14,
            loading:false
        }
    },
    methods:{
       equipmentAbnormal(){
          this.loading = true;
          this.$http.post(this.$api.EQUIPMENT_ABNORMAL_RECORD,{com_id:this.com_id,page:this.currentPage,limit:this.limit}).then(res=>{
             console.log("设备异常记录列表",res);
             if(res.data.status){
                 this.data1 = res.data.data.data;
                 this.totalPage = res.data.data.total;
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
          this.$http.post(this.$api.EQUIPMENT_ABNORMAL_RECORD,{com_id:this.com_id,page:value,limit:this.limit}).then(res=>{
             console.log("设备异常记录列表",res);
             if(res.data.status){
                 this.data1 = res.data.data.data;
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
      
    },
    computed:{
       com_id:function(){
          return this.$store.getters.com_id;
       }
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
    mounted(){
        this.equipmentAbnormal();
    }
}
</script>

<template><!-- 设备异常页面 -->
<div class="main-container relative">
    <Card>
        <i class="iconfont icon-fanhui1 back" @click="$router.go(-1)"></i>
        <h3 slot="title" style="padding-left:40px">设备异常记录</h3>
        <div class="EquipmentExceptionBox">
            <div class="ExceptionTop">
                <DatePicker :value="new Date()" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择日期"  style="width: 200px"></DatePicker>
                <div class="search"><mySearch placeholder="请输入终端名称、编号、客户名称或IP地址等" swidth="340"></mySearch></div>
                <Button type="primary" class="refresh fr" style="margin-left: 10px;" @click='equipmentAbnormal()'><i class="iconfont icon-shuaxin" style="top:-12px;left:-8px;"></i></Button>
               <!--  <Select v-model="model1" style="width:100px; margin-left: 10px;margin-right:10px;" placeholder="请选择区域">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select> -->
                
            </div>
            <Row class="ExceptionForm">
                <Table border :columns='columns1' :data='data1' :loading='loading'></Table>            
            </Row>
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

<style scoped>
.search {
    display: inline-block;
    width: 340px;
    vertical-align: bottom;
}
.EquipmentExceptionBox {
    height: 811px;
    background-color: #fff;
}
 .back{
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9;
    cursor: pointer;
    /* color: #108CEE; */
}
.ExceptionTop {
    height: 34px;
    position: relative;
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
 /* .fenYe button{
    top: -12px;
    left: 12px;
  }*/
</style>
