function captureCard() {
    html2canvas(document.getElementById("card")).then(function(canvas) {
        // Convert the canvas to a data URL and open it in a new window
        window.open(canvas.toDataURL());
    });
}
