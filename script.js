
// ==================================
// 1. ELEMENTOS DE LA BIENVENIDA
// ==================================

const envelopeButton = document.getElementById("envelope-button");
const envelopeHint = document.getElementById("envelope-hint");
const letterMessage = document.getElementById("letter-message");

const welcomeScreen = document.getElementById("welcome-screen");
const aquariumScreen = document.getElementById("aquarium-screen");

const enterButton = document.getElementById("enter-button");


// ==================================
// 2. ELEMENTOS DE NAVEGACIÓN
// ==================================

const scenes = document.querySelectorAll(".tank-scene");
const dots = document.querySelectorAll(".tank-dot");

const previousButton = document.getElementById("previous-tank");
const nextButton = document.getElementById("next-tank");

let currentScene = 0;


// ==================================
// 3. ABRIR EL SOBRE
// ==================================

envelopeButton.addEventListener("click", function () {

    // Evitar que se abra varias veces
    if (envelopeButton.classList.contains("open")) {
        return;
    }

    // Activar la animación
    envelopeButton.classList.add("open");

    envelopeButton.setAttribute("aria-expanded", "true");

    // Ocultar la indicación
    envelopeHint.hidden = true;

    // Mostrar el mensaje después de la animación
    setTimeout(function () {

        letterMessage.hidden = false;

        requestAnimationFrame(function () {
            letterMessage.classList.add("visible");
        });

    }, 850);

});


// ==================================
// 4. ENTRAR AL ACUARIO
// ==================================

enterButton.addEventListener("click", function () {

    welcomeScreen.hidden = true;
    aquariumScreen.hidden = false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==================================
// 5. CAMBIAR DE PECERA
// ==================================

function showScene(index) {

    // Evitar salir de los límites
    if (index < 0 || index >= scenes.length) {
        return;
    }

    currentScene = index;

    // Mostrar únicamente la pecera seleccionada
    scenes.forEach(function (scene, i) {
        scene.classList.toggle("active", i === currentScene);
    });

    // Actualizar los indicadores
    dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === currentScene);
    });

    // Desactivar las flechas al llegar a los extremos
    previousButton.disabled = currentScene === 0;
    nextButton.disabled = currentScene === scenes.length - 1;

}


// ==================================
// 6. BOTONES DE NAVEGACIÓN
// ==================================

previousButton.addEventListener("click", function () {
    showScene(currentScene - 1);
});

nextButton.addEventListener("click", function () {
    showScene(currentScene + 1);
});


// ==================================
// 7. INICIAR EN LA PRIMERA PECERA
// ==================================

showScene(0);


// ==================================
// 8. LAS 18 RAZONES
// ==================================

const reasons = [
    "Me haces sentir especial.",
    "Tienes un corazón puro y dulce.",
    "Siempre estás ahí para mí.",
    "Me motivas a ser un mejor hombre.",
    "Me haces sentir amado.",
    "Noto el amor que sientes por mí.",
    "Haces cartas hermosas.",
    "Das los mejores abrazos.",
    "Platicar contigo siempre es muy entretenido.",
    "Siento que puedo ser yo mismo a tu lado.",
    "Agradeces todo el esfuerzo que hago.",
    "Siempre me das regalos buenísimos.",
    "Dices palabras muy bonitas que llenan mi corazón.",
    "Contigo me emociona el futuro.",
    "Puedo ser el más romántico contigo.",
    "Me calmas como nadie lo hace.",
    "Te esfuerzas todos los días.",
    "Eres una mujer como ninguna otra."
];


// ==================================
// 11. LOS CUATRO MENSAJES EN BOTELLAS
// ==================================

const bottleMessages = [

    {
        title: "La princesa y su caballero",
        icon: "🍾",
        text: `En otro capítulo de esta maravillosa historia, después de un día entero de combates y tareas como caballero del reino, nuestro noble héroe sintió la necesidad de escribirle una carta a su amada princesa.

El caballero piensa en ella cada noche, extrañando su dulce aroma y su precioso rostro. Así que tomó un pergamino y una pluma y le escribió un mensaje. Plasmando su corazón, escribió:

"Veo hacia arriba a las estrellas y pienso en ti esta noche;
deseando poder ver su luz reflejada en el brillo de tus ojos,
acercar tu cuerpo hacia el mío, y sentir el calor de tu abrazo bajo el cielo de una noche perfecta."

El caballero selló la carta con un "Te Amo Princesa mía" y la envió hacia el castillo de Cuchi Landia, esperando que la carta logre abrazar el corazón dulce de su princesa amada.`
    },

    {
        title: "Siempre en mi mente",
        icon: "🍾",
        text: `Mi princesa linda, algo que amo desde el inicio de nuestra historia es que tú te volviste parte de mí.

No exagero al decir que hay un millón de cosas en mi día a día que me recuerdan a ti. Desde las cosas tan simples como una hamburguesa hasta cosas tan románticas como ver una pareja agarrada de las manos en la calle.

Tú vives en mi mente sin pagar renta, y me encanta compartir tantos recuerdos a tu lado.

Te Amo Mucho.`
    },

    {
        title: "Un aplauso para ti",
        icon: "🍾",
        text: `Linda, hoy te quiero agradecer especialmente por todo tu esfuerzo en abrir cada vez más y más tu corazón conmigo.

Es increíble si ves el inicio de nuestra relación lo mucho que hemos mejorado en entendernos el uno al otro.

Gracias por todo ese esfuerzo porque sé que no es lo más fácil para ti, pero aprecio mucho cada vez que me dejas ver todos los sentimientos hermosos que tu dulce corazón guarda.

Todo esto nos ha permitido ser la pareja tan cercana que somos y me emociona pensar que si hemos logrado entendernos de esta manera en tan solo un año y medio, me emociona pensar en todo nuestro futuro juntos.

Te Amo Mucho.`
    },

    {
        title: "También hay días difíciles",
        icon: "🍾",
        text: `Mi princesa linda, la vida trae muchas situaciones difíciles. Una relación a distancia es una de ellas.

Primero que nada, gracias por el esfuerzo de elegirme todos los días a pesar de que la distancia a veces no es lo más sencillo.

Muchas veces nos hace sentir solos, o el extrañarnos y desear pasar tiempo juntos duele.

Y quiero que sepas que en esos días es donde más tenemos que apoyarnos el uno al otro.

Yo tengo mi fe puesta en que Dios tiene un plan y que nuestro amor puede sobrevivir a estas pruebas.

Así que cuando sientas que estas situaciones son muy difíciles, toma un respiro y recuerda que el amor que hemos construido podrá con esta prueba.

Te amo y siempre estaré para ti en esos momentos donde la distancia duela más de lo normal.`
    }

];


// ==================================
// 12. CREAR LAS CUATRO BOTELLAS
// ==================================

const bottleGrid = document.getElementById("bottle-grid");

const messageModal = document.getElementById("message-modal");
const messageTitle = document.getElementById("message-title");
const messageText = document.getElementById("message-text");
const messageCounter = document.getElementById("message-counter");

const closeMessageButton = document.getElementById("close-message");

const discoveredMessages = new Set();

bottleMessages.forEach(function (message, index) {

    const bottleButton = document.createElement("button");

    bottleButton.classList.add("bottle-button");

    const bottleImage = document.createElement("img");

    bottleImage.src = "images/bottles/Bottle.png";
    bottleImage.alt = "";

    bottleButton.appendChild(bottleImage);

    bottleButton.setAttribute(
        "aria-label",
        "Abrir mensaje: " + message.title
    );

    bottleButton.addEventListener("click", function () {

        // Mostrar el título y el contenido
        messageTitle.textContent = message.title;
        messageText.textContent = message.text;

        messageCounter.textContent =
            "Mensaje " + (index + 1) + " de 4";

        // Mostrar la tarjeta
        messageModal.hidden = false;

        // Comenzar la tarjeta desde arriba
        messageModal.querySelector(".message-card").scrollTop = 0;

        // Marcar la botella como descubierta
        discoveredMessages.add(index);

        bottleButton.classList.add("discovered");

    });

    bottleGrid.appendChild(bottleButton);

});


// ==================================
// 13. CERRAR LOS MENSAJES
// ==================================

function closeMessageModal() {
    messageModal.hidden = true;
}

closeMessageButton.addEventListener("click", closeMessageModal);

// Cerrar al presionar fuera de la tarjeta
messageModal.addEventListener("click", function (event) {

    if (event.target === messageModal) {
        closeMessageModal();
    }

});

// Cerrar con Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && !messageModal.hidden) {
        closeMessageModal();
    }

});


// ==================================
// 9. CREAR LAS CONCHITAS
// ==================================

const shellGrid = document.getElementById("shell-grid");

const reasonModal = document.getElementById("reason-modal");
const reasonText = document.getElementById("reason-text");
const reasonCounter = document.getElementById("reason-counter");
const closeReasonButton = document.getElementById("close-reason");

const discoveredReasons = new Set();

reasons.forEach(function (reason, index) {

    const shellButton = document.createElement("button");

    shellButton.classList.add("shell-button");

    const shellImage = document.createElement("img");

    shellImage.src =
        index % 2 === 0
            ? "images/shells/Seashell_1.png"
            : "images/shells/Seashell_2.png";

    shellImage.alt = "";

    shellButton.appendChild(shellImage);

    shellButton.setAttribute(
        "aria-label",
        "Descubrir razón número " + (index + 1)
    );

    shellButton.addEventListener("click", function () {

        // Mostrar la razón seleccionada
        reasonText.textContent = reason;

        reasonCounter.textContent =
            "Razón " + (index + 1) + " de 18";

        // Mostrar la tarjeta
        reasonModal.hidden = false;

        // Marcar la conchita como descubierta
        discoveredReasons.add(index);

        shellButton.classList.add("discovered");

    });

    shellGrid.appendChild(shellButton);

});


// ==================================
// 10. CERRAR LA TARJETA
// ==================================

function closeReasonModal() {
    reasonModal.hidden = true;
}

closeReasonButton.addEventListener("click", closeReasonModal);

// Cerrar al hacer clic fuera de la tarjeta
reasonModal.addEventListener("click", function (event) {

    if (event.target === reasonModal) {
        closeReasonModal();
    }

});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && !reasonModal.hidden) {
        closeReasonModal();
    }

});


// ==================================
// 14. JUEGO: ¿ME AMAS?
// ==================================

const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const loveGameMessage = document.getElementById("love-game-message");
const loveGame = document.querySelector(".love-game");


// ==================================
// 15. BOTÓN "NO": ESCAPAR
// ==================================

noButton.addEventListener("mouseenter", escapeButton);
noButton.addEventListener("touchstart", escapeButton);
noButton.addEventListener("click", escapeButton);

function escapeButton(event) {

    event.preventDefault();

    const gameArea = loveGame.getBoundingClientRect();
    const buttonArea = noButton.getBoundingClientRect();

    const maxX = Math.max(0, gameArea.width - buttonArea.width);
    const maxY = Math.max(0, gameArea.height - buttonArea.height);

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
}


// ==================================
// 16. BOTÓN "SÍ": RESPUESTA Y CELEBRACIÓN
// ==================================

yesButton.addEventListener("click", function () {

    // Evitar que vuelva a presionarse
    yesButton.disabled = true;
    noButton.hidden = true;

    // Mostrar el mensaje especial
    loveGameMessage.textContent =
        "Lo sabía, yo también te amo mucho, princesa ♡";

    loveGameMessage.hidden = false;

    // Crear una pequeña lluvia de corazones
    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("span");

        heart.textContent = "💗";
        heart.classList.add("celebration-heart");

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 1.5 + "s";

        loveGame.appendChild(heart);

        // Eliminar el corazón después de la animación
        setTimeout(function () {
            heart.remove();
        }, 3000);

    }

});
