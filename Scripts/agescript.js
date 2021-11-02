//Challenge 1 : Age in Days.

function ageInDays() {
    var birthyear = prompt("Enter Your BirthYear :");
    var res = 2021-birthyear;
    res = res*365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + res +' days old');

   h1.setAttribute('id','res');
   h1.appendChild(textAnswer);
   document.getElementById('flexbox-results').appendChild(h1);

}

function reset() {
    document.getElementById('res').remove();
}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('cat-screen');
   image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  
    div.appendChild(image);
}

//Todo: Rock , paper Scissors main Functions Starts from Here.

function rpsGame(yourChoice) {
    console.log(yourChoice);
    console.log(yourChoice.src);
    var humanChoice,botChoice;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
   console.log('computer Choice: ',botChoice);

    results = decideWinner(humanChoice, botChoice); 

    console.log(results);
    message = finlaMessage(results);

    console.log(message);

    rpsFrontend(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,computerChoice) {
    var rpsDatabase = {
        'rock' : {'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'rock': 0, 'paper': 1, 'scissors': 0.5},
    }
    var yourScore, computerScore;

    yourScore = rpsDatabase[yourChoice][computerChoice];
    computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}
function finlaMessage([yourScore]) {
    if(yourScore === 0){
        return {'Message': 'You Lost The Game!', 'color': 'red'};   
    }
    else if(yourScore === 0.5){
        return {'Message': 'Game Draw!', 'color': 'yello'};   
    }
    else{
        return {'Message': 'You Won The Game!', 'color': 'green'};   
    }
}

function rpsFrontend(humanImageChoice, botImageChoice, finlaMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //! Let's remove all the images after selection one choice.
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    //! Now let's what you chosed and what did computer chosed.

    var humanDiv, computerDiv, messageDiv;

    humanDiv =  document.createElement('div');
    computerDiv =  document.createElement('div');
    messageDiv =  document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=200 width=200  style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h2 style='color: "+finlaMessage['color'] +"; font-size: 60px; padding: 30px; '>" + finlaMessage['Message'] + "</h2>"
    computerDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(computerDiv);
}

//! Chalange 4: Change the color of all buttons.
var all_buttons = document.getElementsByTagName('button');

var copy_allbuttons = [];
for (let i=0; i<all_buttons.length; i++){
    copy_allbuttons.push(all_buttons[i].classList[1]);
}
console.log(copy_allbuttons);


function buttonColorChage(buttonThingy) {
    if(buttonThingy.value === 'red') {
        buttonsRed();
    }
    else if(buttonThingy.value ==='green') {
        buttonsGreen();
    }
    else if(buttonThingy.value ==='reset') {
        buttonsReset();
    }
    else if(buttonThingy.value ==='random') {
        buttonsRandom();
    }   
}

function buttonsRed() { //? To make color of  all  buttons red.
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsGreen() {
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonsReset() {
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copy_allbuttons[i]);
    }
}
function buttonsRandom() {
   var choices = ['btn-primary', 'btn-danger', 'btn-success',   'btn-warning', ];

   for(let i=0; i<all_buttons.length; i++){
       var randomNumber  = Math.floor(Math.random() * 4);
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(choices[randomNumber]);
   }
}
