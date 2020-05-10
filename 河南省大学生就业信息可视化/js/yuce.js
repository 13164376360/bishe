
$(function () {
    tips();
})

function tips() {
    var tips = '';
    $.ajaxSettings.async = false;
    $.getJSON("data/tips/tips.json", function (data3) {
        tipsData = data3;
    });
    tips = tipsData[0].value;
    $("#tips").html(tips);
}

function cityyuce() {
    var city = $("#city").val();
    var bili = $("#bili").val();
    var yucejieguo ;
    //需要对输入数据进行正则判断
    //  /^0.\d{6}$
    /*线性模型为: Y = 0.85824X + 0.0042274
    Y = 0.85824*0.5752 + 0.0042274
    Y = 0.85824*0.01 + 0.0042274
    郑州轻工业大学的数据模型
    河南去往比例的线性模型
    Y = 2.1085*0.5752 + -0.76302
    去往一线城市比例的线性模型
    Y = 1.9317*0.0029 + 0.03908
    去往二线城市的线性模型
    Y = 0.71115*0.016 + 0.0013997
    print(Y)*/
    if (city){
        if (city == 'henan'){
            yucejieguo = 2.1085*bili - 0.76302
        } else if (city == 'oneline'){
            yucejieguo = 1.9317*bili + 0.03908
        } else {
            yucejieguo = 0.71115*bili + 0.0013997
        }
    } 
}

function xinziyuce() {

    /**
     * 薪资预测模型
     * 1 将城市分为5个等级
     * 2 将时间保存后两位
     * 薪资=3485.948 + 6.292*城市 + 1601.305*专业 + 5.986*时间和占比
     *
     */

}

function jiuyelvyuce() {
    
}

function zongheyuce() {
    
}

