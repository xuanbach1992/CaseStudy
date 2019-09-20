let FootballLeague = function (nameLeague) {
    this._name = nameLeague;
    this._turn = 1;
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
let leauge = new FootballLeague("Premier League");
let footballTeam = [];
let arrayNameClub = ["Manchester United", "Manchester City", "Arsenal", "Chelsea", "Liverpool", "Tottenham", "Real Madrid", "Barca", "Viet Nam", "Thai Lan"];
for (let i of arrayNameClub) {
    footballTeam.push(new TeamClub(i));
}
function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let randomIndex = Math.round(Math.random() * i);
        let storage = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = storage;
    }
    return arr;
}
function playAll() {
    do {
        footballTeam = randomArray(footballTeam);
        for (let i = 0; i < footballTeam.length / 2; i++) {
            footballTeam[i].match(footballTeam[footballTeam.length - 1 - i])
        }
        leauge._turn++;
    }
    while (leauge._turn <=10);
}
function displayRank() {
    for (let i = 0; i < footballTeam.length; i++) {
        console.log(footballTeam[i]._name,footballTeam[i]._win, footballTeam[i]._lost, footballTeam[i]._draw, footballTeam[i]._score);
    }
}
playAll();
displayRank();
