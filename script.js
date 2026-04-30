const textInput = document.getElementById("custom-text");
const previewText = document.getElementById("preview-text");
const colorPicker = document.getElementById("color-picker");
const productImage = document.getElementById("product-image");
const colorOverlay = document.getElementById("color-overlay");

textInput.addEventListener("input",function(){
    previewText.textContent = textInput.value;
});

colorPicker.addEventListener("change",function(){
    productImage.style.filter = "hue-rotate(0.deg)";
});

colorPicker.addEventListener("change", function() {
    const color = colorPicker.value;

    if (color === "pink") {
        productImage.style.filter = "sepia(1) saturate(8) hue-rotate(290deg)";
    } else if (color === "yellow") {
        productImage.style.filter = "sepia(1) saturate(5) hue-rotate(20deg)";
    } else if (color === "black") {
        productImage.style.filter = "brightness(0)";
    } else if (color === "white") {
        productImage.style.filter = "brightness(1) sepia(0)";
    } else if (color === "blue") {
        productImage.style.filter = "sepia(1) saturate(8) hue-rotate(180deg)";
    }
});

colorPicker.addEventListener("change", function() {
    colorOverlay.style.backgroundColor = colorPicker.value;
});