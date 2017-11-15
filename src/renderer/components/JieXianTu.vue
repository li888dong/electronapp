<script>
    export default {
        name: 'jiexiantu',
        mounted() {
            this.initScroll();

            this.dragParams.drag = this.$refs.mybox;
            this.dragParams.min = this.$refs.mybox.parentNode.offsetWidth - this.$refs.mybox.offsetWidth;

        },
        data() {
            return {
                jiexianData: {
                    name: '客户1',
                    show: true,
                    children: [
                        {
                            show: true,
                            name: '户号1',
                            symbol: 'image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg',
                            children: [
                                {
                                    show: true,
                                    name: '编号1',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1',
                                           symbol: 'image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号2',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号3',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号4',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }
                            ]
                        },
	                    {
                            show: true,
                            name: '户号2',
                            symbol: 'image://http://www.iconpng.com/png/ecommerce-business/iphone.png',
                            children: [
                                {
                                    show: true,
                                    name: '编号1',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号2',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号3',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号4',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }
                            ]
                        },
	                    {
                            show: true,
                            name: '户号3',
                            children: [
                                {
                                    show: true,
                                    name: '编号1',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号2',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号3',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号4',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }
                            ]
                        },
	                    {
                            show: true,
                            name: '户号4',
                            children: [
                                {
                                    show: true,
                                    name: '编号1',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号2',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号3',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }, {
                                    show: true,
                                    name: '编号4',
                                    children: [
                                        {
                                           show:true,
                                           name: '表号1'
                                        }, {
                                           show:true,
                                           name: '表号2'
                                        }, {
                                           show:true,
                                           name: '表号3'
                                        },
                                    ]
                                }
                            ]
                        }
                    ]

                },
                dragParams : {
                    currentX : '',
                    nowX : '',
                    disX : '',
                    drag : {},
                    currentLeft : 0,
                    dragFlag : false,
                    to : 0,
	                min:''
                }
            }
        },
        methods: {
            mouseMove: function () {
                event.preventDefault();
                if (this.dragParams.dragFlag) {
                    console.log('move');
                    this.dragParams.nowX = event.clientX;
                    this.dragParams.disX = this.dragParams.nowX - this.dragParams.currentX;
                    this.dragParams.to = Math.min(0,Math.max(parseInt(this.dragParams.currentLeft) + this.dragParams.disX,this.dragParams.min));
                    this.dragParams.drag.style.left = this.dragParams.to  + 'px'
                }
            },
            mouseUp: function () {
                event.preventDefault();
                this.dragParams.min = this.$refs.mybox.parentNode.offsetWidth - this.$refs.mybox.offsetWidth;

                this.dragParams.dragFlag = false;
                this.dragParams.currentLeft = this.dragParams.drag.style.left;
                console.log('up',parseInt(this.dragParams.currentLeft));
                this.$refs.mybox.offsetParent.style.cursor = '';
            },
            mouseOut:function () {
                event.preventDefault();
                this.dragParams.dragFlag = false;
                this.$refs.mybox.offsetParent.cursor = '';
            },
            mouseDown: function () {
                event.preventDefault();
                this.dragParams.dragFlag = true;
                console.log('down',this.dragParams.currentLeft);
                this.dragParams.currentX = event.clientX;
                this.mouseMove();
                this.$refs.mybox.offsetParent.style.cursor = 'move';
            },
            initScroll: function () {
                let mychart = this.$echarts.init(document.getElementById('mybox'));
                mychart.showLoading();
                this.$http.get('../../../static/flare.json').then(data => {
                    console.log(data.data)
                    mychart.hideLoading();
                    mychart.setOption({
                        tooltip: {
                            trigger: 'item',
                            triggerOn: 'mousemove'
                        },
                        series:[
                            {
                                type: 'tree',
								name:'jiexiantu',
                                data: [this.jiexianData],

                                left: '2%',
                                right: '2%',
                                top: '15%',
                                bottom: '20%',

                                symbol: 'rect',
								symbolSize:25,
                                orient: 'vertical',
                                initialTreeDepth:1,
                                expandAndCollapse: true,

                                label: {
                                    normal: {
                                        position: 'top',
	                                    offset:[12,0],
                                        verticalAlign: 'middle',
                                        align: 'right',
                                        fontSize: 9,
                                        symbol: 'circle',
                                    }
                                },

                                leaves: {
                                    label: {
                                        normal: {
                                            position: 'bottom',
                                            verticalAlign: 'middle',
                                            align: 'left',
	                                        rotate:-90,
	                                        offset:[-2,0]
                                        }
                                    }
                                },

                                animationDurationUpdate: 750
                            }
                        ]
                    });
                },err =>{console.log(err)})
                mychart.on('click',function (params) {
                    console.log(params)
                })
            }
        }
    }
</script>
<template>
	<div class="jiexiantu" v-on:mousedown="mouseDown()" v-on:mouseup="mouseUp()" v-on:mouseout="mouseOut()" v-on:mousemove="mouseMove()">
		<div class="mycontainer relative"style="width: 355px;height: 207px" ref="mybox">
			<div  id="mybox" style="position: absolute;top: 0;left: 0;right: 0px;bottom: 0"></div>
			<!--<div class="client">-->
				<!--<p class="kehu">-->
					<!--<i class="iconfont icon-daloutubiao" @click="jiexianData.show = !jiexianData.show"></i><span>{{jiexianData.kehuName}}</span>-->
				<!--</p>-->
				<!--<transition-group name="fade">-->
				<!--<div class="huhao" v-show="jiexianData.show" v-for="huhao in jiexianData.huhaos" :key="huhao.name">-->
					<!--<p><i class="iconfont icon-gongchang" @click="huhao.show = !huhao.show"></i></p>-->
					<!--<transition-group name="fade">-->

					<!--<div v-show="huhao.show" v-for="bianhao in huhao.bianhaos" :key="bianhao.name">-->
						<!--<div class="bianhao">-->
							<!--<p><i class="iconfont icon-bianyaqiyunhangpingjia" @click="bianhao.show = !bianhao.show"></i></p>-->
							<!--<transition-group name="fade">-->
							<!--<div class="biaohao" v-show="bianhao.show" v-for="biaohao in bianhao.biaohaos" :key="biaohao.name">-->
								<!--<p><i class="iconfont icon-new_dianbiao"></i></p>-->
							<!--</div>-->
							<!--</transition-group>-->

						<!--</div>-->
					<!--</div>-->
					<!--</transition-group>-->

				<!--</div>-->
				<!--</transition-group>-->
			<!--</div>-->

		</div>

	</div>
</template>
<style scoped>
	.jiexiantu{
		width: 355px;
		height: 202px;
		display: inline-block;
		vertical-align: top;
		margin-top: 15px;
		margin-left: 15px;
		position: relative;
		overflow: hidden;
	}
	.mycontainer {
		height:202px;
		width: auto;
		position: absolute;
		background-color: #fff;
		overflow-x: scroll;
	}
	.client {
		white-space: nowrap;
		text-align: center;
		width: inherit;
	}
	.huhao{
		margin-top: 10px;
	}
	.bianhao{
		margin: 10px 10px 0 10px;
	}
	.biaohao{
		margin: 10px 10px 0 10px;
	}
	.client div {
		display: inline-block;
		vertical-align: top;
	}
	.kehu{
		display: flex;
		flex-flow:column;
		height: 30px;
		line-height: 15px;
		margin-top: 10px;
		border-bottom: 1px solid red;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}

	.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */
	{
		opacity: 0
	}

	li {
		width: 100px;
		display: inline-block;
		text-align: center;
	}



	.mycontainer::-webkit-scrollbar {
		width: 0px;
		/*滚动条宽度（右侧滚动条）*/
		height: 10px;
		/*滚动条高度（底部滚动条）*/
	}

</style>