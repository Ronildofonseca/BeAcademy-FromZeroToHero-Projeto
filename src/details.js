import Table from "./components/table.js";
import Pratos from "./jsons/pratos.json" assert { type: "json" };

export function details() {
  const $bundle = document.querySelector("#quantPacotes");
  const $sale = document.querySelector("#typeSale");
  const parcelaTrans = Number($bundle.value);
  const opcaoTexto1 = $sale.options[$sale.selectedIndex].text;
  const valueSemanal = "346.00";
  const valueQuinzenal = "646.00";
  const valueMensal = "1252.00";

  const $data = document.querySelector("#textItem2");
  const $info = document.querySelector("#textItem");
  const $desc = document.querySelector("#textItem3");

  switch (opcaoTexto1) {
    case "Semanal":
      $data.replaceChildren(Table(Pratos.SEMANAL));
      $info.innerHTML = `Pacote com 10 Refeições, por apenas <br> R$ ${valueSemanal}`;
      $desc.innerHTML = `Valor total a pagar: R$ ${parcelaTrans * valueSemanal},00`;
      break;

    case "Quinzenal":
      $data.replaceChildren(Table(Pratos.QUINZENAL));
      $info.innerHTML = `Pacote com 20 Refeições, por apenas <br> R$ ${valueQuinzenal}`;
      $desc.innerHTML = `Valor total a pagar: R$ ${parcelaTrans * valueQuinzenal},00`;
      break;

    case "Mensal":
      $data.replaceChildren(Table(Pratos.MENSAL));
      $info.innerHTML = `Pacote com 40 Refeições, por apenas <br> R$ ${valueMensal}`;
      $desc.innerHTML = `Valor total a pagar: R$ ${parcelaTrans * valueMensal},00`;
      break;
  }
}