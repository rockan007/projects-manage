import $ from 'jquery/dist/jquery';
export const Const = {
    MAIN_URL: "http://139.129.240.27:8050/CRMAPI/",
    LOGIN: "Login",
    PROJECTS: "Get_ProjecManage", //项目列表
    PLANS: "Get_ProPlan", //项目计划
    ADD_PLAN: "Create_Plan", //添加计划
    ACCOUNT_INFO: 'account-info', //账号信息
    PROGRESSES: 'Get_ProPlanList', //获取进程
    ADD_PROGRESS: 'Create_Process', //添加进程
    GET_DETAIL: 'Get_ProjecManageInfo',

    request: function (url, data, successCB, errorCB = function () {}) {
        $.ajax({
            type: 'POST',
            url: this.MAIN_URL + url,
            data: data,
            dataType: 'jsonp',
            success: function (response) {
                successCB(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
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