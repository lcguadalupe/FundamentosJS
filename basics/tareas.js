const inputTarea = document.getElementById('inputTarea');
const listaTareas = document.querySelector('#tareas ul');
const inputImage = document.getElementById('loadImage');
const image = document.getElementById('image');

function addImage(){
    const imagen = inputImage.value;
    image.src = imagen;
    inputImage.value = '';
}

const lista = [];

const addTarea = () => {
    const tareaData = inputTarea.value;
    lista.push(tareaData);
    inputTarea.value = '';
    showLista();
}

const showLista = () => {
    let listaHtml = '';
    lista.forEach(listaItem => {
        listaHtml += `<li>${ listaItem }</li>`;
    });
    listaTareas.innerHTML = listaHtml;
}