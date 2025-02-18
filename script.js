document.querySelector(".container").addEventListener("click", function(event) {
    console.log("click detectado en el container")
    let container = event.currentTarget;
    let rect = container.getBoundingClientRect(); 

    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top;  

    // Click area
    let regionX1 = 1080, regionX2 = 1200; 
    let regionY1 = 255, regionY2 = 295; 

    if (x >= regionX1 && x <= regionX2 && y >= regionY1 && y <= regionY2) {
        let audio = document.getElementById("audio");
        audio.play();
    }
});
