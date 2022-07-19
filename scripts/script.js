class Game {
    constructor(funds) {
        this.wallet = new Wallet(funds);
        this.spanAccountBallance = document.getElementById("accountBalance");
        this.colorsTable = document.querySelectorAll('div.matchField');
        this.inputValue = document.getElementById('bidValue');
        this.lastGame = document.getElementById('lastGame');
        document.getElementById('startBet').addEventListener('click', this.newBet.bind(this));
        this.btns = document.querySelectorAll('section#betField button');
        this.btns.forEach(e => {
            e.addEventListener('click', (e) => {
                if (e.target.id === 'enlargeBet') this.inputValue.value++;
                else this.inputValue.value--;
            })
        })
        this.update();
    }

    update(colors = [], money = this.wallet.getWalletBallance(), fundsChange = 0, win, bid = 0) {
        this.colorsTable.forEach((colorTable, i) => {
            colorTable.style.backgroundColor = colors[i];
        })
        this.spanAccountBallance.textContent = money;
        if(win) this.lastGame.textContent = `+ ${fundsChange} $`;
        else this.lastGame.textContent = `- ${bid} $`;
    }
    newBet() {
        if(this.inputValue.value >= 1) {
            const bid = Math.floor(this.inputValue.value);

            if(!this.wallet.checkRequiredMoney(bid)) {
                return alert('Za mało środków!');
            }

            this.wallet.changeWalletBallance(bid, '-');
            this.draw = new Draw();
            const colors = this.draw.getDrawColors();
            const win = Result.checkResult(colors);
            const fundsChange = Result.gameResult(win, bid);
            this.wallet.changeWalletBallance(fundsChange, '+');
            this.update(colors, this.wallet.getWalletBallance(), fundsChange, win, bid);
        }
    }
}

const game = new Game(200);