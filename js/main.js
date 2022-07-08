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
const number = [1, 2, 3, 4, 5, 6];
let player1;
let player2;
let cubeP1 = document.getElementById('dice-1');
let cubeP2 = document.getElementById('dice-2');
let faceP1 = document.querySelectorAll('.face-P1');
let faceP2 = document.querySelectorAll('.face-P2');
let result = document.getElementById('result');

play.addEventListener('click', function() {
    cubeP1.classList.add('anim-start');
    cubeP2.classList.add('anim-start');
    result.style.display = 'none';

    for (let x = 0; x < number.length; x++) {
        player1 = Math.floor((Math.random() * number.length) + 1);
        player2 = Math.floor((Math.random() * number.length) + 1);
    }

    if (player1 == 1) {
        faceP1[0].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP1[1].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP1[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP1[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP1[4].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP1[5].style.transform = 'rotateX(-180deg) translateZ(100px)';
    } else if (player1 == 2) {
        faceP1[0].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP1[1].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP1[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP1[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP1[4].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP1[5].style.transform = 'rotateY(90deg) translateZ(100px)';
    } else if (player1 == 3) {
        faceP1[0].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP1[1].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP1[2].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP1[3].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP1[4].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP1[5].style.transform = 'rotateY(90deg) translateZ(100px)';
    } else if (player1 == 4) {
        faceP1[0].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP1[1].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP1[2].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP1[3].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP1[4].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP1[5].style.transform = 'rotateY(-90deg) translateZ(100px)';
    } else if (player1 == 5) {
        faceP1[0].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP1[1].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP1[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP1[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP1[4].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP1[5].style.transform = 'rotateY(-90deg) translateZ(100px)';
    } else if (player1 == 6) {
        faceP1[0].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP1[1].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP1[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP1[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP1[4].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP1[5].style.transform = 'rotateX(0deg) translateZ(100px)';
    }

    if (player2 == 1) {
        faceP2[0].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP2[1].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP2[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP2[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP2[4].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP2[5].style.transform = 'rotateX(-180deg) translateZ(100px)';
    } else if (player2 == 2) {
        faceP2[0].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP2[1].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP2[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP2[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP2[4].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP2[5].style.transform = 'rotateY(90deg) translateZ(100px)';
    } else if (player2 == 3) {
        faceP2[0].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP2[1].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP2[2].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP2[3].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP2[4].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP2[5].style.transform = 'rotateY(90deg) translateZ(100px)';
    } else if (player2 == 4) {
        faceP2[0].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP2[1].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP2[2].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP2[3].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP2[4].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP2[5].style.transform = 'rotateY(-90deg) translateZ(100px)';
    } else if (player2 == 5) {
        faceP2[0].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP2[1].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP2[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP2[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP2[4].style.transform = 'rotateX(0deg) translateZ(100px)';
        faceP2[5].style.transform = 'rotateY(-90deg) translateZ(100px)';
    } else if (player2 == 6) {
        faceP2[0].style.transform = 'rotateX(-180deg) translateZ(100px)';
        faceP2[1].style.transform = 'rotateY(-90deg) translateZ(100px)';
        faceP2[2].style.transform = 'rotateX(90deg) translateZ(100px)';
        faceP2[3].style.transform = 'rotateX(-90deg) translateZ(100px)';
        faceP2[4].style.transform = 'rotateY(90deg) translateZ(100px)';
        faceP2[5].style.transform = 'rotateX(0deg) translateZ(100px)';
    }
});

cubeP1.addEventListener('animationend', function() {
    cubeP1.classList.remove('anim-start');

    console.log('Player 1: ' + player1);
    console.log('Player 2: ' + player2);

    let content
    if (player1 > player2) {
        content = 'Hai vinto!';
    } else if (player1 == player2) {
        content = 'Pareggio.';
    } else {
        content = 'Hai perso, ritenta...';
    }

    result.style.display = 'block';
    result.innerHTML = content;
});

cubeP2.addEventListener('animationend', function() {
    cubeP2.classList.remove('anim-start');
});