 export const telphone = (rule, val, callback) => {
                console.log(val);
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(val)) {
                    return callback(new Error("请输入正确的手机号！"));
                } else {
                    callback();
                }
            };
export  const codeLength = (rule, val, callback) => {
                if (val.length !== 15 && val.length !== 18) {
                    return callback(new Error('请输入正确的格式'));
                } else {
                    callback();
                }
            };
export const officeReg = (rule,val,callback)=>{
                console.log(val);
                var officephone_reg =/^[0-9]{3,4}\-[0-9]{3,8}$/;
                    if( !officephone_reg.test(val)){
                        return callback(new Error('请输入正确的格式'));
                    }else{
                       callback();
                    }
            };
 export const ztmcLength = (rule, val, callback) => {
                if (val.length > 15) {
                    return callback(new Error("输入内容的长度不能超过15个字符!"))
                } else {
                    callback();
                }
            };
export const lengthNum = (rule, val, callback) => {
                if (val.length > 10 || val.length < 10) {
                    return callback(new Error("营销户号必须为10位!"));
                } else {
                    callback();
                }
            };
export const email=(rule, val, callback)=>{
    var email_reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if(!email_reg.test(val)){
        return callback(new Error('邮箱格式不对'));
    }else{
        callback();
    } 
}