const successImage = "image/Q0xF-tick.jpg";
const declineImage = "image/N5ZV-sad-smile.jpg";
const successMessage =
  "Congratulations !! Your order has been placed successfully. ";
const declineMessage =
  "Sorry, your payment has failed. Keep this ID (xxxxx) for future reference";
const declineLine = "Whoops !";
const successBtn = `<span class="container-btn-text">Print Invoice</span
><i class="fas fa-print"></i>`;
const declineBtn = `<i class="fas fa-redo" style="color: #ffffff;"></i></i><span class="container-btn-text">Try again</span
>`;

document.getElementById("change-theme").addEventListener("click", function () {
  const themeType = document
    .getElementsByClassName("container")[0]
    ?.getAttribute("data-theme-type");

  if (themeType === "decline") {
    document
      .getElementsByClassName("container")[0]
      .setAttribute("data-theme-type", "success");
    document.getElementById("cont-sht-msg").innerText = "";
    document.getElementById("cont-image").src = successImage;
    document.getElementById("cont-text").innerText = successMessage;
    document.getElementById("cont-btn").classList.toggle("decline-btn");
    document.getElementById("cont-btn").innerHTML = successBtn;
  } else {
    document
      .getElementsByClassName("container")[0]
      .setAttribute("data-theme-type", "decline");
    document.getElementById("cont-sht-msg").innerText = declineLine;
    document.getElementById("cont-image").src = declineImage;
    document.getElementById("cont-text").innerText = declineMessage;
    document.getElementById("cont-btn").classList.toggle("decline-btn");
    document.getElementById("cont-btn").innerHTML = declineBtn;
  }
});