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
        <p><b>Prosím, nedávejte si diplom do logu. Toto pravidlo z důvodu, aby i ostatní hráči prošli sérií a zaslouženě obdrželi diplom místo toho, aby ho pouze stáhli z logu, aniž by pro to něco udělali.</b></p>
        <p><b>Pokud by se přes toto varování stále objevovaly diplomy v logu, budeme nuceni provést smazání celého vašeho logu.</b></p>
        <a href=${vysledek} download=${vysledek}>Stáhnout obrázek</a>
        `;

        certifikateDiv.innerHTML = bonusContent;
    } catch (error) {
        certifikateDiv.innerHTML = "<p>Neplatný kód. Zkuste to znovu. <br> <b> Možná příčina: </b> Dodržujte velká a malá písmena.</p>";
    }
});
