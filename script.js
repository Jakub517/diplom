const codeInput = document.getElementById("codeInput");
const generateButton = document.getElementById("generateButton");
const certifikateDiv = document.getElementById("certifikate");

generateButton.addEventListener("click", () => {
    const code = codeInput.value;
    var sifrovano = "U2FsdGVkX18HOm/6iglkh92eb/ghzyGaFg0UL5fOyPqD4khggn+Lqkd50GrA6RR0"
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
        <p>diplom je:</p>
        <img src="nfkdavnlkbvbdsbcvjbflkvnf.png" style="width: 80%" />
        <p><b>Pokud  se diplom objeví v logu, bude log smazán.</b></p>
        <a href=${vysledek} download=${vysledek}>Stáhnout obrázek</a>
        `;

        certifikateDiv.innerHTML = bonusContent;
    } catch (error) {
        certifikateDiv.innerHTML = "<p>Neplatný kód. Zkuste to znovu. <br> <b> Možná příčina: </b> Dodržujte velká a malá písmena.</p>";
    }
});
