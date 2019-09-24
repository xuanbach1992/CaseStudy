let arrayNameClub = ["Man Utd", "Arsenal", "Liverpool", "Chensea", "Man City", "Tottenham", "Everton", "Newcastle", "Aston villa", "Norwich"];
let inputStr = document.getElementById("inputName");
let edit = document.getElementById('editValue');
let index = 0;
let maxRound = 0;
let select = document.getElementById("selectTurn");
let round = 0;

function createLeague() {
    league.teams = [];
    for (let i = 0; i < arrayNameClub.length; i++) {
        let team = new TeamClub(arrayNameClub[i]);
        league.addTeam(team);
    }
}

function roundOne() {
    league.matchRound();
}
function sayhello() {
    let question = confirm("ban muon da bong k?");
    if (question) {
        if (confirm('hay thu lam người quan lý giải bóng')) {
           let nameleauge = prompt('Hãy nhập tên giải đấu');
            document.getElementById('hello').innerHTML = `Chào mừng bạn đến với giải đấu ${nameleauge}`;
            league.setNameLeague =nameleauge;
            }
        }
    }

let league = new FootballLeague();

function showTeam() {
    league.setTurnMax(league.teams.length);
    maxRound = league.getTurnMax();
    if (arrayNameClub.length >= 10) {
        createSelect();
    } else {
        alert("ít đội tham dự,cần thêm số đội tham dự");
    }
}
function createSelect() {
    createLeague();
    for (let i = 0; i < maxRound; i++) {
        select.options[select.options.length] = new Option(`Vòng ${i + 1}`, `${i + 1}`);
    }
}

function getSelectOption() {
    round = select.options[select.selectedIndex].value;
    for (let i = 0; i < round; i++) {
        roundOne();
    }
    displayRank();
}

function displayRank() {
    let print = "";
    document.getElementById('rankTable').innerHTML = print;
    for (let i = 0; i < league.teams.length; i++) {
        print += '<tr>';
        print += '<td>' + league.teams[i]._name + '</td>';
        print += '<td>' + round + '</td>';
        print += '<td>' + league.teams[i]._win + '</td>';
        print += '<td>' + league.teams[i]._lost + '</td>';
        print += '<td>' + league.teams[i]._draw + '</td>';
        print += '<td>' + league.teams[i]._score + '</td>';
        print += '</tr>';
    }
    document.getElementById('rankTable').innerHTML = print;
}

function champion() {
    let max = 0;
    if (round >= maxRound) {
        for (let i = 1; i < league.teams.length; i++) {
            if (league.teams[0]._score < league.teams[i]._score) {
                max = i;
            }
            document.getElementById("champion").innerHTML = `Chuc mung FC :${league.teams[max]._name} da vo dich voi so diem ${league.teams[max]._score}`;
        }
    } else {
        alert("Đá xong đâu mà đòi vô địch, cút về đá tiếp");
    }
}

// function saveData(key, arr) {
//     return localStorage.setItem(key, JSON.stringify(arr));
// }
//
// function loadData(key) {
//     return JSON.parse(localStorage.getItem(key));
// }
//
// function delData() {
//     localStorage.clear();
// }

