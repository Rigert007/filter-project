
var addButton = document.getElementById('addButton');
var addInput = document.getElementById('itemInput');
var addSelect = document.getElementById('student-mësues');
var todoList = document.getElementById('todoList');
var listArray = [];
//declare addToList function

function listItemObj(content) {
    this.content = '';
}

var removeItem = function(){
    var parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);

    var data = this.parentElement.firstChild.innerText;
    for(var i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray.splice(i,1);
            refreshLocal();
            break;
        }
    }


}

function filterList() {
    var input = document.getElementById('myInput');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("todoList");
    var li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }

}


//function to chage the dom of the list of todo list
var createItemDom = function(text,status){

    var listItem = document.createElement('li');

    var image = document.createElement('img');
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png';
    listItem.appendChild(image);
   
    var itemLabel = document.createElement('a');

    var itemIncompBtn = document.createElement('button');

    itemLabel.innerText = text;
    
    itemIncompBtn.className = 'btn btn-danger';
    itemIncompBtn.innerText = 'X';
    itemIncompBtn.addEventListener('click',removeItem);


    listItem.appendChild(itemLabel);

    listItem.appendChild(itemIncompBtn);

    return listItem;
}

var addToList = function(){
    var newItem = new listItemObj();
    newItem.content = addInput.value + addSelect.value;
    listArray.push(newItem);
    //change the dom
    var item = createItemDom(addInput.value + ' \n ' + addSelect.value);
    todoList.appendChild(item);
    addInput.value = '';
}

//add an event binder to the button
addButton.addEventListener('click',addToList);