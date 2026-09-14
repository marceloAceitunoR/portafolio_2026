
/* =========================
   EFECTO ESCRITURA
========================= */

const text = "WELCOME PLAYER...";
const typing = document.getElementById("typing");

let index = 0;

function mostrarLinkedin(event) { 
    event.preventDefault(); alert("📱 NO LinkenIn \n\nPor el momento no cuento con LinkenIn, pero puedes conocer mis proyectos en GitHub."); 
}

function mostrarInstagram(event) { 
    event.preventDefault(); alert("📱 NO Instagram \n\nPor el momento no cuento con Instagram, pero puedes conocer mis proyectos en GitHub."); 
}

function escribir() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(escribir, 80);

    }

}

escribir();


/* =========================
   AÑO AUTOMÁTICO
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   SONIDO / INTERACCIÓN
========================= */

const buttons = document.querySelectorAll(".retro-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 100);

    });

});


/* =========================
   NAVEGACIÓN CON TECLADO
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "1") {
        document.querySelector("#inicio")
            .scrollIntoView();
    }

    if (event.key === "2") {
        document.querySelector("#sobre-mi")
            .scrollIntoView();
    }

    if (event.key === "3") {
        document.querySelector("#proyectos")
            .scrollIntoView();
    }

    if (event.key === "4") {
        document.querySelector("#habilidades")
            .scrollIntoView();
    }

    if (event.key === "5") {
        document.querySelector("#contacto")
            .scrollIntoView();
    }

});