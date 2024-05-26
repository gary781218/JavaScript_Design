//重點: 類工廠模式，If 篩選後，才Create Object。
//      Instanceof用法: 用於判斷Object類型，不然直接傳Str就可了
var dog2 = function(){};
var cat2 = function(){};

var makesound2 = function ( animal ){
    if (animal instanceof dog2){
        document.getElementById("target").innerHTML = "汪汪汪";
    }
    else if (animal instanceof cat2){
        document.getElementById("target").innerHTML = "喵喵喵";
    }
}