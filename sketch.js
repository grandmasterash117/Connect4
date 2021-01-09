const playButton=document.querySelector('.playerInfo');
playButton.addEventListener('click',Player);

var board=[
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
];

var player1=[];

var player2=[];

function Player(name,colour,value)
{
   this.name=name;
   this.coinColour=colour;
   this.coinCoord=[];
   this.coinValue=value;
}
function playerName()
{
    var player1=new Player(prompt("Enter Player's name","player1"),"red",1);

    if(player1.name==null||player1.name=="")
    {
       player1.name="player1";
    }

    if(player2.name==null||player2.name=="")
    {
       player2.name="player1";
    }

    return[player1,player2];
}

