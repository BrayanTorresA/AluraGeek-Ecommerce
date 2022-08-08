import { lista } from '../../js/fakeAPI/index.js'
import { containerCards, updateList } from '../../js/index.js'
import { footer, nav } from '../../js/navHeader/index.js'


window.onload = function () {
  
  updateList();
  
  const path = '../../img/flechaSlider.png'
  const seta = '../../img/flecha.png'
  const productURL = '../product/index.html'

  const paths = {
    logotipo: "../../img/alurageek.svg",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    imgArrow: "../../img/flecha.png",
    imgSlider: "../../img/flechaSlider.png",
    allProducts: "../allproducts/index.html",
    productList: lista,
    productAmount: lista.length,
    listIndex: '',
    url: "../product/index.html",
    login: "../login/index.html",
    inputShow: true
  } 

  nav(paths);
  containerCards(paths);
  footer(paths);  

  const titulos = document.querySelectorAll('.content__title')

  titulos.forEach((item,index)=>{
    if(index != 0){
      item.remove();
    }
  })
  titulos[0].innerHTML = `
  <h2 data-title>Todos los productos</h2>
  <a href="../addProduct/index.html" class="btn__submit" id="btn__color">Adicionar producto</a>
  `
}