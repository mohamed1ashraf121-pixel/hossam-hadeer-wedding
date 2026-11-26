  
document.addEventListener("DOMContentLoaded", function () {

  const confirmButton = document.getElementById("confirmAttendance");

  if (!confirmButton) return;

  confirmButton.addEventListener("click", function () {

    const name = document.getElementById("guestName").value.trim();
    const count = document.getElementById("guestCount").value;

    if (!name || !count || Number(count) < 1 || Number(count) > 10) {
      alert("Please enter your name and number of guests (1-10).");
      return;
    }

    const message =
      `Hello! I would like to confirm my attendance at Hossam & Hadeer's wedding.\n` +
      `Name: ${name}\n` +
      `Number of guests: ${count}`;

    const whatsappURL =
      "https://wa.me/201007302746?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

  });

});
