<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'EquipmentStatus',
    data(){
        return{
            columns1: [
                {
                    "sortable": true,
                    title: '终端编号',
                    key: 'clientid'
                },
                {
                    "sortable": true,
                    title: '生产厂家',
                    key: 'factory'
                },
                {
                    "sortable": true,
                    title: '登陆IP：端口',
                    key: 'port'
                },
                { 
                    title: '最新上线时间',
                    key: 'on_time',
                    width:'200'
                },
                {
                    "sortable": true,
                    title: '当前在线时长',
                    key: 'cur_on_time'
                },
                {
                    "sortable": true,
                    title: '合计在线时长',
                    key: 'all_on_time'
                },
                {
                    "sortable": true,
                    title: '当前状态',
                    key: 'status',
                    render:(h,params)=>{
                        if(params.row.status == 1){
                            return h('span',{},'在线')
                        }else{
                            return h('span',{},'已掉线')
                        }
                    }
                },
                {
                    title: '掉线时间',
                    key: 'off_time',
                    width:'200'
                },
                {
                    "sortable": true,
                    title: '采集成功率',
                    key: 'succeed_ratio'
                },
                {
                    "sortable": true,
                    title: '上报比例',
                    key: 'report_ratio'
                },              
            ],
            data1: [],
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
            model1:'',
            value: '',
            totalPage:0,
            currentPage:1,
            limit:14,
            loading:false
        }
    },
    methods:{
        toYichang(){
            this.$router.push("/EquipmentException");
        },
        equipmentInfo(){
            if(this.$route.query.id){
                this.loading = true;
                this.$http.post(this.$api.EQUIPMENT_INFO,{clientid:this.$route.query.id}).then(res=>{
                     console.log("设备详情",res);
                     if(res.data.status){
                         this.data1 = res.data.data;
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

            }else{
                  this.loading = true;
                 this.$http.post(this.$api.EQUIPMENT_INFO_LIST,{com_id:this.com_id,page:this.currentPage,limit:this.limit}).then(res=>{
                console.log("设备统计日志",res);
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
                this.$api.errcallback(err);
            })
          }
        },
        pageChange(value){
            this.$http.post(this.$api.EQUIPMENT_INFO_LIST,{com_id:this.com_id,page:value,limit:this.limit}).then(res=>{
                console.log("设备统计日志",res);
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
                this.$api.errcallback(err);
            })
        }
    },
    watch:{
        com_id:function(){
            this.equipmentInfo();
        }
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
        this.equipmentInfo();
    }
}
</script>

<template><!-- 设备统计日志页面 -->
<div class="main-container relative">
    <Card>
        <h3 slot="title">设备统计日志</h3>
        <Button slot="extra" type="primary" style="top:-8px;" @click="toYichang()">设备异常记录</Button>
        <div class="EquipmentStatusBox">
            <div class="statusTop">
                <div class="fl">
                    <DatePicker type="datetime" placeholder="请选择日期"  style="width: 200px"></DatePicker>
                    <!--<Select v-model="model1" style="width:100px; margin-left: 10px;margin-right:10px;" placeholder="请选择区域">-->
                        <!--<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>-->
                    <!--</Select>-->
                    <div class="search"><mySearch placeholder="请输入终端名称、编号、客户名称或IP地址等" swidth="340"></mySearch></div>
                </div>
                <div class="viewOffline">
                    <Checkbox label="Eat"></Checkbox>
                    仅显示已掉线设备
                    <Button type="primary" class="refresh" style="margin-left: 10px;" @click='equipmentInfo()'><i class="iconfont icon-shuaxin" style="top:-12px;left:-8px;"></i></Button>

                </div>    
            </div>
            <Row class="statusForm">
                <Table border :columns='columns1' :data='data1' :loading='loading'></Table>            
            </Row>           
        </div>
        <div class="page-center">
        <!--分页-->
        <div class="fenYe">
          <Page :total="totalPage" :current='currentPage' :page-size='limit' show-total show-elevator v-on:on-change='pageChange'></Page> <Button type="primary">确定</Button>
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
.EquipmentStatusBox {
    height: 811px;
}

.shebeiYichang{
    display: inline-block;
    width: 123px;
    height: 30px;
    font-size: 14px;
    background-color: #108CEE;
    color: #fff;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}
.EquipmentStatusBox i {
    top: 14px;
    left: 10px;
    position: absolute;
}
.statusTop {
    height: 34px;
    position: relative;
    margin-bottom: 15px;
}
.viewOffline{
    float: right;
    margin-top: 10px;
}
.viewOffline input {
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    outline: none;
    vertical-align: middle;
}

.statusForm{
    background-color: #fff;
    position: relative;
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
