// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Регистрация
  const form = document.getElementById("register-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Спасибо за регистрацию!");
      form.reset();
    });
  }
  
  // Старт кнопки
  const startButtons = document.querySelectorAll(".start-btn");
  const overlay = document.getElementById("overlay");
  const overlayText = document.getElementById("overlay-text");
  
  const messages = [
    "Готов к взрыву смеха?",
    "Ты только что запустил лучший мем!",
    "Скоро будешь хохотать!",
    "Мем уже летит к тебе!",
    "Твой смех — наша цель!"
  ];
  
  startButtons.forEach(button => {
    button.addEventListener("click", () => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      overlayText.textContent = msg;
      overlay.style.display = "flex";
    });
  });
  
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });