document.getElementById("confirmAttendance")
  .addEventListener("click", function () {

    const name = document.getElementById("guestName").value.trim();
    const count = document.getElementById("guestCount").value;

    if (!name || !count || Number(count) < 1) {
      alert("Please enter your name and number of guests.");
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
