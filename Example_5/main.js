// using Object.create as was recommended by ES5 standard
class TicketCollect {
    constructor(_ticketName) {
        if (TicketCollect.exists) {
            console.log("TicketCollect Object 已存在故沿用")
            return TicketCollect.instance;
        }

        this._ticketName = _ticketName;
        this.count = 10;
        
        // 重點為下面兩行
        TicketCollect.instance = this;
        TicketCollect.exists = true;
        console.log("新增了 TicketCollect Object")

        return this;
    }
    buyTicket() {
        this.count--;
    }

    sellTicket() {
        this.count++;
    }

    getTicketCount() {
        return this.count;
    }
}

const ticketCollect1 = new TicketCollect('2024-12-31 ILLIT 南港演唱會');
const ticketCollect2 = new TicketCollect('2024-12-31 ILLIT 南港演唱會');


var buy_1 = function () {

    ticketCollect1.buyTicket();
    const value = document.getElementById("result1").innerHTML = `目前剩餘 ${ticketCollect1.getTicketCount()}  張門票`;
};

var sell_1 = function () {

    ticketCollect1.sellTicket();
    const value = document.getElementById("result1").innerHTML = `目前剩餘 ${ticketCollect1.getTicketCount()} 張門票`;
};


var buy_2 = function () {

    ticketCollect2.buyTicket();
    const value = document.getElementById("result2").innerHTML = `目前剩餘 ${ticketCollect2.getTicketCount()}  張門票`;
};

var sell_2 = function () {

    ticketCollect2.sellTicket();
    const value = document.getElementById("result2").innerHTML = `目前剩餘 ${ticketCollect2.getTicketCount()} 張門票`;
};

