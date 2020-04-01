var txtEmail, txtPass;
var btnLogIn;
var popupEmail, popupPass;

const username = "khoanguyen1507dn@gmail.com"
const password = "khoanguyen1507dn.."
function addElements()
{
    txtEmail = document.getElementById("txtEmail");
    txtPass = document.getElementById("txtPass");
    btnLogIn = document.getElementById("btnLogIn");
    popupEmail = document.getElementById("popupEmailError");
    popupPass = document.getElementById("popupPassError");
}

function addEvents()
{
    btnLogIn.addEventListener("click", btnLogIn_OnClick);
    txtEmail.addEventListener("focus",() =>{
        txtEmail.classList.remove("text-error");
        popupEmail.classList.remove("show");
    });
    txtPass.addEventListener("focus", ()=>{
        txtPass.classList.remove("text-error");
        popupPass.classList.remove("show");
    })
}

function btnLogIn_OnClick()
{
    console.log("Log in");
    const email = txtEmail.value;
    const pass = txtPass.value;
    if(validEmail_Full(email) == false)
    {
        popupEmail.innerHTML = "Please enter a valid email address.";
        txtEmail.classList.add("text-error");
        popupEmail.classList.add("show");
        return;
    }
    if(validPass(pass) == false)
    {
        popupPass.innerHTML = "Please enter a valid password.";
        txtPass.classList.add("text-error");
        popupPass.classList.add("show");
        return;
    }
    if(validAccount(email, pass) == true)
    {
        window.alert("Log in success!")
    }
    else{
        if(email != username)
        {
            txtEmail.classList.add("text-error");
            popupEmail.innerHTML = "We cannot find you email. Try again!";
            popupEmail.classList.add("show");
        }    
        if(pass != password)
        {
            txtPass.classList.add("text-error");
            popupPass.innerHTML = "Wrong password. Try again!";
            popupPass.classList.add("show");
        }
    }
}

function main()
{
    addElements();
    addEvents();
}

main();
