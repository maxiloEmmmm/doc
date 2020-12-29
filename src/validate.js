import maxiloVue from "maxilo-vue"
import { required } from 'vee-validate/dist/rules';

maxiloVue.register({
    register: function(app){
        const validator = app.make("validator")
        // remote validator
        validator.addRule('configOk', {
            validate: async config => {
                try {
                    await app.make("http").post("remote", {payload: {config}})
                    return true
                } catch (error) {
                    return error
                }
            },
            message: "配置有误"
        })
        validator.addRule("required", {
            ...required,
            message: "必填不可为空!"
        })
        
        validator.addRule("abc", {
            validate(value){
                return /^[a-zA-Z0-9-_]+$/.test(value)
            },
            message: "只可以为大小写字母数字和-_"
        })
    },
    boot(){}
})