window.onafterprint = function() {
    console.log("La página ha sido impresa o el cuadro de diálogo de impresión se ha cerrado.");
};

window.onbeforeunload = function(event) {
    return console.log("Estas seguro de abandonar esta página?");
};

function onloadEvent() {
    console.log("La imagen se ha cargado correctamente");
}


function verifyOffline() {
    console.log("Estas offline");
}
window.addEventListener('offline', verifyOffline);

function verifyOnline() {
    console.log("Tienes internet de nuevo");
}

window.addEventListener('online', verifyOnline);

window.onresize = function() {
    console.log("La ventana se ha redimensionado.");
};

function validarCampo() {
    let campo = document.getElementById("nombre");
    if (campo.value === "") {
        console.log("El campo no puede estar vacío");
        campo.focus();
    }
}

function onchangeInput() {
    let campo = document.getElementById("apellido");
    console.log("El valor ha cambiado a: " + campo.value);
}

function clickDerecho() {
    console.log("Has hecho clic derecho.");
}

function focusCampo() {
    let campo = document.getElementById("focus");
    campo.style.backgroundColor = "gray";
}

function mostrarTexto() {
    let texto = document.getElementById("oninput").value;
    document.getElementById("textoMostrado").textContent = texto;
}

function mostrarError() {
    let campo = document.getElementById("oninvalid");
    campo.setCustomValidity("Este campo es obligatorio");
}

function textSelected() {
    let textoSeleccionado = window.getSelection().toString();
    console.log("Texto seleccionado: " + textoSeleccionado);
}

function keyDown(event) {
    let codigoTecla = event.keyCode;
    console.log("Tecla presionada: " + codigoTecla);
}

function onkeyPress(event) {
    let caracter = event.keyCode;
    console.log("Tecla presionada: " + caracter);
}

function onkeyUp(event) {
    let caracter = event.keyCode;
    console.log("Tecla presionada: " + caracter);
}

function onclickEvent() {
    console.log("ONCLICK");
}

function doubleClick() {
    console.log("Has hecho doble clic");
}

function mouseDown() {
    console.log("Has presionado el botón del ratón");
}

function mostrarCoordenadas(event) {
    let coordenadas = "X: " + event.clientX + ", Y: " + event.clientY;
    //console.log(coordenadas)
}

function cambiarColor(elemento) {
    elemento.style.backgroundColor = "red";
}

function restaurarColor(elemento) {
    elemento.style.backgroundColor = "white";
}

function mouseUp() {
    console.log("Has soltado el click");
}

function wheelEvent(event) {
    console.log("Has hecho scroll");
}

function dragStart(event) {
    event.target.classList.add("dragging");
}

function dragEnd(event) {
    event.target.classList.remove("dragging");
}

function dragEnter(event) {
    event.preventDefault();
    event.target.classList.add("sobre");
}

function dragLeave(event) {
    event.target.classList.remove("sobre");
}

function dragOver(event) {
    event.preventDefault();
    event.target.classList.add("sobre2");
}

function dragLeaveOver(event) {
    event.target.classList.remove("sobre2");
}

function Drop(event) {
    event.preventDefault();
    event.target.classList.add("soltado");
    let data = event.dataTransfer.getData("text");
    event.target.innerText = "Elemento soltado: " + data;
}

function dragOverDrop(event) {
    event.preventDefault();
}

function dragLeaveDrop(event) {
    event.target.classList.remove("soltado");
}

function Scroll() {
    let div = document.getElementById("scrollableDiv");
    let scrollTop = div.scrollTop;
    let scrollLeft = div.scrollLeft;
    console.log("Posición de desplazamiento vertical: " + scrollTop);
    console.log("Posición de desplazamiento horizontal: " + scrollLeft);
}

function onCopy() {
    console.log("Has copiado el texto");
}
function onCut() {
    console.log("Has cortado el texto");
}
function onPaste() {
    console.log("Has pegado texto");
}

function onAbort() {
    console.log("La carga de la imagen ha sido abortada");
}

function onCanPlayThrough() {
    console.log("El audio está completamente cargado y listo para reproducirse");
}

function onDurationChange() {
    let video = document.getElementById("video");
    let duration = video.duration;
    console.log("Duración del video: " + duration + " segundos");
}

function onEnded() {
    console.log("El audio ha finalizado");
}

function onPause() {
    console.log("La reproducción del audio se ha pausado");
}

function onPlay() {
    console.log("La reproducción se ha reanudado");
}

function onProgress(event) {
    let porcentaje = Math.round((event.loaded / event.total) * 100);
    console.log("Progreso de la carga: " + porcentaje + "%");
}

function onRateChange() {
    let video = document.getElementById("video");
    let velocidad = video.playbackRate;
    console.log("La velocidad de reproducción del video ha cambiado a: " + velocidad);
}

function onSeeking() {
    console.log("La busqueda ha comenzado");
}

function onStalled() {
    alert("La descarga del video se ha detenido");
}

function onVolumeChange() {
    var audio = document.getElementById("audio");
    var volumen = audio.volume * 10;
    console.log("Nivel de volumen actual: " + volumen);
}