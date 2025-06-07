function updateCountdown() {
  const target = new Date("2025-07-28T00:00:00").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 It's time! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("Days").textContent = String(days).padStart(2, '0');
  document.getElementById("Hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("Minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("Seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 10 + 14) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.textContent = "💗";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 400);
