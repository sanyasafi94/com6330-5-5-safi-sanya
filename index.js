var form = document.getElementById("add-todo");
form.onsubmit = function (e) {
  console.log("submitted");
  e.preventDefault();

  var data = document.querySelector("input");

  var item = data.value;
  console.log(item);

  if (item !== "") {
    addItemToList(item);
    data.value = "";
  }
};

function addItemToList(item) {
  var itemList = document.getElementById("todo-list");
  var listItem = document.createElement("li");
  listItem.textContent = item;
  itemList.appendChild(listItem);
}
