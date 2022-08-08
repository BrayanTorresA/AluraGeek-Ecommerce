import { lista } from '../../js/fakeAPI/index.js';
import { updateList } from '../../js/index.js';
import { footer, nav } from '../../js/navHeader/index.js'

function exibirMensaje(classe) {
  const msg = document.querySelector('[data-msg]');
  if (classe == "msg--enviar") {
    msg.innerHTML = "Registrado correctamente";
  } else {
    msg.innerHTML = "Hay campos en blanco";
  }
  
  msg.classList.add(classe);
  setTimeout(() => {
    msg.classList.remove(classe);
  }, 1500);
}

function escogerId(titulo) {
  updateList();
  var id = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].titulo.toLowerCase() == titulo.value.toLowerCase()) {
      id = lista[i].produtos[lista[i].produtos.length - 1].infos.id + 1
      break;
    }
  }

  if(id === 0){
    id = 1;
  }
  return id;
}

function limpiarCampos() {
  document.getElementById('categoria').value = '';
  document.getElementById('alt').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('precio').value = '';
  document.getElementById('descripcion').value = '';
  const file = document.querySelector("[data-imgFile]");
  file.textContent = '';
  file.classList.remove('show');
}

window.onload = function () {

  const titulo = document.getElementById('categoria');
  const alt = document.getElementById('alt');
  const nombre = document.getElementById('nombre');
  const precio = document.getElementById('precio');
  const descripcion = document.getElementById('descripcion');
  const img = document.querySelectorAll("#select");;
  const file = document.querySelector("[data-imgFile]");
  const enviar = document.querySelector('[data-send]');

  const paths = {
    logotipo: "../../img/alurageek.svg",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "../login/index.html",
    inputShow: true,
  }

  nav(paths);
  footer(paths);

  var imgPath = null;

  img.forEach((inputFile) => {
    inputFile.addEventListener('change', (e) => {
      var fReader = new FileReader();
      fReader.readAsDataURL(inputFile.files[0]);
      fReader.onloadend = function (event) {
        imgPath = event.target.result;
        file.textContent = inputFile.files[0].name;
        file.classList.add('show');
      }
    })
  })


  enviar.addEventListener('click', (e) => {
    e.preventDefault();
    const formArea = [titulo.value, nombre.value, precio.value, descripcion.value, alt.value, imgPath];
    var send = true;

    for (let i in formArea) {
      if (!formArea[i]) {
        exibirMensaje('msg--error');
        send = false;
        break;
      }
    }


    if (send) {
      var newId = escogerId(titulo);

      const nuevoProducto = {
        titulo: titulo.value,
        produtos: [{
          infos: {
            id: newId,
            nombre: nombre.value,
            img: imgPath,
            precio: Number(precio.value).toFixed(2),
            descripcion: descripcion.value,
            alt: alt.value,
          }
        }]
      }

      const produto = JSON.parse(localStorage.getItem('lista')) || [];
      const add = [...produto, nuevoProducto];
      localStorage.setItem('lista', JSON.stringify(add));

      exibirMensaje('msg--enviar');

      limpiarCampos();
    }
  })

}


