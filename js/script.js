//Ensure Placeholder Works
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("datepicker");

  dateInput.addEventListener("input", function () {
    if (this.value) {
      this.style.color = "#5a5a5a"; // Selected text color
    } else {
      this.style.color = "#999"; // Placeholder color
    }
  });

  dateInput.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
  });

  dateInput.addEventListener("blur", function () {
    if (!this.value) {
      this.setAttribute("placeholder", "Select a date");
    }
  });
});
//Select option removel
document.getElementById("bootSelect").addEventListener("focus", function () {
  this.querySelector("option[selected]").hidden = true;
});
