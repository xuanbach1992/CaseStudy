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
    // this._win = 0;
    // this._lost = 0;
    // this._draw = 0;
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
    // this.isWin = function () {
    //     return this._score + 3;
    // };
    // this.isLost = function () {
    //     return this._score;
    // };
    // this.isDraw = function () {
    //     return this._score + 1;
    // };
    this.matchScore = function ( name) {
            let result = this.performance - name.performance;
            if (result === 0) {
                this._score+=1;
                name._score+=1;
            } else if (result <0) {
                this._score=this._score;
                name._score+=3;
            } else {
                this._score+=3;
                name._score=name._score;
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
    for (let i = 0; i < footballTeam.length; i + 2) {
        footballTeam[i].matchScore(footballTeam[i+1]);
        console.log(footballTeam[1]._score);
    }
// }

// matchGameOneTurn();
