//重點: aniaml DI，及typeof指令
var dog1 = {
    sound: function(){
        document.getElementById("target").innerHTML = "汪汪汪";
    }
}

var cat1 = {
    sound: function(){
        document.getElementById("target").innerHTML = "喵喵喵";
    }
}

var makesound1 = function ( animal ){
    if (animal && typeof animal.sound === "function"){
        animal.sound();
    }
}