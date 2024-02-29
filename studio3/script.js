(function(){
    'use strict';
    console.log("reading js");

    const startButton = document.getElementById('startgame');
    const instructionButton = document.getElementById('Instruction');

    const images =
    ['images/PigCardGame-1.png'];

    document.getElementById("startgame").addEventListener('click', function(){
        document.getElementById("home").src='images/PigCardGame-1.png'

        startButton.style.display = "none";
        instructionButton.style.display = "none";

        document.getElementById('ingame').style.display="block";
    });
    
})();