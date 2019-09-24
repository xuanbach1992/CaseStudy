let arrayNameClub = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zezo"];
let inputStr = document.getElementById("inputName");
let edit = document.getElementById('editValue');
let index = 0;
let nameleauge = ``;
let maxRound = 0;
let select = document.getElementById("selectTurn");
// sayhello();
let leauge = new FootballLeague(nameleauge);
let footballTeam = [];
let round = 0;

let league = new FootballLeague("Champion League");
let result = [];
function createLeague() {
    for(let i=0;i<arrayNameClub.length;i++){
        let team = new TeamClub(arrayNameClub[i]);
        league.addTeam(team);
    }
}
function roundOne() {
    league.matchRound();
        console.log(league.teams);
    if(league._turn >= 9){
        clearInterval(r);
    }
}
// function fight(round) {
//     for (let i = 0; i <round ; i++) {
//         // console.log(league._turn);
//         roundOne();
//     }
// }
createLeague();
// fight(10);
let r = setInterval(roundOne,1000);
// fight(10);

// function sayhello() {
//     // let question = confirm("ban muon da bong k?");
//     // if (question) {
//     //     if (confirm('hay thu lam người quan lý giải bóng')) {
//     //         nameleauge = prompt('Hãy nhập tên giải đấu');
//     //         document.getElementById('hello').innerHTML = `Chào mừng bạn đến với giải đấu ${nameleauge}`;
//     return nameleauge;
//     // }
//     // }
// }
//
// function display() {
//     arrayNameClub.push(inputStr.value);
//     inputStr.value = "";
//     inputStr.focus();
//     printName();
//     showTeam();
// }
//
// function printName() {
//     let printArray = '';
//         for (let i = 0; i < arrayNameClub.length; i++) {
//             printArray += '<tr>';
//             printArray += '<td>' + arrayNameClub[i] + '</td>';
//             printArray += '<td><button onclick="editTeam(' + i + ')">Edit</button></td>';
//             printArray += '<td><button onclick="delTeam(' + i + ')">Delete</button></td>';
//             printArray += '</tr>';
//     }
//     document.getElementById('demo').innerHTML = printArray;
// }
//
// function closeInputHidden() {
//     document.getElementById('hiddenClass').style.display = 'none';
// }
//
// function editInput() {
//     let newInputValue = edit.value;
//     arrayNameClub.splice(index, 1, newInputValue);
//     printName();
//     closeInputHidden();
// }
//
// function editTeam(id) {
//     edit.value = arrayNameClub[id];
//     document.getElementById('hiddenClass').style.display = 'block';
//     index = id;
//     return index;
// }
//
// function delTeam(id) {
//     arrayNameClub.splice(id, 1);
//     printName();
// }
//
// function augmentElementArray(test) {
//     for (let i = 0; i < test.length - 1; i++) {
//         temp = test[i];
//         test[i] = test[i + 1];
//         test[i + 1] = temp;
//     }
//     return test;
// }
//
// function insertTeam() {
//     footballTeam = [];
//     for (let i of arrayNameClub) {
//         footballTeam.push(new TeamClub(i));
//     }
// }
// function showTeam() {
//     insertTeam();
//     leauge.setTurnMax(footballTeam.length);
//     maxRound = leauge.getTurnMax();
//     // if (footballTeam.length >= 10) {
//     //     alert("Đã đủ số đội tối thiểu")
//     //     // } else {
//     //     //     alert("ít người tham dự,cần thêm số đội tham dự")
//     // }
// }
// function createSelect() {
//     insertTeam();
//     for (let i = 0; i < maxRound; i++) {
//         select.options[select.options.length] = new Option(`Vòng ${i + 1}`, `${i + 1}`);
//     }
//
// }
// function getSelectOption() {
//     round = select.options[select.selectedIndex].value;
//     play();
//     displayRank();
//     return round;
// }
//
// function play() {
//     insertTeam();
//     for (let i = 0; i < round; i++) {
//         footballTeam = augmentElementArray(footballTeam);
//         playOneRound();
//     }
// }
//
// function playOneRound() {
//
//     for (let i = 0; i < footballTeam.length / 2; i++) {
//         footballTeam[i].match(footballTeam[footballTeam.length - 1 - i]);
//     }
// }
// function displayRank() {
//     let print = "";
//     document.getElementById('rankTable').innerHTML = print;
//     for (let i = 0; i < footballTeam.length; i++) {
//         print += '<tr>';
//         print += '<td>' + footballTeam[i]._name + '</td>';
//         print += '<td>' + round + '</td>';
//         print += '<td>' + footballTeam[i]._win + '</td>';
//         print += '<td>' + footballTeam[i]._lost + '</td>';
//         print += '<td>' + footballTeam[i]._draw + '</td>';
//         print += '<td>' + footballTeam[i]._score + '</td>';
//         print += '</tr>';
//     }
//     document.getElementById('rankTable').innerHTML = print;
//     return footballTeam;
// }
//
// function champion() {
//     let max = 0;
//     for (let i = 1; i < footballTeam.length; i++) {
//         if (footballTeam[0]._score < footballTeam[i]._score) {
//             max = i;
//         }
//     }
//     document.getElementById("champion").innerHTML = `Chuc mung FC :${footballTeam[max]._name} da vo dich voi so diem ${footballTeam[max]._score}`;
// }
//
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

