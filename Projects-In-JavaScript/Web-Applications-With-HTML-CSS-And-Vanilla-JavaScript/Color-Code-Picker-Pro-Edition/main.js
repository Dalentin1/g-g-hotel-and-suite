function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("navMenu").classList.toggle("show");
  document.getElementById("con-box").classList.toggle("con1");
}
var modal = document.getElementById("myModal");
var btnModal = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btnModal.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
