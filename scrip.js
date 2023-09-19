document.getElementById("sidebarToggle").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
    const yellowButton = document.querySelector(".yellow-button");
    const sequenceContainer = document.querySelector(".sequence-container");

    let sequences = [
        "TACTACGTACGTACGTACGTAATC",
        "ATAAGTCAAAAGTAATTTA",
        "CCTGGCGGCTCCGCCGGTCC",
        "TTTCCGCTTCTCTTGCGAAA",
    ];
    
    yellowButton.addEventListener("click", function () {
        sequenceContainer.innerHTML = "";
        const AdnSequence =
            sequences[Math.floor(Math.random() * sequences.length)];
        const p = document.createElement("p");
        p.textContent = AdnSequence;
        sequenceContainer.appendChild(p);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const blueButton = document.querySelector(".blue-button");
    const sequenceDownContainer = document.querySelector(".sequenceDown-container");

    let transcripcon = [];
    
        for (i = 0, j = 0; i < AdnSequence.length; i++, j++) {
    
            if (AdnSequence[i] == "A") {
                transcripcon += "T";
            } else if (AdnSequence[i] == "T") {
                transcripcon += "U";
            } else if (AdnSequence[i] == "C") {
                transcripcon += "G";
            } else if (AdnSequence[i] == "G") {
                transcripcon += "C";
            }
        }
    

        blueButton.addEventListener("click", function () {
            sequenceDownContainer.innerHTML = "";
            const ArnSequence = transcription;
            const p = document.createElement("p");
            p.textContent = ArnSequence;
            sequenceDownContainer.appendChild(p);
        });
})