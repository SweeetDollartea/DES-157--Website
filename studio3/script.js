(function(){
    'use strict';
    console.log("reading JS");

    const playButton = document.getElementById('playgame');
    const instructionButton = document.getElementById('Instruction');
    const inGameArticle = document.getElementById('ingame');

    const images =
    ['images/PigCardGame-1.png'];

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');
  
    const gameData = {
        dice: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };    
 
    playButton.addEventListener('click', function(){
        document.getElementById("home").src='images/PigCardGame.png';

        playButton.style.display = "none";
        instructionButton.style.display = "none";

        inGameArticle.style.display = "block";
        //clears content
        inGameArticle.innerHTML = '<h2 id="score"></h2><h2 id="scoreme"></h2>';

        startGame.style.display="block";
        // startGame.innerHTML= "";

        const row1 = document.createElement('div'); //make rows for the cards
        const row2 = document.createElement('div');
        row1.className = 'card-row1';
        row2.className = 'card-row2';

        inGameArticle.appendChild(row1);
        inGameArticle.appendChild(row2);

        for (var i=0; i<2; i++){
            let img = document.createElement('img');
            img.src = "images/7.png";
            img.className = 'card';
           
            if (i < 2) {
                row1.appendChild(img); 
            } else {
                row2.appendChild(img);
            }
    }


    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random()); //math.random is any number that is from 0-0.99. math.round rounds up the random number
        console.log(gameData.index);

        // gameControl.innerHTML +='<h2>The game has started</h2>'
        gameControl.innerHTML += '<button id="quit">Restart</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });
        setUpTurn();            
        });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML='<button id="roll">Roll the Dice</button>';
        document.getElementById("roll").addEventListener('click', function(){
            throwDice();
        });
    }    

    function throwDice(){
        
        actionArea.innerHTML="";
        gameData.roll1 = Math.floor(Math.random()* 6) +1; //adding one because the math.random could result to 0 and have to add one to ge the value 1-6
        gameData.roll2 = Math.floor(Math.random()* 6) +1;


        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<div class="card">
            <div class="card-back"><img src="images/7.png" alt="Card Back"></div>
            <div class="card-front"><img src="${gameData.dice[gameData.roll1-1]}" alt="Card Front"></div>
        </div>`;
        game.innerHTML += `<div class="card">
            <div class="card-back"><img src="images/7.png" alt="Card Back"></div>
            <div class="card-front2"><img src="${gameData.dice[gameData.roll2-1]}" alt="Card Front1"></div>
        </div>`;   
        

        document.querySelectorAll('.card').forEach(card => {
            card.classList.add('flipped');
            gameData.rollSum= gameData.roll1+gameData.roll2;
            console.log(gameData.rollSum);
        });
    
    // Display the cards for the current player
    // game.innerHTML = `<p>Flipping cards for ${gameData.players[gameData.index]}</p>` + card1 + card2;

    
        if (gameData.rollSum ===2){
            game.innerHTML += '<p>oh snap! Snake Eyes!</p>';
            gameData.score[gameData.index]=0;
            gameData.index ? (gameData.index=0) : (gameData.index=1);
            showCurrentScore();
            setTimeout(setUpTurn,2000);
        }

        else if(gameData.roll1 === 1 || gameData.roll2 ===1){
            gameData.index ? (gameData.index =0) : (gameData.index =1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]} </p>`;
            setTimeout(setUpTurn,2000);
        } 
        else  {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML='<button id="rollagain">Roll Again</button> or <button id ="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index =0) : (gameData.index =1);
                setUpTurn();
            });
            checkwinningcondition();
        }
    }
    
    
        function checkwinningcondition(){
            if (gameData.score[gameData.index]>gameData.gameEnd){
                score.innerHTML= `<h2>${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML='';
                document.getElementById('quit').innerHTML="start a new game?";
            }
            else {
                showCurrentScore();
            }
        }

        function showCurrentScore(){
            score.innerHTML=`<p>The score is currently <strong>${gameData.players[0]}</p>
            ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
            ${gameData.score[1]}</strong></p>`;
        }
});
})();
