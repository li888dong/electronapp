
<script>

import myFenye from '@/components/Tool/myFenye'

export default {
    name: 'ChangxieContract',
    data(){
        return{
            columns1:[
              {
                title:'01月',
                key:'month01',
              },{
                 title:'02月',
                 key:'month02',

              },{
                 title:'03月',
                 key:'month03'
              },{
                 title:'04月',
                 key:'month04',
              },{
                 title:'05月',
                 key:'month05',
              },{
                 title:'06月',
                 key:'month06'
              },{
                title:'07月',
                key:'month07'
              },{
                 title:'08月',
                 key:'month08'
              },{
                title:'09月',
                key:'month09'
              },{
                 title:'10月',
                 key:'month10',
              },{
                 title:'11月',
                 key:'month11'
              },{
                 title:'12月',
                 key:'month12'
              },{
                 title:'合计',
                 key:'total',
                 render:(h,params)=>{
                    console.log(params.row);
                    var total = 0;
                    total = params.row.month01+params.row.month02+params.row.month03+params.row.month04+params.row.month05+params.row.month06+params.row.month07+params.row.month08+params.row.month09+params.row.month10+params.row.month11+params.row.month12;
                    return ('span',{

                    },total)
                 }
              }
            ],
            hetongList:[],
        }
    },
    components : {
        'myFenye': myFenye
    },
    methods:{
        change(page) {
            console.log(page)
        },
        ok (index) {
            console.log(index);
            console.log(this.hetongList[index].id);
            this.$http.post(this.$api.CHANGXIE_LIST_DEL,{id:this.hetongList[index].id}).then(res=>{
                console.log("长协合同删除成功",res);
                if(res.data.status){
                   this.hetongList.splice(index,1);
                }
                // this.changxieList();
            },err=>{
               this.$api.errcallback(err);
            }).catch(err=>{
              this.$api.errcallback(err);
            })
            this.$Message.info('删除成功');
        },
        cancel () {
            this.$Message.info('取消删除');
        },
        changxieList(){
            this.$http.post(this.$api.CHANGXIE_LIST,{com_id:this.$store.getters.com_id}).then(res=>{
                console.log('长协列表',res);
                var data = res.data.data;
                if(res.data.status){
                    for(var i=0;i<data.length;i++){
                        if(data[i].signed_status == 0){
                            data[i].signed_status ='未签约';
                        }else if(data[i].signed_status == 1){
                            data[i].signed_status ='签约';
                        }
                        this.hetongList.push(data[i]);
                    }
                }
            },err=>{
                this.$api.errcallback(err);
            }).catch(err=>{
                this.$api.errcallback(err);
            })
        },
        toChangxie(){
            this.$router.push('/AddContractManagement');
        }
    },
    mounted(){
        this.changxieList();
    }
}
</script>

<template>
<div class="main-container">
    <Card>
        <h3 slot="title">长协合同</h3>
        <div class="hetongList">
            <div class="hetongForm" v-for='(item,index) in hetongList'>
                <ul class="hetongIfno">
                    <li>平顶山姚梦电厂有限公司</li>
                    <li>合同编号：{{item.lpcon_no}}</li>
                    <li>合同年度：{{item.lpcon_year}}</li>
                    <li>签约电量：{{item.signed_num}} MWh</li>
                    <li>业务代表：{{item.business}}</li>
                    <li>联系电话：{{item.tel}}</li>
                    <li>合同状态：{{item.signed_status}}</li>
                    <li class="change">
                        <router-link to="AddContractManagement" tag="span" style="cursor: pointer; ">修改</router-link>
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
                <div class="hetongShuju">
                    <div class="changxieSee" @click="toChangxie()">
                            <i class="iconfont icon-jishiben01"></i>
                            </div>
                    <Table :columns = 'columns1' style='margin-left: 10%;height:100%' size='small' :data='item.lpdist'></Table>
                </div>
            </div>          
            <myFenye></myFenye>            
        </div>        
    </Card>
</div>
</template>

<style scoped>
.hetongList {
    height: 818px;
    background-color: #fff;
    }
.hetongIfno{
    height: 50px;
    background-color: #f8f8f9;
    padding-left: 15px;
    position: relative;
    font-size: 14px;
    border:1px solid #e9eaec;
    border-bottom: none;
}
.hetongIfno li{
    float: left;
    line-height: 50px;
    padding-right: 40px;
}
.hetongIfno .change{
    position: absolute;
    right: 30px;
    top: 0;
    color: #108CEE;
    cursor: pointer;
}
.hetongShuju {
    position: relative;
    border: 1px solid #e9eaec;
    margin-bottom:10px;
}
.changxieSee{
    width: 50px;
    height: 50px;
    padding-top: 50px;
    position: absolute;
    top: 50%;
    left: 3%;
    margin-top: -25px;
    cursor: pointer;
}
.changxieSee i{
    position: absolute;
    top: 7px;
    left: 13px;
    font-size: 30px;
    color: #ccc;
}
</style>
