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
                    _left: 0,
                    dom: {}
                }
            }
        },
        methods: {
            mouseMove: function () {
                event.preventDefault();
                this.dragParams.move = true;
                let x = this.dragParams._x - event.clientX;
                this.dragParams.dom = this.$refs.mybox;
                if (this.dragParams.down && this.dragParams.move) {
                    this.dragParams.dom.scrollLeft = (this.dragParams._left + x);
                }
            },
            mouseUp: function () {
                event.preventDefault();
                this.dragParams.move = false;
                this.dragParams.down = false;
                this.$refs.mybox.style.cursor = '';
            },
            mouseDown: function () {
                event.preventDefault();
                this.dragParams.move = false;
                this.dragParams.down = true;
                this.dragParams._x = event.clientX;
                this.dragParams._left = this.$refs.mybox.scrollLeft;
                this.$refs.mybox.style.cursor = 'move';
            },
            initScroll: function () {
                this.$refs.mybox.scrollLeft = '200'
            }
        }
    }
</script>
<template>
	<div class="jiexiantu">
		<div class=" mycontainer" v-on:mousedown="mouseDown()" v-on:mouseup="mouseUp()" v-on:mousemove="mouseMove()"
		     ref="mybox">
			<div class="client">
				<p class="kehu" @click="jiexianData.show = !jiexianData.show">{{jiexianData.kehuName}}</p>
				<transition-group name="fade">
				<div class="huhao" v-show="jiexianData.show" v-for="huhao in jiexianData.huhaos" :key="huhao.name">
					<p @click="huhao.show = !huhao.show">{{huhao.name}}</p>
					<transition-group name="fade">

					<div v-show="huhao.show" v-for="bianhao in huhao.bianhaos" :key="bianhao.name">
						<div class="bianhao">
							<p @click="bianhao.show = !bianhao.show">{{bianhao.name}}</p>
							<transition-group name="fade">
							<div v-show="bianhao.show" v-for="biaohao in bianhao.biaohaos" :key="biaohao.name">
								<p>{{bianhao.name}}</p>
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
	.client {
		white-space: nowrap;
		text-align: center;
		height: 40px;
		line-height: 40px;
	}

	.client div {
		display: inline-block;
		vertical-align: top;
	}
	.kehu{
		width: 200px;
		margin-left: 800px;
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

	.mycontainer {
		width: 600px;
		height: 400px;
		position: relative;
		margin-left: 220px;
		background-color: #fff;
		border: 1px solid red;
		overflow-x: scroll;
	}

	.mycontainer::-webkit-scrollbar {
		width: 0px;
		/*滚动条宽度（右侧滚动条）*/
		height: 10px;
		/*滚动条高度（底部滚动条）*/
	}

</style>