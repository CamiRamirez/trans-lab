function enter() {
  const mail = document.getElementById("inputEmail");
  const pass = document.getElementById('inputPassword').value;
  window.localStorage.setItem("mail", JSON.stringify(inputEmail));
  if (pass.length <= 8) {
    window.open('index.html')
  } else {
    document.getElementById('incorrectPass').innerHTML = 'La contraseña debe contener máximo 8 números.';
  }
}

/* funcion para ingresar numero de tarjetas */

const boton = document.getElementById("agreeCard");
boton.addEventListener("click", () => {
  //para guardar tarjeta ingresado por el usuario
  let cards = document.getElementById("inputCards").value;
  //contenedor donde dejare mis tarjetas en html
  const containerCard = document.getElementById("containerCards");
  //crear un div contenedor de todos las nuevas tarjetas
  const newCards = document.createElement("div");
  //esto crea un nodo donde ira la tarjeta
  let textNewCards = document.createTextNode(cards);
  //esta variable crea un parrafo que contiene la tarjeta ingresada
  const contenedorElement = document.createElement("p");
  //aqui declaramos que la variable texNewCards es hijo del contenedorElement
  contenedorElement.appendChild(textNewCards);
  //y aqui declaramos que contenedorElement es hijo de newCards (el div donde iran los parrafos con los numeros ingresados)
  newCards.appendChild(contenedorElement);
  //y por ultimo declaramos que newCards es hijo de containerCard, donde va todo lo anterior(dentro de un col-12)
  containerCard.appendChild(newCards);
});

