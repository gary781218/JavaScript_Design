//重點: Create Object，故通常會傳Str，否則直接傳入Object + instanceof比較好

class AnimalFactory {
    constructor() {
        this.createAnimal = function (type) {

            let animal;

            if (type === '狗') animal = new Dog();
            else if (type === '貓') animal = new Cat();
            else if (type === '雞') animal = new Chicken();
            
            //共用 function
            animal.introduction = () => {
                return `大家好, 我是 ${animal._type}! </br>`;
            };

            return animal;
        };

    };
};

class Dog {
    constructor() {
        this._type = '狗';
        this.Sound = () => {
            return '汪汪汪';
        };
    };
};

class Cat {
    constructor() {
        this._type = '貓';
        this.Sound = () => {
            return '喵喵喵';
        };
    };
};

class Chicken {
    constructor() {
        this._type = '雞';
        this.Sound = () => {
            return '咕咕咕';
        };
    };
};


// creating objects
const factory = new AnimalFactory();
const dog = factory.createAnimal('狗');
const cat = factory.createAnimal('貓');
const chicken = factory.createAnimal('雞');

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("dog").innerHTML = dog.introduction() + ' 我的叫聲是: ' + dog.Sound();
    document.getElementById("cat").innerHTML = cat.introduction() + ' 我的叫聲是: ' + cat.Sound();
    document.getElementById("chicken").innerHTML = chicken.introduction() + ' 我的叫聲是: ' + chicken.Sound();
});