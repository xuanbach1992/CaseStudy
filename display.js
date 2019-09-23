let arrayNameClub = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let inputStr = document.getElementById("inputName");
let edit = document.getElementById('editValue');
let index = 0;
let nameleauge = ``;
let maxRound = 0;
let select = document.getElementById("selectTurn");
let matchRound = "";
sayhello();
let leauge = new FootballLeague(nameleauge);
let footballTeam = [];

function sayhello() {
    // let question = confirm("ban muon da bong k?");
    // if (question) {
    //     if (confirm('hay thu lam người quan lý giải bóng')) {
    //         nameleauge = prompt('Hãy nhập tên giải đấu');
    //         document.getElementById('hello').innerHTML = `Chào mừng bạn đến với giải đấu ${nameleauge}`;
    return nameleauge;
    // }
    // }
}

function display() {
    arrayNameClub.push(inputStr.value);
    inputStr.value = "";
    inputStr.focus();
    printName();
    showTeam();
}

function printName() {
    let printArray = '';
    if (arrayNameClub.length > 0) {
        for (let i = 0; i < arrayNameClub.length; i++) {
            printArray += `<tr>`;
            printArray += '<td>' + arrayNameClub[i] + '</td>';
            printArray += '<td><button onclick="editTeam(' + i + ')">Edit</button></td>';
            printArray += '<td><button onclick="delTeam(' + i + ')">Delete</button></td>';
            printArray += '</tr>';
        }
    }
    document.getElementById('demo').innerHTML = printArray;
}

function closeInputHidden() {
    document.getElementById('hiddenClass').style.display = 'none';
}

function editInput() {
    let newInputValue = edit.value;
    arrayNameClub.splice(index, 1, newInputValue);
    printName();
    closeInputHidden();
}

function editTeam(id) {
    edit.value = arrayNameClub[id];
    document.getElementById('hiddenClass').style.display = 'block';
    index = id;
    return index;
}

function delTeam(id) {
    arrayNameClub.splice(id, 1);
    printName();
}

function augmentElementArray(test) {
    for (let i = 0; i < test.length - 1; i++) {
        // let randomIndex = Math.round(Math.random() * i);
        temp = test[i];
        test[i] = test[i + 1];
        test[i + 1] = temp;
    }
    return test;
}

showTeam();
function showTeam() {
    footballTeam = [];
    for (let i of arrayNameClub) {
        footballTeam.push(new TeamClub(i));
    }
    leauge.setTurnMax(footballTeam.length);
    maxRound = leauge.getTurnMax();
    // if (footballTeam.length >= 10) {
    //     alert("Đã đủ số đội tối thiểu")
    //     // } else {
    //     //     alert("ít người tham dự,cần thêm số đội tham dự")
    // }
}

function playAll() {
    for (leauge._turn = 0; leauge._turn < matchRound; leauge._turn++) {
        let round=[];
        round=playOneTurn();
        saveData(leauge._turn+1,round);
    }
}

function playOneTurn() {
    for (let i = 0; i < footballTeam.length / 2; i++) {
        footballTeam = augmentElementArray(footballTeam);
        footballTeam[i].match(footballTeam[footballTeam.length - 1 - i]);
    }
}
function createSelect() {
    for (let i = 0; i < maxRound; i++) {
        select.options[select.options.length] = new Option(`Vòng ${i + 1}`, `${i + 1}`);
    }
}

function getSelectOption() {
    matchRound = select.options[select.selectedIndex].value;
    footballTeam=loadData(leauge._turn+1);
    // console.log(footballTeam);
    displayRank();
}

function displayRank() {
    let print = "";
    document.getElementById('rankTable').innerHTML = print;
    for (let i = 0; i < maxRound; i++) {
        print += '<tr>';
        print += '<td>' + footballTeam[i]._name + '</td>';
        print += '<td>' + matchRound + '</td>';
        print += '<td>' + footballTeam[i]._win + '</td>';
        print += '<td>' + footballTeam[i]._lost + '</td>';
        print += '<td>' + footballTeam[i]._draw + '</td>';
        print += '<td>' + footballTeam[i]._score + '</td>';
        print += '</tr>';
    }
    document.getElementById('rankTable').innerHTML = print;
}

function saveData(key, arr) {
    return localStorage.setItem(key, JSON.stringify(arr));
}

function loadData(key) {
    return JSON.parse(localStorage.getItem(key));
}

function delData() {
    return localStorage.clear();
}

