
const logo = (paths) => {
  const logoLink = `
  <a href="${paths.home}">
    <img src="${paths.logotipo}" alt="imagen del logotipo de AluraGeek">
  </a>
  `
  return logoLink;
}

export function nav(paths) {

  const navHeader = document.querySelector('[data-nav]');
  const logoLink = logo(paths)
  const html = `
  <div class="navHeader__left">
    <div class="logo">
      ${logoLink}
    </div>
    <div class="navHeader__search">
      <input type="text" class="navHeader__search--input" placeholder="¿Qué deseas buscar?"/>
      <img src="${paths.lupa}" alt="imagen de una lupa" class="navHeader__search--img">
    </div>
  </div>
  ${paths.login && (`<div class="navHeader__login"><a href="${paths.login}" class="btn__login">Login</a><img class="lupa__hidden" src="${paths.lupa}" alt="imagen de una lupa" data-input/></div><input type="text" class="lupa__hidden--input" placeholder="¿Qué desea buscar?"/>`)}
  `;

  navHeader.innerHTML = html;

  if(paths.inputShow){
    inputShow();
  }

}

export function inputShow(){
  const img = document.querySelector('[data-input]')
  img.addEventListener('click',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
    document.querySelector('.lupa__hidden--input').focus();
  })
  
  document.querySelector('.lupa__hidden--input').addEventListener('blur',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
  })  
}


export function footer(paths) {

  const footer = document.querySelector('[data-footer]');
  const logoLink = logo(paths)
  const html = `
  <section class="footer">
    <div class="container">
      <div class="logo">
        ${logoLink}
      </div>
      <div class="footer__text">
        <a href="#">Quienes somos</a href="">
        <a href="#">Política de privacidad</a>
        <a href="#">Programa de fidelidad</a>
        <a href="#">Nuestras tiendas</a>
        <a href="#">Quiero ser franquiciado</a>
        <a href="#">Anuncie aquí</a>
      </div>
    </div>
    <form class="footer__forms">
      <p>Hable con nosotros</p>
      <input type="text" placeholder="Nombre" required/>
      <textarea placeholder="Escribe tu mensaje" required></textarea>
      <input type="submit" value="Enviar mensaje" class="btn__submit" data-submit />
    </form>
  </section>
  <div class="footer__dev">
  <p>Desarrollado por Brayan Torres Acuña</p>
  </div>
  `;

  footer.innerHTML = html;
}