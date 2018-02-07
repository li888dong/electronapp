<script>
	import mySearch from '@/components/Tool/mySearch'
	import {ipcRenderer} from 'electron'
	export default {
		name: 'clientsidebar',
		data() {
			return {
				spinShow: false,
				companyList: [],
				totalPages: 0,
				lastPage: 0,
				currentPage: 1,
				button1: '所有客户',
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
				timer: null,
			}
		},
		components: {
            'my-search': mySearch
        },
		computed: {
			selectedId: function () {
				return this.$store.getters.cus_id
			},
			companbol: function () {
				return this.$store.getters.companbol
			},
			limit:function(){
				let screenWidth = ipcRenderer.sendSync('width-change', 'change');
                let limit = 0;
                console.log(screenWidth);
                if (screenWidth < 1920) {
                    limit = 12;
                } else {
                    limit = 17;
                }
                return limit
			},
			height:function(){
				let screenWidth = ipcRenderer.sendSync('width-change', 'change');
                let height = 0;
                console.log(screenWidth);
                if (screenWidth < 1920) {
                    height = 560;
                } else {
                    height = 790;
                }
                return height
			},
			keyword:function(){
				return this.$store.getters.searchKey;
			},
			uid:function(){
				return this.$store.getters.uid;
			}
		},
		mounted() {
			console.log('mounted')
			this.clientList();
			this.$Message.config({
				top: 100,
			})
		},
		created: function () {
			console.log('created')

		},
		watch: {
			bol: function (val) {
				console.log(val)
			}
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
			doSearch(){
				if(this.button1 === '所有客户'){
                      this.$http.post(this.$api.CLIENT_LIST, {
						com_id: this.$store.getters.com_id,
						type: 3,
						keyword: this.keyword,
					}).then(res => {
						this.spinShow = false;
						this.loading1 = false;
						console.log('所有客户搜索all', res);
						if (res.data.status === '1') {

							this.companyList = res.data[0];
							this.companyshow = false;
							this.$store.dispatch('setCompanbol', false);
							console.log(this.companyList)
						}

					}, err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					}).catch(err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					})
				}else if(this.button1 ==='我的客户'){
                     this.$http.post(this.$api.CLIENT_LIST, {
						com_id: this.$store.getters.com_id,
						type: 3,
						keyword: this.keyword,
						uid:this.uid
					}).then(res => {
						this.spinShow = false;
						this.loading1 = false;
						console.log('我的客户搜索all', res);
						if (res.data.status === '1') {

							this.companyList = res.data[0];
							this.companyshow = false;
							this.$store.dispatch('setCompanbol', false);
							console.log(this.companyList)
						}

					}, err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					}).catch(err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					})
				}else{
                      this.$http.post(this.$api.CLIENT_COLLECT_LIST, {
						com_id: this.$store.getters.com_id,
						keyword: this.keyword,
					}).then(res => {
						this.spinShow = false;
						this.loading1 = false;
						console.log('关注客户搜索all', res);
						if (res.data.status === '1') {

							this.companyList = res.data.list.data;
							this.companyshow = false;
							this.$store.dispatch('setCompanbol', false);
							console.log(this.companyList)
						}

					}, err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					}).catch(err => {
						this.companyshow = false;
						this.$api.errcallback(err);
					})
				}
               
			},
			dimSearch() {
				if(this.button1 ==='所有客户'){
                    this.$store.dispatch('setCompanbol', true);
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
						console.log('所有客户搜索', res);
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
				}else if(this.button1 === '我的客户'){
                      this.$store.dispatch('setCompanbol', true);
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
						uid:this.uid,
					}).then(res => {
						this.spinShow = false;
						this.loading1 = false;
						console.log('我的客户搜索', res);
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
				}else{
                     this.$store.dispatch('setCompanbol', true);
				     this.companyshow = true;
				     if (this.timer) {
					    clearTimeout(this.timer);
				      }
				     if (this.keyword.length < 1) {
					    return
				     }
				   this.timer = setTimeout(() => this.$http.post(this.$api.CLIENT_COLLECT_LIST, {
						com_id: this.$store.getters.com_id,
						keyword: this.keyword,
					}).then(res => {
						this.spinShow = false;
						this.loading1 = false;
						console.log('关注客户搜索', res);
						if (res.data.status === '1') {

							this.options1 = res.data.list.data;
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
				}
			},
			changeClinentList(value) {
				if (this.button1 === '所有客户') {
					this.clientList();
					this.$store.dispatch('setCusId', this.companyList[0].id);
					this.$store.dispatch('setCusName', this.companyList[0].name);
					this.$store.dispatch('setClientId', this.companyList[0].clientid);

				} else if(this.button1 === '关注客户'){
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
				}else{
					this.spinShow = true;
				    this.$http.post(this.$api.CLIENT_LIST, {
					com_id: this.$store.getters.com_id,
					type: 3,
					limit: this.limit,
					page: this.currentPage,
					uid:this.uid
				}).then(res => {
					this.spinShow = false;
					console.log('我的客户列表', res);
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
								this.changeClinentList('关注客户');
								// this.button1 = '关注客户';
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

								this.changeClinentList('关注客户');
								// this.button1 = '关注客户';
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
			toggle() {
				this.bol = !this.bol;
				// console.log(this.bol);
				if (this.bol) {
					console.log(document)
					let tem = document.getElementById('useSearch')
					console.log(tem, 8888888888888888)
				} else {
					console.log('没有获取到元素')
				}

			},
			companylist() {
				this.companyList = this.options1;
				this.$store.dispatch('setCompanbol', false);
				this.bol = false;
			},
			chooseCompany(item) {
				let arr = [];
				arr.push(item);
				this.companyList = arr;
				this.$store.dispatch('setCompanbol', false);
				this.bol = false;
				console.log(22222, this.companyList);
			},
			doThis() {
				console.log(this.keyword)
				if (this.keyword.length < 1 || /^\s*$/.test(this.keyword)) {
					this.bol = false
				} else {
					console.log('值不为空')
				}
				console.log("dothis")
			},
			pageChange(value){
				this.currentPage = value;
				this.clientList();
			}
		},
	}
</script>
<template>
	<div class="client-sidebar">
		<div class="search_box">
			  <Row class="relative">
					<div class='search_main'>
						<my-search v-on:doSearch='doSearch' v-on:dimSearch='dimSearch' class="searchBox"></my-search>
				    </div>
					<ul v-if='companbol' class='hid_company'>
						<li v-for='item in options1' @click='chooseCompany(item)' style="text-align:left">{{item.name}}</li>
						<Spin size="small" fix v-if="companyshow"></Spin>
					</ul>		
			  </Row>
				<Row>
					<div class="choose_box">
						 <RadioGroup v-model="button1" type="button" class='btn_box' v-on:on-change='changeClinentList'>
							<Radio label="所有客户" class="rest"></Radio>
							<Radio label="我的客户"  class="rest"></Radio>
							<Radio label="关注客户"  class="rest"></Radio>
						</RadioGroup>
					</div>
				</Row>
		</div>
		<div class="company-list" id='companyList'>
		  <Scroll  :height='height'>
			<ul>
				
					<template v-for="item in companyList">

						<li class="relative" v-bind:class="{selected:selectedId == item.id}"
						    @click="changeCompany(item.id,item.name,item.clientid,item.user_id)">
							<Row>
								<Col span="24">
								<p v-bind:title="item.name" class="company-name"><i class='fas fa-star'
								                                                    @click.self.stop='collectClient(item.id,item.myid)'
								                                                    :data-myid='item.myid'
								                                                    v-bind:class="{act:item.myid}"></i>
                                                                                    {{item.name}}</p>
								</Col>
							</Row>
						</li>
					</template>
				
			</ul>
			<Spin size="large" fix v-if="spinShow"></Spin>
		</Scroll>
		<div class="btn_group">
		    <Page :current="currentPage" :total="totalPages" simple :page-size='limit' show-elevator show-total v-on:on-change='pageChange'></Page>
		</div>	
		</div>
	</div>
</template>
<style scoped>
	.client-sidebar {
		background-color: #fff;
		margin: 3px;
	}
	 .searchBox{
		 width:100% !important;

	 }
	.search_box {
		width: 100%;
		border-bottom: solid 1px #ccc;
		padding:10px 0px;
		text-align:center;
	}
	.choose_box{
     margin-top: 10px;
	}
	.hid_company {
		position: absolute;
		top: 32px;
		z-index: 99;
		left: 0px;
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
	.company-list{
		width: 100%;
		height: 838px;
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
		color: #3399ff;
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
	.btn_box label{
		padding: 0 8px;
	}
	.btn_group{
			height: 42px;
			line-height: 42px;
			text-align: center;
			border-top:1px solid #ccc;
	}
	@media (min-width: 1365px) and (max-width: 1919px) {
		.client-sidebar {
			width: 12.2%;
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
			top: 32px;
			z-index: 99;
			left: 0px;
			background-color: #fff;
			width: 160px;
			min-height: 20px;
			max-height: 200px;
			overflow: scroll;
			border: 1px solid #ccc;

		}
        .company-list{
			height: 610px;
		}
		.hid_company li {

			white-space: nowrap;
			padding: 0px 10px;
			height: 20px;
			line-height: 20px;
			cursor: pointer;
		}
		.rest{
			padding: 0 4px !important;
		}
		.btn_group{
			height: 42px;
			line-height: 42px;
			text-align: center;
			border-top:1px solid #ccc;
		}
	}
</style>