<script>
	import MyTab from '@/components/Button/MyTab'
    export default {
        name:'clientlist',
        data(){
            return{
                pageData:{
                    total:100,
	                current:2
                },
                currentCity:'all',
	            currentTabType:'normal',
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '客户名称',
                        key: 'name'
                    },
                    {
                        sortable: true,
                        title: '实际用电量',
                        key: 'shiji'
                    },
                    {
                        title: '申报电量',
                        key: 'shenbao'
                    },
	                {
                        title: '申报偏差',
                        key: 'shenbaopiancha'
                    },
	                {
                        title: '购电量',
                        key: 'goudianliang'
                    },
	                {
                        title: '购电偏差',
                        key: 'goudianpiancha'
                    },
	                {
                        title: '预测电量',
                        key: 'yucedianliang'
                    },
	                {
                        title: '预测偏差',
                        key: 'yucepiancha'
                    },
	                {
                        title: '最低功率因数',
                        key: 'gonglv'
                    },
	                {
                        title: '总览',
                        key: 'zonglan',
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
                        key: 'zhishu',
		                render:(h,params)=>{
                            return h('span', {
								attrs:{
								    class:'iconfont icon-xingzhuang'
								},
                                style: {
                                    marginRight: '5px',
	                                cursor:'pointer'
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
                data1: [
                    {
                        name: 'John Brown',
                        shiji: '000000',
                        shenbao: '000000',
                        shenbaopiancha: '000000',
                        goudianliang: '000000',
                        goudianpiancha: '000000',
                        yucedianliang: '000000',
                        yucepiancha: '000000',
                        gonglv: '000000',
                        zonglan: '000000',
                        zhishu: '000000',
                        caozuo: '000000',
                    },{
                        name: 'John Brown',
                        shiji: '000000',
                        shenbao: '000000',
                        shenbaopiancha: '000000',
                        goudianliang: '000000',
                        goudianpiancha: '000000',
                        yucedianliang: '000000',
                        yucepiancha: '000000',
                        gonglv: '000000',
                        zonglan: '000000',
                        zhishu: '000000',
                        caozuo: '000000',
                    },
                ],
                showBorder: false,
                showStripe: false,
                showHeader: true,
                showIndex: true,
                showCheckbox: true,
                fixedHeader: false,
                tableSize: 'default'
            }
        },
	    computed:{

	    },
	    watch:{

	    },
        methods:{
            changeSelect(city){
	            this.currentCity = city;
	            console.log(city)
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
            }
        },
        components:{
			'my-tab':MyTab
        }
    }
</script>
<template>
	<div>
		<div class="main-container">
			<div class="main-container-panel">
				<div class="header">
					<span style="font-size: 14px;">客户列表</span>
					<div class="tab-container">
						<my-tab v-on:changeSelect="changeSelect('all')" v-bind:type="currentCity === 'all'?'disabled':'normal'">全部 <span>(12332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('zz')" v-bind:type="currentCity === 'zz'?'disabled':'normal'">郑州 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('kf')" v-bind:type="currentCity === 'kf'?'disabled':'normal'">开封 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('ly')" v-bind:type="currentCity === 'ly'?'disabled':'normal'">洛阳 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('pds')" v-bind:type="currentCity === 'pds'?'disabled':'normal'">平顶山 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('ay')" v-bind:type="currentCity === 'ay'?'disabled':'normal'">安阳 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('hb')" v-bind:type="currentCity === 'hb'?'disabled':'normal'">鹤壁 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('xx')" v-bind:type="currentCity === 'xx'?'disabled':'normal'">新乡 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('lh')" v-bind:type="currentCity === 'lh'?'disabled':'normal'">漯河 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('smx')" v-bind:type="currentCity === 'smx'?'disabled':'normal'">三门峡 <span>(332)</span></my-tab>
						<my-tab v-on:changeSelect="changeSelect('zmd')" v-bind:type="currentCity === 'zmd'?'disabled':'normal'">驻马店 <span>(332)</span></my-tab>
						<span class="more">更多 <i class="iconfont icon-xiala"></i></span>
					</div>

					<div class="form-container">
						<div class="search-container">
							<i class="iconfont icon-search"></i><input type="search" placeholder="客户编号或客户名称" style="width: 300px"></input>
						</div>
						<Button type="primary" style="width: 150px;margin:0 40px;" class="normal" @click="gotoAddUser">+新增用户</Button>
						<Button type="primary" shape="circle" icon="refresh"></Button>
					</div>
				</div>
				<div class="table-container">
					<Table ref="selection" :columns="columns4" :data="data1"></Table>
					<div style="margin: 20px auto;width: 650px">

						<Page :total="pageData.total" :current="pageData.current" show-total show-elevator></Page>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<style scoped>
	.main-container{
		margin-top:99px;
		overflow: hidden;
	}
	.header span {
		font-size: 12px;
	}
	.form-container{
		margin-top: 20px;
		margin-right: 20px;
		float: right;
	}
	.form-container input[type='search']{
		display: inline-block;
		width: 200px;
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
		outline: none;
		transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
	}

	.search-container{
		display: inline-block;
		vertical-align: middle;
	}
	.search-container i{
		position: relative;
		z-index: 999;
		left: 30px;
		color: #999999;
	}

	.tab-container{
		display: inline-block;
		margin-left: 40px;
		margin-top: 10px;
	}
	.tab-container>span{
		margin-left: 10px;
	}
	.more{
		position: absolute;
		right: 35px;
		top: 110px;
		color: #4fa8f9;
	}
	.more i{
		font-size: 10px;
	}
	.table-container{
		margin-top: 60px;
	}

</style>