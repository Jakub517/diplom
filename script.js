const codeInput = document.getElementById("codeInput");
const generateButton = document.getElementById("generateButton");
const certifikateDiv = document.getElementById("certifikate");

generateButton.addEventListener("click", () => {
    const code = codeInput.value;
    var sifrovano = "U2FsdGVkX19JpXNnYMAZ4BPG1bN7L4YSF+RlIKNujHVyUZgvxpoURva/Af61Odfg"
    var desifrovano = CryptoJS.AES.decrypt(sifrovano, code);
    try {
        var vysledek = desifrovano.toString(CryptoJS.enc.Utf8);
        if (vysledek == ""){
            throw new Error;
        } 

        const bonusContent = `
        <h2>Gratulujeme!</h2>
        <p>Našli jste bonusovou kešku a získáváte certifikát o absolvování.</p>
        <p>Kód je: <b>${code}</b></p>
        <p>Datum zobrazení je: <b>${new Date().toLocaleDateString()}</b></p>
        <p>Vaše souřadnice jsou:</p>
        <img src="nfkdavnlkbvbdsbcvjbflkvnf.png" style="width: 80%" />
        <a href=${vysledek} download=${vysledek}>Stáhnout obrázek</a>
        `;

        certifikateDiv.innerHTML = bonusContent;
    } catch (error) {
        certifikateDiv.innerHTML = "<p>Neplatný kód. Zkus to znovu. <br> <b> Možná příčina: </b> Dodržujte velká a malá písmena.</p>";
    }
});
