let FootballLeague = function (nameLeague) {
    this._name = nameLeague;
    this._turn = 1;

    this.matchTurn = function () {
        if (this._turn < 10) {
            this._turn++;
        } else {
            console.log("Đá xong giải rồi");
        }
    };
    this.match = function (team1, team2) {
        let result = team1.performance - team2.performance;
        if (result === 0) {
            team1.isDraw();
            team2.isDraw();
        } else if (result < 0) {
            team1.isLost();
            team2.isWin();
        } else {
            team1.isWin();
            team2.isLost();
        }
    };
    // this.matchScoreLeague = function (team) {
    //    if (this._turn===10){
    //        team._score
    //    }
    // };


};
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
        return this._score + 3;
    };
    this.isLost = function () {
        return this._score;
    };
    this.isDraw = function () {
        return this._score + 1;
    };
};
let team=[];
let arr=["Manchester United","Manchester City","Arsenal","Chelsea","Liverpool","Tottenham","Real Madrid","Barca","Viet Nam","Thai Lan"];
for (let teamclub of arr){
    team.push( new TeamClub(teamclub));
}


// console.log(team);



