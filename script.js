document.getElementById("sidebarToggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const yellowButton = document.querySelector(".yellow-button");
    const blueButton = document.querySelector(".blue-button"); 
    const sequenceContainer = document.querySelector(".sequence-container");
	const sequenceDownContainer = document.querySelector(".sequenceDown-container");
    let bases = "CGTA"; 
    let generarSecuencia = ""; 

    yellowButton.addEventListener("click", function () {
        sequenceContainer.innerHTML = "";
        generarSequencia = generarSequencia(bases); 

        const p = document.createElement("p");
        p.textContent = generarSequencia;
        sequenceContainer.appendChild(p);
    });

	blueButton.addEventListener("click", function () {
		const sequenciaModificada = reemplazarLetras(generarSequencia);

		sequenceDownContainer.innerHTML = "";
		const p = document.createElement("p");
		p.textContent = sequenciaModificada;
		sequenceDownContainer.appendChild(p);
	});

    function generarSequencia(letras) {
        let sequencia = "";
        for (let i = 0; i < 18; i++) {
            const randomIndex = Math.floor(Math.random() * letras.length);
            const randomLetras = letras.charAt(randomIndex);
            sequencia += randomLetras;
        }
        return sequencia;
    }

    function reemplazarLetras(cadena) {
        const reemplazos = {
            'G': 'C',
            'C': 'G',
            'A': 'T',
            'T': 'A',
        };

        return cadena.replace(/[GCAU]/g, match => reemplazos[match]);
    }
});
