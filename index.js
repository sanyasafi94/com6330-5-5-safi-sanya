var form = document.getElementById("add-todo");
const button = document.querySelector("form button");

button.addEventListener("click", function () {
  var data = document.querySelector("input");
  var item = data.value;

  if (item !== "") {
    if (item.trim().length !== 0) {
      addItemToList(item);
      data.value = "";
    }
  }
});

function addItemToList(item) {
  var itemList = document.getElementById("todo-list");
  var listItem = document.createElement("li");
  var button = document.createElement("button");
  button.textContent = item;

  listItem.appendChild(button);

  itemList.appendChild(listItem);

  listItem.dataset.clickCount = 0;

  listItem.onclick = function () {
    let currentClickCount = parseInt(this.dataset.clickCount);
    currentClickCount++;
    this.dataset.clickCount = currentClickCount;

    if (currentClickCount === 1) {
      this.children[0].style.textDecoration = "line-through";
    } else if (currentClickCount === 2) {
      this.remove();
    }
  };
}
