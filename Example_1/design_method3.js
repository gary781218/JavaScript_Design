//重點: 使用prototype
var makesound3 = function ( animal )
{
    animal.sound();
}

var dog3 = function(){};
var cat3 = function(){};
var chicken3 = function(){};

dog3.prototype.sound = function(){
    document.getElementById("target").innerHTML = "汪汪汪";
};

cat3.prototype.sound = function(){
    document.getElementById("target").innerHTML = "喵喵喵";
};

chicken3.prototype.sound = function(){
    document.getElementById("target").innerHTML = "咕咕咕";
};