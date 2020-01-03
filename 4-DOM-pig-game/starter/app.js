/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,gameplay;
init();

//document.querySelector('#score-0').textContent = dice;
//document.querySelector('#current-'+ activePlayer).textContent =dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+ dice+'</em>';

//var x=document.querySelector('#score-1').textContent;
//console.log(x);
    //do something here

//}
//btn();


//document.querySelector('.btn-roll').addEventListener('click',btn) // callback funtion

// CALLBACK FUNCTION:A FUNCTION THAT WE PASS INTO ANOTHER FUNCTION, AS AN ARGUMENT , AND THIS FUNCTION(EVENT LISTENER) WILL THEN CALL 
//THAT FUNCION FOR US
/********************************************************************************************************************************************************************
 * ANONYMOUS FUNCTION: A FUNCTION THAT DOES NOT HAVE A NAME SO IT CANNOT BE REUSED.WE CAN JUST WRITE FUNCTION KEYWORD AS ARGUMENT .
*/
document.querySelector('.btn-roll').addEventListener('click',function(){
    if (gameplay){
         //1. Random Number
    var dice=Math.floor(Math.random()*6)+1;
    
    //2.display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src = 'dice-'+ dice +'.png ';
    //3. To update the round Score if the rolled no. was not a 1
    if(dice!== 1){
        //Add score
        roundScore+=dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;
    }else{
        nextPlayer();
    }

    }
   
}); 

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplay){
        //1.add current score to global score
    scores[activePlayer]+=roundScore;

    //2.update the UI
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
    

    //3.check if player won the game
    if(scores[activePlayer]>=100){
        document.querySelector('#name-' + activePlayer).textContent='WINNER!!!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gameplay=false;
    }else{
        nextPlayer();
    }


    }
    



})

function nextPlayer(){
    //Next player
    activePlayer=== 0? activePlayer=1 : activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

   // document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';


}
document.querySelector('.btn-new').addEventListener('click',init)

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;

    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gameplay=true;
}







//STATE VARIABLE:STATE VARIABLE SIMPLY TELLS THE CONDITION OF A SYSTEM