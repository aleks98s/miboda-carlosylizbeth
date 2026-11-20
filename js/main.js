document.addEventListener("DOMContentLoaded", () => {

    const seal =
    document.getElementById("seal");

    const envelope =
    document.getElementById("envelope");

    const paper =
    document.getElementById("paper");

    const music =
    document.getElementById("music");

    const musicBtn =
    document.getElementById("musicBtn");

    let opened = false;

    const hero =
    document.querySelector('.hero');

    if(seal){

        seal.addEventListener("click", () => {

            if (opened) return;
        
            opened = true;
        
            seal.classList.add("break");
        
            envelope.classList.add("open");
        
            setTimeout(() => {

                paper.classList.add("open");
            
            },1200);
            
            setTimeout(() => {
            
                hero.classList.add("hide");
            
            },1800);
            
            setTimeout(() => {
            
                paper.scrollIntoView({
            
                    behavior:"smooth",
            
                    block:"start"
            
                });
            
            },2200);
        
        });

    }

    musicBtn.addEventListener("click", () => {

        if(music.paused){

            music.play();

            musicBtn.innerHTML =
            "🔇 Pausar";

        }else{

            music.pause();

            musicBtn.innerHTML =
            "🎵 Música";

        }

    });
/* ==========================
   CUENTA REGRESIVA
========================== */

const weddingDate =
new Date("2026-12-26T11:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const difference =
        weddingDate - now;

    if(difference <= 0){

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();

setInterval(updateCountdown, 1000);

});