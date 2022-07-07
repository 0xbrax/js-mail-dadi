const mail = document.getElementById('mail-in');
const submit = document.getElementById('submit');

const mailList = ['user1@mail.com', 'user2@mail.com', 'user3@mail.com'];
let success = false;

submit.addEventListener('click', function() {
    for (let list = 0; list < mailList.length; list++) {
        if (mail.value == mailList[list]){
            success = true;
        }
    }

    if (success == false) {
        alert('Email incorretta');
    } else {
        alert('Benvenuto ' + mail.value + '!');
    }

    mail.value = '';
});



const play = document.getElementById('play-game');

const number = ['1', '2', '3', '4', '5', '6'];
let player1;
let player2;

play.addEventListener('click', function() {
    for (let x = 0; x < number.length; x++) {
    }

    player1 = Math.floor((Math.random() * number.length) + 1);
    player2 = Math.floor((Math.random() * number.length) + 1);

    console.log('Player 1: ' + player1);
    console.log('Player 2: ' + player2);

    if (player1 > player2) {
        alert('Hai vinto!');
    } else if (player1 == player2) {
        alert('Pareggio.');
    } else {
        alert('Hai perso, ritenta...');
    }
});