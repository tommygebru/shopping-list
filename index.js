$(document).ready(function(){
  /*
-  enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
-  check and uncheck items on the list by clicking the "Check" button
-  permanently remove items from the list

  submit(), preventDefault(), toggleClass(), closest()
  find(), empty(), attr({,}), val(), parseInt(), append()
  */

let addItemForm = document.getElementById("js-shopping-list-form");
let addItemButton = addItemForm.getElementsByTagName("button")[0];
let itemEntry = document.getElementById("shopping-list-entry");
let shoppingList = document.getElementsByClassName("shopping-list")[0];
let li = document.createElement("LI");
li.innerHTML = `
      <span class="shopping-item"></span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    <!-- L I S T   I T E M -->`


//create element

function handleAddItem(){
  event.preventDefault();
//add LI and components
shoppingList.appendChild(li);
//add shopping-item
let listIndex = (document.getElementsByClassName("shopping-item").length) - 1;
document.getElementsByClassName("shopping-item")[listIndex].innerHTML = itemEntry.value;
}//function
addItemButton.addEventListener("click", handleAddItem);





//written in jquery, strikethrough shopping list entries
$(".button-label").on("click", function(event){
  event.preventDefault();
  let itemEntry = $(event.target).parent().parent().parent().find(".shopping-item");
  itemEntry.toggleClass("shopping-item__checked");
});//function


});//ready function
