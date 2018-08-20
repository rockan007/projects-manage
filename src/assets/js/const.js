import $ from 'jquery';
export const Const = {
    URL: "http://139.129.240.27:8050/",
    MAIN_URL: "http://139.129.240.27:8050/CRMAPI/",
    LOGIN: "Login",
    PROJECTS: "Get_PPList", //项目列表
    PLANS: "Get_ProPlan", //项目计划
    ADD_PLAN: "Create_Plan", //添加计划
    ACCOUNT_INFO: 'account-info', //账号信息
    PROGRESSES: 'Get_PPList', //获取进程
    ADD_PROGRESS: 'Create_Process', //添加进程
    GET_DETAIL: 'Get_ProjecManageInfo',

    request: function (url, data, successCB, errorCB = function () {}) {
        $.ajax({
            type: 'POST',
            url: this.MAIN_URL + url,
            data: data,
            dataType: 'jsonp',
            success: function (response) {
                console.log("接口返回值：" + JSON.stringify(response));
                if (response.ResultCode == 200) {
                    successCB(response);
                } else {
                    alert(response.ResultDesc);
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                errorCB();
            }
        })
    },
    postForm: function (url, data, successCB, errorCB = function () {}) {
        console.log(this.MAIN_URL + url);
        console.log(JSON.stringify(data));
        $.ajax({
            type: 'POST',
            url: this.MAIN_URL + url,
            data: data,
            crossDomain: true,
            // dataType: 'jsonp',
            // cache: false, //设置为false，上传文件不需要缓存。
            contentType: false, //设置为false。因为是由<form>表单构造的FormData对象，且已经声明了属性enctype="multipart/form-data"，所以这里设置为false。
            processData: false, //设置为false。因为data值是FormData对象，不需要对数据做处理。
            // async : false,
            success: function (response) {
                successCB(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                console.log(JSON.stringify(jqXHR))
                errorCB();
            }
        })
    },
    setSessionStorage: function (key, value = '') {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    getSessionStorage: function (key) {
        let value = sessionStorage.getItem(key);
        if (value) {
            return JSON.parse(sessionStorage.getItem(key));
        }
        return ''
    },
    getRandomColor: function () {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += ((Math.random() * 16) | 0).toString(16);
        }
        return color;
    },
}