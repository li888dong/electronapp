<style scoped>
    .expand-row{
        margin-bottom: 26px;
    }
    .chang {
        color: #0089f0;
        cursor: pointer;
    }
</style>
<template>
    <div class="mouthTab">
        
        <Table :columns="columns10" :data="data9" size="small" :show-header= false></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isChange: '',
                YCdata: '',
                // 点击的id
                isID: '',
                cus_id: '',
                selmonth: '',
                // 点击的户号
                clickHH: '',
                upBtn: '',
                //要修改的人工预测的值
                targetValue: '',
                columns10: [
                    {
                        type: 'icon',
                        width: 30                   
                    },
                    {
                        sortable: true,
                        title: '户号',
                        key: 'user_no',
                        width: '260'                    
                    },
                    {
                        sortable: true,
                        title: '已购电量',
                        key: 'has_buypat',
                        render: (h,params) => {
                            return h('div', [
                                h('span', params.row.has_buypat),
                                h('span', {
                                    style: {
                                        color: '#FF9900',
                                        marginLeft: '2px'
                                    }
                                },'(' + params.row.has_buypat_num + ')'),
                            ])
                        }
                    },
                    {
                        title: '电费单电量',
                        key: 'ebill',
                        render: (h,params) => {
                            return h('div', [
                                h('span', params.row.ebill),
                                h('span', {
                                    style: {
                                        color: '#FF9900',
                                        marginLeft: '2px'
                                    }
                                }, '(' + params.row.ebill_num + ')' ),
                            ])
                        }
                    },
                    {
                    title: '本月监控电量',
                    key: 'monitor'
                    },
                    {
                    sortable: true,
                    title: '剩余电量',
                    key: 'dump_energy'
                    },
                    {
                    sortable: true,
                    title: '下月已购电量',
                    key: 'nextmonthpat'
                    },
                    {
                        title: '系统预测电量',
                        key: 'sy_predict'
                    },
                    {
                        sortable: true,
                        title: '人工预测电量',
                        key: 'p_predict',
                        render: (h, params) => {
                            return h('div',[
                                h('span',{
                                    style: {
                                        display: params.row.user_no == this.clickHH ? 'none' : ''
                                    },
                                },params.row.p_predict),
                                h('Input',{
                                    style: {
                                        width: '100%',
                                        display: params.row.user_no == this.clickHH ? '' : 'none'
                                    },
                                    props: {
                                        value: params.row.p_predict
                                    },                       
                                    nativeOn: {
                                        change: (e) => {
                                            console.log(e.target.value)
                                            this.targetValue = e.target.value;
                                            console.log(this)
                                        }
                                    },
                                },params.row.p_predict)
                            ])
                        }
                    },
                    {
                        sortable: true,
                        title: '本月需购',
                        key: 'need_pur'
                    },
                    {
                        title: '预测记录',
                        key: 'modify_people',
                        render: (h, params) => {
                            return h('div',{
                                style: {
                                    color: '#4fa8f9 ',
                                },
                                on: {
                                    click: () => {
                                        console.log(this)
                                        this.noteInfo(params.row.logs);
                                    }
                                }
                            }, params.row.modify_people )
                        }
                    },
                    {
                        title: '操作',
                        key: 'status',
                        render: (h,params)=>{
                            return h('div',[
                                h('span',{
                                    style: {
                                        display: params.row.status == '已确认' ? '' : 'none'
                                    }
                                },params.row.status),
                                h('span',{
                                    style: {
                                        display: params.row.status == '未确认' ? '' : 'none',
                                        color: '#4fa8f9',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log('点击未确认')
                                            this.isID = params.row.id;
                                            this.cus_id = params.row.cus_id;
                                            this.clickHH =params.row.user_no;
                                            this.changeStatus(params.row.p_predict);
                                        }
                                    }
                                },params.row.status),
                                h('span',{
                                    style: {
                                    color: '#4fa8f9',
                                    marginLeft: '5px',
                                    cursor: 'pointer',
                                    display: params.row.status == '未确认' ? '' : 'none'
                                    },
                                    on: {
                                        click: (e) => {                                           
                                            this.isID = params.row.id;
                                            this.cus_id = params.row.cus_id;
                                            this.clickHH =params.row.user_no;
                                            this.changeYC( e.target.innerText, params.row.p_predict)
                                        }
                                    }
                                }, params.row.user_no == this.clickHH ? '保存' : '修改')
                            ])
                        }
                    },
                ],
                data9: []
            }
        },
        props: {
            row: Object,
            monthsel: String
        },
        mounted () {
            // console.log('表格模板',this.$options.propsData.row.usernolist)
            let data = this.$options.propsData.row.usernolist;
            let selmonth = this.$options.propsData.monthsel;
            this.selmonth = selmonth;
            console.log('表格模板',this.$options.propsData)
            data.map(function(i){
                if(i.status == 0){
                    i.status = '未确认'
                }else{
                    i.status = '已确认'
                }
            })
            console.log(data);
            this.data9 = data;
        },
        computed: {
            iscom: function(){
                return this.targetValue
            }
        },
        methods: {
            noteInfo(e){
                console.log(e)
                this.$Notice.success({
                    title: '预测信息记录',
                    desc: ' ',
                    width: '500',
                    duration: 5,
                    render: h => {
                        if(e.length != 0){
                            return h('div', e.map((i) => {
                                console.log(i)
                                return h('p',{
                                        style: {
                                            marginBottom: '5px',
                                            width: '500px'
                                            }
                                        },
                                    [
                                    h('span',{
                                        style: {
                                            marginRight: '8px',
                                        }
                                    },i.created_at),
                                    h('span',{
                                        style: {
                                            marginRight: '8px',
                                        }
                                    },i.fullname),
                                    h('span',{
                                        style: {
                                            marginRight: '8px',
                                        }
                                    },i.title),
                                    h('span',{
                                        style: {
                                            marginRight: '8px',
                                        }
                                    },i.total),
                                ])
                            })
                            
                            )
                        }else{
                            return h('div', '暂无记录')
                        }
                    }
                })
            },
            //输入框的值改变
            inputUp(e){                
                console.log(e)
                this.targetValue = e;
                console.log('修改数值',this)
            },
            //修改人工预测电量
            changeYC( upPdata , p_predict){
                this.upBtn = upPdata;
                console.log(upPdata,  p_predict)
                //判断值是否为空
                if(this.targetValue == false){
                    this.targetValue = p_predict
                    console.log( '初始化值',this.targetValue)
                }else{
                    console.log( '最新获取到的值',this.targetValue)
                }
                console.log('修改人工预测电量',this)     
                if( this.upBtn == '保存'){
                    // console.log('上传成功')
                    this.spinShow = true;
                    this.$http.post(this.$api.MONTH_MODIFY, {
                        cus_id : this.cus_id, 
                        id: this.isID,
                        month: this.selmonth,
                        uid: this.$store.getters.uid,
                        user_no: this.clickHH,
                        p_predict: this.targetValue
                    })
                    .then(
                        res => {
                            this.spinShow = false;
                            // console.log(res)
                            if(res.data.status == 1){
                                console.log("修改成功", res);
                                this.$Message.success('修改成功');
                                this.$emit('toShuaxin', 'oks')                            
                            }else{
                                console.log("修改失败", res);
                                this.$Message.error('修改失败');
                            }
                        },
                        err => {
                            this.spinShow = false;
                            this.$api.errcallback(err);
                        }
                    )
                    .catch(err => {
                        this.spinShow = false;
                        this.$api.errcallback(err);
                    });

                }else{
                    console.log('点击了修改')
                }
            },
            //修改预测状态
            changeStatus(p_predict){
                this.spinShow = true;
                this.targetValue = p_predict;
                this.$http.post(this.$api.MONTH_MODIFY, {
                    cus_id : this.cus_id, 
                    id: this.isID,
                    month: this.selmonth,
                    p_predict: this.targetValue,
                    uid: this.$store.getters.uid,
                    user_no: this.clickHH,
                    status: 1
                })
                .then(
                res => {
                    this.spinShow = false;
                    // console.log(res)
                    if(res.data.status == 1){
                        console.log("修改成功", res);
                        this.$Message.success('修改成功');
                        this.$emit('toShuaxin', 'oks')
                    }else{
                        console.log("修改失败", res);
                        this.$Message.error('修改失败');
                    }
                    },
                    err => {
                        this.spinShow = false;
                        this.$api.errcallback(err);
                    }
                )
                .catch(err => {
                    this.spinShow = false;
                    this.$api.errcallback(err);
                });
            },
            sbLog(nodeSc){
                console.log('点击申报人')
                this.$Notice.info({
                    title: '申报记录',
                    desc: nodeSc ? '': '2018年4月申报了什么什么'
                })
            }
        }

    };
</script>
