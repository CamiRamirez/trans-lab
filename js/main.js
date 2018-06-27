function enter() {
  const pass = document.getElementById('inputPassword').value;
  if (pass.length <= 8) {
    const btnLogin = document.getElementById('btnIngresar');
    btnLogin.addEventListener('click', () => {
      document.getElementsByClassName('loginUser')[0].classList.add('btnIngresar');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
    document.getElementById('incorrectPass').innerHTML = 'La contraseña debe contener máximo 8 números.';
  }
}