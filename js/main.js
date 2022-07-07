const mailList = ['user1@mail.com', 'user2@mail.com', 'user3@mail.com'];

const mail = document.getElementById('mail-in');
const submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    for (let list = 0; list < mailList.length; list++) {

        if (mail.value == mailList[list]) {
            alert('Benvenuto!');
            list = mail.value;
        } else {
            alert('Email incorretta.');
            list = mailList.length;
        }
    }

    mail.value = '';
});



