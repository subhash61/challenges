/*
GAME RULES:

- Add another dice to the game,so that there are two dices now.The player looses his current score when one of them is a 1.
(Hint :you will need CSS to position the second dice,so take a look at the CSS code for the first one.)*/

var scores,roundScore,activePlayer,gameplay,roll6,winscore;

init();


function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gameplay=true;
    
    
    //roll6=prompt('what is the winning score');
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice2').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';
    






}
document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gameplay){



        
        
        var dice=Math.floor(Math.random()*6)+1;
        var dice2=Math.floor(Math.random()*6)+1;

        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+dice+'.png';
        document.querySelector('.dice2').style.display='block';
        document.querySelector('.dice2').src='dice-'+dice2+'.png';
        
    
        /*if(dice===6 && roll6===6){

            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }*/
        if(dice!==1 && dice2!==1){

            roundScore+=dice+dice2;
        
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
            console.log(dice);
            console.log(dice2);
        }else{
            nextPlayer();
            console.log(dice);
            console.log(dice2);


        }
    //roll6=dice;
    
    

}
}
);

function nextPlayer(){
    //next player
    activePlayer!==1?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('.dice').style.display='none';   
    document.querySelector('.dice2').style.display='none';   
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');



}

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplay){
    
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    roll6=document.querySelector('.Final-Score').value;
    if(roll6){
        winscore=roll6;
    }else{
        winscore=50;
    }
    if(scores[activePlayer]>=winscore){
        document.querySelector('#name-'+activePlayer).textContent='WINNER!!!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.dice2').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gameplay=false;
    }else{
    nextPlayer();
    }
}

});

document.querySelector('.btn-new').addEventListener('click',init)