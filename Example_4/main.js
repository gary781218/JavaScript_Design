// using Object.create as was recommended by ES5 standard
const dog = {
    __name: '狗(預設名稱)',
    eating() {
        return `${this.__name} 正在吃飯`
    },
    drinking() {
        return `${this.__name} 正在喝水`
    },
};


var doing = function (type) {

    if (type === '吃飯') {
        document.getElementById("doing").innerHTML = myDog.eating();
    }
    else if (type === '喝水') {
        document.getElementById("doing").innerHTML = myDog.drinking();
    }
};



var save = function () {

    const value = document.getElementById("name").value;
    document.getElementById("name").value = "";

    myDog.__name = value === "" ? myDog.__name : value;
    document.getElementById("introduction").innerHTML = `大家好!我是一隻${myDog.__color}的狗, 我的名字叫${myDog.__name}! 我的主人是: ${myDog.owner}`;

};


const myDog = Object.create(dog, { owner: { value: '阿猩' } }); // 類似繼承, 產生新物件並加入新的欄位
Object.defineProperty(myDog, '__color', { //在原物件加入新的欄位
    value: '黑色',
    writable: true, // 是否可修改, 預設為false
    enumerable: false, // 是否可枚舉, 預設為false
    configurable: false // 是否可配置（删除或修改属性）, 預設為false，可下 delete myDog._name;
});