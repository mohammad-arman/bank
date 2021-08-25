document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    userEmail.value;
    const userPassword = document.getElementById('user-password');
    userPassword.value;
    if(userEmail.value == 'arman@bank.com' && userPassword.value == 'secret'){
        window.location.href = 'banking.html';
    }
    else{
        const hiddenText = document.getElementById("hidden-text");
        hiddenText.style.display = 'block';
    }
});

