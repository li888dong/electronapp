<template>
    <div class="main-container">
        <Card>
            <h3 slot="title">售电合同</h3>
            <div class="saleBox">
                <div class="listBox" v-for="(item,index) in data1">
                    <ul class="hetongNav">
                        <li>平顶山姚梦电厂有限公司</li>
                        <li>合同编号：{{item.con_no}}</li>
                        <li>合同方式：{{item.way}}</li>
                        <li>上年用电量：{{item.ly_used}} MWh</li>
                        <li>上年最大负荷：{{item.ly_maxload}} MWh</li>
                        <li>本年度预计电量：{{item.bndyjdl}} MWh</li>
                        <li>本年度预计最大负荷：{{item.bndyjzdfh}} MWh</li>
                        <li class="change">
                            <router-link to="/add-hetong" tag="span" style="cursor: pointer; ">修改</router-link>
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
                       <div class="saleSee" @click="toSale()">
                            <i class="iconfont icon-jishiben01"></i>
                            <!-- <span class="bhNumber">查看</span> --> 
                        </div>   
                        <i-table 
                        border
                        size='small'
                        :columns="columns1"
                        :data="item.usernos" 
                        style = 'margin-left:10%;'
                        ></i-table>
                    </div>
                </div>
                <myFenye></myFenye>
            </div>            
        </Card> 
    </div>
</template>

<script>
import myFenye from '@/components/Tool/myFenye'

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
            data1: []
        }
    },
    methods: {
        ok (index) {
            console.log(index);
            
            this.$http.post(this.$api.POWER_SALE_DEL,{id:this.data1[index].id}).then(res=>{
                console.log('售电合同删除ok',res);
                if(res.data.status){
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
        toSale() {
            this.$router.push("/add-hetong")
        },
        // removeItem (index) {
        //     console.log(index);
        //     this.data1.splice(index, 1)
        // }
        powerSaleList(){
           this.$http.post(this.$api.POWER_SALE_LIST,{com_id:this.$store.getters.com_id}).then(res=>{
              console.log("售电合同列表",res);
              console.log(res.data.data);
              this.data1=res.data.data;
              console.log(this.data1);
           },err=>{
             this.$api.errcallback(err);
           }).catch(err=>{
               this.$api.errcallback(err);
           })
        }
    },
    components : {
        'myFenye': myFenye
    },
    mounted(){
        this.powerSaleList();
    }
}
</script>

<style scoped>
.saleBox {
    height: 818px;
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
    /*background-color: #5ecfb8;*/
    /*border-radius: 50%;*/
    padding-top: 50px;
    position: absolute;
    top: 50%;
    left: 3%;
    margin-top: -25px;
    cursor: pointer;
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
</style>