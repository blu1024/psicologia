
const container = document.getElementById("malla-container");

function render() {
    container.innerHTML = "";
    for (let año = 1; año <= 5; año++) {
        const añoBox = document.createElement("div");
        añoBox.className = "año";
        añoBox.innerHTML = `<h2>${año}° Año</h2>`;

        const cuatris = ["1C", "2C", "anual"];
        for (const tipo of cuatris) {
            const grupo = materias.filter(m => m.anio === año && m.tipo === tipo);
            if (grupo.length > 0) {
                const cuatriBox = document.createElement("div");
                cuatriBox.className = "cuatrimestre";
                cuatriBox.innerHTML = `<strong>${tipo === "1C" ? "1er Cuatrimestre" : tipo === "2C" ? "2do Cuatrimestre" : "Anuales"}:</strong><br/>`;
                grupo.forEach(m => {
                    const matDiv = document.createElement("div");
                    matDiv.className = `materia ${m.estado}`;
                    matDiv.innerText = m.nombre;
                    matDiv.onclick = () => toggleEstado(m);
                    cuatriBox.appendChild(matDiv);
                });
                añoBox.appendChild(cuatriBox);
            }
        }
        container.appendChild(añoBox);
    }
}

function toggleEstado(materia) {
    if (materia.estado === "bloqueada") return;
    materia.estado = materia.estado === "aprobada" ? "cursada" :
                     materia.estado === "cursada" ? "bloqueada" : "aprobada";
    actualizarCorrelativas();
    render();
}

function actualizarCorrelativas() {
    materias.forEach(m => {
        if (m.correlativas.length === 0) {
            if (m.estado === "bloqueada") m.estado = "cursada";
            return;
        }
        const cumplidas = m.correlativas.every(c =>
            materias.find(mat => mat.nombre === c)?.estado === "aprobada"
        );
        if (cumplidas && m.estado === "bloqueada") m.estado = "cursada";
    });
}

actualizarCorrelativas();
render();
