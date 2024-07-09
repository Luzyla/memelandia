const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const body = document.getElementById('body');

const buttonDescarga = document.getElementById('button-descarga');
const contenedorMeme = document.getElementById('canvas-meme');

const imgUrl = document.getElementById('url');
const imagenMeme = document.getElementById('imagen-meme');

const botonCerrarImg = document.getElementById('boton-cerrar-img');
const botonMenuImg = document.getElementById('boton-menu-img');
const menuImg = document.getElementById('contenedor-filtros-img');

const botonMenuTxt = document.getElementById('boton-menu-txt');
const botonCerrarTxt = document.getElementById('boton-cerrar-txt');
const menuTxt = document.getElementById('contenedor-filtros-txt');

const txtTop = document.getElementById('txt-top');
const txtTopMeme = document.getElementById('texto-meme-top');

const txtBottom = document.getElementById('txt-bottom');
const txtBottomMeme = document.getElementById('texto-meme-bottom');

const colorImgFondo = document.getElementById('input-color-img-fondo');
const colorImgFondoHex = document.getElementById('input-color-img-fondo-hex');

const colorTxtColor = document.getElementById('input-color-txt-color');
const colorTxtColorHex = document.getElementById('input-color-txt-color-hex');

const colorTxtFondo = document.getElementById('input-color-txt-fondo');
const colorTxtFondoHex = document.getElementById('input-color-txt-fondo-hex');

const sinTxtTop = document.getElementById('sin-top-txt');
const sinTxtBottom = document.getElementById('sin-bottom-txt');

const contenedorTxtTop = document.getElementById('contenedor-texto-top');
const contenedorTxtBottom = document.getElementById('contenedor-texto-bottom');

const checkboxFondoTransparente = document.getElementById('fondo-transparente');
const canvasMeme = document.getElementById('canvas-meme');
const contenedorImgMeme = document.getElementById('contenedor-imagen-meme');

const selectorFuente = document.getElementById('txt-fuente');
const txtMemeTop = document.getElementById('texto-meme-top');
const txtMemeBottom = document.getElementById('texto-meme-bottom');

const inputFontSize = document.getElementById('txt-size');

const alignLeft = document.getElementById('txt-align-left');
const alignCenter = document.getElementById('txt-align-center');
const alignRight = document.getElementById('txt-align-right');


/* BOTON Y MENU IMAGEN */
function openImgMenu () {
    menuTxt.classList.add('hidden');
    menuImg.classList.toggle('hidden');
}
botonMenuImg.addEventListener('click', openImgMenu);

function closeImgMenu () {
    menuImg.classList.add('hidden');
}
botonCerrarImg.addEventListener('click', closeImgMenu);

/* BOTON Y MENU TEXTO */
function openTxtMenu () {
    menuImg.classList.add('hidden');
    menuTxt.classList.toggle('hidden');
}
botonMenuTxt.addEventListener('click', openTxtMenu);

function closeTxtMenu () {
    menuTxt.classList.add('hidden');
}
botonCerrarTxt.addEventListener('click', closeTxtMenu);

/* DESCARGA */
function descargarMeme () {
    domtoimage.toPng(contenedorMeme).then(function (blob) {
        /* console.log("DOM TO IMAGE", domtoimage)
        console.log("BLOB", blob) */
        saveAs(blob, 'mi-meme.png')
    })
} 
buttonDescarga.addEventListener('click', descargarMeme);

/* MODO CLARO | MODO OSCURO */
function lightModeOn () {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    lightMode.classList.add('hidden');
    darkMode.classList.remove('hidden');
}
lightMode.addEventListener('click', lightModeOn)

function darkModeOn () {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    darkMode.classList.add('hidden');
    lightMode.classList.remove('hidden');
}
darkMode.addEventListener('click', darkModeOn)

/* URL */
function addImageMeme () {
    imagenMeme.src = imgUrl.value;
    contenedorImgMeme.src = imgUrl.value
    if (imgUrl.value) {
        imagenMeme.classList.remove('hidden');
    } else {
        imagenMeme.classList.add('hidden');
    }
    //alternativa: imagenMeme.setAttribute('src', urlImg.value)
   //    console.log("src: ", imagenMeme.src)
}
imgUrl.addEventListener('input', addImageMeme)

//imgUrl es el INPUT
//imagenMeme es la IMAGEN

/* INPUT COLOR */
function modifyTxtColor (e) {
    let colorHex = e.target.value
    if (e.target.id === 'input-color-txt-color') {
        colorTxtColorHex.innerText = colorHex
        txtTopMeme.style.color = colorHex
        txtBottomMeme.style.color = colorHex
    } else {
        colorTxtFondoHex.innerText = colorHex
        contenedorTxtTop.style.backgroundColor = colorHex
        contenedorTxtBottom.style.backgroundColor = colorHex
    }
}
colorTxtColor.addEventListener('input', modifyTxtColor);
colorTxtFondo.addEventListener('input', modifyTxtColor);
/* https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg/640px-%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg
 */

/* IMAGEN Y COLOR FONDO */
const seleccionarEfecto = document.getElementById('mezcla-fondo')
function modifyColor() {
    let efecto = seleccionarEfecto.value;
    let colorHex = colorImgFondo.value;
console.log(imgUrl.value)
console.log(efecto)
console.log(colorHex)
    colorImgFondoHex.innerText = colorHex;
    contenedorImgMeme.style.backgroundBlendMode = efecto;
    contenedorImgMeme.style.backgroundImage = `url(${imgUrl.value})`;
    contenedorImgMeme.style.backgroundColor = colorHex;
    imagenMeme.classList.add('hidden');
}
colorImgFondo.addEventListener('input', modifyColor);
seleccionarEfecto.addEventListener('change', modifyColor);

/* TEXTO MEME */
function modifyText (e) {
    if (e.target.id === 'txt-top') {
        txtTopMeme.innerText = e.target.value
    } else if (e.target.id === 'txt-bottom') {
        txtBottomMeme.innerText = e.target.value
    }
}
txtTop.addEventListener('input', modifyText);
txtBottom.addEventListener('input', modifyText);

/* SIN TEXTO MEME */
function hiddeTextBanner (e) {
    if (e.target.id === 'sin-top-txt') {
        contenedorTxtTop.classList.toggle('hidden');
    } else if (e.target.id === 'sin-bottom-txt') {
        contenedorTxtBottom.classList.toggle('hidden');
    }
}
sinTxtTop.addEventListener('change', hiddeTextBanner)
sinTxtBottom.addEventListener('change', hiddeTextBanner)

/* FONDO TRANSPARENTE */
// const  = document.getElementById('');
function fondoTransparente () {
    if(checkboxFondoTransparente.checked) {
        canvasMeme.style.backgroundColor = 'transparent';
        canvasMeme.style.backgroundImage = `url(${imgUrl.value})`;
        imagenMeme.classList.add('hidden');
        contenedorImgMeme.style.backgroundColor = 'transparent';
        contenedorTxtTop.style.backgroundColor = 'transparent';
        contenedorTxtBottom.style.backgroundColor = 'transparent';
    } else {
        canvasMeme.style.removeProperty('background-image');
        imagenMeme.src = imgUrl.value
        if (imgUrl.value) {
            imagenMeme.classList.remove('hidden');
        }
        contenedorImgMeme.style.removeProperty('background-color');
        contenedorTxtTop.style.removeProperty('background-color');
        contenedorTxtBottom.style.removeProperty('background-color');
    }
}
checkboxFondoTransparente.addEventListener('change', fondoTransparente);

/* FONT FAMILY */
function modificarFuente (e) {
    txtMemeTop.style.fontFamily = e.target.value;
    txtMemeBottom.style.fontFamily = e.target.value;
}
selectorFuente.addEventListener('change', modificarFuente);

/* FONT SIZE */
function modificarFontSize (e) {
    txtMemeTop.style.fontSize = `${e.target.value}px`;
    txtMemeBottom.style.fontSize = `${e.target.value}px`;
}
inputFontSize.addEventListener('input', modificarFontSize);

/* FONT ALIGN */
function alignTextLeft() {
    txtMemeTop.style.textAlign = 'left';
    txtMemeBottom.style.textAlign = 'left';
}
function alignTextCenter () {
    txtMemeTop.style.textAlign = 'center';
    txtMemeBottom.style.textAlign = 'center';
}
function alignTextRight () {
    txtMemeTop.style.textAlign = 'right';
    txtMemeBottom.style.textAlign = 'right';
}
alignLeft.addEventListener('click', alignTextLeft);
alignCenter.addEventListener('click', alignTextCenter);
alignRight.addEventListener('click', alignTextRight);

/* CONTORNO */
const sinContorno = document.getElementById('contorno-none');
const contornoClaro = document.getElementById('contorno-light');
const contornoOscuro = document.getElementById('contorno-dark');

function removeTextShadow () {
    txtMemeTop.style.textShadow = 'none';
    txtMemeBottom.style.textShadow = 'none';
}
function addLightTextShadow () {
    txtMemeTop.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
    txtMemeBottom.style.textShadow = 'rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px';
}
function addDarkTextShadow () {
    txtMemeTop.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
    txtMemeBottom.style.textShadow = 'rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px';
}
sinContorno.addEventListener('click', removeTextShadow);
contornoClaro.addEventListener('click', addLightTextShadow);
contornoOscuro.addEventListener('click', addDarkTextShadow);

/* ESPACIADO */
const espaciado = document.getElementById('espaciado');

function modifyLetterSpacing(e) {
    let letterSpacing = e.target.value
    txtMemeTop.style.letterSpacing = letterSpacing
    txtMemeBottom.style.letterSpacing = letterSpacing
}
espaciado.addEventListener('input', modifyLetterSpacing);

/* INTERLINEADO */
const interlineado = document.getElementById('interlineado');

function modifyLineHeight(e) {
    let lineHeight = e.target.value
    txtMemeTop.style.lineHeight = lineHeight
    txtMemeBottom.style.lineHeight = lineHeight
}
interlineado.addEventListener('input', modifyLineHeight);




/* URL IMAGEN 
https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg/640px-%D0%A4%D0%BE%D1%82%D0%BE_%D0%BA%D1%83%D0%BD%D0%BE%D0%B2.jpg
*/

// const  = document.getElementById('');
/* const actualizarImagen = (evento) => {
    
    if (evento.target.value.length !== 0) {
      $('image-meme').style.backgroundImage = `url("${evento.target.value}")`
    }
  } */

    /* input_number.addEventListener('input', function(e) {
        variable.style.fontSize = `${e.target.value}px`
        //text_superior.font-size.value;
    }) */

     