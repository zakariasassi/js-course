let userName = document.getElementById('name');
let password = document.getElementById('password');
let email = document.getElementById('email');

let btn = document.getElementById('btnRe');

btn.onclick = _  => {
    
    localStorage.setItem(userName.value ,  JSON.stringify({
                    na : userName.value,
                    pa: password.value,
                    em : email.value,
                }))
        alert("you are now logged in")
}
let obj = localStorage.key(userName.value)
console.log( JSON.parse( localStorage.getItem(obj)))
