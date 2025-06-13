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

  listItem.dataset.clickCount = 0;

  listItem.onclick = function () {
    let currentClickCount = parseInt(this.dataset.clickCount);
    currentClickCount++;
    this.dataset.clickCount = currentClickCount;

    if (currentClickCount === 1) {
      this.style.textDecoration = "line-through";
    } else if (currentClickCount === 2) {
      this.remove();
    }
  };
}
