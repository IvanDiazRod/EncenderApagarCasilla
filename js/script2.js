document.addEventListener("DOMContentLoaded", () => {

    const filas = [];

    for (let i = 0; i < 6; i++) {

        const fila = document.getElementsByClassName(`fila-${i}`);

        filas.push(fila);

    }

    for (let i = 0; i < filas.length; i++) {

        for (let j = 0; j < filas[i].length; j++) {

            randomizarCasilla(filas, i, j);

            filas[i][j].addEventListener("click", () => {

                cambiarColor(filas, i, j);

                if (i > 0) {

                    cambiarColor(filas, i - 1, j);

                }

                if (i < filas.length - 1) {

                    cambiarColor(filas, i + 1, j);

                }

                if (j > 0) {

                    cambiarColor(filas, i, j - 1);

                }

                if (j < filas[i].length - 1) {

                    cambiarColor(filas, i, j + 1);

                } 

            });

        }

    function cambiarColor(filas, i, j) {

        if (filas[i][j].classList.contains("color-fondo-blanco")) {

            filas[i][j].classList.remove("color-fondo-blanco");

            filas[i][j].classList.add("color-fondo-verde");

        } else {

            filas[i][j].classList.remove("color-fondo-verde");

            filas[i][j].classList.add("color-fondo-blanco");

        }

    }

    function randomizarCasilla(filas, i, j) {

        let random = Math.floor(Math.random()*2);

        if (random == 1) {

            filas[i][j].classList.remove("color-fondo-blanco")

            filas[i][j].classList.add("color-fondo-verde");

        } else {

            filas[i][j].classList.remove("color-fondo-verde")

            filas[i][j].classList.add("color-fondo-blanco");

        }

    }

}

});