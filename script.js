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
            'A': 'U',
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
            'UUU': 'Fenil',
            'UUC': 'Fenil',
			'UUA': 'Leucina',
            'UUG': 'Leucina',
            'CUU': 'Leucina',
            'CUC': 'Leucina',
            'CUA': 'Leucina',
            'CUG': 'Leucina',
            'AUU': 'Iseleucina',
            'AUC': 'Iseleucina',
            'AUA': 'Iseleucina',
            'AUG': 'Metionina start codon',
            'GUU' : 'Valina',
            'GUC' : 'Valina',
            'GUA' : 'Valina',
            'GUG' : 'Valina',
            'UCU' : 'Serina',
            'UCC' : 'Serina',
            'UCA' : 'Serina',
            'UCG' : 'Serina',
            'CCU' : 'Prolina',
            'CCC' : 'Prolina',
            'CCA' : 'Prolina',
            'CCG' : 'Prolina',
            'ACU' : 'Treonina',
            'ACC' : 'Treonina',
            'ACA' : 'Treonina',
            'ACG' : 'Treonina',
            'GCU' :'Alanina',
            'GCG' :'Alanina',
            'GCA' :'Alanina',
            'GCG' :'Alanina',
            'UAU':'Tirosina',
            'UAC':'Tirosina',
            'UAA' :'Stop codon',
            'UAG':'Stop codon',
            'CAU' : 'Histidina',
            'CAC' : 'Histidina',
            'CAA' : 'Glutamina',
            'CAG' : 'Glutamina',
            'AAU' :'Asporagina',
            'AAC' :'Asporagina',
            'AAG':'Lisina',
            'GAU' : 'Acido Aspartico',
            'GAC' : 'Acido Aspartico',
            'GAA' : 'Acido Glutamico',
            'GAG' : 'Acido Glutamico',
            'UGU' :'Cysteine',
            'UGC' :'Cysteine',
            'UGA' :'Stop codon Tryptophan',
            'UGG' :'Stop codon Tryptophan',
            'CGU' : 'Arginina',
            'CGC' : 'Arginina',
            'CGA' : 'Arginina',
            'CGG' : 'Arginina',
            'AGU' : 'Serina',
            'AGC' : 'Serina',
            'AGA' : 'Arginina',
            'AGG' : 'Arginina',
            'GGU' : 'Glicina',
            'GGC' : 'Glicina',
            'GGA' : 'Glicina',
            'GGG' : 'Glicina',
        };

        const aminoacidosSecuencia = codones.map(codon => aminoacidos[codon] || 'Desconocido');

        return aminoacidosSecuencia;
    }
})