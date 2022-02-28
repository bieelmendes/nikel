const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();


//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email)

    if(!account){
        alert("Email ou senha está errado, verifique o login ou crie uma conta.")
        return;
    }

    if(account){
        if(account.password !== password){
            alert("Email ou senha está errado, verifique o login ou crie uma conta.")
            return;
        }

        saveSession(email, checkSession)

        window.location.href = "home.html";
    }
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5){
        alert("Email inválido, preencha o campo com um email válido.");
        return;
    }
    if(password.length < 5){
        alert("Senha muito curta, digite uma senha de 5 ou mais digitos.");
        return;
    }
    
    saveAccount({
        login: email,
        password: password,
        transactions: []
    });
    
    myModal.hide();
    alert("Conta criada com Sucesso!");
});

function checkLogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(logged){
        saveSession(logged, session)
        window.location.href = "home.html"
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data))
}

function getAccount(key){
    const account = localStorage.getItem(key);

    if(account){
        return JSON.parse(account);
    }

    return "";

}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}