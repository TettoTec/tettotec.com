 const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  document.addEventListener('click', (event) => {
    const clickedInsideNav = navLinks.contains(event.target);
    const clickedToggle = toggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
      navLinks.classList.remove('open');
    }
  });
}
const cookieBanner = document.querySelector('#cookie-banner');
const cookieAccept = document.querySelector('#cookie-accept');
const cookieReject = document.querySelector('#cookie-reject');

const COOKIE_KEY = 'tettotec_cookie_choice';
const COOKIE_EXPIRY_DAYS = 180;

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  const found = cookies.find(row => row.startsWith(name + '='));
  return found ? decodeURIComponent(found.split('=')[1]) : null;
}

function hideCookieBanner() {
  if (cookieBanner) {
    cookieBanner.classList.add('hidden');
  }
}

function showCookieBanner() {
  if (cookieBanner) {
    cookieBanner.classList.remove('hidden');
  }
}

if (cookieBanner) {
  const savedChoice = getCookie(COOKIE_KEY);

  if (!savedChoice) {
    showCookieBanner();
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      setCookie(COOKIE_KEY, 'accepted', COOKIE_EXPIRY_DAYS);
      hideCookieBanner();
    });
  }

  if (cookieReject) {
    cookieReject.addEventListener('click', () => {
      setCookie(COOKIE_KEY, 'rejected', COOKIE_EXPIRY_DAYS);
      hideCookieBanner();
    });
  }
}
