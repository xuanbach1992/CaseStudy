let FootballLeague = function (nameLeague) {
    this._name = nameLeague;
    this._turn = 0;
};

let TeamClub = function (name) {
    this._name = name;
    this._perform = 100;
    this._win = 0;
    this._lost = 0;
    this._draw = 0;
    this._score = 0;
    this._rank = 0;

    this.getRank = function () {
        return this._rank;
    };
    this.setName = function (name) {
        this._name = name;
    };
    this.getName = function () {
        return this._name;
    };
    this.isWin = function () {
        this._score += 3;
        this._win += 1
    };
    this.isLost = function () {
        this._lost += 1;
        return this._score;
    };
    this.isDraw = function () {
        this._score += 1;
        this._draw += 1
    };
    //
    this.perform = function () {
        this._perform = Math.round(Math.random() * 20 + 80);
        return this._perform;
    };
    this.match = function (name) {
        let result = this.perform() - name.perform();
        if (result === 0) {
            this.isDraw();
            name.isDraw();
        } else if (result < 0) {
            this.isLost();
            name.isWin();
        } else {
            this.isWin();
            name.isLost();
        }
    }
};
