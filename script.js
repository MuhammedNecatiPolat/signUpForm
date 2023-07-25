const signInButton = document.getElementById('sign-in');
signInButton.addEventListener('click', () => {
    const form = document.getElementById('form');
    if (!form.checkValidity()){
        form.reportValidity();
        return;
    };

    const password = document.getElementById('password').value;
    const confirmationPassword = document.getElementById('confirmation-password').value;
    const passwordSpan = document.getElementById('password-span');
    if (password === confirmationPassword && password.length > 0) {
        passwordSpan.classList.remove('invalid');
        alert('You are signed in.');
    } else {
        passwordSpan.classList.add('invalid');
    }
});


