class Result {
    static gameResult(result, bid) {
        if(result) return 3 * bid;
        else return 0;
    }

    static checkResult(color) {
        if(color[0] === color[1] && color[1] === color[2] || color[0] !== color[1] && color[1] !== color[2] && color[0] !== color[2]) return true;
        else return false;
    }
}