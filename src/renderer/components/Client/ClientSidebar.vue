<script>
	export default {
		name: 'clientsidebar',
		data() {
			return {
				spinShow: false,
				companyList: [],
				totalPages: 0,
				lastPage: 0,
				currentPage: 1,
				limit: 26,
				keyword: '',
				letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
				button1: '全部',
				isCollect: false,
				letters: '',
				actname: '',
				actindex: 0,
				loading1: false,
				options1: [],
				companyName: [],
				i: '',
				bol: false,
				companyshow: false,
				timer: null
			}
		},
		computed: {
			selectedId: function () {
				return this.$store.getters.cus_id
			},
			companbol:function(){
               return this.$store.getters.companbol
            }
		},
		mounted() {
			this.clientList();
			this.$Message.config({
                  top:100,
          });

		},
		methods: {
			changeCompany(id, name, clientid, user_id) {
				this.$store.dispatch('setCusId', id);
				this.$store.dispatch('setCusName', name);
				this.$store.dispatch('setClientId', clientid);
			},
			clientList() {
				this.spinShow = true;
				this.$http.post(this.$api.CLIENT_LIST, {
					com_id: this.$store.getters.com_id,
					type: 3,
					limit: this.limit,
					page: this.currentPage,
				}).then(res => {
					this.spinShow = false;
					console.log('客户 名称列表', res);
					if (res.data.status === '1') {
						this.companyList = res.data[0].data;
						this.totalPages = res.data[0].total;
						this.currentPage = res.data[0].current_page;
						this.lastPage = res.data[0].last_page;
					} else {
						this.companyList = [];
					}

				}, err => {
					this.spinShow = false;
					this.companyList = [];
					this.$api.errcallback(err);
				}).catch(err => {
					this.spinShow = false;
					this.companyList = [];
					this.$api.errcallback(err);
				})
			},
			handleReachBottom() {
				return new Promise(resolve => {
					if (this.button1 === '全部') {
						if (this.currentPage < this.lastPage) {
							this.currentPage += 1;
							console.log(1)
							// this.spinShow = true;
							this.$http.post(this.$api.CLIENT_LIST, {
								com_id: this.$store.getters.com_id,
								type: 3,
								limit: this.limit,
								page: this.currentPage
							}).then(res => {
								console.log('下一页客户名称列表', res);
								if (res.data.status === '1') {
									let list = res.data[0].data;
									this.currentPage = res.data[0].current_page
									for (let i = 0; i < list.length; i++) {
										this.companyList.push(list[i]);
									}
								} else {

								}

								// this.spinShow =false;
								// resolve();
							}, err => {
								// reject();
								// this.spinShow =false;
								this.$api.errcallback(err);
							}).catch(err => {
								// this.spinShow =false;
								this.$api.errcallback(err);
							})
						} else {
							this.currentPage = this.lastPage;
						}
					} else if (this.button1 === '我的收藏') {
						if (this.currentPage < this.lastPage) {
							this.currentPage += 1;
							this.$http.post(this.$api.CLIENT_COLLECT_LIST, {
								com_id: this.$store.getters.com_id,
								limit: this.limit,
								page: this.currentPage
							}).then(res => {
								console.log('下一页收藏', res);
								if (res.data.status === '1') {
									let list = res.data.list.data;
									this.actname = true;
									for (let i = 0; i < list.length; i++) {
										this.companyList.push(list[i]);
									}
								}
							}, err => {
								this.$api.errcallback(err);
							}).catch(err => {
								this.$api.errcallback(err);
							})
						}
					}
				})
			},
			doSearch() {
				this.$store.dispatch('setCompanbol',true);
				this.companyshow = true;
				if (this.timer) {
					clearTimeout(this.timer);
				}
				if (this.keyword.length < 1) {
					return
				}
				this.timer = setTimeout(() => this.$http.post(this.$api.CLIENT_LIST, {
						com_id: this.$store.getters.com_id,
						type: 3,
						keyword: this.keyword,
					}).then(res => {
						this.spinShow = false;
						this.loading1 = false;
						console.log('客户sss名称列表', res);
						if (res.data.status === '1') {

							this.options1 = res.data[0];
							this.companyshow = false;
							console.log(this.options1)
						}

					}, err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					}).catch(err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					})
					, 500)

			},
			changeClinentList(value) {
				if (this.button1 === '全部') {
					this.clientList();
					this.$store.dispatch('setCusId', this.companyList[0].id);
					this.$store.dispatch('setCusName', this.companyList[0].name);
					this.$store.dispatch('setClientId', this.companyList[0].clientid);

				} else {
					this.currentPage = 1;
					this.spinShow = true;
					this.$http.post(this.$api.CLIENT_COLLECT_LIST, {
						com_id: this.$store.getters.com_id,
						limit: this.limit,
						page: this.currentPage
					}).then(res => {
						console.log('我的收藏', res);
						if (res.data.status === '1') {
							this.companyList = res.data.list.data;
							this.currentPage = res.data.list.current_page;
							this.totalPages = res.data.list.total;
							this.spinShow = false;
							this.$store.dispatch('setCusId', this.companyList[0].id);
							this.$store.dispatch('setCusName', this.companyList[0].name);
							this.$store.dispatch('setClientId', this.companyList[0].clientid);
							//      var iconfonts = document.getElementsByClassName('icon-shoucang1');
							// for(let i = 0;i<iconfonts.length;i++){
							// 	if(this.companyList[i].myid){
							// 		iconfonts[i].style.color ='#f4ea2a';
							// 	}

							// }
						} else {
							this.spinShow = false;
							this.companyList = [];
						}
					}, err => {
						this.spinShow = false;
						this.companyList = [];
						this.$api.errcallback(err)
					}).catch(err => {
						this.spinShow = false;
						this.companyList = [];
						this.$api.errcallback(err)
					})
				}

			},
			collectClient(id, myid, e) {
				var e = e || window.event;
				var target = e.target;
				if (target.nodeName.toLocaleLowerCase() == 'i') {
					if (target.hasAttribute('data-myid') && myid != '') {
						this.$http.delete(this.$api.CLIENT_CANCEL_COLLECT + myid).then(res => {
							console.log('取消收藏', res);
							if (res.data.status === '1') {
								this.changeClinentList('我的收藏');
								this.$Message.success('取消收藏！');
							}
						}, err => {
							this.$api.errcallback(err);
						}).catch(err => {
							this.$api.errcallback(err);
						})

					} else {
						this.$http.post(this.$api.CLIENT_ADD_COLLECT, {
							com_id: this.$store.getters.com_id,
							cus_id: id
						}).then(res => {
							console.log('添加收藏', res);
							if (res.data.status === '1') {
								target.style.color = '#f4ea2a';
								e.stopPropagation();
								this.$Message.success('收藏成功！');
							}
						}, err => {
							this.$api.errcallback(err);
						}).catch(err => {
							this.$api.errcallback(err);
						})

					}


				}
			},
			letterSeach(index, item) {
				this.actindex = index + 1;
				this.currentPage = 1;
				this.spinShow = true;
				this.$http.post(this.$api.CLIENT_LIST, {
					com_id: this.$store.getters.com_id,
					type: 3,
					letter: item,
					page: this.currentPage,
					limit: this.limit
				}).then(res => {
					console.log('字母查询', res);
					if (res.data.status === '1') {
						this.companyList = res.data[0].data;
						this.totalPages = res.data[0].total;
						this.currentPage = res.data[0].current_page;
						this.lastPage = res.data[0].last_page;
						this.spinShow = false;
						this.$store.dispatch('setCusId', this.companyList[0].id);
						this.$store.dispatch('setCusName', this.companyList[0].name);
						this.$store.dispatch('setClientId', this.companyList[0].clientid);
					} else {
						this.spinShow = false;
						this.companyList = [];
					}
				}, err => {
					this.spinShow = false;
					this.companyList = [];
					this.$api.errcallback(err);
				}).catch(err => {
					this.spinShow = false;
					this.companyList = [];
					this.$api.errcallback(err);
				})
			},
			toggle() {
				this.bol = !this.bol;
				console.log(this.bol);
			},
			companylist() {
				this.companyList = this.options1;
				this.$store.dispatch('setCompanbol',false);
				this.bol = false;
			},
			chooseCompany(item) {
				let arr = [];
				arr.push(item);
				this.companyList = arr;
				this.$store.dispatch('setCompanbol',false);
				this.bol = false;
				console.log(22222,this.companyList);
			}
		},
	}
</script>
<template>
	<div class="client-sidebar">
		<div class="search_box relative">
			<div class="search">
				<div class='search_main absolute' style="display: inline-block;z-index: 222">
					<i class="iconfont icon-search" @click='toggle'></i>
					<transition name='seach'>
						<input v-if='bol' type="input" placeholder="请输入关键字" v-model="keyword" id='search absolute'
						       autofocus='autofocus' style="height:36px;border: none;z-index: 22;width:140px"
						       @keyup='doSearch' @keyup.enter='companylist'>

						<!-- <Select
						filterable
						remote
						:remote-method="doSearch"
						:loading="loading1" v-on:on-change='changeValue' v-if='bol'>
						<Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
					</Select> -->
					</transition>
				</div>

				<ul v-if='companbol' class='hid_company'>
					<li v-for='item in options1' @click='chooseCompany(item)'>{{item.name}}</li>
					<Spin size="small" fix v-if="companyshow"></Spin>
				</ul>


				<RadioGroup v-model="button1" type="button" class='btn_box' v-on:on-change='changeClinentList'>
					<Radio label="全部"></Radio>
					<Radio label="收藏"></Radio>
				</RadioGroup>
				<!-- <div class="letter_box" id='letter_box'><span v-for='(item,index) in letter' v-bind:class='{active:actindex == index+1}' @click='letterSeach(index,item)'>{{item}}</span></div> -->
			</div>
		</div>
		<div class="company-list" id='companyList'>

			<ul id='clientMenu'>
				<Scroll height='870' :on-reach-bottom="handleReachBottom" :distance-to-edge=-35>
					<template v-for="item in companyList">

						<li class="relative" v-bind:class="{selected:selectedId == item.id}"
						    @click="changeCompany(item.id,item.name,item.clientid,item.user_id)">
							<Row>
								<Col span="24">
								<p v-bind:title="item.name" class="company-name"><i class='iconfont icon-shoucang1'
								                                                    @click='collectClient(item.id,item.myid)'
								                                                    :data-myid='item.myid'
								                                                    v-bind:class="{act:item.myid}"></i>{{item.name}}
								</p>
								</Col>
							</Row>
						</li>
					</template>
				</Scroll>
			</ul>

			<Spin size="large" fix v-if="spinShow"></Spin>
		</div>
	</div>
</template>
<style scoped>
	.client-sidebar {
		background-color: #fff;
		margin: 3px;
	}

	.search_box {
		width: 100%;
		height: 60px;
		line-height: 60px;
		border-bottom: solid 1px #ccc;
	}

	.search {
		display: inline-block;
		line-height: 60px;
		width: 100%;
		border-radius: 10px;
		padding-left: 20px;

	}

	.hid_company {
		position: absolute;
		top: 59px;
		z-index: 99;
		left: 5px;
		background-color: #fff;
		width: 190px;
		min-height: 20px;
		max-height: 200px;
		overflow: scroll;
		border: 1px solid #ccc;
	}

	.hid_company li {
		white-space: nowrap;
		height: 40px;
		line-height: 40px;
		cursor: pointer;
	}

	.hid_company li:hover {
		background-color: #E0EBF7;
		color: #108CEE;
	}

	.letter_box {
		width: 100%;
		white-space: pre-wrap;
		line-height: 20px;

	}

	.letter_box span {
		display: inline-block;
		cursor: pointer;

	}

	span.active {
		color: #2d8cf0;
	}

	.letter_box span:nth-child(2n) {
		padding: 2px 9px;
	}

	.btn_box {
		margin-bottom: 10px;
		margin-left: 40px;
		/*margin-right:16px;*/
	}

	.company-list ul {
		width: 100%;
		height: 870px;
		overflow: hidden;
		z-index: 992;

		/*overflow-y: scroll;
		overflow-x: hidden;*/
	}

	.company-list ul:hover::-webkit-scrollbar {
		width: 5px;
		/*滚动条宽度（右侧滚动条）*/
		height: 5px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
	}

	/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
	.company-list ul::-webkit-scrollbar {
		width: 0px;
		/*滚动条宽度（右侧滚动条）*/
		height: 5px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
	}

	/*定义滚动条轨道 内阴影+圆角*/
	.company-list ul::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background-color: #F5F5F5;
	}

	/*定义滑块 内阴影+圆角*/
	.company-list ul::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
		background-color: #ccc;
	}

	.company-list li.selected {
		background-color: #E0EBF7;
		border-left: 4px solid #108CEE !important;
		border-top: solid 1px #eee;
		color: #108CEE;
	}

	.company-list li {
		width: 100%;
		min-height: 40px;
		overflow: hidden;
		border-left: 4px solid transparent;
		border-top: solid 1px transparent;
		border-bottom: solid 1px #eee;
		box-sizing: border-box;
		cursor: pointer;

	}

	.company-list li:hover {
		background-color: #E0EBF7;
		color: #108CEE;
	}

	.company-list li p {
		padding: 10px 0 10px 0px;
		margin-left: 5px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	.company-name {
		font-size: 12px;
	}

	.company-id {
		color: #999;
	}

	/*.avator{*/
	/*width: 100%;*/
	/*height: 76px;*/
	/*line-height: 70px;*/
	/*text-align: center;*/
	/*margin: 5px;*/
	/*}*/
	.seach-enter-active {
		animation: bounce-in .5s ease-out;
	}

	.seach-leave-active {
		animation: bounce-in .5s ease-in reverse;
	}

	@keyframes bounce-in {
		0% {
			width: 0;
		}
		100% {
			width: 140px;
		}
	}

	.icon-shoucang1 {
		color: #ccc;
	}

	i.act {
		color: #f4ea2a;
	}

	.hid_company::-webkit-scrollbar {
		width: 0;
		/*滚动条宽度（右侧滚动条）*/
		height: 7px;
		/*滚动条高度（底部滚动条）*/
		background-color: #eeeeee;
		z-index: 999;
	}

	.hid_company::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background-color: #F5F5F5;
		z-index: 999;
	}

	.hid_company::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .2);
		background-color: #ccc;
		z-index: 999;
	}

	@media (min-width: 1365px) and (max-width: 1919px) {
		.client-sidebar {
			width: 12.5%;
			position: fixed;
			z-index: 999;
		}

		.search {
			display: inline-block;
			line-height: 60px;
			width: 100%;
			border-radius: 10px;
			padding-left: 4px;

		}

		.hid_company {
			position: absolute;
			top: 56px;
			z-index: 99;
			left: 5px;
			background-color: #fff;
			width: 160px;
			min-height: 20px;
			max-height: 200px;
			overflow: scroll;
			border: 1px solid #ccc;

		}

		.hid_company li {

			white-space: nowrap;
			padding: 0px 10px;
			height: 20px;
			line-height: 20px;
			cursor: pointer;
		}
	}
</style>