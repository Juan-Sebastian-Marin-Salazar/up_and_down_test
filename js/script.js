document.addEventListener("DOMContentLoaded", () => {
    const cajas = document.querySelectorAll(".cosa"); 

    cajas.forEach(caja => {
        caja.addEventListener("mouseenter", () => {
            caja.classList.add("animar");
        });

        caja.addEventListener("mouseleave", () => {
            caja.classList.remove("animar");
        });
    });
});
