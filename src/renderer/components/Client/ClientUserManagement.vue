<script>
	export default {
	    name:'usermanager',
		data(){
	        return{
				column1:[
					{
					    title:'登录ID',
						sortable:true,
						key:'dlid'
					},
					{
					    title:'申请时间',
                        sortable:true,

                        key:'sqsj'
					},
					{
					    title:'手机号码',
                        sortable:true,

                        key:'sjhm'
					},{
					    title:'绑定微信',
                        sortable:true,

                        key:'bdwx'
					},{
					    title:'上次登录时间',
                        sortable:true,

                        key:'scdlsj'
					},{
					    title:'用户密码',
                        sortable:true,

                        key:'yhmm',
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
                                    }, '未审核'),
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
                                    }, '删除'),
                                ])
                            }
					},{
					    title:'审核状态',
                        sortable:true,

                        key:'shzt'
					},{
					    title:'操作',
                        key:'cz',
                        render: (h, params) => {
                            if (params.row.status === 0){
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
                                    }, '未审核'),
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
                                    }, '删除'),
                                ])
                            }else {
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
                                    }, '审核'),
                                    h('span', {
                                        style: {
                                            marginRight: '5px',
                                            color:'#999 ',
                                            cursor:'pointer'
                                        }
                                    }, '删除'),
                                ])

                            }
                        }
					},
				],
		        tableData:[
			        {
			            dlid:'10101010',
				        sqsj:'2017-10-10 10:10:00',
				        sjhm:'13188888888',
				        bdwx:'13188888888',
				        scdlsj:'2017-10-10 10:10:00',
				        yhmm:'88888888',
				        shzt:'已审核'
			        }
		        ]
	        }
		}
	}
</script>
<template>
	<div class="client-container">

		<panel>
			<h3 class="title-lv3">用户管理</h3>
			<Table :columns="column1" :data="tableData" height="830"></Table>
		</panel>
	</div>
</template>
<style scoped>

</style>