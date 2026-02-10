function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

if (link1) {
    link1.addEventListener('click', () => {
        scrollToElement('.header');
    });
}

if (link2) {
    link2.addEventListener('click', () => {
        scrollToElement('.header', 1);
    });
}

if (link3) {
    link3.addEventListener('click', () => {
        scrollToElement('.column');
    });
}

// Botón para copiar al portapapeles
const copyBtn = document.getElementById("copyBtn");
const email = document.getElementById("email").textContent;

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(email)
        .then(() => {
            copyBtn.textContent = "Copiado ✓";
            setTimeout(() => {
                copyBtn.textContent = "Copiar email";
            }, 1500);
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
});
