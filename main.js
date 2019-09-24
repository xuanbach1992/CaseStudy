let FootballLeague = function (nameLeague) {
    this._name = nameLeague;
    this._turn = 0;
    this.teams = [];
    this._result=[];

    this.setNameLeague = function (name) {
        this._name = name;
    };
    this.getNameLeague = function () {
        return this._name;
    };
    this.setTurnMax=function (turn) {
        this._turn=turn;
    };
    this.getTurnMax=function () {
        return this._turn;
    };
    this.addTeam = function (team) {
        this.teams.push(team);
    };
    this.match = function (team1, team2) {
        let result = team1.perform() - team2.perform();
        if (result <= 2 && result >= -2) {
            team1.isDraw();
            team2.isDraw();
        } else if (result < -2) {
            team1.isLost();
            team2.isWin();
        } else {
            team1.isWin();
            team2.isLost();
        }
    };
    this.matchRound = function () {
        this.teams = this.getShuffleTeams();
        for (let i=0;i<this.teams.length/2;i++){
            this.match(this.teams[i],this.teams[this.teams.length-i-1]);
        }
        this._turn++;
    };
    this.getShuffleTeams = function () {
        let teams = this.teams;
        for (let i = 0; i < teams.length - 1; i++) {
            let temp = teams[i];
            teams[i] = teams[i + 1];
            teams[i + 1] = temp;
        }
        return teams;
    }
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
};
