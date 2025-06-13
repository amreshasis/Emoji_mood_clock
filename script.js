const timeEl = document.getElementById('time');
const emojiEl = document.getElementById('emoji');
const moodLabel = document.getElementById('mood-label');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  timeEl.textContent = `${padZero(hours)}:${minutes}:${seconds}`;

  const { emoji, label } = getMoodEmoji(hours);
  emojiEl.textContent = emoji;
  moodLabel.textContent = `Mood: ${label}`;
}

function padZero(n) {
  return n < 10 ? '0' + n : n;
}

function getMoodEmoji(hour) {
  if (hour >= 5 && hour < 8) {
    return { emoji: "🌅", label: "Early Bird" };
  } else if (hour >= 8 && hour < 12) {
    return { emoji: "☕", label: "Morning Focus" };
  } else if (hour >= 12 && hour < 14) {
    return { emoji: "🍽️", label: "Lunchtime" };
  } else if (hour >= 14 && hour < 17) {
    return { emoji: "💼", label: "Working Hard" };
  } else if (hour >= 17 && hour < 20) {
    return { emoji: "🏃", label: "Evening Grind" };
  } else if (hour >= 20 && hour < 22) {
    return { emoji: "🍿", label: "Relax Time" };
  } else if (hour >= 22 || hour < 2) {
    return { emoji: "🌙", label: "Bedtime" };
  } else {
    return { emoji: "💤", label: "Dreaming..." };
  }
}

setInterval(updateClock, 1000);
updateClock();
