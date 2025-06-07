function ShowHide(id , el) {
    const container = document.getElementById(id);
    container.classList.toggle("esconder");

    const icono = el.querySelector(".icono-rotado");
    if (icono) {
        icono.classList.toggle("rotado");
    }
}