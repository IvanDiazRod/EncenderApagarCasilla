document.addEventListener("DOMContentLoaded", () => {

    const casillas = document.getElementsByClassName("casilla");

    const mensajeVictoria = document.getElementsByClassName("mensajeVictoria");

    console.log(casillas);

    for (let i = 0; i < casillas.length; i++) {

        casillas[i].addEventListener("click", () => {

            if (casillas[i].classList.contains("color-fondo-blanco")) {

                    casillas[i].classList.remove("color-fondo-blanco");

                    casillas[i].classList.add("color-fondo-verde");

                if (i > 8) {

                    casillas[i - 9].classList.remove("color-fondo-blanco");

                    casillas[i - 9].classList.add("color-fondo-verde");

                }

                if (i < 41) {

                    casillas[i + 9].classList.remove("color-fondo-blanco");

                    casillas[i + 9].classList.add("color-fondo-verde");

                }

                if (i % 9 != 0) {

                    casillas[i - 1].classList.remove("color-fondo-blanco");

                    casillas[i - 1].classList.add("color-fondo-verde");
                    
                }

                if (i % 8 == 0) {

                    casillas[i + 1].classList.remove("color-fondo-blanco");

                    casillas[i + 1].classList.add("color-fondo-verde");

                }

            } else {

                casillas[i].classList.remove("color-fondo-verde");

                casillas[i].classList.add("color-fondo-blanco");

                if (i > 8) {

                casillas[i - 9].classList.remove("color-fondo-verde");

                casillas[i - 9].classList.add("color-fondo-blanco");

                }

                if (i < 41) {

                casillas[i + 9].classList.remove("color-fondo-verde");

                casillas[i + 9].classList.add("color-fondo-blanco");

                }

                if (i % 9 != 0) {

                    casillas[i - 1].classList.remove("color-fondo-verde");

                    casillas[i - 1].classList.add("color-fondo-blanco");
                    
                }

                if (i % 8 - Math.floor(i / 10) != 0) {

                    casillas[i + 1].classList.add("color-fondo-blanco");

                    casillas[i + 1].classList.remove("color-fondo-verde");

                }

                console.log(i)

                console.log (i % 8 - Math.floor(i / 10));

            }

        });

    }

});