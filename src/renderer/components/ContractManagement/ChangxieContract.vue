<script>

	import myFenye from '@/components/Tool/myFenye'
	import {add} from '../../../../static/numberadd.js'

	export default {
		name: 'ChangxieContract',
		data() {
			return {
				columns1: [
					{
						title: '01月',
						key: 'month01',
							
                    align: 'center'
					}, {
						title: '02月',
						key: 'month02',
							
                    align: 'center'

					}, {
						title: '03月',
						key: 'month03',						
                    	align: 'center'
					}, {
						title: '04月',
						key: 'month04',
							
                    align: 'center'
					}, {
						title: '05月',
						key: 'month05',
							
                    align: 'center'
					}, {
						title: '06月',
						key: 'month06',						
                    	align: 'center'
					}, {
						title: '07月',
						key: 'month07',						
                    	align: 'center'
					}, {
						title: '08月',
						key: 'month08',						
                    	align: 'center'
					}, {
						title: '09月',
						key: 'month09',						
                    	align: 'center'
					}, {
						title: '10月',
						key: 'month10',
							
                    align: 'center'
					}, {
						title: '11月',
						key: 'month11',						
                    	align: 'center'
					}, {
						title: '12月',
						key: 'month12',						
                    	align: 'center'
					}, {
						title: '合计',
						key: 'total',						
                    	align: 'center',
						render: (h, params) => {
							console.log(params.row);
							var total = 0;
							let arr = [Number(params.row.month01),Number(params.row.month02),Number(params.row.month03),Number(params.row.month04),Number(params.row.month05),Number(params.row.month06),Number(params.row.month07),Number(params.row.month08),Number(params.row.month09),Number(params.row.month10),Number(params.row.month11),Number(params.row.month12)];
							this.m = add(arr);
							for(let i =0;i<arr.length;i++){
								total += (arr[i]*this.m);
							}
							total = (total/this.m).toFixed(2);
							return ('span', {}, total)
						}
					}
				],
				hetongList: [{
					powerplant: '暂无电厂签订合同',
					lpcon_no: '暂无数据',
					lpcon_year: '暂无数据',
					signed_num: '0',
					business: '暂无数据',
					tel: '暂无数据',
					signed_status: '暂无数据',
					lpdist: [],
				}
				],
				totalPage: 0,
				currentPage: 1,
				limit: 6,
				loading: false,
				m:1,
				bol:false
			}
		},
		components: {
			'myFenye': myFenye
		},
		methods: {
			ok(index) {
				console.log(index);
				console.log(this.hetongList[index].id);
				this.$http.post(this.$api.CHANGXIE_LIST_DEL, {id: this.hetongList[index].id}).then(res => {
					console.log("长协合同删除成功", res);
					if (res.data.status === '1') {
						this.hetongList.splice(index, 1);
						if(this.hetongList.length === 0){
							this.currentPage = this.currentPage -1;
						}
						this.$Message.info('删除成功');
					}
					this.changxieList();
				}, err => {
					this.$api.errcallback(err);
				}).catch(err => {
					this.$api.errcallback(err);
				})
				
			},
			cancel() {
				this.$Message.info('取消删除');
			},
			changxieList() {
				this.loading = true;
				this.$http.post(this.$api.CHANGXIE_LIST, {
					com_id: this.com_id,
					page: this.currentPage,
					limit: this.limit
				}).then(res => {
					console.log('长协列表', res);
					var data = res.data.data.data;

					if (res.data.status === '1') {
						if (data.length > 0) {
							this.bol = true;
							this.totalPage = res.data.data.total;
							var arr = [];
							for (var i = 0; i < data.length; i++) {
								if (data[i].signed_status == 0) {
									data[i].signed_status = '未签约';
								} else if (data[i].signed_status == 1) {
									data[i].signed_status = '签约';
								}
								arr.push(data[i]);
							}
							this.hetongList = arr;
						}else{
							this.bol = false;
							this.hetongList = [{
					             powerplant: '暂无电厂签订合同',
					             lpcon_no: '暂无数据',
					             lpcon_year: '暂无数据',
					             signed_num: '0',
				            	business: '暂无数据',
					            tel: '暂无数据',
					           signed_status: '暂无数据',
					          lpdist: [],
				          }]
						}
						this.loading = false;
					} else {
						this.bol = false;
						this.hetongList = [{
					             powerplant: '暂无电厂签订合同',
					             lpcon_no: '暂无数据',
					             lpcon_year: '暂无数据',
					             signed_num: '0',
				            	business: '暂无数据',
					            tel: '暂无数据',
					           signed_status: '暂无数据',
					          lpdist: [],
				          }]
						this.loading = false;
					}
				}, err => {
					this.loading = false;
					this.$api.errcallback(err);
				}).catch(err => {
					this.loading = false;
					this.$api.errcallback(err);
				})
			},
			pageChange(value) {
				 this.currentPage = value;
				 this.changxieList();
			}
		},
		watch: {
			com_id: function () {
				this.changxieList();
			}
		},
		computed: {
			com_id: function () {
				return this.$store.getters.com_id;
			}
		},
		mounted() {
			this.changxieList();
		}
	}
</script>

<template>
	<div class="main-container relative">
		<Card>
			<h3 slot="title">长协合同</h3>
			<div slot="extra" class="btn-group">
				<Button type="primary"  @click.native="$router.push('AddContractManagement')">+长协合同</Button>
			</div>
			<div class="hetongList">
				<div class="hetongForm" v-for='(item,index) in hetongList'>
					<ul class="hetongIfno">
						<li>{{item.powerplant}}</li>
						<li>合同编号：{{item.lpcon_no}}</li>
						<li>合同年度：{{item.lpcon_year}}</li>
						<li>签约电量：{{item.signed_num}} MWh</li>
						<li>业务代表：{{item.business}}</li>
						<li>联系电话：{{item.tel}}</li>
						<li>合同状态：{{item.signed_status}}</li>
						<li class="change" v-if='bol'>
							<router-link :to="{
				                path:'/AddContractManagement',
				                query:{
				                    id:item.id,
				                    lpcon_no:item.lpcon_no,
				                    lpcon_year:item.lpcon_year,
				                    signed_status:item.signed_status,
				                    signed_num:item.signed_num,
				                    business:item.business,
				                    tel:item.tel,
				                    powerplant:item.powerplant,
				                    list:item.lpdist,
				                    exec_date:item.exec_date,
				                    signed_day:item.signed_day,
									signed_price:item.signed_price,
									remarks:item.remarks,
									filename:item.filename,
									htscdz:item.htscdz,
								    d_id:item.d_id}
							}" tag="span" style="cursor: pointer; ">修改
							</router-link>
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
						<div class="changxieSee">
							<i class="fas fa-file-alt"></i>
						</div>
						<Table :columns='columns1' style='margin-left: 10%;height:100%' size='small'
						       :data='item.lpdist'></Table>
					</div>
				</div>
				<Spin size='large' fix v-if='loading'></Spin>
			</div>
			<div class="page-center">
				<!--分页-->
				<div class="fenYe">
					<Page :total="totalPage" :current='currentPage' :page-size='limit' show-total show-elevator
					      v-on:on-change='pageChange'></Page><!--  <Button type="primary">确定</Button> -->
				</div>
			</div>
		</Card>
	</div>
</template>

<style scoped>
.btn-group{
		margin-top:-9px;
		z-index:10;
	}
	.hetongList {
		height: 841px;
		background-color: #fff;
		position: relative;
	}

	.hetongIfno {
		height: 50px;
		background-color: #f8f8f9;
		padding-left: 15px;
		position: relative;
		font-size: 14px;
		border: 1px solid #e9eaec;
		border-bottom: none;
	}

	.hetongIfno li {
		float: left;
		line-height: 50px;
		padding-right: 40px;
	}

	.hetongIfno .change {
		position: absolute;
		right: 30px;
		top: 0;
		color: #108CEE;
		cursor: pointer;
	}

	.hetongShuju {
		position: relative;
		border: 1px solid #e9eaec;
		margin-bottom: 5px;
	}

	.changxieSee {
		width: 50px;
		height: 50px;
		padding-top: 50px;
		position: absolute;
		top: 50%;
		left: 3%;
		margin-top: -25px;
	}

	.changxieSee i {
		position: absolute;
		top: 7px;
		left: 13px;
		font-size: 36px;
		color: #ccc;
	}

	.relative .page-center {
		text-align: center;
		position: absolute;
		bottom: 0px;
		left: 0;
		right: 0;
		z-index: 999;
	}

	/* 分页的样式 */
	.page-center .fenYe {
		width: 100%;
		height: 60px;
		background-color: #fff;
		padding-top: 10px;
		text-align: center;
	}

	.fenYe table {
		border: 0;
	}

	.fenYe ul {
		display: inline-block;
	}

	/* .fenYe button{
	   top: -12px;
	   left: 12px;
	 }*/
	@media (min-width: 1365px) and (max-width: 1919px) {
		.hetongIfno .change {
			position: absolute;
			right: 0px;
			top: 0;
			color: #108CEE;
			cursor: pointer;
		}

		.hetongIfno li {
			float: left;
			line-height: 50px;
			padding-right: 20px;
		}
	}
</style>
