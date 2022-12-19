// nombre_del_alumno
const modalButton = document.getElementById("modalB");
const modal = document.getElementById("Intermodal");

modalButton.addEventListener("click", function() {
  modal.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});