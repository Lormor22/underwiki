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


function cerrar_todo_skills() {
    const niveles = [40, 43, 44, 46, 48, 49, 52, 55, 56, 58, 60, 61, 62, 64, 66, 68, 70, 72, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85];

    niveles.forEach(nivel => {
        const elemento = document.getElementById(`lv${nivel}`);
        if (elemento) {
            elemento.classList.add("esconder");
        }
    });
}


function usando_all() {
    chau_brilli();

    const niveles = [40, 43, 44, 46, 48, 49, 52, 55, 56, 58, 60, 61, 62, 64, 66, 68, 70, 72, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85];

    niveles.forEach(nivel => {
        const elemento = document.getElementById(`lv${nivel}`);
        if (elemento) {
            elemento.classList.remove("esconder");
        }
    });

    const brilloAll = document.getElementById("boton_all");
    if (brilloAll) {
        brilloAll.classList.add("brilli");
    }
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
    if (contenedor) {
        contenedor.classList.remove("esconder");
    }
    const boton = document.getElementById(`boton_${nivel}`);
    if (boton) {
        boton.classList.add("brilli");
    } 
}

[40, 43, 44, 46, 48, 49, 52, 55, 56, 58, 60, 61, 62, 64, 66, 68, 70, 72, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85].forEach(nivel => {
    const boton = document.getElementById(`boton_${nivel}`);
    if (boton) {
        boton.addEventListener("click", () => abrir_nivel(nivel));
    }
});

let boton_all = document.getElementById("boton_all");
boton_all.addEventListener("click" , usando_all);