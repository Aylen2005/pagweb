document.getElementById("sidebarToggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
    const yellowButton = document.querySelector(".yellow-button");
    const blueButton = document.querySelector(".blue-button");
    const negroButton = document.querySelector(".negro-button");
    const sequenceContainer = document.querySelector(".sequence-container");
    const sequenceDownContainer = document.querySelector(".sequenceDown-container");
    const bajoContainer = document.querySelector(".sequenceBajo-container");

    let bases = "CGTA";
    let generarSecuencia = "";

    yellowButton.addEventListener("click", function () {
        sequenceContainer.innerHTML = "";
        generarSecuencia = generarSequencia(bases);

        const p = document.createElement("p");
        p.textContent = generarSecuencia;
        sequenceContainer.appendChild(p);
    });

    blueButton.addEventListener("click", function () {
        const sequenceModificada = reemplazarLetras(generarSecuencia);

        sequenceDownContainer.innerHTML = "";
        const p = document.createElement("p");
        p.textContent = sequenceModificada;
        sequenceDownContainer.appendChild(p);
    });

    negroButton.addEventListener("click", function () {
        const transcripcionSecuencia = generarTranscripcion(generarSecuencia);

        const codones = dividirEnTres(transcripcionSecuencia);

        const aminoacidosSecuencia = asignarAminoacidos(codones);

        bajoContainer.innerHTML = aminoacidosSecuencia.join(" ");
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
        return cadena.replace(/[GCAT]/g, match => reemplazos[match]);
    }

    function generarTranscripcion(cadena) {
        return reemplazarLetras(cadena);
    }

    function dividirEnTres(cadena) {
        const codones = [];
        for (let i = 0; i < cadena.length; i += 3) {
            const codon = cadena.slice(i, i + 3); 
            codones.push(codon); 
        }
        return codones;
    }

    function asignarAminoacidos(codones) {
        const aminoacidos = {
            'ATG': 'Met',
            'UGC': 'Ilet',
			'AUC': 'ALTO',
			'UUU': 'Phe',
			'UUC':'Phe',
			'UUA': 'Leu',
        };

        const aminoacidosSecuencia = codones.map(codon => aminoacidos[codon] || 'Desconocido');

        return aminoacidosSecuencia;
    }
})