

console.log("welcome to apple music");

let play = document.getElementById("0");
            function playMusic() {
             let audio = new Audio("songs/1.mp3");
             audio.play()
          }

          function pauseMusic(){
            audio.pause();
          }

          play.addEventListener("click", playMusic);
