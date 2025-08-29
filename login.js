function login() {
  var predefinedUsername = "Qwerty";
  var predefinedPassword = "123456789";
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if (u === predefinedUsername && p === predefinedPassword) {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Ivalid Username or Password";
  }
}
