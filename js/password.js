document.getElementById("toggle-password").addEventListener("click" , () => {
const passwordfiled = document.getElementById("password");
if(passwordfiled.type == "password") {
    passwordfiled.type = "text"
}else {
    passwordfiled.type = "password";
}
});