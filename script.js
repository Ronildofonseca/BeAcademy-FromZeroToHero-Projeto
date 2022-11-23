function detalhar(){

      
    const parcelaInformada = document.getElementById('jurosPorParcela')
    const parcelaTrans = Number(parcelaInformada.value)
    const select1 = document.getElementById("typeSale");
    const opcaoTexto1 = select1.options[select1.selectedIndex].text;
    const valueSemanal = '346.00'
    const valueQuinzenal = '646.00'
    const valueMensal = '1252.00'
    
    switch (opcaoTexto1) {
        
        case 'Semanal':
            
            let newSpanSem = document.getElementById('textItem2')
            newSpanSem.innerHTML  = ` 
                <table border = '1' color:var(--color-primary);>
                <tr> 
                    <td>DIAS</td>
                    <td>ALMOÇO</td>
                    <td>JANTA</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Carne Desfiada com Abóbora</td>
                    <td>Curry de Legumes</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Almôndegas de Frango com Jardineira</td>
                    <td>Croquete na Crosta de Linhaça </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Salmão ao Alecrim e Jardineira de Legumes</td>
                    <td>Espaguete de Palmito aos 3 Queijos</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Berinjela Recheada com Carne</td>
                    <td>Salada de Frango</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Mignon com Souflê de Queijo </td>
                    <td>Frango ao Molho de Ervas</td>
                </tr>
            </tr>
    
            </table></span>`
            let newSpanRef = document.getElementById('textItem')
            newSpanRef.innerHTML  = `Pacote com 10 Refeições, por apenas <br> R$ ${valueSemanal}`
            let newSpanValue = document.getElementById('textItem3')
            newSpanValue.innerHTML  = `Valor total a pagar: R$ ${parcelaTrans * valueSemanal},00`
            break;

    case 'Quinzenal':
          
            let newSpanQuiz = document.getElementById('textItem2')
            newSpanQuiz.innerHTML  = `
            <table border = '1' color:var(--color-primary);>
            <tr> 
                <td>DIAS</td>
                <td>ALMOÇO</td>
                <td>JANTA</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Carne Desfiada com Abóbora</td>
                <td>Curry de Legumes</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Almôndegas de Frango com Jardineira</td>
                <td>Croquete na Crosta de Linhaça </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Salmão ao Alecrim e Jardineira de Legumes</td>
                <td>Espaguete de Palmito aos 3 Queijos</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Berinjela Recheada com Carne</td>
                <td>Salada de Frango</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Mignon com Souflê de Queijo </td>
                <td>Frango ao Molho de Ervas</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Espaguete de Pupunha à Bolonhesa de Frango</td>
                <td>Souflê de Queijo e Presunto</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Escondidinho de Carne-Seca com Abóbora</td>
                <td>Torta Souflê de Frango</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Lombo ao Creme de Cottage</td>
                <td>Pizza Low Carb de Calabresa</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Frango Oriental</td>
                <td>Iscas de Frango e Purê de Couve-Flor</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Lasanha de Pupunha à Bolonhesa</td>
                <td>Ensopadinho de Frango </td>
            </tr>
        </tr>

        </table></span>`
            let newSpanRef1 = document.getElementById('textItem')
            newSpanRef1.innerHTML  = `Pacote com 20 Refeições, por apenas <br> R$ ${valueQuinzenal}`
            let newSpanValue1 = document.getElementById('textItem3')
            newSpanValue1.innerHTML  = `Valor total a pagar: R$ ${parcelaTrans * valueQuinzenal},00`
            break;

        case 'Mensal':
            let newSpanMens = document.getElementById('textItem2')
            newSpanMens.innerHTML  = 
            `
            <table border = '1' color:var(--color-primary);>
            <tr> 
                <td>DIAS</td>
                <td>ALMOÇO</td>
                <td>JANTA</td>
            </tr>
            <tr>
                <td>1/11</td>
                <td>Carne Desfiada com Abóbora</td>
                <td>Curry de Legumes</td>
            </tr>
            <tr>
                <td>2/12</td>
                <td>Almôndegas de Frango com Jardineira</td>
                <td>Croquete na Crosta de Linhaça </td>
            </tr>
            <tr>
                <td>3/13</td>
                <td>Salmão ao Alecrim e Jardineira de Legumes</td>
                <td>Espaguete de Palmito aos 3 Queijos</td>
            </tr>
            <tr>
                <td>4/14</td>
                <td>Berinjela Recheada com Carne</td>
                <td>Salada de Frango</td>
            </tr>
            <tr>
                <td>5/15</td>
                <td>Mignon com Souflê de Queijo </td>
                <td>Frango ao Molho de Ervas</td>
            </tr>
            <tr>
                <td>6/16</td>
                <td>Espaguete de Pupunha à Bolonhesa de Frango</td>
                <td>Souflê de Queijo e Presunto</td>
            </tr>
            <tr>
                <td>7/17</td>
                <td>Escondidinho de Carne-Seca com Abóbora</td>
                <td>Torta Souflê de Frango</td>
            </tr>
            <tr>
                <td>8/18</td>
                <td>Lombo ao Creme de Cottage</td>
                <td>Pizza Low Carb de Calabresa</td>
            </tr>
            <tr>
                <td>9/19</td>
                <td>Frango Oriental</td>
                <td>Iscas de Frango e Purê de Couve-Flor</td>
            </tr>
            <tr>
                <td>10/20</td>
                <td>Lasanha de Pupunha à Bolonhesa</td>
                <td>Ensopadinho de Frango </td>
            </tr>
        </tr>

        </table></span>`
            let newSpanRef2 = document.getElementById('textItem')
            newSpanRef2.innerHTML  = `Pacote com 40 Refeições, por apenas <br> R$ ${valueMensal}`
            let newSpanValue2 = document.getElementById('textItem3')
            newSpanValue2.innerHTML  = `Valor total a pagar: R$ ${parcelaTrans * valueMensal},00`
            break;
    }
}