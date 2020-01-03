/*
GAME RULES:

- Add an input field to the HTML where players can set the winning score,so that they can change the predefined score of 
  100.(hint:you can read that value with the .value property in javascript.this is an good oppurtunity to use google to figure 
    this out.:)
*/

var scores,roundScore,activePlayer,gameplay,roll6,winscore;

init();


function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gameplay=true;
    
    
    //roll6=prompt('what is the winning score');
    document.querySelector('.dice').style.display='none';
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
        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+dice+'.png';
        
    
        /*if(dice===6 && roll6===6){

            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }*/
        if(dice!==1){

            roundScore+=dice;
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
           // console.log(dice);
        }else{
            nextPlayer();

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
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gameplay=false;
    }else{
    nextPlayer();
    }
}

});

document.querySelector('.btn-new').addEventListener('click',init)