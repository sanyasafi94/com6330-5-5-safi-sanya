var form = document.getElementById("add-todo");
form.onsubmit = function (e) {
  console.log("submitted");
  e.preventDefault();
};

var data = document.querySelector("input").value;
console.log(data);
