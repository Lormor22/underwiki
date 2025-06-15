// viejo
function ShowHide(id , el) {
    const container = document.getElementById(id);
    container.classList.toggle("esconder");

    const icono = el.querySelector(".icono-rotado");
    if (icono) {
        icono.classList.toggle("rotado");
    }
}


// clases

function cerrar_todo_skills(){

let nivel40 = document.getElementById("lv40");
nivel40.classList.add("esconder");

let nivel43 = document.getElementById("lv43");
nivel43.classList.add("esconder");

let nivel46 = document.getElementById("lv46");
nivel46.classList.add("esconder");

let nivel49 = document.getElementById("lv49");
nivel49.classList.add("esconder");

let nivel52 = document.getElementById("lv52");
nivel52.classList.add("esconder");

let nivel55 = document.getElementById("lv55");
nivel55.classList.add("esconder");

let nivel58 = document.getElementById("lv58");
nivel58.classList.add("esconder");

let nivel60 = document.getElementById("lv60");
nivel60.classList.add("esconder");

let nivel61 = document.getElementById("lv61");
nivel61.classList.add("esconder");

let nivel62 = document.getElementById("lv62");
nivel62.classList.add("esconder");

let nivel64 = document.getElementById("lv64");
nivel64.classList.add("esconder");

let nivel66 = document.getElementById("lv66");
nivel66.classList.add("esconder");

let nivel68 = document.getElementById("lv68");
nivel68.classList.add("esconder");

let nivel70 = document.getElementById("lv70");
nivel70.classList.add("esconder");

let nivel72 = document.getElementById("lv72");
nivel72.classList.add("esconder");

let nivel74 = document.getElementById("lv74");
nivel74.classList.add("esconder");

let nivel76 = document.getElementById("lv76");
nivel76.classList.add("esconder");

}

function usando_all(){
    chau_brilli()

    let nivel40 = document.getElementById("lv40");
    nivel40.classList.remove("esconder");

    let nivel43 = document.getElementById("lv43");
    nivel43.classList.remove("esconder");

    let nivel46 = document.getElementById("lv46");
    nivel46.classList.remove("esconder");

    let nivel49 = document.getElementById("lv49");
    nivel49.classList.remove("esconder");

    let nivel52 = document.getElementById("lv52");
    nivel52.classList.remove("esconder");

    let nivel55 = document.getElementById("lv55");
    nivel55.classList.remove("esconder");

    let nivel58 = document.getElementById("lv58");
    nivel58.classList.remove("esconder");

    let nivel60 = document.getElementById("lv60");
    nivel60.classList.remove("esconder");

    let nivel61 = document.getElementById("lv61");
    nivel61.classList.remove("esconder");

    let nivel62 = document.getElementById("lv62");
    nivel62.classList.remove("esconder");

    let nivel64 = document.getElementById("lv64");
    nivel64.classList.remove("esconder");

    let nivel66 = document.getElementById("lv66");
    nivel66.classList.remove("esconder");

    let nivel68 = document.getElementById("lv68");
    nivel68.classList.remove("esconder");

    let nivel70 = document.getElementById("lv70");
    nivel70.classList.remove("esconder");

    let nivel72 = document.getElementById("lv72");
    nivel72.classList.remove("esconder");

    let nivel74 = document.getElementById("lv74");
    nivel74.classList.remove("esconder");

    let nivel76 = document.getElementById("lv76");
    nivel76.classList.remove("esconder");

    let brillo_all = document.getElementById("boton_all");
    brillo_all.classList.add("brilli");

}

function chau_brilli() {
    let brillo = document.getElementsByClassName("brilli");
    for (let i = 0; i < brillo.length; i++) {
        brillo[i].classList.remove("brilli");
    }
}


function abrir_nivel(nivel) {
    cerrar_todo_skills();
    chau_brilli();

    const contenedor = document.getElementById(`lv${nivel}`);
    contenedor.classList.remove("esconder");

    const boton = document.getElementById(`boton_${nivel}`);
    boton.classList.add("brilli");
}

[40, 43, 46, 49, 52, 55, 58, 60, 61, 62, 64, 66, 68, 70, 72, 74, 76].forEach(nivel => {
    const boton = document.getElementById(`boton_${nivel}`);
    boton.addEventListener("click", () => abrir_nivel(nivel));
});

let boton_all = document.getElementById("boton_all");
boton_all.addEventListener("click" , usando_all);