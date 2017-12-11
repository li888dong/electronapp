<script>
import myFenye from '@/components/Tool/myFenye'
import mySearch from '@/components/Tool/mySearch'

export default {
    name: 'UserForecast',
    data(){
        return{
            detailModal: false,
            delModal:false,
            confirmModal:false,
            delId:'',
            detailModalName:'',
            confirmIdList:[],
            selectMonth:new Date().Format('yyyy-MM'),
            selectArea:'',
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: '企业名称',
                    key: 'com_name',
                    width: 200,
                    align: 'center'
                },
                {
                    title: '上月申报电量(万KW-h)',
                    key: 'sysb',
                    width: 180,
                    align: 'center'
                },
                {
                    title: '上月用电量(万KW-h)',
                    key: 'syydl',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '预测电量(万kW-h)',
                    key: 'ycdl',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '申报电量(万kW-h)',
                    key: 'sbdl',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '购电量(万kW-h)',
                    key: 'gdl',
                    align: 'center'
                },{
                    title: '申报时间',
                    key: 'created_at',
                    align: 'center'
                },
                {
                    title: '申报状态',
                    key: 'dstatus',
                    align: 'center',
                    render: (h, params) => {
                        let text= '未申报';
                        if (params.row.dstatus===0){
                            text = '未申报'
                        }else if (params.row.dstatus===1){
                            text = '已申报'
                        }
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
                            }, text)
                        ])
                    }
                },
                {
                    title: '审核状态',
                    key: 'status',
                    align: 'center',
                    render: (h, params) => {
                        let text= '未审核';
                        if (params.row.status===0){
                            text = '未审核'
                        }else if (params.row.status===1){
                            text = '已审核'
                        }
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
                            }, text)
                        ])
                    }
                },
                {
                    title: '确认人',
                    key: 'confirmor',
                    align: 'center'
                },               
                {
                    title: '操作',
                    key: 'n11',
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
                                        this.detailModal= true;
                                        this.detailModalName = params.row.com_name;
                                        this.renderM(params.row.cus_id)
                                    }
                                }
                            }, '查看'),
                            h('span', {
                                style: {
                                    marginRight: '5px',
                                    color:'#36c ',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.delId = params.row.cus_id;
                                        this.delModal = true;
                                    }
                                }
                            }, '删除')
                        ])
                    }
                }
            ],
            columns5: [
                {
                    title: '申报时间',
                    width: 110,
                    key:'updated_at'
                },
                {
                    title: '申报人',
                    key:'confirmor'
                },
                {
                    title: '申报电量合计',
                    width: 110,
                    key:'total'
                },
                {
                    title: '详情',
                    width: 160,
                    key:'sbdlinfo'
                },
                {
                    title: '备注',
                    key:'useNote'
                }
            ],
            tableData1: [],
            tableData2:[],

             
        }
    },
    methods: {
        renderM(index) {
            this.$http.post(this.$api.DECLARE_DETAIL,{
                id:index
            }).then(res=>{
                console.log("用户申报详情",res);
                this.tableData2 = res.data.citys
            },err=>{
                this.$api.errcallback(err);
            }).catch(err=>{
                this.$api.errcallback(err);
            })
        },
        confirmShenbao(){
            this.$http.post(this.$api.DECLARE_CONFIRM,{
                id:this.confirmIdList
            }).then(res=>{
                console.log("用户申报确认",res);
            },err=>{
                this.$api.errcallback(err);
            }).catch(err=>{
                this.$api.errcallback(err);
            })
        },
        deleteShenbao(){
            this.$http.post(this.$api.DECLARE_DELETE,{
                id:this.delId
            }).then(res=>{
                console.log("用户申报删除",res);
                this.userShenBao();
            },err=>{
                this.$api.errcallback(err);
            }).catch(err=>{
                this.$api.errcallback(err);
            })
        },
        remove(index){
            this.data4.splice(index, 1);
        },
        userShenBao(){
            this.$http.post(this.$api.USER_DECLARE,{
                com_id:this.$store.getters.com_id,
                time:this.selectMonth,
                area:this.selectArea,
                keyword:this.$store.getters.searchKey
            }).then(res=>{
                   console.log("用户申报",res);
                   this.tableData1 = res.data.citys
            },err=>{
                this.$api.errcallback(err);
            }).catch(err=>{
                this.$api.errcallback(err);
            })
        },
        monthSelect(month){
            this.selectMonth = month;
            console.log(this.selectMonth);
            this.userShenBao()
        },
        areaSelect(area){
            this.selectArea = area[1].name.replace(/市/,'');
            console.log(this.selectArea);

            this.userShenBao()
        },

    },
    mounted(){
        this.userShenBao();
    },
    components : {
        'myFenye': myFenye,
        'mySearch': mySearch
    },
}           
</script>

<template>
<div class="main-container">    
    <Card>
        <h3 slot="title">用户申报</h3>
        <div class="layout-content">
            <Row class="layout-content-top">          
                <Row gutter="10">
                    <Col span="2">
                        <DatePicker type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>
                    </Col>
                    <Col span="4">
                        <al-selector level=1 @on-change="areaSelect"/>
                    </Col>
                    <Col span="6">

                         <mySearch placeholder="请输入公司名称或关键字" swidth="340" v-on:doSearch="userShenBao"></mySearch>
                    </Col>

                </Row>
            </Row>
            <Row class="layout-content-main">
                <Table border ref="selection" :columns="columns4" :data="tableData1"></Table>
            </Row>
            <myFenye></myFenye>
        </div>
    </Card>
    <Modal
        :title="detailModalName+'电量申报详情'"
        v-model="detailModal"
        width = '666'
        :mask-closable="false"
        class-name="vertical-center-modal">
        申报记录 :   <Table border ref="selection" :columns="columns5" :data="tableData2"></Table>
     </Modal>
    <Modal
            v-model="delModal"
            title="删除提醒"
            @on-ok="deleteShenbao">
        <p>确认删除该条记录？</p>
    </Modal>
</div>
</template>

<style scoped>

.layout-content{
    overflow: hidden;
    background: #fff;
    height: 810px;
}
.layout-content-top {
    margin-bottom: 15px;
}
</style>
