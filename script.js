// Hossam & Hadeer Wedding Invitation

// فتح الدعوة
const openButton = document.querySelector("#openInvitation");
const invitation = document.querySelector("#invitation");

if (openButton && invitation) {
  openButton.addEventListener("click", () => {
    invitation.classList.add("is-open");
    openButton.textContent = "Welcome ❤️";
  });
}

// تشغيل وإيقاف الموسيقى
const musicButton = document.querySelector("#musicButton");
const weddingMusic = document.querySelector("#weddingMusic");

if (musicButton && weddingMusic) {
  musicButton.addEventListener("click", async () => {
    if (weddingMusic.paused) {
      try {
        await weddingMusic.play();
        musicButton.textContent = "Ⅱ Pause Music";
      } catch (error) {
        musicButton.textContent = "Try Again";
      }
    } else {
      weddingMusic.pause();
      musicButton.textContent = "♫ Play Music";
    }
  });
}

// العداد التنازلي
const countdown = document.querySelector("#countdown");
const weddingDate = document.body.dataset.weddingDate;

if (countdown && weddingDate) {
  const target = new Date(weddingDate).getTime();

  function updateCountdown() {
    const difference = target - Date.now();

    if (difference <= 0) {
      countdown.textContent = "The Big Day Is Here ❤️";
      return;
    }

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);

    countdown.textContent =
      `${days} Days | ${hours} Hours | ${minutes} Minutes`;
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);
}
