(function(){
    'use strict';
    console.log("reading JS");

    const mixcards =document.getElementById('mix');
    const musicbackground =document.getElementById("backgroundmusi");
    const winwin =document.getElementById("winwin");

    const playButton = document.getElementById('playgame');
    const instructionButton = document.getElementById('Instruction');
    const inGameArticle = document.getElementById('ingame');
    const gameControl = document.querySelector('#gamecontrol');
    const actionArea = document.querySelector('#actions');
    const game = document.querySelector('#game');
    const player1Score =document.getElementById('player1Score');
    const player2Score =document.getElementById('player2Score');
    
    const gameData = {
        canSelect: true,
        index: 1,
        selectedCards: [],
        score: [0, 0],
        players: ['Player 1', 'Player 2'],
        cardFaces: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png'],
    };

    instructionButton.addEventListener('click', function(){
        document.getElementById('overlay').style.display = 'block';
    });
    document.querySelector('.closeButton').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none';
    });


    playButton.addEventListener('click', function(){
        dealCards();
        playerScores.style.display="block";

    });


    function dealCards() {
        musicbackground.play();
        musicbackground.volume=0.3;
        musicbackground.loop=true;

        document.getElementById("home").src='images/1PigCardGame.png';

        
        player1Score.style.display="block";
        player2Score.style.display="block";

        playButton.style.display = "none";
        instructionButton.style.display = "none";

        inGameArticle.style.display = "block";
        
        inGameArticle.innerHTML = '<h2 id="score"></h2><h2 id="scoreme"></h2>';


        const row1 = document.createElement('div'); 
        const row2 = document.createElement('div');
        row1.className = 'card-row1';
        row2.className = 'card-row2';

        inGameArticle.appendChild(row1);
        inGameArticle.appendChild(row2);

        for (var i=0; i<6; i++){
            let img = document.createElement('img');
            img.src = "images/7.png";
            img.className = 'card';
            img.dataset.cardIndex = i;
            
            img.addEventListener('click', function() {
                selectCard(img, i);
            });
           
            if (i < 3) {
                row1.appendChild(img); 
            } else {
                row2.appendChild(img);
            }
    }
        
        gameControl.innerHTML += '<button id="quit">Restart</button>';
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        })

        gameData.index = Math.round(Math.random());
        game.innerHTML = `<p id="turn">Choose two cards for ${gameData.players[gameData.index]} or Pass</p>`;
        actionArea.innerHTML = '';
}

    

    function selectCard(cardElement, cardIndex) {
        if (!gameData.canSelect || cardElement.hasAttribute('data-revealed')) {
            return; 
        }
    
        if (gameData.selectedCards.length < 2) {
            cardElement.setAttribute('data-revealed', 'true');
            revealCard(cardElement, cardIndex);
            gameData.selectedCards.push(cardIndex);
            console.log(`Card ${cardElement} selected`);
    
            if (gameData.selectedCards.length === 2) {
                console.log("Two cards selected, processing...", gameData.selectedCards);
                gameData.canSelect = false;
    
                setTimeout(() => {
                    processSelectedCards(); 
                  
                    gameData.selectedCards = [];
                    gameData.canSelect = true; 
                    document.querySelectorAll('.card').forEach(card => {
                        card.removeAttribute('data-revealed');
                    });
                }, 1000); 
            }
            
        }
    }
    

    function revealCard(cardElement, cardIndex) {
        const randomIndex = Math.floor(Math.random() * 6); 
        cardElement.src = gameData.cardFaces[randomIndex];
        cardElement.setAttribute('data-value', randomIndex + 1); 
    }


    function processSelectedCards() {
        const selectedCardsElements = document.querySelectorAll('.card[data-revealed="true"]');
        const values = Array.from(selectedCardsElements).map(card => parseInt(card.getAttribute('data-value')));
        
        gameData.canSelect = true; 
        gameData.selectedCards = []; 
        
        if (values.includes(1)) {
            if (values.length === 2 && values.every(val => val === 1)) {
                mixcards.play();
                gameData.score[gameData.index] = 0;
                alert(`${gameData.players[gameData.index]} selected two Aces! Score reset to 0.`);
            } else {
                mixcards.play();
            }
            switchPlayer(); 
        } else {
            const roundScore = values.reduce((acc, val) => acc + val, 0);
            gameData.score[gameData.index] += roundScore;
            game.innerHTML = `<p id="turn">Choose two cards for ${gameData.players[gameData.index]} or Pass</p>`;

            actionArea.innerHTML = '<button id="pass">Pass</button>';

            function handlePassClick() {
                switchPlayer();
                document.getElementById('pass').removeEventListener('click', handlePassClick);
            }
            
            document.getElementById('pass').addEventListener('click', handlePassClick);           





            if (gameData.score[gameData.index] > 30) {
                alert(`${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`);
                winwin.play();
                resetGame(); 
                document.getElementById('pass').style.display="none";
            }
        }
        
       
        selectedCardsElements.forEach(card => {
            card.removeAttribute('data-revealed');
            card.src = "images/7.png"; 
        });
        
        showCurrentScore(); 
    }
    
    function switchPlayer() {
        gameData.index = gameData.index === 0 ? 1 : 0;
        game.innerHTML = `<p id="turn1">Switching turns to ${gameData.players[gameData.index]}...</p>`;
    }
    

    function showCurrentScore() {
        const player1ScoreElement = document.getElementById('player1Score');
        const player2ScoreElement = document.getElementById('player2Score');
        
        if (player1ScoreElement) {
            player1ScoreElement.innerHTML = gameData.score[0];
        }
        
        if (player2ScoreElement) {
            player2ScoreElement.innerHTML = gameData.score[1];
        }
    }
    
    function resetGame() {
        document.getElementById('quit').innerHTML="start a new game?";
        gameData.score[0]=0;
        gameData.score[1]=0;
    
    }

})();