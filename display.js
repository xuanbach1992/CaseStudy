let arrayNameClub = [];
let inputStr = document.getElementById("inputName");
let edit = document.getElementById('editValue');
let index = 0;

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
            printArray += '<tr>';
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

let leauge = new FootballLeague("Premier League");
let footballTeam = [];

function showTeam() {
    footballTeam = [];
    for (let i of arrayNameClub) {
        footballTeam.push(new TeamClub(i));
    }
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
    for (leauge._turn; leauge._turn < 10; leauge._turn++) {
        footballTeam = randomArray(footballTeam);
        for (let i = 0; i < footballTeam.length / 2; i++) {
            footballTeam[i].match(footballTeam[footballTeam.length - 1 - i]);
        }
    }
    displayRank();
}

function displayRank() {
    let print = "";
    for (let i = 0; i < footballTeam.length; i++) {
        print += '<tr>';
        print += '<td>' + footballTeam[i]._name + '</td>';
        print += '<td>' + leauge._turn + '</td>';
        print += '<td>' + footballTeam[i]._win + '</td>';
        print += '<td>' + footballTeam[i]._lost + '</td>';
        print += '<td>' + footballTeam[i]._draw + '</td>';
        print += '<td>' + footballTeam[i]._score + '</td>';
        print += '</tr>';
    }
    document.getElementById('rankTable').innerHTML = print;
}

