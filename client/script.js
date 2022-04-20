<button id="toggle" onclick="button()">
  on
</button>;

function button() {
  var change = document.getElementById("toggle");
  if (change.textContent == "PUBLISH") {
    change.textContent = "EDIT";
  } else {
    change.textContent = "PUBLISH";
  }
}
