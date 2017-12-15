<style scoped>
    .login{
        width: 100%;
        height: 442px;
        background-color: #fff;
        position: relative;
        border-radius: 4px;
        background-image: url('../assets/logo（没有文字）.png');
        background-repeat:no-repeat;
        background-position: center 76px;
    }

    .login-header{
        position: relative;
        width: 100%;
        height: 46px;
        background-color: #0089F0;
        background-image: url("../assets/蓝底logo（小）.png");
        background-repeat:no-repeat;
        background-position: 20px 15px;
    }
    #hideBtn,#closeBtn{
        position: absolute;
        color: #ffffff;
        font-size: 20px;
        cursor: pointer;
        top: 10px;
        z-index: 9999;
    }
    #hideBtn{
        right: 40px;
    }
    #closeBtn{
        right: 10px;
    }
    .login-con{
        margin-top: 120px;
    }
    .form-con{
        padding: 10px 0 0;
    }
    .login-tip{
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
    }

    .form-con input[type=text],
    .form-con input[type=password]{
        border-color: transparent;
        outline: none;
        border-bottom: 1px solid #ccc;
        padding: 5px 1px;
        width: 80%;
        margin-left:10%;
        margin-top: 20px;
        font-size: 16px;
    }
    .form-con input[type=checkbox]{
        height: 16px;
        margin: 12px 0 0 10%;
        vertical-align: bottom;
    }
    ::-webkit-input-placeholder{
        color: #ccc;
    }
    .loginBtn{
        width: 80%;
        margin:20px 0 0 10%;
    }
    .extraGroup{
        display: inline-block;
        float: right;
        margin:10px 10% 0 0 ;
    }
    .extraGroup span{
        cursor: pointer;
    }
    .movebar{
        position: absolute;
        left: 0;
        right:67px;
        top: 0;
        bottom: 0;
    }
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <!-- -webkit-app-region: drag 设置窗口可拖动-->
        <div class="login-header relative">
            <div class="movebar"  style="-webkit-app-region: drag"></div>
            <span id="closeBtn" class="iconfont" @click="closeApp()">&#xe664;</span>
            <span id="hideBtn" class="iconfont" @click="hideApp()">&#xe601;</span>
        </div>
        <div class="login-con">

            <div class="form-con">
                <form ref="loginForm" :model="form" :rules="rules">
                    <input type="text" v-model.trim="form.userName" placeholder="请输入用户名" autofocus>
                    <input type="password" v-model.trim="form.password" placeholder="请输入密码">
                    <p style="color: #999">
                        <input id="autologin" type="checkbox" v-on:change="isAuto"/> <label for="autologin">自动登录</label>
                        <span class="extraGroup">
                            <span class="forget" @click="closable">忘记密码 </span>|<span class="addUser" @click="addUser"> 配置新用户</span>
                        </span>
                    </p>
                    <Button @click="handleSubmit" type="primary" long class="loginBtn">登录</Button>
                </form>
                <p class="login-tip">{{loginTip}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import {ipcRenderer,shell} from 'electron';
export default {
    data () {
        return {
            loginTip:'zhongqi 123456',
            form: {
                userName: '',
                password: '',
                auto:false
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        isAuto(){
            this.auto = !this.auto;
            console.log(this.auto)
        },
        closable () {
            this.$Message.warning({
                content: '请联系管理员',
                duration: 10,
                closable: true
            });
        },
        addUser(){
            shell.openExternal('https://www.baidu.com');
        },
        //            用以关闭应用
        closeApp() {
            ipcRenderer.send('window-all-closed');
        },
        //            用以最小化应用
        hideApp() {
            ipcRenderer.send('hide-window');
        },
        handleSubmit () {
            this.$http.post(this.$api.LOGIN,{username:this.form.userName,password:this.form.password}).then(res=>{
                if (res.data.status ==='1'){
                    this.$store.dispatch('setLogin',[true,res.data.com_id]);
                    this.$router.push('main/home');
                    ipcRenderer.send('login-succeed');
                } else {
                    ipcRenderer.send('login-failed');
                    this.loginTip='请输入正确的用户名和密码';
                }
            },err=>{});
        }

    }
};
</script>
