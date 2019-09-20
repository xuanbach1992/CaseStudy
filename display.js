let arrName = [];
let inputStr = document.getElementById("inputName");
let edit = document.getElementById('editValue');

function display() {
    arrName.push(inputStr.value);
    inputStr.value = "";
    inputStr.focus();
    print();
}

function print() {
    let printArray = '';
    if (arrName.length > 0) {
        for (i = 0; i < arrName.length; i++) {
            printArray += '<tr>';
            printArray += '<td>' + arrName[i] + '</td>';
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

function editInput(index) {
    let newInputValue = edit.value;
    for (let i = 0; i <arrName.length ; i++) {

    }
    arrName.splice(index, 1, newInputValue);
    print();
    closeInputHidden();
}

function Edit(id) {
    edit.value = arrName[id];
    document.getElementById('hiddenClass').style.display = 'block';
}

function Delete(id) {
    arrName.splice(id, 1);
    print();
}

