<script>
	import MyTab from '@/components/Tool/MyTab'
    import Panel from "../Tool/Panel.vue";
    export default {
        name:'clientlist',
        data(){
            return{
	            showAllCity:false,
                columns4: [
                    {
                        sortable: true,
                        title: '客户名称',
                        key: 'name'
                    },
                    {
                        sortable: true,
                        title: '实际用电量',
                        key: 'shiji'
                    },
                    {
                        sortable: true,
                        title: '申报电量',
                        key: 'shenbao'
                    },
                    {
                        sortable: true,
                        title: '申报偏差',
                        key: 'shenbaopiancha'
                    },
                    {
                        sortable: true,
                        title: '购电量',
                        key: 'goudianliang'
                    },
                    {
                        sortable: true,
                        title: '购电偏差',
                        key: 'goudianpiancha'
                    },
                    {
                        sortable: true,
                        title: '预测电量',
                        key: 'yucedianliang'
                    },
                    {
                        sortable: true,
                        title: '预测偏差',
                        key: 'yucepiancha'
                    },
                    {
                        sortable: true,
                        title: '最低功率因数',
                        key: 'gonglv'
                    },
                    {
                        title: '总览',
                        key: 'zonglan',
                        width:60,
                        render:(h,params)=>{
                            return h('span', {
                                attrs:{
                                    class:'iconfont icon-zhuzhuangtutubiao'
                                },
                                style: {
                                    marginRight: '5px',
                                    cursor:'pointer'
                                },
                                on: {
                                    click: () => {
                                        console.log(params.index)
                                        this.gotoZonglan()
                                    }
                                }
                            }, '')

                        }
                    },
                    {
                        title: '指数',
                        width:60,
                        key: 'zhishu',
                        render:(h,params)=>{
                            return h('span', {
                                attrs:{
                                    class:'iconfont icon-zhishufenxiyanpan'
                                },
                                style: {
                                    marginRight: '5px',
                                    cursor:'pointer',
                                },
                                on: {
                                    click: () => {
                                        console.log(params.index)

                                        this.gotoZhishu()
                                    }
                                }
                            }, '')

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
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)
                                            this.gotoDetail()
                                        }
                                    }
                                }, '详情'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)

                                            this.gotoHetong()
                                        }
                                    }
                                }, '合同'),
                                h('span', {
                                    style: {
                                        marginRight: '5px',
                                        color:'#4fa8f9 ',
                                        cursor:'pointer'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.index)

                                            this.gotoYonghu()
                                        }
                                    }
                                }, '用户')
                            ])
                        }
                    }
                ],
            }
        },
	    mounted(){
			this.reqData()
	    },
	    computed:{
            cityList() {
                return this.$store.getters.cityList
            },
		    tableList(){
                return this.$store.getters.tableList
		    },
		    currentCity(){
                return this.$store.getters.currentCity
		    }
	    },
	    watch:{

	    },
        methods:{
			reqData(){
			    this.setTableList();
			    this.setCityList();
			},
			gotoZonglan(){
			    this.$router.push('/zonglan');
			},
			gotoZhishu(){
			    this.$router.push('/client-compare');
			},
			gotoDetail(){
			    this.$router.push('/client-detail');
			},
			gotoHetong(){
			    this.$router.push('/hetong');
			},
			gotoYonghu(){
			    this.$router.push('/user-manager');
			},
            gotoAddUser(){
                this.$router.push('/AddClient');
            },
	        pageChange(page){
                this.$store.dispatch('setTablePage',page);
	        },
            changeSelect(city){
                this.$store.dispatch('setCurrentCity',city);
            },
	        setTableList(){
                this.$store.dispatch('setTableList','zz')
	        },
	        setCityList(){
                this.$store.dispatch('setCityList','zz')
	        }
        },
        components:{
            Panel,
            'my-tab':MyTab
        }
    }
</script>
<template>
	<Row class="main-container">
		<panel>
			<div class="flex-col" style="height: 905px;">

				<div class="header">
					<Row>
						<Col span="2">
						<h3 class="title-lv2">客户列表</h3>

						</Col>
						<Col span="20">
						<div class="tab-container" :class="showAllCity?'h_100':'h_40'">

							<my-tab v-on:changeSelect="changeSelect('all')" v-bind:type="currentCity === 'all'?'disabled':'normal'">全部 <span>(12332)</span></my-tab>
							<template v-for="(city,key) in cityList">
								<my-tab
										v-on:changeSelect="changeSelect(key)"
										v-bind:type="currentCity === key?'disabled':'normal'"
								>{{city.name}} <span>({{city.count}})</span></my-tab>
							</template>
						</div>
						</Col>
						<Col span="2">
						<span class="more" @click="showAllCity = !showAllCity">更多 <i class="iconfont icon-xiala"></i></span>
						</Col>

					</Row>
				</div>
				<div class="table-container">
					<Row>
						<div class="form-container">
							<div class="search-container">
								<i class="iconfont icon-search"></i>
								<input type="search" placeholder="客户编号或客户名称"></input>
							</div>

							<Button type="primary" size="large" @click="gotoAddUser">+新增用户</Button>
							<div class="refresh">

								<i class="iconfont icon-shuaxin"></i>
							</div>
						</div>
					</Row>
					<Table :columns="columns4" :data="tableList.data1"></Table>

					<div class="page-container">
						<Page
							:total="tableList.pageData.total"
							:current="tableList.pageData.current"
							show-total
							show-elevator
							v-on:on-change="pageChange"
						></Page>
					</div>
				</div>
			</div>
		</panel>
	</Row>
</template>
<style scoped>

	.header{
		border-bottom: 1px solid #eeeeee;
		padding-bottom: 10px;
	}

	.form-container{
		margin-bottom: 20px;
		display: inline-block;
	}
	.form-container input[type='search']{
		display: inline-block;
		width: 300px;
		height: 32px;
		line-height: 1.5;
		padding: 4px 30px;
		font-size: 12px;
		border: 1px solid #dddee1;
		border-radius: 16px;
		color: #495060;
		background-color: #EEEEEE;
		background-image: none;
		position: relative;
		cursor: text;
		transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
	}

	.search-container{
		display: inline-block;
		vertical-align: middle;
		margin-right: 40px;
	}
	.search-container i{
		position: relative;
		z-index: 999;
		left: 30px;
		color: #999999;
	}

	.tab-container{
		display: inline-block;
		vertical-align: middle;
		margin-left: 40px;
		overflow: hidden;
	}

	.tab-container>span{
		margin:10px;
	}
	.more{
		cursor: pointer;
		display: inline-block;
		vertical-align: middle;
		margin-top: 16px;
		margin-left: 73px;
		color: #4fa8f9;
	}
	.more i{
		font-size: 10px;
	}
	.table-container{
		flex: 1;
		margin: 20px 20px 0 20px;
	}
	.h_40{
		height: 40px;
	}
	.h_100{
		height: 100px;
	}
</style>