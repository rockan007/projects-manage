import $ from 'jquery/dist/jquery';
export const Const = {
    MAIN_URL: "http://139.129.240.27:8050/CRMAPI/",
    LOGIN: "Login",
    PROJECTS: "Get_ProjecManage",
    PLANS: "Get_ProPlan",
    ACCOUNT_INFO:'account-info',
    request: function (url, data, successCB, errorCB = function () {}) {
        $.ajax({
            type: 'POST',
            url: this.MAIN_URL + url,
            data: data,
            dataType: 'jsonp',
            success: function (response) {
                console.log(JSON.stringify(response));
                successCB(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                errorCB();
            }
        })
    },
    setSessionStorage:function(key,value=''){
        sessionStorage.setItem(key,JSON.stringify(value));
    },
    getSessionStorage:function(key){
        let value=sessionStorage.getItem(key);
        if(value){
            return JSON.parse(sessionStorage.getItem(key));
        }
        return ''
    }
}
