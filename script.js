var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["ProductID"] = document.getElementById("ProductID").value;
    formData["ProductName"] = document.getElementById("ProductName").value;
    formData["CategoryName"] = document.getElementById("CategoryName").value;
    formData["CategoryID"] = document.getElementById("CategoryID").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("ProductList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.ProductID;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.ProductName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.CategoryName;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.CategoryID;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('ProductID').value = '';
    document.getElementById('ProductName').value = '';
    document.getElementById('CategoryName').value = '';
    document.getElementById('CategoryID').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('ProductID').value = selectedRow.cells[0].innerHTML;
    document.getElementById('ProductName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('CategoryName').value = selectedRow.cells[2].innerHTML;
    document.getElementById('CategoryID').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.ProductID;
    selectedRow.cells[1].innerHTML = formData.ProductName;
    selectedRow.cells[2].innerHTML = formData.CategoryName;
    selectedRow.cells[3].innerHTML = formData.CategoryID;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('ProductList').deleteRow(row.rowIndex);
        resetForm();
    }    
}