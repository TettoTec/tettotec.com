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
Perché questa versione è giusta

La usiamo così perché:

è leggera
non interferisce con il form
non blocca l’invio a Formspree
fa solo quello che serve davvero
Cosa NON dobbiamo mettere qui

Non rimettiamo:

event.preventDefault() sul form
messaggi finti di invio riuscito
logiche che bloccano il submit

Perché il form deve andare diretto a Formspree.

Controllo finale dei 3 file principali

Adesso dovresti avere:

index.html
con il nuovo testo commerciale
con form collegato a Formspree
styles.css
quello nuovo completo
script.js
questo qui sopra
Prossimo passo giusto

Ora il sito inizia a stare davvero in piedi.

Il passaggio migliore adesso è uno di questi:

sistemare lavora-con-noi.html con la soluzione file upload giusta
rifinire privacy-policy.html e cookie-policy.html
fare un controllo finale di coerenza su tutte le pagine

Dimmi da quale vuoi partire.
