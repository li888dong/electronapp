<script>
import myFenye from "@/components/Tool/myFenye";
import mySearch from "@/components/Tool/mySearch";

export default {
  name: "MonthForecast",
  data() {
    return {
      value: "",
      modalShow: false,
      spinShow: false,
      currentPage: 1,
      limit: 14,
      totalPage: 0,
      selectList: [],
      modifyList: [],
      selectMonth: new Date().Format("yyyy-MM"),
      selectArea: "",
      showMonth: new Date().Format("MM"),
      statusList: [
        {
          value: 0,
          label: "未确认"
        },
        {
          value: 1,
          label: "已确认"
        },
        {
          value: 2,
          label: "已购电"
        }
      ],
      modifyIndex: "0",
      tableData1: [],
      tableData2: [],
      modifyModal: false,
      model1: "",
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "企业名称",
          key: "cus_name",
          align: "left",
          width: 230
        },
        {
          title: "所属区域",
          key: "city",
          align: "center",
          width: 150
        },
        {
          width: 150,
          title: "系统预测(万kW-h)",
          key: "sy_predict",
          align: "center"
        },
        {
          width: 100,
          title: "企业申报",
          key: "declare",
          align: "center"
        },
        {
          width: 200,
          title: "年度月预测(万kW-h)",
          key: "forecast",
          align: "center"
        },
        {
          title: "月度预测记录(万kW-h)",
          align: "center",
          width: 200,
          key: "logs",
          render: (h, params) => {
            // let text='';
            // params.row.logs.map(i=>text+=i.id+'：'+i.created_at+'_'+i.total+'kW-h'+'<br/>')
            console.log(params);
            return h(
              "span",
              {
                style: {
                  color: "#36c ",
                  cursor: "pointer"
                },
                on: {
                  click: () => {
                    this.modal2 = true;
                    this.data2 = params.row.logs;
                  }
                }
              },
              "查看"
            );
          }
        },
        {
          title: "月度预测(万kW-h)",
          key: "p_predict",
          width: 200,
          align: "center"
        },
        {
          title: "修改人",
          key: "modify_people",
          width: 80,
          align: "center"
        },
        {
          title: "确认人",
          key: "confirmor",
          width: 80,
          align: "center"
        },
        {
          title: "状态",
          key: "n17",
          width: 100,
          align: "center",
          render: (h, params) => {
            let status0 = params.row.status === 0;
            let status1 = params.row.status === 1;
            let status2 = params.row.status === 2;
            return h(
              "select",
              {
                on: {
                  change: e => {
                    e.target.value = parseInt(e.target.value);
                    this.setTableData1(params.index, e.target.value);
                  }
                }
              },
              [
                h(
                  "option",
                  {
                    attrs: {
                      selected: status0,
                      value: 0
                    }
                  },
                  "未确认"
                ),
                h(
                  "option",
                  {
                    attrs: {
                      selected: status1,
                      value: 1
                    }
                  },
                  "已确认"
                ),
                h(
                  "option",
                  {
                    attrs: {
                      selected: status2,
                      value: 2
                    }
                  },
                  "已购电"
                )
              ]
            );
          }
        },
        {
          title: "操作",
          key: "change",
          width: 100,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "span",
                {
                  style: {
                    marginRight: "5px",
                    color: "#36c ",
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.modifyIndex = params.index;
                      this.modal1 = true;
                      // this.renderM(params.row)
                    }
                  }
                },
                "修改"
              )
            ]);
          }
        }
      ],
      modal1: false,
      updateValue: "",
      modal2: false,
      columns5: [
        {
          title: "修改后月度预测（万kW-h）",
          key: "total",
          align: "center"
        },
        {
          title: "修改时间",
          key: "created_at",
          align: "center"
        }
      ],
      data2: []
    };
  },
  mounted() {
    this.monthData();
  },
  methods: {
    monthData() {
      this.spinShow = true;
      this.$http
        .post(this.$api.MONTH_FORECAST, {
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
      var inputs = document.getElementsByClassName("updateNum");

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value) {
          console.log(inputs[i]);
          var id = inputs[i].parentNode.parentNode.getAttribute("data-id");
          console.log(id);
          id = parseInt(id);
          var value = parseInt(inputs[i].value);
          var arr = { id: id, p_predict: value };
          data.push(arr);
          this.tableData1[_this.modifyIndex].usernos[i].p_predict = parseInt(
            inputs[i].value
          );
        }
      }
      console.log(this.tableData1[_this.modifyIndex]);
      var usernos = this.tableData1[_this.modifyIndex].usernos;
      var total = 0;
      for (let i = 0; i < usernos.length; i++) {
        total += usernos[i].p_predict;
      }
      console.log(total);
      this.$http
        .post(this.$api.MONTH_MODIFY, {
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
      this.monthData();
      console.log(page);
    }
  },
  components: {
    myFenye: myFenye,
    mySearch: mySearch
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
                    <Col span="2">
                    <DatePicker type="month" placeholder="请选择月份" @on-change="monthSelect"></DatePicker>

                    </Col>
                    <Col span="4">
                    <al-selector level=1  @on-change="areaSelect"/>

                    </Col>
                    <Col span="5">

                    <mySearch placeholder="请输入公司名称或关键字" swidth="340" v-on:doSearch="monthData"></mySearch>
                    </Col>
                    <Col span="4" offset="9" style="display: flex;justify-content: flex-end">
                    <Button class="fl" type="primary" @click="allComfirm">批量确认</Button>
                    <Button class="fl" type="primary" style="margin-left: 10px" @click="toDaoru()">导入</Button>
                    </Col>
                </Row>
            </div>
            <Row class="layout-content-main">
                <Table border @on-selection-change="selectItem" :columns="columns4" :data="tableData1" size="small"></Table>
                <Spin size="large" fix v-if="spinShow"></Spin>
            </Row>
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
                        <td>{{item.user_no}}:<input type="text" placeholder="-" class="updateNum" value=''></td>
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
        
    }
    @media (max-width: 1366px) {
        .modelBox {
            height: 450px;
            overflow-y: scroll;
        }
    }
</style>
