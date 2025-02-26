document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".container");
    let musicuina = document.querySelector(".musicuina");

    let clickRegion = document.createElement("div");
    clickRegion.classList.add("click-region");
    container.appendChild(clickRegion);

    container.addEventListener("click", function (event) {

        let rect = container.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        // Click area
        let regionX1 = 1080, regionX2 = 1200;
        let regionY1 = 255, regionY2 = 295;

        if (x >= regionX1 && x <= regionX2 && y >= regionY1 && y <= regionY2) {
            let audio = document.getElementById("audio");
            
            if (musicuina.style.display === "none" || musicuina.style.display === "") {
                musicuina.style.display = "block";
                audio.play();
            } else {
                musicuina.style.display = "none";
                audio.pause();
                audio.currentTime = 0; 
            }
            
        }
    });
});
