const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("sesseion")

checkLogged();

// logar no sistema

document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email)

    if(!account) {
        alert("Opps conta inexistente, verifique o usuário ou a senha.")
        return;
    }

    if(account){
        if(account.password !== password){
            alert("Opps conta inexistente, verifique o usuário ou a senha.")
            return;
        }
        
        saveSession(email, checkSession)

        window.location.href = "home.html"
    }
    
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5 ){
        alert("Preencha o campo com email válido.")
        return;
    }

    if(password.length < 4) {
        alert("Preencha com no mínimo 4 digitos.")
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert("Conta criada com sucesso")        
})

function checkLogged() {
    if (session){
        sessionStorage.setItem("logged", session);
        logged = session;

    }
    if(logged) {
        saveSession(logged, session)

        window.location.href = "home.html"
    }
}

// salvar conta no local storage
function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data))
}
// salvar sessao no local storage
function saveSession(data, saveSession) {
    if(saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data)
}
// atribui o criar conta a uma local storage
function getAccount(key) {
    const account = localStorage.getItem(key)

    if(account) {
        return JSON.parse(account);
    }

    return "";
}

