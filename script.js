alert("Script loaded");const photoInput = document.getElementById("photo");
const preview = document.getElementById("preview");
const nameInput = document.getElementById("name");
const username = document.getElementById("username");
const flyer = document.getElementById("flyer");

photoInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
});

function generateFlyer() {

    if (!preview.src) {
        alert("Please upload your picture.");
        return;
    }

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    username.innerHTML = nameInput.value.toUpperCase();

    flyer.style.display = "block";
}

function downloadFlyer() {

    html2canvas(flyer,{
        useCORS:true,
        scale:3
    }).then(function(canvas){

        const link = document.createElement("a");

        link.download = "RGIW-Flyer.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });
