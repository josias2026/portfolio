/* =====================================
   TEXTE ANIMÉ
===================================== */

const typingElement = document.getElementById("typing");

const professions = [
    "Développement web",
    "Programmation",
    "Informatique",
    "Technologies numériques"
];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentText = professions[professionIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;

            professionIndex++;

            if (professionIndex >= professions.length) {
                professionIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


/* =====================================
   APPARITION DES SECTIONS
===================================== */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});


/* =====================================
   ANNÉE AUTOMATIQUE
===================================== */

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        "© " + new Date().getFullYear() + " Tous droits réservés.";
}

/* FORMULAIRE DE CONTACT */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const destination = "josiacebarandao7@gmail.com";

        const contenu =
            "Bonjour Josias,\n\n" +
            "Nom : " + name + "\n" +
            "E-mail : " + email + "\n\n" +
            "Message :\n" + message;

        const lien = "mailto:" + destination +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(contenu);

        document.getElementById("formMessage").textContent =
            "Votre application e-mail va s'ouvrir pour préparer le message.";

        window.location.href = lien;
    });
}