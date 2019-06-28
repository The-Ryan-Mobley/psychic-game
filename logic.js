var list =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins =0;
var loss =0;
document.onkeyup = function (event){
    var comp = list[Math.floor(Math.random() * list.length)];
    var userGuess = event.key.toLowerCase();
    
    if(userGuess === comp){
        alert("You Win!!");
        wins++;
        alert("total wins: " + wins + "Total losses: " + loss);
    }
    else{
        alert("YOU LOSE!!!!!!");
        loss++;
    }
}