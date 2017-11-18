<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '户号',
                        key: 'name',
                        sortable:'true',
	                    sortType:'asc'
                    },
                    {
                        title: '一月',
                        key: 'January'
                    },
                    {
                        title: '二月',
                        key: 'February'
                    },
                    {
                        title: '三月',
                        key: 'March'
                    },
                    {
                        title: '四月',
                        key: 'April'
                    },
                    {
                        title: '五月',
                        key: 'May'
                    },
                    {
                        title: '六月',
                        key: 'June'
                    },
                    {
                        title: '七月',
                        key: 'July'
                    },
                    {
                        title: '八月',
                        key: 'August'
                    },
                    {
                        title: '九月',
                        key: 'September'
                    },
                    {
                        title: '十月',
                        key: 'October'
                    },
                    {
                        title: '十一月',
                        key: 'November'
                    },
                    {
                        title: '十二月',
                        key: 'December'
                    },
                    {
                        title: '合计',
                        key: 'total'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        }
    }
</script>
<template>
	<div style="width: 1500px;">
		<Table ref="selection" :columns="columns4" :data="data1"></Table>
	</div>
</template>
<style scoped>
	.ivu-table table th,
	.ivu-table table td {
		text-align: center;
		height: 36px;
		line-height: 35px;
	}
	/*最后一个th td大小自适应*/
	.ivu-table table tr th:nth-last-child(1),
	.ivu-table table tr td:nth-last-child(1){
		flex: 1;
	}
	/*需要手动定义宽度,在定义table外容器时，需要同时设置其内部tr宽度，值为容器宽-1*/
	.ivu-table tr{
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
	}
	/*在这里控制th和td的宽度*/
	.ivu-table th,.ivu-table td{
		color: #ffffff;
		display: inline-block;
		width: 100px;
	}
	.ivu-table th{
		 background-color: #4FA8F9;
	}
	.ivu-table td{
		color: #202020;
	}
</style>