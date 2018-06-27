function enter() {
  const pass = document.getElementById('inputPassword').value;
  if (pass.length <= 8) {
    window.open('index.html')
  } else {
    document.getElementById('incorrectPass').innerHTML = 'La contraseña debe contener máximo 8 números.';
  }
}