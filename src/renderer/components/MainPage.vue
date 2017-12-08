<template>
	<Row className="flex-row">
		<div style="flex:5">
			<main-sidebar></main-sidebar>
		</div>
		<div style="flex: 43">
			<Row>
				<div class="frame-top">
					<span class="hideBtn iconfont" @click="hideApp()">&#xe601;</span>
					<span class="closeBtn iconfont" @click="closeApp()">&#xe664;</span>
				</div>
			</Row>
			<Row>
				<main-header></main-header>

			</Row>
			<Row>
				<router-view></router-view>
			</Row>

			<transition name="fade">
				<fast-boot v-if="fastboot"></fast-boot>
			</transition>
		</div>
	</Row>
</template>

<script>
    import {ipcRenderer} from 'electron';
    import MainSidebar from '@/components/MainSidebar'
    import Header from '@/components/Header'
    import FastBoot from '@/components/FastBoot'

    export default {
        name: 'mainPage',
        data(){
            return{

            }
        },
	    computed:{
            fastboot:function () {
	            return this.$store.getters.fastboot
            }
	    },
        methods:{

//            用以关闭应用
            closeApp() {
                ipcRenderer.send('window-all-closed');
            },
//            用以最小化应用
            hideApp() {
                ipcRenderer.send('hide-window');
            },
        },
        components: {
            'main-sidebar': MainSidebar,
            'main-header': Header,
            'fast-boot':FastBoot
        }
    }
</script>

<style>
	@import "../../../static/common.css";
</style>
