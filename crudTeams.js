
function addTeams() {
    document.getElementById("entertaiment").style.display="block";
    arrayNameClub.push(inputStr.value);
    inputStr.value = "";
    inputStr.focus();
    listTeams();
}

function listTeams() {
    let printArray = '';
    for (let i = 0; i < arrayNameClub.length; i++) {
        printArray += '<tr>';
        printArray += '<td>' + arrayNameClub[i] + '</td>';
        printArray += '<td><button onclick="editTeam(' + i + ')">Edit</button></td>';
        printArray += '<td><button onclick="delTeam(' + i + ')">Delete</button></td>';
        printArray += '</tr>';
    }
    document.getElementById('demo').innerHTML = printArray;
}

function closeInputHidden() {
    document.getElementById('hiddenClass').style.display = 'none';
}

function editInput() {
    let newInputValue = edit.value;
    arrayNameClub.splice(index, 1, newInputValue);
    listTeams();
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
    listTeams();
}