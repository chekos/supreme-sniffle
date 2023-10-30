function captureCard() {
    html2canvas(document.getElementById("card")).then(function(canvas) {
        // Convert the canvas to a data URL
        var imgData = canvas.toDataURL();

        // Create a downloadable link and append it to the document
        var link = document.createElement('a');
        link.href = imgData;
        link.download = 'captured-card.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
