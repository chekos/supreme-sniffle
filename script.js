function captureCard() {
    html2canvas(document.getElementById("card")).then(function(canvas) {
        // Appending the canvas directly to the body
        document.body.appendChild(canvas);
    });
}
