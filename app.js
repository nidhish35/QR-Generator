apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const input = document.getElementById("input");
const button = document.getElementById("generate");
const qr = document.getElementById("qr-code");
const qrImg = document.getElementById("qr-image");

function getQr() {
    qr.src = apiUrl + input.value;
    qrImg.classList.add("show-img");
}

button.addEventListener("click", () => {
    getQr();
});