<script>
	export default {
	    name:'pagenation',
        props: ['cur', 'all'],
        computed: {
            indexs: function () {
                let left = 1;
                let right = this.myAll;
                let ar = [];
                if (this.myAll >= 11) {
                    if (this.myCur > 5 && this.myCur < this.myAll - 4) {
                        left = this.myCur - 5;
                        right = this.myCur + 4
                    } else {
                        if (this.myCur <= 5) {
                            left = 1;
                            right = 10
                        } else {
                            right = this.myAll;
                            left = this.myAll - 9
                        }
                    }
                }
                while (left <= right) {
                    ar.push(left);
                    left++
                }
                if (ar[0] > 1) {
                    ar[0] = 1;
                    ar[1] = -1;
                }
                if (ar[ar.length - 1] < this.myAll) {
                    ar[ar.length - 1] = this.myAll;
                    ar[ar.length - 2] = 0;
                }
                return ar
            }
        },
        methods: {
            btnClick: function (data) {
                if (data < 1) return;
                if (data !== this.myCur) {
                    this.myCur = data;
                    this.$emit('btn-click', data)
                }
            },
            nextPage: function (data) {
                if (this.myCur >= this.myAll) return;
                this.btnClick(this.myCur + 1);
            },
            prvePage: function (data) {
                if (this.myCur <= 1) return;
                this.btnClick(this.myCur - 1);
            },
            setButtonClass: function (isNextButton) {
                if (isNextButton) {
                    return this.myCur >= this.myAll ? "page-button-disabled" : ""
                }
                else {
                    return this.myCur <= 1 ? "page-button-disabled" : ""
                }
            }
        },
		data(){
			return{
				myCur:this.cur,
				myAll:this.all
			}
		}
	}
</script>
<template>
	<div class="page-bar">
		<ul>
			<li><a v-bind:class="setButtonClass(0)" v-on:click="prvePage(myCur)"> < </a></li>
			<li v-for="index in indexs" v-bind:class="{ active: myCur === index }">
				<a v-on:click="btnClick(index)">{{ index < 1 ? "..." : index }}</a>
			</li>
			<li><a v-bind:class="setButtonClass(1)" v-on:click="nextPage(myCur)"> > </a></li>
		</ul>
	</div>
</template>
<style scopep>

	ul, li {
		margin: 0px;
		padding: 0px;
	}

	.page-bar {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.page-button-disabled {
		color:#ddd !important;
	}

	.page-bar li {
		list-style: none;
		display: inline-block;
	}

	.page-bar li:first-child > a {
		margin-left: 0px;
	}

	.page-bar a {
		border: 1px solid #ddd;
		text-decoration: none;
		position: relative;
		float: left;
		padding: 6px 12px;
		margin-left: -1px;
		line-height: 1.42857143;
		color: #337ab7;
		cursor: pointer;
	}

	.page-bar a:hover {
		background-color: #eee;
	}

	.page-bar .active a {
		color: #fff;
		cursor: default;
		background-color: #337ab7;
		border-color: #337ab7;
	}

	.page-bar i {
		font-style: normal;
		color: #d44950;
		margin: 0px 4px;
		font-size: 12px;
	}

</style>