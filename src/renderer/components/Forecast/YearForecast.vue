<script>
    import myFenye from '@/components/Tool/myFenye'
    import mySearch from '@/components/Tool/mySearch'
    import {POWER_FRAME} from "../../Api";

    export default {
        name: 'annualforecast',
        data() {
            return {
                spinShow:false,
                currentPage:1,
	            limit:16,
	            totalPage:0,
                modalShow: false,
                selectList: [],
	            modifyList:[],
                selectYear: new Date().getFullYear(),
                selectArea: '',
                statusList: [
                    {
                        value: 0,
                        label: '未确认'
                    },
                    {
                        value: 1,
                        label: '已确认'
                    },
                    {
                        value: 2,
                        label: '已购电'
                    },
                ],
	            modifyComName:'',
	            modifyIndex:'0',
                columns6: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '企业名称',
                        width: 200,
                        key: 'name',
                        align: 'left'
                    },
                    {
                        title: '1月',
	                    width:80,
                        key: 'month01',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month01 && params.row.month01!= 0){
                                return h('span',{},params.row.month01)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '2月',
						width:80,
                        key: 'month02',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month02 && params.row.month02!= 0){
                                return h('span',{},params.row.month02)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '3月',
						width:80,
                        key: 'month03',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month03 && params.row.month03!= 0){
                                return h('span',{},params.row.month03)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '4月',
						width:80,
                        key: 'month04',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month04 && params.row.month04!= 0){
                                return h('span',{},params.row.month04)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '5月',
						width:80,
                        key: 'month05',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month05 && params.row.month05!= 0){
                                return h('span',{},params.row.month05)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '6月',
						width:80,
                        key: 'month06',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month06 && params.row.month06!= 0){
                                return h('span',{},params.row.month06)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '7月',
						width:80,
                        key: 'month07',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month07 && params.row.month07 != 0){
                                return h('span',{},params.row.month07)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '8月',
						width:80,
                        key: 'month08',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month08 && params.row.month08 != 0){
                                return h('span',{},params.row.month08)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '9月',
						width:80,
                        key: 'month09',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month09 && params.row.month09 != 0){
                                return h('span',{},params.row.month09)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '10月',
						width:80,
                        key: 'month10',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month10 && params.row.month10 != 0){
                                return h('span',{},params.row.month10)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '11月',
						width:80,
                        key: 'month11',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month11 && params.row.month11 != 0){
                                return h('span',{},params.row.month11)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '12月',
						width:80,
                        key: 'month12',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.month12 && params.row.month12 != 0){
                                return h('span',{},params.row.month12)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '合计',
	                    width:100,
                        key: 'total',
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.total && params.row.total != 0){
                                return h('span',{},params.row.total)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '修改人',
						width:100,
                        key: 'modifiedby',
                        align: 'center',
                         render:(h,params)=>{
                            if(params.row.modifiedby){
                                return h('span',{},params.row.modifiedby)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '确认人',
                        key: 'confirmor',
						width:100,
                        align: 'center',
                        render:(h,params)=>{
                            if(params.row.confirmor){
                                return h('span',{},params.row.confirmor)
                            }else{
                                 return h('span',{},'-')
                            }
                        }
                    },
                    {
                        title: '状态',
                        key: 'status',
						width:80,
                        aligin:'left',
                        render: (h, params) => {
                            let status0 = params.row.status ==='0';
                            let status1 = params.row.status ==='1';
                            let status2 = params.row.status ==='2';
                            return h('select', {
	                            on:{
                                    change:(e)=>{
                                        this.setTableData1(params.index,e.target.value);
//                                        params.row.status = e.target.value;

                                    }
	                            }
                            },[
                                h('option', {
                                    attrs:{
                                        selected:status0,
                                        value:0
                                    }
                                }, '未确认'),
                                h('option', {

                                    attrs:{
                                        selected:status1,
                                        value:1
                                    }
                                }, '已确认'),
                                h('option', {
                                    attrs:{
                                        selected:status2,
                                        value:2
                                    }
                                }, '已购电'),
                            ])
                        }
                    },
                    {
                        title: '操作',
                        key: 'change',
						width:80,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color: '#36c ',
                                        cursor: 'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            this.modifyComName = params.row.name;
                                            this.modifyIndex = params.index;
                                            this.tableData2 = params.row.list;
                                            this.modifyModal = true;
                                        }
                                    }
                                }, '修改')
                            ])
                        }
                    }
                ],
                tableData1: [],
                tableData2: [],
                modifyModal: false,
                markbol:false,
                yearList:[]
            }
        },
        mounted() {
            this.yearData()
        },
        computed:{
            companbol:function(){
               return this.$store.getters.companbol
            }
},
        methods: {
            pageChange(page){
                this.currentPage = page;
				this.yearData();
                console.log(page)
            },
            yearData() {
                this.$store.dispatch('setCompanbol',false);
                this.spinShow = true;
                this.$http.post(this.$api.YEAR_FORECAST, {
                    com_id: this.$store.getters.com_id,
                    year: this.selectYear,
                    area: this.selectArea,
	                page:this.currentPage,
	                limit:this.limit,
                    keyword: this.$store.getters.searchKey
                }).then(res => {
                    this.spinShow = false;
                    console.log("年度预测", res);
                    if(res.data.status === '1'){
                        var arr =[];
                        var list = [];
                        let data = res.data.data.data;
                        for(let i =0;i< data.length;i++ ){
                            var obj = {
                               name:data[i].name,
                               month01:data[i].foreinfo[0].month01,
                               month02:data[i].foreinfo[0].month02,
                               month03:data[i].foreinfo[0].month03,
                               month04:data[i].foreinfo[0].month04,
                               month05:data[i].foreinfo[0].month05,
                               month06:data[i].foreinfo[0].month06,
                               month07:data[i].foreinfo[0].month07,
                               month08:data[i].foreinfo[0].month08,
                               month09:data[i].foreinfo[0].month09,
                               month10:data[i].foreinfo[0].month10,
                               month11:data[i].foreinfo[0].month11,
                               month12:data[i].foreinfo[0].month12,
                               total:data[i].total,
                               modifiedby:data[i].modifiedby,
                               confirmor:data[i].confirmor,
                               status:data[i].status,
                               list:data[i].unlist


                            }
                            arr.push(obj);
                        }
                        this.tableData1 = arr;
                        this.totalPage = res.data.data.total;
	                    this.currentPage = res.data.data.current_page;
                    }else{
                        this.tableData1=[];
                    } 
                }, err => {
                    this.spinShow = false;
                    this.tableData1=[];
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.spinShow = false;
                    this.tableData1=[];
                    this.$api.errcallback(err);
                })
            },
            yearSelect(year) {
                this.selectYear = year;
                console.log(this.selectYear);
                this.yearData()
            },
            areaSelect(area) {
                this.selectArea = area[1].name.replace(/市/, '');
                console.log(this.selectArea);

                this.yearData()
            },
            selectItem(items){
                console.log(items);
                this.selectList = items
            },
            yearDim(){
               this.markbol = true;
               this.$store.dispatch('setCompanbol',true);
               if (this.timer) {
					clearTimeout(this.timer);
				}
				if (this.$store.getters.searchKey.length < 1) {
					return
				}
                this.timer = setTimeout(() => this.$http.post(this.$api.YEAR_FORECAST,{
                    com_id: this.$store.getters.com_id,
                    year: this.selectYear,
                    area: this.selectArea,
                    keyword: this.$store.getters.searchKey
                }).then(res=>{
                    console.log('年度预测模糊搜索',res);
                    if(res.data.status ==='1'){
                        this.yearList = res.data.data.data;
                    }
                    this.markbol = false;
                },err=>{
                    this.markbol=false;
                    this.yearList =[];
                    this.$api.errcallback(err);
                }).catch(err=>{
                    this.markbol=false;
                    this.yearList =[];
                     this.$api.errcallback(err);
                }), 500)
            },
            chooseyear(item){
               let arr =[];
               arr.push(item);
               this.tableData1 = arr;
               this.$store.dispatch('setCompanbol',false);
            },
	        allComfirm(){
                let postArr = [];
                let _this = this;
                this.selectList.map(function (i) {
	                postArr.push({
		                cus_id:i.cus_id,
		                year:_this.selectYear,
		                type:i.status
	                })

                });
                console.log(postArr);
                this.$http.post(this.$api.YEAR_CONFIRM, {data:postArr}).then(res => {
                    console.log("年度预测确认", res);
                    if(res.data.status==='1'){
                        this.yearData();
                    }
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
	        },
            modifyData(){
                let postArr = [];
                let _this = this;
                this.tableData2.map(function (i) {
                    i.month01 = parseInt(i.month01);
                    i.month02 = parseInt(i.month02);
                    i.month03 = parseInt(i.month03);
                    i.month04 = parseInt(i.month04);
                    i.month05 = parseInt(i.month05);
                    i.month06 = parseInt(i.month06);
                    i.month07 = parseInt(i.month07);
                    i.month08 = parseInt(i.month08);
                    i.month09 = parseInt(i.month09);
                    i.month10 = parseInt(i.month10);
                    i.month11 = parseInt(i.month11);
                    i.month12 = parseInt(i.month12);
                    var total = i.month01 + i.month02 + i.month03+ i.month04 + i.month05 + i.month06 + i.month07 + i.month08 + i.month09 + i.month10 + i.month11 + i.month12;
                    postArr.push({
                        id:i.id,
	                    data: {
                            month01:i.month01,
                            month02:i.month02,
	                        month03:i.month03,
	                        month04:i.month04,
	                        month05:i.month05,
	                        month06:i.month06,
	                        month07:i.month07,
	                        month08:i.month08,
	                        month09:i.month09,
	                        month10:i.month10,
	                        month11:i.month11,
	                        month12:i.month12,
                            total:total
	                    }

                    })
                });
                console.log(postArr);
                this.$http.post(this.$api.YEAR_MODIFY, {data:postArr}).then(res => {
                    console.log("年度预测修改", res);
                    this.yearData();
                }, err => {
                    this.$api.errcallback(err);
                }).catch(err => {
                    this.$api.errcallback(err);
                })
            },
            setTableData1(index,value){
				this.tableData1[index].status = value;
            },
            toDaoru() {
                this.$router.push({path:"/import-data",query:{type:'year'}})
            }
        },
        components: {
            'myFenye': myFenye,
            'mySearch': mySearch
        },
    }
</script>
<template>
	<div class="main-container">
		<Card>
			<h3 slot="title">年度预测</h3>
			<div class="layout-content">
				<div class="layout-content-top">
					<Row gutter="10">
						<Col span="2">
						<DatePicker type="year" placeholder="请选择年份" @on-change="yearSelect"></DatePicker>

						</Col>
						<Col span="4">
						<al-selector level=1  @on-change="areaSelect"/>

						</Col>
						<Col span="5" class="relative">

                        <mySearch placeholder="请输入公司名称或关键字" swidth="340" v-on:doSearch="yearData" v-on:dimSearch='yearDim'></mySearch>
                        <div class="absolute yearlist" v-if='companbol'>
                            <ul>
                                <li v-for='item in yearList' @click='chooseyear(item)'>{{item.com_name}}</li>
                            </ul>
                            <Spin size="small" fix v-if="markbol"></Spin>
                        </div>
						</Col>
						<Col span="4" offset="9" style="display: flex;justify-content: flex-end">
						<Button class="fl" type="primary" @click="allComfirm">批量确认</Button>
						<Button class="fl" type="primary" style="margin-left: 10px" @click="toDaoru()">导入</Button>
						</Col>
					</Row>
				</div>
				<Row>
					<Table @on-selection-change="selectItem" :columns="columns6" :data="tableData1" size="small"></Table>
					<Spin size="large" fix v-if="spinShow"></Spin>
				</Row>
				<div class="page-container">
					<Page
						:total="totalPage"
						:current="currentPage"
						show-total
						show-elevator
						v-on:on-change="pageChange"
					></Page>
				</div>
			</div>
		</Card>
		<Modal
				:title="modifyComName"
				v-model="modifyModal"
				width='55'
				:mask-closable="false"
				class-name="vertical-center-modal"
				@on-ok="modifyData">
			<div style="max-height: 600px;overflow-y: scroll" class="yearUpdate">
				<table v-if="modifyModal">
					<thead>
					<tr>
						<th style="white-space: nowrap;">{{selectYear}}年/月份</th>
						<th>01月</th>
						<th>02月</th>
						<th>03月</th>
						<th>04月</th>
						<th>05月</th>
						<th>06月</th>
						<th>07月</th>
						<th>08月</th>
						<th>09月</th>
						<th>10月</th>
						<th>11月</th>
						<th>12月</th>
						<th>合计</th>
					</tr>
					</thead>
                    <tbody v-if = 'tableData2.length == 0'>
                        <tr>
                            <td colspan="14">
                                暂无数据
                            </td>
                        </tr>
                    </tbody>
					<tbody v-if = 'tableData2.length > 0'>
					<tr v-for="item in tableData2">
						<td>户号{{item.id}}</td>
						<td><input placeholder='-' type="text" v-model="item.month01"></td>
						<td><input placeholder='-' type="text" v-model="item.month02"></td>
						<td><input placeholder='-' type="text" v-model="item.month03"></td>
						<td><input placeholder='-' type="text" v-model="item.month04"></td>
						<td><input placeholder='-' type="text" v-model="item.month05"></td>
						<td><input placeholder='-' type="text" v-model="item.month06"></td>
						<td><input placeholder='-' type="text" v-model="item.month07"></td>
						<td><input placeholder='-' type="text" v-model="item.month08"></td>
						<td><input placeholder='-' type="text" v-model="item.month09"></td>
						<td><input placeholder='-' type="text" v-model="item.month10"></td>
						<td><input placeholder='-' type="text" v-model="item.month11"></td>
						<td><input placeholder='-' type="text" v-model="item.month12"></td>
						<td>{{item.total}}</td>
					</tr>
					<tr>
						<td>合计</td>
						<td>{{tableData1[modifyIndex].month01}}</td>
						<td>{{tableData1[modifyIndex].month02}}</td>
						<td>{{tableData1[modifyIndex].month03}}</td>
						<td>{{tableData1[modifyIndex].month04}}</td>
						<td>{{tableData1[modifyIndex].month05}}</td>
						<td>{{tableData1[modifyIndex].month06}}</td>
						<td>{{tableData1[modifyIndex].month07}}</td>
						<td>{{tableData1[modifyIndex].month08}}</td>
						<td>{{tableData1[modifyIndex].month09}}</td>
						<td>{{tableData1[modifyIndex].month10}}</td>
						<td>{{tableData1[modifyIndex].month11}}</td>
						<td>{{tableData1[modifyIndex].month12}}</td>
						<td>{{tableData1[modifyIndex].total}}</td>
					</tr>
					<tr>
						<td>系统预测</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
						<td>0</td>
					</tr>
					<tr>
						<td>偏差值</td>
						<td>{{tableData1[modifyIndex].month01}}</td>
						<td>{{tableData1[modifyIndex].month02}}</td>
						<td>{{tableData1[modifyIndex].month03}}</td>
						<td>{{tableData1[modifyIndex].month04}}</td>
						<td>{{tableData1[modifyIndex].month05}}</td>
						<td>{{tableData1[modifyIndex].month06}}</td>
						<td>{{tableData1[modifyIndex].month07}}</td>
						<td>{{tableData1[modifyIndex].month08}}</td>
						<td>{{tableData1[modifyIndex].month09}}</td>
						<td>{{tableData1[modifyIndex].month10}}</td>
						<td>{{tableData1[modifyIndex].month11}}</td>
						<td>{{tableData1[modifyIndex].month12}}</td>
						<td>{{tableData1[modifyIndex].total}}</td>
					</tr>
					</tbody>
				</table>
			</div>
		</Modal>
	</div>
</template>
<style scoped>
	.layout-content {
		background: #fff;
		height: 841px;
	}

	.layout-content-top {
		padding-bottom: 15px;
	}

	.table-container th {
		height: 30px;
		background-color: #f6f6f6;
	}

	.table-container td {
		text-align: center;
		height: 30px;
	}

	.vertical-center-modal table {
		text-align: center;
		border: 1px solid #ccc;
		border-collapse: collapse;
	}

	.vertical-center-modal th {
		background-color: #f8f8f9;
	}

	.vertical-center-modal td, .vertical-center-modal th {
		border: 1px solid #ccc;
		width: 70px;
		height: 30px;
	}

	.vertical-center-modal input {
		width: 70px;
		height: 30px;
		border: 1px solid #edb00d;
		text-align: center;
	}
    .yearlist{
        top:32px;
        width:283px;
        border: 1px solid #ccc;
        background-color: #fff;
        min-height: 25px;
        max-height:200px;
        overflow: scroll;
        z-index: 22;
    }
    .yearlist li{
        white-space: nowrap;
        font-size: 12px;
        padding:0 10px;
        height:25px;
        line-height: 25px;
        cursor: pointer;
    }
    .yearlist li:hover{
        background-color: #E0EBF7;
		color: #108CEE;
    }
    .yearlist::-webkit-scrollbar {
		width: 0;
		/*滚动条宽度（右侧滚动条）*/
		height: 7px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
		z-index: 999;
	}

	.yearlist::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background-color: #F5F5F5;
		z-index: 999;
	}
	.yearlist::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
		background-color: #ccc;
		z-index: 999;
	}
    @media (min-width: 1365px) and (max-width: 1919px) {
        .yearUpdate{
            max-height:450px !important;
            overflow-y:scroll !important;

        }
    }
</style>