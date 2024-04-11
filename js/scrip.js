// function showLogin() {
//     document.getElementById("loginBtn").classList.add("active");
//     document.getElementById("registerBtn").classList.remove("active");
//     document.getElementById("loginForm").style.display = "block";
//     document.getElementById("registerForm").style.display = "none";
// }

// function showRegister() {
//     document.getElementById("registerBtn").classList.add("active");
//     document.getElementById("loginBtn").classList.remove("active");
//     document.getElementById("registerForm").style.display = "block";
//     document.getElementById("loginForm").style.display = "none";
// }

// function validateForm(form) {
//     var email = form.querySelector('input[name="loginEmail"]').value;
//     var password = form.querySelector('input[name="loginPassword"]').value;

//     if (email === "user123@gmail.com" && password === "12345678") {
//         window.location.href = "home.html";
//         return false;
//     } else {
//         alert("Email hoặc mật khẩu không chính xác!");
//         return false;
//     }
// }

// function validateFormRe() {
//     var name = document.getElementById("name").value;
//     var registerEmail = document.getElementById("registerEmail").value;
//     var studentId = document.getElementById("studentId").value;
//     var password = document.getElementById("registerPassword").value;

//     // Kiểm tra tên không chứa số
//     if (/\d/.test(name)) {
//         alert("Tên không được chứa số. Vui lòng nhập lại.");
//         document.getElementById("name").value = ""; // Xóa giá trị đã nhập
//         document.getElementById("name").focus(); // Đưa con trỏ vào ô nhập tên
//         return false;
//     }

//     // Kiểm tra email đúng định dạng
//     if (!validateEmail(registerEmail)) {
//         alert("Email không đúng định dạng. Vui lòng nhập lại.");
//         document.getElementById("registerEmail").value = ""; // Xóa giá trị đã nhập
//         document.getElementById("registerEmail").focus(); // Đưa con trỏ vào ô nhập email
//         return false;
//     }

//     // Kiểm tra mã sinh viên có 10 kí tự
//     if (studentId.length !== 10 || !/^[a-zA-Z0-9]+$/.test(studentId)) {
//         alert("Mã sinh viên phải có đúng 10 kí tự và chỉ chứa chữ cái và số. Vui lòng nhập lại.");
//         document.getElementById("studentId").value = ""; // Xóa giá trị đã nhập
//         document.getElementById("studentId").focus(); // Đưa con trỏ vào ô nhập mã sinh viên
//         return false;
//     }

//     // Kiểm tra mật khẩu có đủ điều kiện
//     if (password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(password)) {
//         alert("Mật khẩu phải có ít nhất 8 kí tự và chứa ít nhất một chữ in hoa, một chữ thường, một số và một kí tự đặc biệt. Vui lòng nhập lại.");
//         document.getElementById("registerPassword").value = ""; // Xóa giá trị đã nhập
//         document.getElementById("registerPassword").focus(); // Đưa con trỏ vào ô nhập mật khẩu
//         return false;
//     }

//     // Trả về true nếu không có lỗi
//     return true;
// }
// // // Đăng ký một người dùng mới với email và mật khẩu
// // firebase.auth().createUserWithEmailAndPassword(email, password)
// //   .then((userCredential) => {
// //     // Đăng ký thành công, người dùng được đăng ký sẽ được trả về
// //     var user = userCredential.user;
// //     console.log("User registered:", user);
// //   })
// //   .catch((error) => {
// //     // Xử lý lỗi khi đăng ký
// //     var errorCode = error.code;
// //     var errorMessage = error.message;
// //     console.error("Registration error:", errorMessage);
// //   });


// var registerForm = document.getElementById("registerForm");
// var courseSelectionDiv = document.getElementById("courseSelection");

// registerForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     showCourseSelection();
// });

// function showCourseSelection() {
//     document.getElementById("loginBtn").style.display = "none";
//     document.getElementById("registerBtn").style.display = "none";
//     registerForm.style.display = "none";
//     courseSelectionDiv.style.display = "block";
// }

// document.getElementById("submitCreateProfile").addEventListener("click", function(){
//     window.location.href = "home.html";
// });



// // let apiUser = "http://localhost:3000/user"

// // function Login(){
// //     getUsers(handleLogin);
// // }

// // function getUsers(callback){
// //     fetch(apiUser).then(function(res){
// //         return res.json().then(callback);
// //     });
// // }

// // function handleLogin(data){
// //     let loginEmail = document.getElementById("loginEmail").value;
// //     let loginPassword = document.getElementById("loginPassword").value;
// //     data.forEach(data => {
// //         if(data.loginEmail == loginEmail && data.loginPassword == loginPassword){
// //             alert("dang nhap thanh cong");
// //         }
// //     });
// // }

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
    var password = document.getElementById("registerPassword").value;

    // Kiểm tra tên không chứa số
    if (/\d/.test(name)) {
        alert("Tên không được chứa số. Vui lòng nhập lại.");
        document.getElementById("name").value = ""; // Xóa giá trị đã nhập
        document.getElementById("name").focus(); // Đưa con trỏ vào ô nhập tên
        return false;
    }

    // Kiểm tra email đúng định dạng
    if (!validateEmail(registerEmail)) {
        alert("Email không đúng định dạng. Vui lòng nhập lại.");
        document.getElementById("registerEmail").value = ""; // Xóa giá trị đã nhập
        document.getElementById("registerEmail").focus(); // Đưa con trỏ vào ô nhập email
        return false;
    }

    // Kiểm tra mã sinh viên có 10 kí tự
    if (studentId.length !== 10 || !/^[a-zA-Z0-9]+$/.test(studentId)) {
        alert("Mã sinh viên phải có đúng 10 kí tự và chỉ chứa chữ cái và số. Vui lòng nhập lại.");
        document.getElementById("studentId").value = ""; // Xóa giá trị đã nhập
        document.getElementById("studentId").focus(); // Đưa con trỏ vào ô nhập mã sinh viên
        return false;
    }

    // Kiểm tra mật khẩu có đủ điều kiện
    if (password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(password)) {
        alert("Mật khẩu phải có ít nhất 8 kí tự và chứa ít nhất một chữ in hoa, một chữ thường, một số và một kí tự đặc biệt. Vui lòng nhập lại.");
        document.getElementById("registerPassword").value = ""; // Xóa giá trị đã nhập
        document.getElementById("registerPassword").focus(); // Đưa con trỏ vào ô nhập mật khẩu
        return false;
    }

    // Trả về true nếu không có lỗi
    return true;
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