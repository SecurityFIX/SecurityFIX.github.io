
        // Detectar error 404 en la página
        window.onload = function () {
            // Mostrar la página de error si la ruta no existe
            if (window.location.pathname !== "/") {
                document.querySelector('.container').style.display = "block";
            } else {
                // Si la página está bien cargada, redirige a la página principal
                setTimeout(function () {
                    window.location.href = "securityfix.github.io";
                }, 5000); // Redirige después de 5 segundos
            }
        };
    