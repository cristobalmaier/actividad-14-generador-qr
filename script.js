let qrInstance = null;
// Genera el QR con los datos ingresados
function generateQR() {
    const link = document.getElementById('link').value.trim();
    const color = document.getElementById('color').value;
    const size = parseInt(document.getElementById('size').value);

    if (!link) {
        alert("Por favor, pegá una URL válida.");
        return;
    }
    // Limpia el QR previo (si existe)
    document.getElementById('qrcode').innerHTML = "";
    // Crea un nuevo QR
    qrInstance = new QRCode(document.getElementById('qrcode'), {
        text: link,
        width: size,
        height: size,
        colorDark: color,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // Alta corrección
    });
}
// Descarga el QR como imagen PNG
function downloadQR() {
    const img = document.querySelector('#qrcode img') || document.querySelector('#qrcode canvas');
    if (!img) {
        alert("Primero generá el QR 😉");
        return;
    }
    // Si es canvas, convertir a PNG
    let dataUrl;
    if (img.tagName.toLowerCase() === 'canvas') {
        dataUrl = img.toDataURL("image/png");
    } else {
        dataUrl = img.src; // si es img, usar src
    }
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = "mi_codigo_qr.png";
    link.click();
}