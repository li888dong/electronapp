<script>
    export default {
        name: 'jiexiantu',
        mounted() {
            this.initScroll();
        },
        data() {
            return {
                jiexianData: {
                    kehuName: '客户1',
                    show: true,
                    huhaos: [
                        {
                            show: true,
                            name: '户号1',
                            bianhaos: [
                                {
                                    show: true,
                                    name: '编号1',
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                            bianhaos: [
                                {
                                    show: true,
                                    name: '编号1',
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                            bianhaos: [
                                {
                                    show: true,
                                    name: '编号1',
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                            bianhaos: [
                                {
                                    show: true,
                                    name: '编号1',
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                                    biaohaos: [
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
                dragParams: {
                    move: false,
                    down: false,
                    _x: 0,
	                left:0,
                    _left: 0,
                    dom: {}
                }
            }
        },
        methods: {
            mouseMove: function () {
                event.preventDefault();
                this.dragParams.move = true;
//                鼠标初始位置 - 鼠标终止位置
                let x = this.dragParams._x - event.clientX;
                if (this.dragParams.down && this.dragParams.move) {
                    console.dir(this.$refs.mybox)
                    this.$refs.mybox.style.left = this.dragParams._left + x +'px';
                }
            },
            mouseUp: function () {
                event.preventDefault();
                this.dragParams.move = false;
                this.dragParams.down = false;
                this.$refs.mybox.offsetParent.style.cursor = '';
            },
            mouseOut:function () {
                event.preventDefault();
                this.dragParams.move = false;
                this.dragParams.down = false;
                this.$refs.mybox.offsetParent.cursor = '';
            },
            mouseDown: function () {
                event.preventDefault();
                this.dragParams.move = false;
                this.dragParams.down = true;
//                获取鼠标按下时的初始位置
                this.dragParams._x = event.clientX;
//                获取目标元素的左边偏移量
                this.dragParams._left = this.$refs.mybox.offsetLeft;
                this.$refs.mybox.offsetParent.style.cursor = 'move';
            },
            initScroll: function () {

            }
        }
    }
</script>
<template>
	<div class="jiexiantu" v-on:mousedown="mouseDown()" v-on:mouseup="mouseUp()" v-on:mouseout="mouseOut()" v-on:mousemove="mouseMove()">
		<div class=" mycontainer" ref="mybox">
			<div class="client">
				<p class="kehu">
					<i class="iconfont icon-daloutubiao" @click="jiexianData.show = !jiexianData.show"></i><span>{{jiexianData.kehuName}}</span>
				</p>
				<transition-group name="fade">
				<div class="huhao" v-show="jiexianData.show" v-for="huhao in jiexianData.huhaos" :key="huhao.name">
					<p><i class="iconfont icon-gongchang" @click="huhao.show = !huhao.show"></i></p>
					<transition-group name="fade">

					<div v-show="huhao.show" v-for="bianhao in huhao.bianhaos" :key="bianhao.name">
						<div class="bianhao">
							<p><i class="iconfont icon-bianyaqiyunhangpingjia" @click="bianhao.show = !bianhao.show"></i></p>
							<transition-group name="fade">
							<div class="biaohao" v-show="bianhao.show" v-for="biaohao in bianhao.biaohaos" :key="biaohao.name">
								<p><i class="iconfont icon-new_dianbiao"></i></p>
							</div>
							</transition-group>

						</div>
					</div>
					</transition-group>

				</div>
				</transition-group>
			</div>

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
		border: 1px solid red;
		overflow-x: scroll;
	}
	.client {
		white-space: nowrap;
		text-align: center;
		width: inherit;
	}
	.huhao{
		border: 1px solid red;
		height: 150px;

	}
	.bianhao{
		margin:0 10px;
	}
	.biaohao{

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
		border: 1px solid red;
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