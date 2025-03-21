document.getElementById("playMusic").addEventListener("click", function() {
  const song = document.getElementById("birthdaySong");
  song.play();
  setInterval(() => {
      let heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 5 + 5 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 10000);
  }, 500);
});

document.getElementById("showMessage").addEventListener("click", function() {
  window.location.href = "message.html";
});

function goBack() {
  window.history.back();
}