function showLogin() {
    document.getElementById("loginBtn").classList.add("active");
    document.getElementById("registerBtn").classList.remove("active");
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
    document.getElementById("registerBtn").classList.add("active");
    document.getElementById("loginBtn").classList.remove("active");
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}
document.getElementById("submitLoginBtn").addEventListener("click", function() {
    window.location.href = "home.html";
  });
  