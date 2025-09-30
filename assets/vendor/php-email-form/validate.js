//FORM TO SHEET
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzWOzkK1yzpYkUxrPgTj_A_mdoTUdOWk3gVGKkO-g87VjNg9zqYADMPY1yqmcri65l2HA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".loading").style.display = "block";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".sent-message").style.display = "block";
      document.querySelector(".error-message").style.display = "none";
      form.reset();
    })

    .catch((error) => {
      document.querySelector(".loading").style.display = "none";
      document.querySelector(".error-message").innerHTML =
        "Gagal kirim: " + error.message;
      document.querySelector(".error-message").style.display = "block";
    });
});
