// 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
// 2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//     2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.

let img = document.querySelectorAll("img");
let parrafo = document.querySelectorAll("p");
let article = document.querySelectorAll("article");
let section = document.querySelectorAll("section");
// COMO HAGO EL PREVENT

function cambiar_imagen(e) {
  let magic = Math.floor(Math.random() * 6) + 1;
  img[e].src = `./assets/magic-${magic}.gif`;
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function () {
    cambiar_imagen(i);
  });
}
//     2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

function cambiar_fondo_color(e) {
  parrafo[e].style.color = generarNuevoColor();
  parrafo[e].style.background = generarNuevoColor();
}

for (let i = 0; i < parrafo.length; i++) {
  parrafo[i].addEventListener("click", function () {
    cambiar_fondo_color(i);
  });
}
function generarNuevoColor() {
  var simbolos, color;
  simbolos = "0123456789ABCDEF";
  color = "#";

  for (var i = 0; i < 6; i++) {
    color = color + simbolos[Math.floor(Math.random() * 16)];
  }
  return color;
}

//     2.3 Bloques de `article` o `section`: Cambia el color de fondo.

//ME TAPA LOS P
function cambiar_fondo2(e) {
  section[e].style.background = generarNuevoColor();
}

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function () {
    cambiar_fondo2(i);
  });
}

function cambiar_fondo3(e) {
  article[e].style.background = generarNuevoColor();
}

for (let i = 0; i < article.length; i++) {
  article[i].addEventListener("click", function () {
    cambiar_fondo3(i);
  });
}

// 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//     3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.

function cambiar_imagen2(i) {
  img[i].src = `./assets/abracadabra.gif`;
}

const imagenesOriginales = [];
for (let i = 0; i < img.length; i++) {
  imagenesOriginales.push(img[i].src);
}
console.log(imagenesOriginales);
function cambiar_imagen3(i) {
  return (img[i].src = imagenesOriginales[i]);
}

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener(
    "mouseover",
    (event) => {
      cambiar_imagen2(i);

      //   setTimeout(() => {
      //     img[i].src = imagenesOriginales[i];
      //   }, 1900);
    },
    false
  );
  img[i].addEventListener(
    "mouseout",
    (event) => {
      cambiar_imagen3(i);
    },
    false
  );
}

//     3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
function fondo_original_parrafo(i) {
    parrafo[i].style.background = "white";
    parrafo[i].style.color = "black";
}
for (let i = 0; i < parrafo.length; i++) {
  parrafo[i].addEventListener(
    "mouseover",
    (event) => {
      cambiar_fondo_color(i);

      //   setTimeout(() => {
      //     parrafo[i].src = imagenesOriginales[i];
      //   }, 1900);
    },
    false
  );
  parrafo[i].addEventListener(
    "mouseout",
    (event) => {
        fondo_original_parrafo(i);
    },
    false
  );
}

//     3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.
function fondo_original_article(i) {
    article[i].style.background = "white";
    article[i].style.color = "black";
}
function fondo_original_section(i) {
    section[i].style.background = "white";
    section[i].style.color = "black";
}
for (let i = 0; i < section.length; i++) {
  section[i].addEventListener(
    "mouseover",
    (event) => {
      cambiar_fondo2(i);

      //   setTimeout(() => {
      //     section[i].src = imagenesOriginales[i];
      //   }, 1900);
    },
    false
  );
  section[i].addEventListener(
    "mouseout",
    (event) => {
        fondo_original_section(i);
    },
    false
  );
}
for (let i = 0; i < article.length; i++) {
  article[i].addEventListener(
    "mouseover",
    (event) => {
      cambiar_fondo3(i);

      //   setTimeout(() => {
      //     article[i].src = imagenesOriginales[i];
      //   }, 1900);
    },
    false
  );
  article[i].addEventListener(
    "mouseout",
    (event) => {
        fondo_original_article(i);
    },
    false
  );
}

// _**Premium**_

// ![](https://media.giphy.com/media/tpTOw6sljB2U/giphy.gif)

// 4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

//     ```javascript
//     const colors = ['red', 'blue', 'green']

//     const getRandom = (array) => {
//         /* código misterioso */
//     }

//     console.log(getRandom(colors))
//     // imprime 'red', 'blue' o 'green'
//     ```
// 5. Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.

// 6. Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.
