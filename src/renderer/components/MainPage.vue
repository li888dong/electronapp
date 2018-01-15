<template>
	<Row id='main_page'>
		<div  class="sidebar_menu">
			<main-sidebar></main-sidebar>
		</div>
		<div  class='main_content'>
			<Row>
				<div class="frame-top">
					<span class="hideBtn iconfont" @click="hideApp()">&#xe601;</span>
					<span class="closeBtn iconfont" @click="closeApp()">&#xe664;</span>
				</div>
			</Row>
			<Row class='top_25'>
				<main-header></main-header>

			</Row>
			<Row class='top_80'>
				<router-view></router-view>
			</Row>

			<transition name="fade">
				<fast-boot v-if="fastboot"></fast-boot>
				<Col span='4' class='main_siderbar_box' v-if='mainsidebar'>
				 <main-sidebar ></main-sidebar>
				</Col>
			</transition>

		</div>
	</Row>
</template>

<script>
    import {ipcRenderer} from 'electron';
    import MainSidebar from '@/components/sidebar/sidebarMenuShrink'
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
            },
           mainsidebar:function(){
           	  return this.$store.getters.mainsidebar
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
        },
        mounted(){
        	window.onresize=function(){
        		var width = ipcRenderer.sendSync('width-change','change');
                var mainPage = document.getElementById('main_page');
        		if(width > 1366){
                      mainPage.className = 'flex-row';
        		}else{
        			mainPage.className='';
        		}
        	}
        }
    }
</script>

<style scoped>
	@import "../../../static/common.css";
	@media (min-width: 1367px) {
      .main_content{
         flex: 50;
      }
      .sidebar_menu{
        flex:1;
      }
	}
	@media (min-width: 1365px) and (max-width: 1919px){
		.sidebar_menu{
            display: none;
        }
        .top_80{
           margin-top: 80px;
        }
        .main_siderbar_box{
        position: fixed;
        top: 100px;
        height: 900px;
        overflow: hidden;
        z-index: 1000;
    }
    .frame-top{
        position: fixed;
        z-index: 999;
	}
    .top_25{
        margin-top: 25px;
    }
}
	
</style>
