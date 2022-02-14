
document.getElementById('login-btn').addEventListener('click',function (e){
    e.preventDefault();
    const userEmail = document.getElementById('input-email').value;
    const userPass = document.getElementById('input-pass').value;
    console.log(userEmail,userPass)
    if(userEmail=='avirup@gmail.com' && userPass=='1234'){
        window.location.href = 'bank.html';
    }else{
        console.log("wrong pass")
    }
})

