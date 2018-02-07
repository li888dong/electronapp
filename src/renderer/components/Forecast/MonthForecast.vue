<script>
import myFenye from "@/components/Tool/myFenye";
import mySearch from "@/components/Tool/mySearch";
import {add} from '../../../../static/numberadd.js';
//表格展开模板
import expandRow from './table-expand.vue';

export default {
  name: "MonthForecast",
  data() {
    return {
      value: "",
      modalShow: false,
      spinShow: false,
      currentPage: 1,
      limit: 16,
      totalPage: 0,
      selectList: [],
      modifyList: [],
      selectMonth: new Date().Format("yyyy-MM"),
      selectArea: "",
      showMonth: new Date().Format("MM"),
      modifyIndex: "0",
      tableData1: [],
      tableData2: [],
      modifyModal: false,
      model1: "",
      modal1: false,
      updateValue: "",
      modal2: false,
      data2: [],
      m:1,
      markbol:false,
      monthList:[],
      columns10: [
        {
          type: 'expand',
          width: 30,
          render: (h, params) => {
              return h(expandRow, {
                  props: {
                      row: params.row,
                      monthsel: this.selectMonth
                  },
                  on: {
                    toShuaxin: (data) => {
                      // this.childrenUpdata(data)
                      this.upData()
                    }
                  }
              })
          }
        },
        {
          sortable: true,
          title: '客户名称',
          key: 'cus_name',
          width: '260',
          render: (h,params) => {
            return h('div',[
              h('span',{
                style: {
                  color: '#4fa8f9',
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    this.goClientInfo('client-detail', params)
                  }
                }
              },params.row.cus_name)
            ])
          }
        },
        {
          sortable: true,
          title: '已购电量',
          key: 'has_buypat',
          render: (h,params) => {
              return h('div', [
                  h('span', params.row.has_buypat),
                  // h('span', {
                  //     style: {
                  //         color: '#FF9900',
                  //         marginLeft: '2px'
                  //     }
                  // }, '(' + params.row.has_buypat_num + ')' ),
              ])
          }
        },
        {
          title: '电费单电量',
          key: 'ebill',
          render: (h,params) => {
              return h('div', [
                  h('span', params.row.ebill),
                  // h('span', {
                  //     style: {
                  //         color: '#FF9900',
                  //         marginLeft: '2px'
                  //     }
                  // }, '(' + params.row.ebill_num + ')' ),
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
          title: '下月系统预测',
          key: '-',
          render: (h) => {
            return h('span','-')
          }
        },
        {
          title: '下月人工预测',
          key:'p_predict'
        },
        {
          sortable: true,
          title: '本月需购',
          key: 'need_pur'
        },
        {
          title: '预测记录',
          key: '-',
          render: (h) => {
            return h('div','-')
          }
        },
        {
          title: '操作',
          key: 'status',
          render: (h,params)=>{
            return h('div',[
              h('span',{
                style: {
                  cursor: 'pointer'
                },
                on: {
                  click: () => {
                    console.log('点击修改')
                  }
                }
              },'-')
            ])
          }
        },
      ],
      data9: [],
      //默认全部客户
      button1: '全部客户',
      uid: ''
    };
  },
  created () {
      this.uid = localStorage.getItem('uid');
      console.log(this.showMonth)
  },
  mounted() {
    this.monthData();
    console.log(this)
  },
  computed:{
    companbol:function(){
        return this.$store.getters.companbol
    }
  },
  methods: {
    //上传完成刷新
    childrenUpdata(data){
      console.log('接受到值了', data)
    },
    //刷新页面数据
    upData(){
      this.isAll()
    },
    //跳转客户信息相关页面
    goClientInfo(page,params){
      console.log('跳转客户信息页面')
      this.$store.dispatch('setCusId', params.row.cus_id);
      this.$store.dispatch('setCusName', params.row.name);
      this.$router.push({
        name: page
      })
    },
    //切换获取全部和个人的客户
    isAll(){
      console.log(this)
      if(this.button1 == '全部客户'){
          this.monthData()
          console.log('获取全部客户',this)
      }else{
          console.log('获取个人客户')
          this.monthDataPer()
      }
    },
    //获取默认客户列表（全部）
    monthData() {
      this.button1 = '全部客户';
      this.spinShow = true;
      this.$store.dispatch('setCompanbol',false);
      this.$http.post(this.$api.MONTH_FORECAST, {
          com_id: this.$store.getters.com_id,
          month: this.selectMonth,
          page: this.currentPage,
          limit: this.limit,
          area: this.selectArea,
          keyword: this.$store.getters.searchKey
        })
        .then(
          res => {
            this.spinShow = false;
            console.log("月度预测", res);
            if(res.data.status == 1){
              let data = res.data.data;
              console.log(data)
              this.data9 = data.data;
            }else{
              this.$api.errcallback(err);
            }
            this.tableData1 = res.data.data.data;
            this.totalPage = res.data.data.total;
            this.currentPage = res.data.data.current_page;
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
    //获取默认客户列表（个人）
    monthDataPer() {
      this.button1 = '我的客户';
      this.spinShow = true;
      this.$store.dispatch('setCompanbol',false);
      this.$http.post(this.$api.MONTH_FORECAST, {
          com_id: this.$store.getters.com_id,
          month: this.selectMonth,
          page: this.currentPage,
          limit: this.limit,
          area: this.selectArea,
          keyword: this.$store.getters.searchKey,
          uid: this.uid
        })
        .then(
          res => {
            this.spinShow = false;
            console.log("月度预测个人数据", res);
            if(res.data.status == 1){
              let data = res.data.data;
              console.log(data)
              this.data9 = data.data;
            }else{
              this.$api.errcallback(err);
            }
            this.tableData1 = res.data.data.data;
            this.totalPage = res.data.data.total;
            this.currentPage = res.data.data.current_page;
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
    monthSelect(month) {
      this.selectMonth = month;
      this.showMonth = month.split("-")[1];
      console.log(this.selectMonth);
      this.monthData();
    },
    areaSelect(area) {
      this.selectArea = area[1].name.replace(/市/, "");
      console.log(this.selectArea);

      this.monthData();
    },
    selectItem(items) {
      console.log(items);
      this.selectList = items;
    },
    //
    monthDim(){
      this.markbol = true;
      this.$store.dispatch('setCompanbol',true);
      if (this.timer) {
					clearTimeout(this.timer);
				}
				if (this.$store.getters.searchKey.length < 1) {
					return
				}
        this.timer = setTimeout(() => this.$http.post(this.$api.MONTH_FORECAST,{
          com_id: this.$store.getters.com_id,
          month: this.selectMonth,
          area: this.selectArea,
          keyword: this.$store.getters.searchKey
        }).then(res=>{
           console.log('月度预测模糊搜索',res);
           if(res.data.status==='1'){
              this.monthList = res.data.data.data;
           }
           this.markbol = false;
        },err=>{
          this.markbol = false;
          this.monthList=[];
           this.$api.errcallback(err);
        }).catch(err=>{
          this.markbol = false;
          this.monthList =[];
           this.$api.errcallback(err);
        }), 500)
    },
    choosemonth(item){
        let arr =[];
        arr.push(item);
        this.tableData1 = arr;
        this.$store.dispatch('setCompanbol',false);
        this.currentPage = 1;
        this.totalPage = 1;
    },
    allComfirm() {
      let postArr = [];
      let _this = this;
      this.selectList.map(function(i) {
        i.status = parseInt(i.status);
        postArr.push({
          cus_id: i.cus_id,
          month: _this.selectMonth,
          type: i.status
        });
      });
      console.log(postArr);
      this.$http
        .post(this.$api.MONTH_CONFIRM, { data: postArr })
        .then(
          res => {
            console.log("月度预测确认", res);
            if (res.data.status === "1") {
              this.monthData();
            }
          },
          err => {
            this.$api.errcallback(err);
          }
        )
        .catch(err => {
          this.$api.errcallback(err);
        });
    },
    setTableData1(index, value) {
      this.tableData1[index].status = value;
    },
    renderM() {
      let postArr = [];
      let _this = this;
      var data = [];
      var newarr = [];
      var inputs = document.getElementsByClassName("updateNum");
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value) {
          console.log(inputs[i]);
          var id = inputs[i].parentNode.parentNode.getAttribute("data-id");
          console.log(id);
          id = parseInt(id);
          var value = Number(inputs[i].value);
          var arr = { id: id, p_predict: value };
          data.push(arr);
          this.tableData1[_this.modifyIndex].usernos[i].p_predict = Number(
            inputs[i].value
          );
          newarr.push(this.tableData1[_this.modifyIndex].usernos[i].p_predict);
        }
      }
      
      this.m = add(newarr);
      console.log(newarr);
      var usernos = this.tableData1[_this.modifyIndex].usernos;
      var total = 0;
      for (let i = 0; i < usernos.length; i++) {
        total += (usernos[i].p_predict*this.m);
      }
      total = total/this.m;
      console.log(total);
      this.$http.post(this.$api.MONTH_MODIFY, {
          cus_id: this.tableData1[_this.modifyIndex].cus_id,
          data: data,
          total: total,
          month: this.tableData1[_this.modifyIndex].usernos[0].month
        })
        .then(
          res => {
            console.log("月度预测修改", res);
            if (res.data.status === "1") {
              this.monthData();
            }
          },
          err => {
            this.$api.errcallback(err);
          }
        )
        .catch(err => {
          this.$api.errcallback(err);
        });
    },
    toDaoru() {
      this.$router.push({ path: "/import-data", query: { type: "month" } });
    },
    pageChange(page) {
      this.currentPage = page;
      
      console.log(page);
      this.isAll()
    },
    //月份选择
    mouthSUB(){
      let years = this.selectMonth.substr(0, 4)      
      let mouths = this.selectMonth.substr(5, 2)
      // console.log('月份减少', years,mouths )
      mouths = mouths - 1
      if(mouths <= 0 ){
        mouths = 12
        years = years - 1
      }else {
        console.log('正常')
      }
      this.selectMonth = years + '-' + (mouths < 10 ? '0' + mouths : mouths);
      this.isAll()
    },
    mouthAdd(){
      // console.log('月份增加',this.selectMonth)
      let years = this.selectMonth.substr(0, 4)      
      let mouths = this.selectMonth.substr(5, 2)
      mouths = mouths - 0 + 1
      if(mouths >= 12 ){
        mouths = 1
        years = years - 0  + 1
      }else {
        console.log('正常')
      }
      this.selectMonth = years + '-' + (mouths < 10 ? '0' + mouths : mouths);
      this.isAll()
    }
  },
  components: {
    myFenye: myFenye,
    mySearch: mySearch,
    expandRow:expandRow
  }
};
</script>

<template>
<div class="main-container">
    <Card>        
        <h3 slot="title">月度预测</h3>       
        <div class="layout-content">
            <div class="layout-content-top">
                <Row gutter="10">
                    <!-- <Col span="2">
                    <DatePicker type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>

                    </Col>
                    <Col span="4">
                    <al-selector level=1  @on-change="areaSelect"/>

                    </Col> -->
                    <Col span="5" class="relative">

                      <mySearch placeholder="请输入公司名称或关键字" swidth="340" v-on:doSearch="monthData" v-on:dimSearch='monthDim'></mySearch>
                      <div class="absolute monthlist" v-if='companbol'>
                        <ul>
                          <li v-for='item in monthList' @click='choosemonth(item)'>{{item.cus_name}}</li>
                        </ul>
                        <Spin size="small" fix v-if="markbol"></Spin>
                      </div>
                    </Col>
                    <RadioGroup v-model="button1" type="button" @on-change='isAll' class='mgl_10'>
                        <Radio label="全部客户"></Radio>
                        <Radio label="我的客户"></Radio>
                    </RadioGroup>
                    <Button type="primary" class="refresh absolute" style="right: 0;" @click="">
                      <i class="fa fa-cog"></i>
                    </Button>
                    <Button type="primary" class="refresh absolute" style="right: 42px;" @click="upData">
                      <i class="fas fa-sync"></i>
                    </Button>
                    <Button type="primary" class="refresh absolute" style="right: 84px;width:90px" @click="">
                        <i class="" style="font-style:normal">调配记录</i>
                    </Button>
                    <div class="absolute" style="right: 184px;top: 0">
                      <ButtonGroup>
                        <Button icon="ios-skipbackward" @click="mouthSUB()"></Button>
                        <Button>{{selectMonth}}</Button>
                        <Button icon="ios-skipforward" @click="mouthAdd()"></Button>
                      </ButtonGroup>                        
                    </div>
                    <!-- <Col span="4" offset="9" style="display: flex;justify-content: flex-end">
                    <Button class="fl" type="primary" @click="allComfirm">批量确认</Button>
                    <Button class="fl" type="primary" style="margin-left: 10px" @click="toDaoru()">导入</Button>
                    </Col> -->
                </Row>
            </div>
            <Row class="layout-content-main">
                <!-- <Table border @on-selection-change="selectItem" :columns="columns4" :data="tableData1" size="small"></Table> -->
                <Table :columns="columns10" :data="data9" size="small"></Table>
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Row>
            <Button class="fl upDataList" type="primary" style="margin-left: 10px" @click="toDaoru()">导入</Button>
            <div class="page-container">
                <Page
                        :total="totalPage"
                        :current="currentPage"
                        :page-size ='limit'
                        show-total
                        show-elevator
                        v-on:on-change="pageChange"
                ></Page>
            </div>
        </div>
    </Card>
    <Modal
        :title="showMonth+'月份电量申报详情'"
        v-model="modal1"
        width = '846px'
        :mask-closable="false"
        class-name="vertical-center-modal" 
        @on-ok="renderM">
        <div  class='modelBox'>
          <Row class="gongSiBox" v-if="modal1">
              <Col span="9" class="gongSi">
                  <Row class="comName">
                      <Col span='12'>企业名称</Col>
                      <Col span='6'>所属区域</Col>
                      <Col span='6'>是否购电</Col>
                  </Row>
                  <Row class='qiye'>
                      <Row  class='qiyeBox'>
                        <Col span='12' style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap;'>{{tableData1[modifyIndex].cus_name}}</Col>
                        <Col span='6'>{{tableData1[modifyIndex].city}}</Col>
                        <Col span='6'>{{tableData1[modifyIndex].status==2?'是':'否'}}</Col>
                      </Row>
                  </Row>
              </Col>
              <Col span="15" style='margin-left: 37.5%'>
                  <table cellspacing="10" cellpadding="10">
                      <tr>
                          <td>系统预测合计: {{tableData1[modifyIndex].sy_predict}}</td>
                          <td>企业申报合计: {{tableData1[modifyIndex].declare}}</td>
                          <td>人工预测合计: {{tableData1[modifyIndex].p_predict}} <!-- <br>
                          <Checkbox label="使用客户申报数值">使用客户申报数值</Checkbox> --></td>
                      </tr>
                      <tr v-for='item in tableData1[modifyIndex].usernos' :data-id='item.id'>
                          <td >{{item.user_no}}:<span class="num">{{item.sy_predict}}</span></td>
                          <td>{{item.user_no}}:<span class="num">{{item.declare_power}}</span></td>
                          <td>{{item.user_no}}:<input type="text" placeholder="-" class="updateNum" value='' style="text-align: center"></td>
                      </tr>
                  </table>
              </Col>
          </Row>
        </div>
     </Modal>
      <Modal
        title="月度预测修改记录"
        v-model="modal2"
        width = '846px'
        :mask-closable="false"
        class-name="vertical-center-modal" 
        >
        <div  class='recordBox'>
        <Row  v-if="modal2">
             <Table :columns='columns5' :data='data2'></Table>
        </Row>
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
    .modelBox {
    height: 500px;
    overflow-y: scroll;
    }
    .recordBox {
    height: 200px;
    overflow-y: scroll;
    }
    .gongSiBox {
    border: 1px solid #ccc;
    }
    .gongSiBox .gongSi {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    }
    .qiye {
    height: 80%;
    }
    .qiyeBox {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -9px;
    }
    .comName {
    height: 36px;
    text-align: center;
    line-height: 36px;
    }
    .comName div {
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0 10px;
    }
    .comName div:first-child {
    border-left: 0;
    }
    .gongSi div {
    text-align: center;
    }
    .vertical-center-modal table {
    text-align: center;
    border-collapse: collapse;
    }
    .vertical-center-modal th {
    background-color: #f2f7fb;
    }
    .vertical-center-modal td,
    .vertical-center-modal th {
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    width: 180px;
    height: 36px;
    }
    .monthlist{
        top:32px;
        width:283px;
        border: 1px solid #ccc;
        background-color: #fff;
        min-height: 25px;
        max-height:200px;
        overflow: scroll;
        z-index: 22;
    }
    .monthlist li{
        white-space: nowrap;
        font-size: 12px;
        padding:0 10px;
        height:25px;
        line-height: 25px;
        cursor: pointer;
    }
    .monthlist li:hover{
        background-color: #E0EBF7;
		color: #108CEE;
    }
    .monthlist::-webkit-scrollbar {
		width: 0;
		/*滚动条宽度（右侧滚动条）*/
		height: 7px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
		z-index: 999;
	}

	.monthlist::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background-color: #F5F5F5;
		z-index: 999;
	}

	.monthlist::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
		background-color: #ccc;
		z-index: 999;
  }
  .upDataList {
    position: absolute;
    left: 16px;
    bottom: 10px;
  }
    @media (min-width: 1365px) and (max-width: 1919px){
        .modelBox{
            height:450px;
            overflow-y: scroll;
        }
        .vertical-center-modal input {
        width: 70px;
        height: 26px;
        text-align: center;
        }
       .mgl_10{
            margin-left:75px;
        }
    }
</style>
