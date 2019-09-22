let arrayNameClub = [];
let inputStr = document.getElementById("inputName");
let edit = document.getElementById('editValue');
let index = 0;
let nameleauge = ``;
let turnMax = 0;
let select = document.getElementById("selectTurn");
let turnMatch = "";

function sayhello() {
    let question = confirm("ban muon da bong k?");
    if (question) {
        if (confirm('hay thu lam người quan lý giải bóng')) {
            nameleauge = prompt('Hãy nhập tên giải đấu');
            document.getElementById('hello').innerHTML = `Chào mừng bạn đến với giải đấu ${nameleauge}`;
            return nameleauge;
        }
    }
}

sayhello();

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
            printArray += '<td><button onclick="Edit(' + i + ')">Edit</button></td>';
            printArray += '<td><button onclick="Delete(' + i + ')">Delete</button></td>';
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

function Edit(id) {
    edit.value = arrayNameClub[id];
    document.getElementById('hiddenClass').style.display = 'block';
    index = id;
    return index;
}

function Delete(id) {
    arrayNameClub.splice(id, 1);
    printName();
}

// let leauge = new FootballLeague(prompt('Hãy nhập tên giải đấu'));
function augmentElementArray(test) {
    for (let i = 0; i < test.length - 1; i++) {
        // let randomIndex = Math.round(Math.random() * i);
        temp = test[i];
        test[i] = test[i + 1];
        test[i + 1] = temp;
    }
    return test;
}

let leauge = new FootballLeague(nameleauge);
let footballTeam = [];

function showTeam() {
    footballTeam = [];
    for (let i of arrayNameClub) {
        footballTeam.push(new TeamClub(i));
    }
    leauge.setTurnMax(footballTeam.length);
    turnMax = leauge.getTurnMax();
    if (footballTeam.length >= 10) {
        alert("Đã đủ số đội tối thiểu")
        // } else {
        //     alert("ít người tham dự,cần thêm số đội tham dự")
    }
    return turnMax;
}

function playAll() {
    selectTurn();
    getSelectOption();
    for (leauge._turn = 0; leauge._turn < turnMatch; leauge._turn++) {
        footballTeam = augmentElementArray(footballTeam);
        for (let i = 0; i < footballTeam.length / 2; i++) {
            footballTeam[i].match(footballTeam[footballTeam.length - 1 - i]);
        }
    }
}

function selectTurn() {
    for (let i = 0; i < turnMax; i++) {
        select.options[select.options.length] = new Option(`Vòng ${i + 1}`, `${i + 1}`);
    }
}

function getSelectOption() {
    turnMatch = select.options[select.selectedIndex].value;
    return turnMatch;
}

function displayRank() {
    getSelectOption();
    document.getElementById('rankTable').innerHTML = "";
    let print = "";
    for (let i = 0; i < turnMax; i++) {
        print += '<tr>';
        print += '<td>' + footballTeam[i]._name + '</td>';
        print += '<td>' + turnMatch + '</td>';
        print += '<td>' + footballTeam[i]._win + '</td>';
        print += '<td>' + footballTeam[i]._lost + '</td>';
        print += '<td>' + footballTeam[i]._draw + '</td>';
        print += '<td>' + footballTeam[i]._score + '</td>';
        print += '</tr>';
    }
    document.getElementById('rankTable').innerHTML = print;

}

