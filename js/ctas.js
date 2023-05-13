// popupWhatsApp = () => {
//   let btnClosePopup = document.querySelector(".closePopup");
//   let btnOpenPopup = document.querySelector(".ctas");
//   let popup = document.querySelector(".popup-ctas");
//   let sendBtn = document.getElementById("send-btn");

//   btnClosePopup.addEventListener("click", () => {
//     popup.classList.toggle("is-active-whatsapp-popup");
//   });

//   btnOpenPopup.addEventListener("click", () => {
//     popup.classList.toggle("is-active-whatsapp-popup");
//     popup.style.animation = "fadeIn .6s 0.0s both";
//   });

//   sendBtn.addEventListener("click", () => {
//     let msg = document.getElementById("whats-in").value;
//     let relmsg = msg.replace(/ /g, "%20");
//     //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567
//     window.open("https://wa.me/15551234567?text=" + relmsg, "_blank");
//   });

//   setTimeout(() => {
//     popup.classList.toggle("is-active-whatsapp-popup");
//   }, 3000);
// };

// popupWhatsApp();

function handleToolOpen() {
  let btnOpen = document.querySelector(".cta-btn");
  let popup = document.querySelector(".quick-cta");

  popup.classList.toggle("show-cta");
  btnOpen.classList.toggle("cta-btn__open");
  btnOpen.classList.toggle("cta-btn__close");
}

function calculateEMI() {
  let emiResult = document.getElementById("emiResult");
  let amount = document.getElementById("loanAmount").value;
  let interest = document.getElementById("interest").value;
  let years = document.getElementById("duration").value;
  const MONTHS_PER_YEAR = 12;

  months = years * MONTHS_PER_YEAR;
  monthlyInterestRate = interest / 100 / MONTHS_PER_YEAR;
  numerator = amount * monthlyInterestRate;
  denominator = 1 - (1 + monthlyInterestRate) ** -months;
  payment =
    !amount || !years
      ? 0
      : interest
      ? numerator / denominator
      : amount / months;

  emiResult.innerHTML = payment;
}
