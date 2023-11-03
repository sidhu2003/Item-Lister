let form = document.querySelector('#addForm')
let itemLi = document.getElementById('items')
let delLi = document.getElementById('button')

// Adding Submit event to Form 
form.addEventListener('submit',add)
// delete event 
itemLi.addEventListener('click',remove)
// clear all 
delLi.addEventListener('click',removeAll)

// function to add Items
function add(e){
    e.preventDefault()
    // input value
    var newItem = document.querySelector('#item').value;
    // creating new list item
    var li = document.createElement('li')
    // giving the class Name 
    li.className = 'list-group-item'
    // adding text to input
    li.appendChild(document.createTextNode(newItem))
    // append li to list
    itemLi.appendChild(li)
    // adding delete button 
    var delBtn = document.createElement('button')
    // adding class Name 
    delBtn.className = 'btn btn-outline-danger btn-sm float-right delete'
    // adding delBtn
    delBtn.appendChild(document.createTextNode('Delete'))
    // adding delBtn to li
    li.appendChild(delBtn)
}

// Function to remove items
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure Want to Delete ?')){
            var li = e.target.parentElement
            itemLi.removeChild(li)
        }
    }
}

// // Function to remove all items
// function removeAll(){
//     if (confirm('Are u sure want to clear whole items ??')){
//         itemLi.parentNode.removeChild(itemLi)
//     }  
// }

