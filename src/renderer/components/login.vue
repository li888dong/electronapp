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
        height:256px;
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
    .form-con .setAuto{
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
                <form ref="loginForm" :model="form">
                    <input type="text" v-model.trim="form.mobile" placeholder="请输入手机号" autofocus maxlength="11">
                    <input type="password" v-model.trim="form.password" placeholder="请输入密码">
                    <p style="color: #999">
                        <Checkbox class="setAuto" v-on:on-change="setAuto" v-model="auto">自动登录</Checkbox>
                        <span class="extraGroup">
                            <span class="forget" @click="closable">忘记密码 </span>|<span class="addUser" @click="addUser"> 配置新用户</span>
                        </span>
                    </p>
                    <Button @click="handleSubmit" type="primary" long class="loginBtn">登录</Button>
                </form>
                <!-- <p class="login-tip">{{loginTip}}</p> -->
            </div>
            <p class="login-tip absolute" style="bottom: 0;left:0;right:0">&copy;河南易采</p>

        </div>

    </div>
</template>

<script>
import {ipcRenderer,shell} from 'electron';
export default {
    data () {
        const telphone = (rule, val, callback) => {
            if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(val)) {
                return callback(new Error("请输入正确的手机号！"));
            } else {
                callback();
            }
        };
        return {
            loginTip:'15988888888 123456',
            form: {
                mobile: '',
                password: ''
            },
            auto:false
        };
    },
    mounted(){
        this.auto = localStorage.getItem('auto') === 'true';
        if (localStorage.getItem('auto') === 'true'){
            this.form.mobile = localStorage.getItem('mobile');
            this.form.password = localStorage.getItem('password');
        }
    },
    methods: {
        closable () {
            this.$Message.warning({
                content: '请联系管理员',
                duration: 10,
                closable: true
            });
        },
        setAuto(val){
            localStorage.setItem('auto',val)
        },
//        注册新用户时的跳转页
        addUser(){
            shell.openExternal('http://web.cx8o92.cn/#/login');
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
//            this.$store.dispatch('setLogin',[true,1]);
//            this.$router.push('main/home');
//            ipcRenderer.send('login-succeed');
            this.$http.post(this.$api.LOGIN,{mobile:this.form.mobile,password:this.form.password}).then(res=>{
                console.log('login',res);
                if (res.data.status ==='1'){
                    this.$store.dispatch('setLogin',[true,res.data.com_id,res.data.userinfo.fullname]);
                    this.$router.push('main/home');
                    ipcRenderer.send('login-succeed');
                    localStorage.setItem('auto',this.auto);
                    if (this.auto === true){
                        localStorage.setItem('mobile',this.form.mobile);
                        localStorage.setItem('password',this.form.password)
                    }
                } else {
                    ipcRenderer.send('login-failed');
                    this.$Message.error('请输入正确的用户名和密码');
                }
            },err=>{
                this.$Message.error('网络错误');
            });


        }

    }
};
</script>
