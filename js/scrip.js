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

function validateForm(form) {
    var email = form.querySelector('input[name="loginEmail"]').value;
    var password = form.querySelector('input[name="loginPassword"]').value;

    if (email === "user123@gmail.com" && password === "12345678") {
        window.location.href = "home.html";
        return false;
    } else {
        alert("Email hoặc mật khẩu không chính xác!");
        return false;
    }
}

function validateFormRe() {
    var name = document.getElementById("name").value;
    var registerEmail = document.getElementById("registerEmail").value;
    var studentId = document.getElementById("studentId").value;
    var password = document.getElementById("Registerpassword").value;

    if (studentId.length !== 10 || !/^[a-zA-Z0-9]+$/.test(studentId)) {
        alert("Mã sinh viên phải có đúng 10 kí tự và chỉ chứa chữ cái và số.");
        return false;
    }
    if (password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(password)) {
        alert("Mật khẩu phải có ít nhất 8 kí tự và chứa ít nhất một chữ in hoa, một chữ thường, một số và một kí tự đặc biệt.");
        return false;
    }
    return false;
}


var registerForm = document.getElementById("registerForm");
var courseSelectionDiv = document.getElementById("courseSelection");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    showCourseSelection();
});

function showCourseSelection() {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("registerBtn").style.display = "none";
    registerForm.style.display = "none";
    courseSelectionDiv.style.display = "block";
}

document.getElementById("submitCreateProfile").addEventListener("click", function(){
    window.location.href = "home.html";
});