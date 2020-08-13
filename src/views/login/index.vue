<template>
    <div class="login-container">
        <vue-particles color="#fff" :particlesNumber="60" :moveSpeed="1.5" :lineOpacity="0.5" class="bg"></vue-particles>
        <div class="login-form">
            <el-row :gutter="20">
                <el-col :lg="6" :sm="10" class="aa">
                    <h3>{{ $t("login.system") }}</h3>
                    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="login-ruleForm">
                        <el-form-item :label="$t('login.username')" prop="username">
                            <el-input v-model="ruleForm2.username"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('login.password')" prop="password">
                            <el-input type="password" v-model="ruleForm2.password" autocomplete="off" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            <el-button @click="resetForm('ruleForm2')">重置</el-button>
                        </el-form-item>
                        <div class="acount">
                            测试环境请在url地址后加上?mock=1参数访问模拟数据
                        </div>
                    </el-form>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { login } from "@api/user";
import { messages } from "@assets/js/common.js";
export default {
    name: "login",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm2.checkPass !== "") {
                    this.$refs.ruleForm2.validateField("checkPass");
                }
                callback();
            }
        };
        var validateName = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"));
            } else {
                callback();
            }
        };
        return {
            ruleForm2: {
                password: "admin",
                username: "admin",
            },
            rules2: {
                password: [{ validator: validatePass, trigger: "blur" }],
                username: [{ validator: validateName, trigger: "blur" }],
            },
        };
    },
    mounted() {},
    methods: {
        async submitForm(formName) {
            this.$refs[formName].validate(async valid => {
                if (valid) {
                    let res = await login(this.ruleForm2);
                    if (res.code === 200) {
                        const { data } = res;
                        this.$store.commit("app/COMMIT_ROLE", data.roles);
                        this.$store.commit("app/COMMIT_TOKEN", { token: data.token });
                        this.$message("success", res.msg);
                        setTimeout(() => {
                            this.$router.push({
                                path: this.redirect || "/home",
                            });
                        }, 500);
                    }
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>
<style lang="scss" scoped>
.bg {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
}
.login-container {
    background: #2d3a4b;
    width: 100%;
    height: 100%;
    position: fixed;
    display: table;
    .login-form {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        color: white;
        font-size: 18px;
        .aa {
            margin: auto;
            float: none;
        }
        h3 {
            line-height: 60px;
            margin-left: 100px;
        }
        .acount {
            text-align: right;
            font-size: 12px;
        }
    }
}
</style>
