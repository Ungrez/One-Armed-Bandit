class Wallet {
    constructor(money) {
        let _money = money;
        this.getWalletBallance = () => _money;
        this.checkRequiredMoney = (value) => {
            if(_money >= value) return true;
            return false;
        }

        this.changeWalletBallance = (value, type) => {
            if(typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                
            }
        }
    }
}
}