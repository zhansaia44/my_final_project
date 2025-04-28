const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('.navbar__logo');  // Логотип

// Отображение мобильного меню
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    //console.log(scrollPos)

    // Добавляем 'highlight' класс для пунктов меню
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        return
    }

    // Убираем 'highlight' на мобильных устройствах
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
 const menuBars = document.querySelector('.is-active')
 if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
 }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

// Плавная прокрутка
document.querySelectorAll('.navbar__links, .button, .main__btn a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Работа кнопок "Старт" — всплывающее сообщение
  document.querySelectorAll('.start-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('Молодец! Мем загружается!');
    });
  });
  
  // Фиктивная регистрация
  const form = document.getElementById('register-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо за регистрацию!');
      form.reset();
    });
  }

  // Плавная прокрутка
document.querySelectorAll('.navbar__links, .button, .main__btn a').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Работа кнопок "Старт"
document.querySelectorAll('.start-btn').forEach(button => {
    button.addEventListener('click', () => {
      showRandomMemeText();
    });
  });
  
  // Массив разных текстов
  const memeTexts = [
    "Ты выбрал лучший мем!",
    "Смех обеспечен!",
    "Этот мем взорвет твой день!",
    "Ты настоящий ценитель мемов!",
    "Готовься к улыбке!",
    "Мем настроения загружен!",
    "Эпический мем доставлен!",
    "Ха-ха! Ты попал в мир мемов!"
  ];
  
  // Функция для показа случайного текста
  function showRandomMemeText() {
    // Выбираем случайный текст
    const randomText = memeTexts[Math.floor(Math.random() * memeTexts.length)];
  
    // Создаем затемненный фон
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';
  
    // Создаем текст
    const text = document.createElement('div');
    text.textContent = randomText;
    text.style.color = 'white';
    text.style.fontSize = '36px';
    text.style.fontWeight = 'bold';
    text.style.textAlign = 'center';
    text.style.padding = '20px';
  
    overlay.appendChild(text);
    document.body.appendChild(overlay);
  
    // Убрать по клику
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  }