const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');
const preventivoForm = document.querySelector('#preventivo-form');

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

if (preventivoForm) {
preventivoForm.addEventListener('submit', (event) => {
event.preventDefault();

const nome = document.querySelector('#nome')?.value.trim() || '';
const telefono = document.querySelector('#telefono')?.value.trim() || '';
const email = document.querySelector('#email')?.value.trim() || '';
const citta = document.querySelector('#citta')?.value.trim() || '';
const servizio = document.querySelector('#servizio')?.value.trim() || '';
const messaggio = document.querySelector('#messaggio')?.value.trim() || '';
const privacy = document.querySelector('#privacy')?.checked || false;

if (!nome || !telefono || !privacy) {
alert('Compila nome, telefono e accetta la Privacy Policy.');
return;
}

const existingMessage = document.querySelector('.form-success-message');
if (existingMessage) {
existingMessage.remove();
}

const successMessage = document.createElement('div');
successMessage.className = 'form-success-message';
successMessage.innerHTML = `
<strong>Richiesta inviata con successo.</strong><br>
Ti contatteremo il prima possibile per valutare la tua richiesta.
`;

preventivoForm.appendChild(successMessage);

console.log('Dati form pronti per il database:', {
nome,
telefono,
email,
citta,
servizio,
messaggio,
privacy
});

preventivoForm.reset();

successMessage.scrollIntoView({
behavior: 'smooth',
block: 'center'
});
});
}
