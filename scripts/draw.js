class Draw {
    constructor() {
        this.capabilities = ['red', 'green', 'blue'];
        let _result = this.drawColors();
        this.getDrawColors = () => _result;
    }
    drawColors() {
        let colors = [];
        for(let i = 0; i < this.capabilities.length; i++) {
            const index = Math.floor(Math.random() * this.capabilities.length);
            const color = this.capabilities[index];
            colors.push(color);
        }
        return colors;
    }
}