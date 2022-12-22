import createNode from "../helpers/createNode.js";
import styles from "./box.css" assert { type: "css" };

document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];

export default function ({ title, message }) {
  return createNode('div', {
    className: 'box',
    innerHTML: /* html */ `
      <img class="box__icon" src="src/images/saco-de-papel.png" alt="Desenho de saco de papel" />
      <h4 class="box__title">${title}</h4>
      <img class="box__separator" src="src/images/head-line-ic.png" alt="Separador" />
      <p class="box__message">${message}</p>
      <p>
        <strong>
          Não deixe para segunda, a dieta que Low Carb te oferece para todos os dias!
        </strong>
      </p>
      <p>
        <span class="box__details">
          Clique aqui e veja mais detalhes de nossos Pacotes
        </span>
      </p>
      <a class="box__button" href="#detalhar">Detalhar</a>
    `
  });
}
