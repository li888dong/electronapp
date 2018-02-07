<style scoped>
	.client-header-info{
		height: 200px;
		font-size:12px;
	}
	.info-list{
		margin-top: 10px;
		margin-left: 20px;
		width: 100%;
		margin-bottom: 10px;
	}
	.info-list>li{
		display: inline-block;
		margin-right: 60px;
	}
	.info-list-content{
		color: #000;
	}
	.client-logo{
		display: inline-block;
		vertical-align: top;
		width: 150px;
		height: 150px;
		background: url("../../assets/gongsilogo.png") no-repeat;
		background-size: contain;
		/* border: 1px solid #ccc; */
	}
	.huhao-amount,
	.terminal-amount{
		display: inline-block;
		margin-left: 60px;
		margin-top: 34px;
	}
	.terminal-amount-logo,
	.huhao-amount-logo{
		display: inline-block;
		vertical-align: top;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background-size: contain;
		border: 1px solid #ccc;
		text-align: center;
	}
	.huhao-amount-logo i,
	.terminal-amount-logo i{
		font-size: 38px;
	}
	/* .terminal-amount-logo{
       background: url("../../assets/hhh.svg") no-repeat;
	   background-position:9px 9px;
	}
	.huhao-amount-logo{
	   background: url("../../assets/huhao.svg") no-repeat;
	   background-position:11px 11px;
	} */
	.amount{
		color:#2b85e4;
		font-weight:bold;
	}
	.deviation-chart{
		width: 100%;
		height: 150px;
		display: inline-block;
	}
	.deviation-list{
		margin-top: 10px;
		display: inline-block;
	}
	.deviation-list>li{
		line-height:30px;
	}
	.deviation-title{
		display: inline-block;
		text-align: right;
		width: 120px;

	}
	.deviation-content{
		color: #000;
	}
	.searchBox i {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    right: 10px;
    z-index: 11;
	}
	table{
	 width: 100%;
	}
	.userno_infor{
		font-size: 12px;
	}
	.basic_infor{
		font-size: 12px;
	}
	.header_title{
		width:100%;
		height: 36px;
		line-height: 36px;
        background-color: #f5f7f9;
		padding-left:10px;
		color:black;
	    font-weight: bold;
	}
     .caozuo{
		display: inline-block;
		margin-top:3px;
		width: 30px;
		height: 30px;
		line-height: 30px;
		background-color: #fff;
		border: 1px solid #dddee1;
		text-align:center;
		color: #3399ff;
		font-weight: normal;
		cursor: pointer;
	}
	.caozuo_box{
		display: inline-block;
		top:0;
		right:10px;
		z-index:22;
	}
	.contract_box{
		 font-size: 12px;
	}
	.contract_box table tr td span:nth-child(2){
		font-weight: bold;
	}
	.contract_box table tr td .contract_title{
		 display: inline-block;
		 text-align: right;
		 width:120px;
	}
	.icon_box i{
	   padding-left:40px;
	   padding-top:10px;
	   font-size: 46px;
	}
	.icon-jishiben01:before{
        font-size: 46px;
	}
	.txt_left{
		text-align: left;
	}
	table tr td label{
		display: inline-block;
		text-align: right;
		width:100px;
	}
	.contract_link{
		padding:10px 20px;
		border-top:1px solid #dddee1;
	}
	.info-list{
		margin-left:0;	
	}
	.info-list > li {
		display: inline-block;
		margin-right: 25px;
	}
	.basic_infor{
		margin: 25px 25px 40px 25px;

	}
	.basic_infor tr td span:nth-child(2){
		margin-left: 10px;
		font-weight: bold;
	}
	.basic_title{
		display: inline-block;
		width:110px;
	}
	.left{
		padding-left:20px;
	}
	.btn{
		width:100%;
	}
	.page_contanir{
		bottom:1px;
		left:0;
		right:0;
		text-align: center;
	}
	 .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        
    }
	.vertical-center-modal .ivu-modal{
            top: 0;
	 }
	 .demo-carousel img{
		 display: inline-block;
		 width:100%;
		 height: 100%;
	 }
	 img{
		 vertical-align: middle;
	 }
	@media (min-width: 1365px) and (max-width: 1919px) {
		.info-list{
			margin-left:0;
		}
		.info-list>li{
		display: inline-block;
		margin-right: 25px;
		 }
		 .basic_infor tr td span:nth-child(2){
			  margin-left: 10px;
			  font-weight: bold;
		 }
         .left{
			 padding-left:20px;
		 }
	}
</style>
<template>
	<div class="client-container">
		<Row :gutter="10">
			<Col span="16">
				<Card class="client-header-info">
					<div>
						<div class="client-logo">

						</div>
						<div class="huhao-amount">
							<div class="huhao-amount-logo">
                               <i class="iconfont icon-huhao"></i>
							</div>
							<p style="margin-top:10px;">户号个数: <span class="amount">{{clientInfo.usernos}}</span></p>
						</div>
						<div class="terminal-amount">
							<div class="terminal-amount-logo">
                                 <i class="iconfont icon-icon-ammeter"></i>
							</div>
							<p style="margin-top:10px;"> 终端个数: <span class="amount">{{clientInfo.devices}}</span></p>

						</div>
					</div>
					<ul class="info-list">
						<li><span class="info-list-title">客户编码</span>:<span class="info-list-content">{{clientInfo.id}}</span></li>
						<li><span class="info-list-title">合同编码</span>:<span class="info-list-content">{{clientInfo.con_no}}</span></li>
						<li><span class="info-list-title">地理区域</span>:<span class="info-list-content">{{clientInfo.area}}</span></li>
						<li><span class="info-list-title">是否准入</span>:<span class="info-list-content">{{clientInfo.is_admittance}}</span></li>
						<li><span class="info-list-title">交易资格状态</span>:<span class="info-list-content">{{clientInfo.qual_name}}</span></li>
					</ul>
				</Card>
			</Col>
			<Col span="8">
				<Card class="client-header-info">
					<Row>
						<Col span='11' style="padding-right:0;padding-left:0;">
						    <div class="deviation-chart relative">
								<div id='deviation-chart' style="position:absolute;top:2px;left:-8px;right:0;bottom:0">
         
								</div>
					        </div>
							 <p style="text-align:center;">用户申报偏差体系</p>
						</Col>
						<Col span='13'>
						    <ul class="deviation-list">
						          <li><span class="deviation-title">年度综合申报偏差：</span><span class="deviation-content">{{deviation.year}}</span></li>
						          <li><span class="deviation-title">月内最大正偏差：</span><span class="deviation-content">{{deviation.monthPlus}}</span></li>
						          <li><span class="deviation-title">最大正偏差月份：</span><span class="deviation-content">{{deviation.monthMinus}}</span></li>
						          <li><span class="deviation-title">月内最大负偏差：</span><span class="deviation-content">{{deviation.maxPlusMonth}}</span></li>
						          <li><span class="deviation-title">最大负偏差月份：</span><span class="deviation-content">{{deviation.maxMinusMonth}}</span></li>
					      </ul>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
		<Row class="mgt_15">
			<Col>
				<Card>
					<Tabs  :animated="false" v-model="value1">
						<TabPane label="基础信息" name="base" class="relative">
							<Row>
								<Col span="14">
									  <table class="basic_infor" cellspacing='12'>
										  <tbody>
											  <tr>
												  <td style="width:50%"><span class="basic_title">法人姓名</span><span>{{companyInfor.name}}</span></td>
												  <td style="width:50%"><span class='basic_title'>法人代表姓名</span><span>{{companyInfor.legal_person}}</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">成立日期</span><span>{{companyInfor.reg_time}}</span></td>
												  <td><span class="basic_title">法人代表身份证号</span><span>{{companyInfor.idcard}}</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">统一社会信用代码</span><span>{{companyInfor.tyshxydm}}</span></td>
												   <td><span class="basic_title">企业注册地址</span><span>{{companyInfor.c_address}}</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">组织机构代码</span><span>{{companyInfor.organization}}</span></td>
												  <td><span class="basic_title">投运年月</span><span>{{companyInfor.put_date}}</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">主要产品</span><span>{{companyInfor.major_product}}</span></td>
											  </tr>
										  </tbody>
									  </table>
									  <table class="basic_infor" cellspacing='12'>
										  <tbody>
											  <tr>
												  <td style="width:50%;"><span class="basic_title">上年用电量</span><span>{{companyInfor.ly_used}}Mv.h</span></td>
												  <td tyle="width:50%;"><span class="basic_title">上年最大负荷</span><span>{{companyInfor.ly_maxload}}Mv.h</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">本年预计电量</span><span>{{companyInfor.bndyjdl}}Mv.h</span></td>
												  <td><span class="basic_title">本年度预计最大负荷</span><span>{{companyInfor.bndyjzdfh}}Mv.h</span></td>
											  </tr>
										  </tbody>
									  </table>
									   <table class="basic_infor" cellspacing='12'>
										  <tbody>
											  <tr>
												  <td style="width:50%;"><span class="basic_title">联系人姓名</span><span>{{companyInfor.fullname}}</span></td>
												  <td tyle="width:50%;"><span class="basic_title">办公电话</span><span>{{companyInfor.phone}}</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">联系人职务</span><span>{{companyInfor.duty_name}}</span></td>
												  <td><span class="basic_title">传真</span><span>{{companyInfor.fax}}</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">手机号码</span><span>{{companyInfor.mobile}}</span></td>
												  <td><span class="basic_title">电子邮件</span><span>{{companyInfor.email}}</span></td>
											  </tr>
										  </tbody>
									  </table>
									  <table class="basic_infor" cellspacing='12' style="margin-bottom: 0">
										  <tbody>
											  <tr>
												  <td style="width:50%;"><span class="basic_title">开户银行</span><span>{{companyInfor.bank_name}}</span></td>
												  <td style="width:50%;"><span class="basic_title">开户账号</span><span>{{companyInfor.bank_account}}</span></td>
											  </tr>
											  <tr>
												  <td><span class="basic_title">交易中心账号</span><span>{{companyInfor.username}}</span></td>
												  <td><span class="basic_title">交易中心密码</span><span>{{companyInfor.password}}</span></td>
											  </tr>
										  </tbody>
									  </table>
								</Col>
								<Col span="10">

								</Col>
							</Row>
							<Spin  fix v-if="spinShow"></Spin>
						</TabPane>
						<TabPane label="户号信息" name="huhao" class="relative">
							<Row :gutter ='10'>
								<Col span='6'>
								     <div class="searchBox relative"> 
                                         <i class="fas fa-search" @click="usernoDoSearch"></i>
								         <Input placeholder="请输入用户编号" v-model="userKeyword" v-on:keyup.enter= 'usernoDoSearch'></Input>
								     </div>
								</Col>
								<Col span='2'>
								   <Button type="primary" @click="goAddusernos" class="btn">添加户号</Button></Button>
								</Col>
								<Col span='2' class="relative">
								   <Button type="primary" class="refresh absolute" style="left: 0;" @click='refnosList'>
								   <i class="fas fa-sync"></i>
							   </Button>
								</Col>
							</Row>
							<Row class="mgt_15">
								   <div class="userno_infor" v-for='(item,index) in usernosList'>
                                     <p class="header_title relative">用户编号:<span class="user_no">{{item.user_no}}</span><span class="caozuo_box absolute" v-if='bol1'><span class="caozuo" @click="updateUsernos(item.id)"><i class="fas fa-edit"></i></span><span class="caozuo" @click='deleUsernos(item.id,item.user_no,index)'><i class="fas fa-trash-alt"></i></span></span></p>
									 <div>
										 <table cellspacing='10'>
											 <tbody>
												 <tr>
													 <td>用电单位类型：<span>{{item.unit_type}}</span></td>
													 <td><label>功率因数：</label><span class="txt_left">{{item.power_factor}}</span></td>
													 <td><label>用电类别：</label><span class="txt_left">{{item.category}}</span></td>
													 <td ><label>最大需量：</label><span class="txt_left">{{item.max_demand}}MVA</span>
													 </td>
													 <td><label>目录电价：</label><span class="txt_left">{{item.tariff}}元/MVA</span></td>
												 </tr>
												  <tr>
													 <td>用户电压等级：<span>{{item.vol_level}}</span></td>
													 <td><label>合同容量：</label><span class="txt_left">{{item.cont_capacity}}MVA</span></td>
													 <td><label>电价行业类别：</label><span class="txt_left">{{item.price_type}}</span></td>
													 <td><label>输配电损耗率：</label><span class="txt_left">{{item.trans_rate}}%</span> </td>
													 <td><label>电价编码：</label><span class="txt_left">{{item.tariff_code}}元/MVA</span></td>	
												 </tr>
												 <tr>
													 <td>用电地址：<span>{{item.province+item.city+item.county+item.address}}</span></td>
													 <td><label>售电支持所属区：</label><span class="txt_left">{{item.cyjjq}}</span> </td>
													 <td><label>执行峰谷点击否：</label><span class="txt_left">{{item.tpm}}</span></td>
													<td><label>直供容量：</label><span class="txt_left">99MVA</span></td> 
												 </tr>
											 </tbody>
										 </table>
									 </div>
								   </div>
							 </Row>
							 <Spin  fix v-if="spinShow2"></Spin>
							 <div class="page_contanir absolute">
                                    <Page :total="totalPages" show-elevator show-total :page-size='limit' :current='currentPages' v-on:on-change='nosPagechange'></Page>
							 </div>
							 
						</TabPane>
						<TabPane label="申报记录" name="declare">
							 <Row :gutter='10'>
							    <Col span='3'>
							         <DatePicker type="month" format='yyyy-MM' placeholder="请选择月份" :value="months" v-on:on-change='monthSelectDecl'></DatePicker>
							    </Col>
								<Col span='2'>
								      <Button type="primary" class="btn" @click="userDeclareA">所有月份</Button>
								</Col>
							    <Col :lg="{span:3}" :md="{span:4}">
							        <Button type="primary" class="btn">提醒客户发送月度申请记录</Button>
							    </Col>
							    <Col span='2' class="relative">
								    <Button type="primary" class="refresh absolute" style="left: 0;" @click='refdeclList'>
								     <i class="fas fa-sync"></i>
							        </Button>
								 </Col>
							 </Row>
							 <Row class="mgt_15">
                                <Table size='small' :columns='columns1' :data='data1' :loading='loading1'></Table>
							 </Row>	  
						</TabPane>
						<TabPane label="电费单记录" name="bill">
							<Row :gutter='10'>
							     <Col span='3'>
							          <DatePicker type="month" format='yyyy-MM' placeholder="请选择月份" :value="month2" v-on:on-change='monthSelectPower'></DatePicker>
							     </Col>
							     <Col span='2'>
								      <Button type="primary" class="btn" @click="powerRecordA">所有月份</Button>
								 </Col>
							     <Col :lg="{span:3}" :md="{span:4}">
							         <Button type="primary" class="btn">提醒客户发送电费单记录</Button></Button>
							     </Col>
							     <Col span='2' class="relative">
								     <Button type="primary" class="refresh absolute" style="left: 0;" @click="refPowerRec">
								         <i class="fas fa-sync"></i>
							         </Button>
								</Col>
							 </Row>
							 <Row class="mgt_15">
                                <Table size='small' :columns='columns2' :data='data2' :loading='loading2'></Table>
							 </Row>
						</TabPane>
						<TabPane label="合同管理" name="contract" class="relative">
							<Row :gutter='10'>
								 <Col span='6'>
							         <div class="searchBox relative"> 
                                         <i class="fas fa-search" @click="saleDoserch"></i>
								         <Input placeholder="请输入合同编号" v-model="conKeyword" v-on:keyup.enter='saleDoserch'></Input>
								     </div>
							      </Col>
							      <Col span='2'>
							         <Button type="primary" @click='gohetong' class="btn">添加合同</Button></Button>
							     </Col>
							      <Col span='2' class="relative">
								     <Button type="primary" class="refresh absolute" style="left: 0;" @click="refSalecontract">
								     <i class="fas fa-sync"></i>
							         </Button>
								 </Col>
							 </Row>
							 <Row class="mgt_15">
								<div class="contract_box" v-for='(item,index) in salecontractList'>
									  <p class="header_title relative">合同编号:<span class="user_no">{{item.con_no}}</span><span class="caozuo_box absolute" v-if='bol2'><span class="caozuo" @click='saleContractupdate(item.id)'><i class="fas fa-edit"></i></span><span class="caozuo" @click='deleSaleContract(item.id,item.con_no,index)'><i class="fas fa-trash-alt"></i></span></span></p>
										 <Row>
											 <Col span='3' class="icon_box">
											   <i class="fas fa-file-alt"></i>
											 </Col>
											 <Col span='21'>
											  <table cellspacing='10'>
												  <tbody>
													  <tr>
														  <td><span>合同周期：</span><span>{{item.deadline}}</span></td>
														  <td><span class="contract_title">上年最大负荷：</span><span>{{item.ly_maxload}}MW</span></td>
														  <td style="white-space: nowrap;"><span class="contract_title">上年用电量：</span><span>{{item.ly_used}}MVh</span></td>
														  <td><span>开户银行：</span><span>{{item.bank_name}}</span></td>
													  </tr>
													  <tr>
														  <td><span>合同方式：</span><span>{{item.way}}</span></td>
														  <td><span class="contract_title">本年度预计最大负荷：</span><span>{{item.bndyjzdfh}}MVh</span></td>
														  <td><span class="contract_title">本年预计用电量：</span><span>{{item.bndyjdl}}MVh</span></td>
														  <td><span>银行账户：</span><span>{{item.bank_account}}</span></td>
													  </tr>
												  </tbody>
											  </table>
											 </Col>
										 </Row>
									  <Row class="contract_link">
											 <table>
												 <tbody>
													 <tr>
														 <td>合同联系人：<span>{{item.contact}}</span></td>
														 <td>地址：<span>{{item.province+item.city+item.county+item.address}}</span></td>
														 <td>固定电话：<span>{{item.phone}}</span></td>
														 <td>传真：<span>{{item.fax}}</span></td>
													 </tr>
												 </tbody>
											 </table>
									  </Row>
								</div>
							</Row>
							<Spin  fix v-if="spinShow3"></Spin>
                            <div class="page_contanir absolute">
                                  <Page :total="totalPages2" show-elevator show-total :page-size='limit2' :current='currentPages2' v-on:on-change='salePagechange'></Page>
							</div>
						</TabPane>
						<TabPane label="用户终端列表" name="terminal">
							<Row :gutter='10'>
								 <Col span='6'>
							        <div class="searchBox relative"> 
                                         <i class="fas fa-search" @click='terminalDosearch'></i>
								         <Input placeholder="请输入终端号" v-model="termKeyword" v-on:keyup.enter='terminalDosearch'></Input>
								     </div>
							     </Col>
							     <Col span='2'>
							        <Button type="primary" @click="goTerminal" class="btn">添加终端</Button></Button>
							     </Col>
							     <Col span='2' class="relative">
								     <Button type="primary" class="refresh absolute" style="left: 0;" @click='refTerminalList'>
								     <i class="fas fa-sync"></i>
							          </Button>
								</Col>
							</Row>
							<Row class="mgt_15">
                             <Table :columns="columns3" :data="data3"  :loading='loading3'
						       size="small"></Table>
							</Row>
						</TabPane>
						
					</Tabs>
				</Card>
			</Col>
		</Row>
		<!-- 删除终端 -->
		<Modal
        title="确认信息"
        v-model="deleteTerminalModal"
		@on-ok="ok"
        @on-cancel="cancel"
        class-name="vertical-center-modal" width='400'>
        <p>确认删除终端序号为{{deleteTerminalId}}终端名称为{{deleteTerminalName}}的终端？</p>
    </Modal>
	<!-- 删除户号 -->
	<Modal
        title="确认信息"
        v-model="usernosModal"
		@on-ok="deleteUsernos"
        @on-cancel="cancel1"
        class-name="vertical-center-modal" width='400'>
        <p>确认删户号为{{num}}的合同？</p>
    </Modal>
	<!-- 删除售电合同 -->
	<Modal
        title="确认信息"
        v-model="saleContractModal"
		@on-ok="deleteSaleContract"
        @on-cancel="cancel2"
        class-name="vertical-center-modal" width='400'>
        <p>确认删合同编号为{{s_num}}的合同？</p>
    </Modal>
	<!-- 电费单图片 -->
	 <Modal v-model="modal3" width='930' style="height:500px;" class="myModal">
         <Carousel v-model="value2" style='width:900px;margin-top:20px;height:465px;'>
        <CarouselItem  style='width:900px;height:465px' v-for="item in imgList">
            <div class="demo-carousel" style='width:900px;height:465px'>
				<img :src="'http://192.168.2.111/' + item"  alt="">
			</div>
        </CarouselItem>
    </Carousel>
    </Modal>
	</div>
</template>
<script>
	export default {
		name:'client-detail-header',
		data(){
			return{
				value1:'base',
				value2:0,
				modal3:false,
				id:'',
				num:'',
				usernosModal:false,
				saleContractModal:false,
				s_id:'',
				s_num:'',
				loading2:false,
				months:new Date().Format("yyyy-MM"),
				month2:new Date().Format("yyyy-MM"),
				clientInfo:{
					usernos:'-',
					devices:'-',
					id:'-',
					con_no: '-',
					area:'-',
					is_admittance:'-',
					qual_name:'-',
				},
				deviation:{
					year:'-',
					monthPlus:'-',
					monthMinus:'-',
					maxPlusMonth:'-',
					maxMinusMonth:'-',
				},
				companyInfor:{
					name:'-',
					tyshxydm:'-',
					legal_person: '-',
					idcard:'-',
					major_product:'-',
					reg_assets:'-',
					reg_time:'-',
					mobile: '-',
					email: '-',
					phone: '-',
					fax: '-',	
					put_date:'-',
					c_address:'-',
					bank_name:'-',
					bank_account:'-',
					username:'-',
					password:'-',
					ly_used: '-',
                    ly_maxload: '-',
                    bndyjdl: '-',
					bndyjzdfh: '-',
					organization:'-',
					fullname:'-',
					duty_name:'-'
				},
				columns1:[
					{
						title:'户号与合计',
						key:'user_no',
						render:(h,params)=>{
							if(params.row.user_no == '合计'){
								return h('span',{
									 
								},'户号合计')
							}else{
								return h('span',{

								},params.row.user_no)
							}

						}
					},
					{
						title:'月份',
						key:'month',
						render:(h,params)=>{
							if(params.row.month){
                                return h('span',{},params.row.month)
							}else{
                                return h('span',{},'-')
							}
						}
					},
					{
						title:'申报电量',
						key:'sbdl',
						render:(h,params)=>{
							if(params.row.sbdl && params.row.sbdl != 0){
                                return h('span',{},params.row.sbdl)
							}else{
                                return h('span',{},'-')
							}
						}
					},
					{
						title:'监测用电量',
						key:'monitor',
						render:(h,params)=>{
							if(params.row.monitor && params.row.monitor != 0){
                                return h('span',{},params.row.monitor)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'电费单电量',
						key:'actual_used',
						render:(h,params)=>{
							if(params.row.actual_used && params.row.actual_used != 0){
                                return h('span',{},params.row.actual_used)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'申报偏差',
						key:'declare_dev',
						sortable: true,
						render:(h,params)=>{
							if(params.row.declare_dev && params.row.declare_dev != 0){
                                return h('span',{},params.row.declare_dev)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'申报人',
						key:'confirmor',
						render:(h,params)=>{
							if(params.row.confirmor){
                                return h('span',{},params.row.confirmor)
							}else{
                                return h('span',{},'-')
							}
						}
					}
				],
				data1:[],
				columns2:[{
					type: 'selection',
                    align: 'center'
				},{
					title:'户号与合计',
						key:'user_no',
						render:(h,params)=>{
							if(params.row.user_no == '合计'){
								return h('span',{
									 
								},'月度合计')
							}else{
								return h('span',{

								},params.row.user_no)
							}

						}
					},{
						title:'月份',
						key:'month',
						render:(h,params)=>{
							if(params.row.month){
                                return h('span',{},params.row.month)
							}else{
                                return h('span',{},'-')
							}
						}
					},
					{
						title:'总有功功率',
						key:'used_num',
						render:(h,params)=>{
							if(params.row.used_num && params.row.used_num != 0){
                                return h('span',{},params.row.used_num)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'电费交费合计',
						key:'price',
						render:(h,params)=>{
							if(params.row.price && params.row.price != 0){
                                return h('span',{},params.row.price)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'基本电费',
						key:'basic_cost',
						render:(h,params)=>{
							if(params.row.basic_cost && params.row.basic_cost != 0){
                                return h('span',{},params.row.basic_cost)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'力调电费',
						key:'force',
						render:(h,params)=>{
							if(params.row.force && params.row.force != 0){
                                return h('span',{},params.row.force)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'抄表日（周）期',
						key:'read_at',
						sortable: true,
						render:(h,params)=>{
							if(params.row.read_at){
                                return h('span',{},params.row.read_at)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'提报人',
						key:'cus_uname',
						render:(h,params)=>{
							if(params.row.cus_uname){
                                return h('span',{},params.row.cus_uname)
							}else{
                                return h('span',{},'-')
							}
						}
					},{
						title:'操作',
						key:'cakan',
						render:(h,params)=>{
							if(params.row.user_no == '合计'){
								return h('span',{
									 
								},'-')
							}else{
								return h('span',{
                                      style: {
										color: '#4fa8f9 ',
										cursor: 'pointer'
									},
									on: {
										click: () => {
										   this.modal3 = true;
										   this.imgList = this.data2[params.index].ebpic
										}
									}
								},'查看')
							}

						}
					}],
				   data2:[],
				   columns3: [
					{
						sortable: true,
						title: '测量点名称',
						key: 'mea_name'
					},
					{
						title: '逻辑地址',
						key: 'clientid'
					},
					{
						sortable: true,
						title: '状态',
						key: 'is_install',
						render: (h, params) => {
							if (params.row.zt === 0) {
								return h('span', {
									style: {}
								}, "未安装")
							} else {
								return h('span', {
									style: {}
								}, "已安装")
							}
						}
					},
					{
						title: '所属户号',
						key: 'user_no'
					},
					{
						title: '通讯地址',
						key: 'mailing_address'
					},
					{
						title: '端口',
						key: 'port',
						width: 90,
					},
					{
						title: '采集成功率（%）',
						width: 150,
						key: 'success_rate'
					},
					{
						title: '上报比例（%）',
						key: 'report_rate'
					},
					{
						title: '采集记录',
						key: 'sbbl',
						render: (h, params) => {
							return h('span', {
									on: {
										click: () => {
											this.gotoTerminalData(params.row.clientid,params.index)
										}
									},
									attrs: {
										class: 'iconfont icon-zhuzhuangtutubiao'
									},
									style: {
										color: '#0089f0',
										cursor: 'pointer'
									}
								}
								, '')
						}
					},
					{
						title: '操作',
						key: 'action',
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('span', {

									style: {
										marginRight: '5px',
										color: '#4fa8f9 ',
										cursor: 'pointer'
									},
									on: {
										click: () => {

											this.gotoTerminalData(params.row.clientid, params.index);
										}
									}
								}, '详情'),
								h('span', {
									style: {
										marginRight: '5px',
										color: '#4fa8f9 ',
										cursor: 'pointer'
									},
									on: {
										click: () => {
											this.deleteTerminalName = params.row.clientid;
											this.deleteTerminalId = params.row.id;
											this.deleteTerminalModal = true
										}
									}
								}, '删除'),
							])
						}
					}
				],
				data3:[{}],
				loading3:false,
				spinShow:false,
				limit:3,
				totalPages:0,
				currentPages:1,
				usernosList:[
					{
								user_no:'-',
								unit_type:'-',
								category:'-',
								max_demand:'-',
								tariff:'-',
								user_grade:'-',
								Price_type:'-',
								trans_rate:'-',
								tariff_code:'-',
								province:'-',
								city:'',
								county:'',
								address:'',
								cyjjq:'-',
								tpm:'-'
						}
				],
				limit2:3,
				totalPages2:0,
				currentPages2:1,
				salecontractList:[
					{
							  con_no:'-',
							  deadline:'-',
							  ly_maxload:'-',
							  ly_used:'-',
							  bank_name:'-',
							  way:'-',
							  bndyjzdfh:'-',
							  bndyjdl:'-',
							  bank_account:'-',
							  contact:'-',
							  province:'-',
							  city:'',
							  county:'',
							  address:'',
							  phone:'-',
							  fax:'-',
				    }
				],
				spinShow2:false,
				limit3:8,
				totalPages3:0,
				currentPages3:1,
				deleteTerminalModal:false,
				deleteTerminalName:'',
				deleteTerminalId:'',
				loading1:false,
				imgList:[],
				spinShow3:false,
				bol1:false,
				bol2:false,
				index:'',
				index2:'',
				userKeyword:'',
				conKeyword:'',
				termKeyword:''
			}
		},
		computed:{
			tixiChart:function(){
				return this.$echarts.init(document.getElementById('deviation-chart'));
			},
			optionChart:function(){
				return {
					  tooltip : {
                         formatter: "{a} <br/>{b} : {c}%"
                       },
					   grid:{
						   
					   },
                    series: [
                          {
                             name: '转速',
                             type: 'gauge',
							 radius:'100%',
							 min:-2000,
							 max:2000,
                             axisLine: {            // 坐标轴线
                                 lineStyle: {
								 color: [[0, '#1e90ff'],[0.5, '#1e90ff'],[1, '#dddee1']],       // 属性lineStyle控制线条样式
                                    width: 5,
                                     }
                                },
                            axisTick: {            // 坐标轴小标记
                                 length:10,        // 属性length控制线长
                                  lineStyle: {       // 属性lineStyle控制线条样式
                                     color: 'auto'
                                    }
                            },
                             splitLine: {           // 分隔线
                                 length:12,         // 属性length控制线长
                                 lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                      color: 'auto'
                                 }
                             },
                            pointer: {
                                 show:false,
                             },

							 axisLabel:{
                                 fontSize:10,
							 },
                           detail: {
                            fontSize:12,
							color:'black',
							offsetCenter:[0,0]
                           },
                          data:[{value:1514222,name:'A'}]
                        },
                      ]
				}
			},
			cus_name:function(){
				return this.$store.getters.cus_name;
			},
			cus_id:function(){
				return this.$store.getters.cus_id;
			}
		},
		methods:{
           drawChart(){
			   this.tixiChart.setOption(this.optionChart);
		   },
		   //跳转到添加售电合同
		   gohetong(){
              this.$router.push({path:'/add-hetong',query:{cus_name:this.cus_name,active:'添加'}});
		   },
		   //跳转到添加用户户号
		   goAddusernos(){
			   this.$router.push({path:'/add-usernos',query:{cus_name:this.cus_name,active:'添加'}});
		   },
		   //跳转到添加终端
		   goTerminal(){
			   this.$router.push({path:'/add-celiang'})
		   },
		   basicInfor(){
			   this.spinShow = true;
			   this.$http.post(this.$api.CLIENT_BASIC_INFO,{cus_id:this.cus_id}).then(res=>{
				   console.log('基本信息',res);
				   if(res.data.status ==='1'){
					   let data = res.data.data;
                        this.clientInfo.id = data.id||'-';
					   this.clientInfo.name = data.name||'-';
					   this.clientInfo.area = data.province+data.city||'-';
					   this.clientInfo.usernos = data.usernos||'-';
					   this.clientInfo.devices = data.devices||'-';
					   this.companyInfor.name = data.name || '-';
					   this.companyInfor.tyshxydm = data.tyshxydm||'-';
					   this.companyInfor.legal_person = data.legal_person || '-';
					   this.companyInfor.idcard = data.idcard || '-';
					   this.companyInfor.major_product = data.major_product||'-';
					   this.companyInfor.reg_time = data.reg_time||'-';
					   this.companyInfor.put_date = data.put_date||'-';
					   this.companyInfor.c_address = data.province + data.city + data.county+data.address||'-';
					   this.companyInfor.organization = data.organization||'-';
					   if(data.contract){
						  this.clientInfo.con_no = data.contract.con_no||'-';
						  this.companyInfor.bank_name = data.contract.bank_name||'-';
						  this.companyInfor.bank_account = data.contract.bank_account||'-';
						  this.companyInfor.ly_used = data.contract.ly_used||'-';
                          this.companyInfor.ly_maxload = data.contract.ly_maxload||'-';
                          this.companyInfor.bndyjdl = data.contract.bndyjdl||'-';
					      this.companyInfor.bndyjzdfh = data.contract.bndyjzdfh||'-';
					   }else{
						   this.clientInfo.con_no ='-';
						  this.companyInfor.bank_name = '-';
						  this.companyInfor.bank_account = '-';
						  this.companyInfor.ly_used = '-';
                          this.companyInfor.ly_maxload = '-';
                          this.companyInfor.bndyjdl = '-';
					      this.companyInfor.bndyjzdfh ='-';
					   }
					   if(data.dealinfo){
                           this.companyInfor.username = data.dealinfo.username||'-';
						   this.companyInfor.password = data.dealinfo.password||'-';
						   this.clientInfo.is_admittance = data.dealinfo.is_admittance||'-';
						   this.clientInfo.qual_name = data.dealinfo.qual_name||'-';
						   if(this.clientInfo.is_admittance === '1'){
						   this.clientInfo.is_admittance = '是';
					        }else{
						   this.clientInfo.is_admittance = '否';
					       }
					   }else{
                           this.companyInfor.username = '-';
						   this.companyInfor.password = '-';
						   this.clientInfo.is_admittance = '-';
						   this.clientInfo.qual_name = '-';
					   }
					   if(data.contact){
                             this.companyInfor.mobile = data.contact.mobile||'-';
							 this.companyInfor.email = data.contact.email||'-';
							 this.companyInfor.fullname = data.contact.fullname||'-';
							 this.companyInfor.duty_name = data.contact.duty_name||'-';
							 this.companyInfor.phone = data.contact.phone||'-';
						     this.companyInfor.fax  = data.contact.fax||'-';
					   }else{
                             this.companyInfor.mobile = '-';
							 this.companyInfor.email ='-';
							 this.companyInfor.fullname = '-';
							 this.companyInfor.duty_name = '-';
							 this.companyInfor.phone = '-';
						     this.companyInfor.fax  = '-';
					   }
				   }
				   this.spinShow = false;
			   },err=>{
				   this.spinShow = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.spinShow = false;
				   this.$api.errcallback(err);
			   })
		   },
		   changeAim(value){
               this.value1 = value;
		   },
		   usernos(){
			   this.spinShow2 = true;
			   this.$http.post(this.$api.CLIENT_CONTRACT_AGREEMENT,{cus_id:this.cus_id,limit:this.limit,page:this.currentPages}).then(res=>{
				   console.log("用户户号基本信息",res);
				   if(res.data.status === '1'){
					   let data = res.data.data.data;
					   this.usernosList = [];
					  if(data.length > 0){
						  this.bol1 = true;
						  this.usernosList = data;
						  for(let i =0;i<data.length;i++){
							  for(let k in data[i]){
								  if(!data[i][k]){
                                     data[i][k] = '-';
								  }
							  }
							  if(data[i].tpm ==='1'){
                                     data[i].tpm = '是';
							  }else{
								  data[i].tpm = '否';
							  }
						  }
					   }else{
						   this.bol1 = false;
                            this.usernosList=[{
								user_no:'-',
								unit_type:'-',
								category:'-',
								max_demand:'-',
								tariff:'-',
								user_grade:'-',
								price_type:'-',
								trans_rate:'-',
								tariff_code:'-',
								province:'-',
								city:'-',
								county:'-',
								address:'-',
								cyjjq:'-',
								tpm:'-'
							}]
					   }
					   this.currentPages = res.data.data.current_page;
					   this.totalPages = res.data.data.total;
				    }else{
						 this.bol1 = false;
						 this.usernosList=[{
								user_no:'-',
								unit_type:'-',
								category:'-',
								max_demand:'-',
								tariff:'-',
								user_grade:'-',
								price_type:'-',
								trans_rate:'-',
								tariff_code:'-',
								province:'-',
								city:'',
								county:'',
								address:'',
								cyjjq:'-',
								tpm:'-'
							}]
					}
					this.spinShow2 = false;
			   },err=>{
				    this.spinShow2 = false;
				    this.$api.errcallback(err);
			   }).catch(err=>{
				    this.spinShow2 = false;
				    this.$api.errcallback(err);
			   })
		   },
		   updateUsernos(id){
               this.$router.push({path:'/add-usernos',query:{id:id}});
		   },
		   nosPagechange(value){
			  this.currentPages = value;
			  this.usernos();
		   },
		   refnosList(){
			   this.usernos();
		   },
		   deleUsernos(id,num,index){
			  this.id = id;
			  this.num = num;
			  this.index = index;
			  this.usernosModal = true;
		   },
		   deleteUsernos(){
			   this.$http.post(this.$api.USER_NUM_DEL,{id:this.id}).then(res=>{
				   console.log('删除用户户号',res);
				   if(res.data.status ==='1'){
					   this.usernosList.splice(this.index, 1);
					   if(this.usernosList.length === 0){
						   this.currentPages = this.currentPages -1;
					   }
				   }
				    this.usernos();
			   },err=>{
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.$api.errcallback();
			   })
		   },
		   cancel1(){
                this.usernosModal = false;
		   },
		   saleContrant(){
			   this.spinShow3 = true;
			   this.$http.post(this.$api.POWER_SALE_LIST,{cus_id:this.cus_id,limit:this.limit2,page:this.currentPages2}).then(res=>{
				   console.log('合同管理',res);
				   if(res.data.status === '1'){
					   let data = res.data.data.data;
					   this.salecontractList = [];
					   if(data.length > 0){
						   this.bol2 = true;
                           this.salecontractList = data;
						   for(let i=0;i<data.length;i++){
							   for(let k in data[i]){
								   if(!data[i][k]){
									   data[i][k] = '-';
								   }
							   }
						   }
						   
					   }else{
						  this.bol2 = false;
                          this.salecontractList = [{
							  con_no:'-',
							  deadline:'-',
							  ly_maxload:'-',
							  ly_used:'-',
							  bank_name:'-',
							  way:'-',
							  bndyjzdfh:'-',
							  bndyjdl:'-',
							  bank_account:'-',
							  contact:'-',
							  province:'-',
							  city:'',
							  county:'',
							  address:'',
							  phone:'-',
							  fax:'-',
						  }]
					   }
					   
					   this.totalPages2 = res.data.data.total;
                       this.currentPages2 = res.data.data.current_page;
				   }else{
					   this.bol2 = false;
					   this.salecontractList = [{
							  con_no:'-',
							  deadline:'-',
							  ly_maxload:'-',
							  ly_used:'-',
							  bank_name:'-',
							  way:'-',
							  bndyjzdfh:'-',
							  bndyjdl:'-',
							  bank_account:'-',
							  contact:'-',
							  province:'-',
							  city:'',
							  county:'',
							  address:'',
							  phone:'-',
							  fax:'-',
						  }]
				   }
				   this.spinShow3 = false;
			   },err=>{
				   this.spinShow3 = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.spinShow3 = false;
				   this.$api.errcallback(err);
			   })
		   },
		   salePagechange(value){
			   this.currentPages2 = value;
			   this.saleContrant();
		   },
		   refSalecontract(){
               this.saleContrant();
		   },
		   deleSaleContract(id,value,index){
			  this.saleContractModal = true;
			  this.s_id = id;
			  this.index2 = index;
			  this.s_num = value;
		   },
		   deleteSaleContract(){
                this.$http.post(this.$api.POWER_SALE_DEL,{id:this.s_id}).then(res=>{
					console.log('删除售电合同',res);
					if(res.data.status === '1'){
						this.salecontractList.splice(this.index2,1);
						if(this.salecontractList.length === 0){
							this.currentPages2 = this.currentPages2 - 1;
						}	
					}
					this.saleContrant();
				},err=>{
					this.$api.errcallback(err);
				}).catch(err=>{
					this.$api.errcallback(err);
				})
		   },
		   cancel2(){
             this.saleContractModal = false;
		   },
		   saleContractupdate(id){
                this.$router.push({path:'/add-hetong',query:{id:id}});
		   },
		   terminalList(){
			   this.loading3 = true;
			   this.$http.post(this.$api.CLIENT_TERMINAL_LIST,{cus_id:this.cus_id,limit:this.limit3,page:this.currentPages3}).then(res=>{
				   console.log('终端列表',res);
				   if(res.data.status === '1'){
					   this.data3 = res.data[0].data;
					   this.totalPages3 = res.data[0].total;
					   this.currentPages3 = res.data[0].current_page;
				   }else{
					   this.data3=[{}];
				   }
				   this.loading3 = false;
			   },err=>{
				   this.data3=[{}];
				   this.loading3 = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.data3=[{}];
				   this.loading3 = false;
				   this.$api.errcallback(err);
			   })
		   },
		   refTerminalList(){
               this.terminalList();
		   },
		   gotoTerminalData(clientid,index){
				this.$store.dispatch('setClientId',clientid);
				this.$router.push({path:'/caiji-detail',query:{index:index}});
		   },
		   cancel(){
			   this.deleteTerminalModal = false;
		   },
		   ok(){
			   this.$http.delete(this.$api.CLIENT_TERMINAL_DELETE+this.deleteTerminalId).then(res=>{
				   console.log('删除终端',res);
				   if(res.data.status ==='1'){
					   this.deleteTerminalModal = false;
					   this.terminalList();
				   }
			   },err=>{
				    this.$api.errcallback(err);
			   }).catch(err=>{
				   this.$api.errcallback(err);
			   })
		   },
		   userDeclareM(){
			   this.loading1 = true;
			   this.$http.post(this.$api.CLIENT_DECLARE_RECORD,{cus_id:this.cus_id,type:1}).then(res=>{
				   console.log("申报记录 月份22",res);
				   if(res.data.status ==='1'){
					  var obj ={};
					  var data = res.data[0].data;
					  var list =[];
					  var arr = [];
					  if(data.length > 0){
                         for(let i=0; i < data.length;i++){
                         obj = {
							  user_no:'合计',
							  month:data[i].month,
							  sbdl:data[i].sbdl,
							  monitor:data[i].monitor,
							  actual_used:data[i].actual_used,
							  declare_dev:data[i].declare_dev,
							  confirmor:data[i].confirmor
						   }
						 arr.push(obj);
						 
						 list = data[i].usernolist;
						 for(let j=0;j<list.length;j++){
                               list[j]['month'] = data[i].month;
						       list[j]['confirmor'] = data[i].confirmor;
						        arr.push(list[j]);
						    }
					      }
					      this.data1 = arr;
					  }
				   }
				   this.loading1 = false;
			   },err=>{
				   this.loading1 = false;
				   this.data1=[];
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.loading1 = false;
				   this.data1=[];
				   this.$api.errcallback(err);
			   })
		   },
		   refdeclList(){
              this.userDeclareM();
		   },
		   monthSelectDecl(value){
			   console.log(value);
			   this.months = value;
               this.$http.post(this.$api.CLIENT_DECLARE_RECORD,{cus_id:this.cus_id,type:1,month:this.months}).then(res=>{
				   console.log("申报记录 月份",res);
				   if(res.data.status ==='1'){
					  var obj ={};
					  var data = res.data[0].data;
					  var list =[];
					  var arr = [];
					  for(let i=0; i < data.length;i++){
                         obj = {
							  user_no:'合计',
							  month:data[i].month,
							  sbdl:data[i].sbdl,
							  monitor:data[i].monitor,
							  actual_used:data[i].actual_used,
							  declare_dev:data[i].declare_dev,
							  confirmor:data[i].confirmor
						 }
						 arr.push(obj);
						 list = data[i].usernolist;
						for(let j=0;j<list.length;j++){
                               list[j]['month'] = data[i].month;
						       list[j]['confirmor'] = data[i].confirmor;
						        arr.push(list[j]);
						 }
					  }
					  this.data1 = arr;
				   }
				   this.loading1 = false;
			   },err=>{
				   this.loading1 = false;
				   this.data1=[];
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.loading1 = false;
				   this.data1=[];
				   this.$api.errcallback(err);
			   })
		   },
		   userDeclareA(){
               this.loading1 = true;
			   this.$http.post(this.$api.CLIENT_DECLARE_RECORD,{cus_id:this.cus_id}).then(res=>{
				   console.log("申报记录 总",res);
				   if(res.data.status ==='1'){
					  var obj ={};
					  var data = res.data[0].data;
					  var list =[];
					  var arr = [];
					  for(var i=0; i < data.length;i++){
                         obj = {
							  user_no:'合计',
							  month:data[i].month,
							  sbdl:data[i].sbdl,
							  monitor:data[i].monitor,
							  actual_used:data[i].actual_used,
							  declare_dev:data[i].declare_dev,
							  confirmor:data[i].confirmor
						 }
						 arr.push(obj);
						 list = data[i].usernolist;
						 for(let j =0;j<list.length;j++){
                             list[j]['month'] = data[i].month;
						     list[j]['confirmor'] = data[i].confirmor;
						     arr.push(list[j]);
						 }
					  }
					  this.data1 = arr;
				   }
				   this.loading1 = false;
			   },err=>{
				   this.loading1 = false;
				   this.data1=[];
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.loading1 = false;
				   this.data1=[];
				   this.$api.errcallback(err);
			   })
		   },
		   powerRecordM(){
			   this.loading2 = true;
			   this.$http.post(this.$api.CLIENT_ELE_BILL,{cus_id:this.cus_id,month:this.month2}).then(res=>{
				   console.log("电费单列表 月",res)
				   if(res.data.status === '1'){
						var obj = {};
						var arr =[];
						var data = res.data.data.data;
						var list =[];
						for(let i = 0;i < data.length;i++){
							obj={
								user_no:'合计',
								used_num:data[i].used_num,
								month:data[i].month,
								price:data[i].price,
								basic_cost:data[i].basic_cost,
								force:data[i].force,
								read_at:'-',
								cus_uname:'-'

							}
							arr.push(obj);
							list = data[i].elist;
							for(let j=0;j<list.length;j++){
                                arr.push(list[j]);
							}
							
						}
						this.data2 = arr;
				   }
				   this.loading2 = false;
			   },err=>{
				   this.loading2 = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.loading2 = false;
				   this.$api.errcallback(err);
			   })
		   },
		   monthSelectPower(value){
			   this.month2 = value;
			   this.powerRecordM();
		   },
		   powerRecordA(){
			   this.loading2 = true;
               this.$http.post(this.$api.CLIENT_ELE_BILL,{cus_id:this.cus_id}).then(res=>{
				   console.log("电费单列表 总",res)
				   if(res.data.status === '1'){
						var obj = {};
						var arr =[];
						var data = res.data.data.data;
						var list =[];
						for(let i = 0;i < data.length;i++){
							obj={
								user_no:'合计',
								used_num:data[i].used_num,
								month:data[i].month,
								price:data[i].price,
								basic_cost:data[i].basic_cost,
								force:data[i].force,
								read_at:'-',
								cus_uname:'-'

							}
							arr.push(obj);
							list = data[i].elist;
							for(let j =0;j < list.length;j++){
								arr.push(list[j]);
							}
						}
						this.data2 = arr;
						console.log(this.data2,'oooo');
				   }
				   this.loading2 = false;
			   },err=>{
				   this.loading2 = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.loading2 = false;
				   this.$api.errcallback(err);
			   })
		   },
		   refPowerRec(){
               this.powerRecordM();
		   },
		   usernoDoSearch(){
			   this.spinShow2 = true;
			   this.$http.post(this.$api.CLIENT_CONTRACT_AGREEMENT,{cus_id:this.cus_id,limit:this.limit,page:this.currentPages,keyword:this.userKeyword}).then(res=>{
				   console.log("用户户号搜索",res);
				   if(res.data.status === '1'){
					   let data = res.data.data.data;
					   this.usernosList = [];
					  if(data.length > 0){
						  this.bol1 = true;
						  this.usernosList = data;
						  for(let i =0;i<data.length;i++){
							  if(data[i].tpm ==='1'){
                                     data[i].tpm = '是';
							  }else{
								  data[i].tpm = '否';
							  }
						  }
					   }else{
						   this.bol1 = false;
                            this.usernosList=[{
								user_no:'-',
								unit_type:'-',
								category:'-',
								max_demand:'-',
								tariff:'-',
								user_grade:'-',
								price_type:'-',
								trans_rate:'-',
								tariff_code:'-',
								province:'-',
								city:'-',
								county:'-',
								address:'-',
								cyjjq:'-',
								tpm:'-'
							}]
					   }
					   this.currentPages = res.data.data.current_page;
					   this.totalPages = res.data.data.total;
				    }else{
						 this.bol1 = false;
						 this.usernosList=[{
								user_no:'-',
								unit_type:'-',
								category:'-',
								max_demand:'-',
								tariff:'-',
								user_grade:'-',
								price_type:'-',
								trans_rate:'-',
								tariff_code:'-',
								province:'-',
								city:'',
								county:'',
								address:'',
								cyjjq:'-',
								tpm:'-'
							}]
					}
					this.spinShow2 = false;
			   },err=>{
				    this.spinShow2 = false;
				    this.$api.errcallback(err);
			   }).catch(err=>{
				    this.spinShow2 = false;
				    this.$api.errcallback(err);
			   })
		   },
		   saleDoserch(){
			   this.spinShow3 = true;
			   this.$http.post(this.$api.POWER_SALE_LIST,{cus_id:this.cus_id,limit:this.limit2,page:this.currentPages2,keyword:this.conKeyword}).then(res=>{
				   console.log('合同管理搜索',res);
				   if(res.data.status === '1'){
					   let data = res.data.data.data;
					   this.salecontractList = [];
					   if(data.length > 0){
						   this.bol2 = true;
                           this.salecontractList = data;
					   }else{
						  this.bol2 = false;
                          this.salecontractList = [{
							  con_no:'-',
							  deadline:'-',
							  ly_maxload:'-',
							  ly_used:'-',
							  bank_name:'-',
							  way:'-',
							  bndyjzdfh:'-',
							  bndyjdl:'-',
							  bank_account:'-',
							  contact:'-',
							  province:'-',
							  city:'',
							  county:'',
							  address:'',
							  phone:'-',
							  fax:'-',
						  }]
					   }
					   
					   this.totalPages2 = res.data.data.total;
                       this.currentPages2 = res.data.data.current_page;
				   }else{
					   this.bol2 = false;
					   this.salecontractList = [{
							  con_no:'-',
							  deadline:'-',
							  ly_maxload:'-',
							  ly_used:'-',
							  bank_name:'-',
							  way:'-',
							  bndyjzdfh:'-',
							  bndyjdl:'-',
							  bank_account:'-',
							  contact:'-',
							  province:'-',
							  city:'',
							  county:'',
							  address:'',
							  phone:'-',
							  fax:'-',
						  }]
				   }
				   this.spinShow3 = false;
			   },err=>{
				   this.spinShow3 = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.spinShow3 = false;
				   this.$api.errcallback(err);
			   })
		   },
		   terminalDosearch(){
			   this.loading3 = true;
			   this.$http.post(this.$api.CLIENT_TERMINAL_LIST,{cus_id:this.cus_id,limit:this.limit3,page:this.currentPages3,keyword:this.termKeyword}).then(res=>{
				   console.log('终端列表搜索',res);
				   if(res.data.status === '1'){
					   this.data3 = res.data[0].data;
					   this.totalPages3 = res.data[0].total;
					   this.currentPages3 = res.data[0].current_page;
				   }else{
					   this.data3=[{}];
				   }
				   this.loading3 = false;
			   },err=>{
				   this.data3=[{}];
				   this.loading3 = false;
				   this.$api.errcallback(err);
			   }).catch(err=>{
				   this.data3=[{}];
				   this.loading3 = false;
				   this.$api.errcallback(err);
			   })
		   }
		},
		watch:{
			cus_id:function(){
				// this.drawChart();
				this.basicInfor();
				this.usernos();
				this.saleContrant();
				this.terminalList();
				this.userDeclareM();
			    this.powerRecordM();
			}
		},
		mounted(){
			this.drawChart();
			this.basicInfor();
			if(this.$route.query.target){
				this.changeAim(this.$route.query.target);
			}
			this.usernos();
			this.saleContrant();
			this.terminalList();
			this.userDeclareM();
			this.powerRecordM();
		}
	}
</script>