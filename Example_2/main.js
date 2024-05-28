//重點: aniaml DI，及typeof指令
var aniaml = (() => {
    var __name = '預設動物名稱';
    return {
        getName: () => {
            return __name;
        }
    }
})();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("target1").innerHTML = aniaml.getName();
    document.getElementById("target2").innerHTML = aniaml.__name;
  });