let FootballLeague = function (nameLeague) {
    this._name = nameLeague;
    this._turn = 1;

    // this.matchTurnLast = function () {
    //     if (this._turn < 10) {
    //         this._turn++;
    //     } else {
    //         console.log("Đá xong giải rồi");
    //     }
    // };
}

let TeamClub = function (name) {
    this._name = name;
    this._perform = 100;
    this._win = 0;
    this._lost = 0;
    this._draw = 0;
    this._score = 0;
    this._rank = 0;
    this.performance = function () {
        this._perform = Math.round(Math.random() * 15 + 85);
        return this._perform;
    };
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
        this._score += 1;
        this._lost += 1
    };
    this.isDraw = function () {
        this._score += 1;
        this._draw += 1
    };
    this.matchScore = function ( name) {
        // let result = this.performance - name.performance;?
        if (this.performance === name.performance) {
            this.isDraw();
            name.isDraw();
        } else if (this.performance < name.performance) {
            this.isLost();
            name.isWin();
            } else {
            this.isWin();
            name.isLost();
            }
        };
};
let leauge = new FootballLeague("Premier League");
let footballTeam = [];
let arrNameClub = ["Manchester United", "Manchester City", "Arsenal", "Chelsea", "Liverpool", "Tottenham", "Real Madrid", "Barca", "Viet Nam", "Thai Lan"];
for (let i of arrNameClub) {
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

// function matchGameOneTurn() {
//     // for (leauge._turn; leauge._turn <= 10; leauge._turn++) {
   footballTeam = randomArray(footballTeam);
for (let i = 0; i < footballTeam.length; i + 5) {
        footballTeam[i].matchScore(footballTeam[i+5]);

    console.log(footballTeam[i]._score);
    }
// }

// matchGameOneTurn();
