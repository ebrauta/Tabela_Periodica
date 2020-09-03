/**
 * Periodic Table
 * 
 * Tabela periódica dos elementos dinâmica feita em JS atrvés dos dados adicionados em data.js
 * 
 * @author Eduardo Rauta
 * @version 1.0
 * 
 */
 
 
//recupera os elementos raiz(root1), cabeçalho (header) e descrição(details) do html
const root = document.getElementById('root1')
const header = document.querySelector('#group_header')
const details = document.querySelector('#group_details')
// insere textos a serem inseridos no cabeçalho e detalhes
const text_header = 'Tabela Periódica'
const text_details = `A Tabela Periódica é um modelo que agrupa todos os elementos
químicos conhecidos e suas propriedades. Eles estão organizados
em ordem crescente correspondente aos números atômicos (número
de prótons).`
//insere os textos no cabeçalho e descrição
header.innerHTML = text_header
details.innerHTML = text_details
//cria a div que conterá a tabela dinâmica
const divs = document.createElement('div')
//atribui a classe tabela à div
divs.setAttribute('class','tabela')

//seleciona a serie doa lantanideos e actinideos
const nome_das_series = ['Lantanídeos', 'Actinídeos'] // nome
const faixa_lantanideos = [57, 71] // elemento inicial e final da serie - lantanideos
const faixa_actinideos = [89, 103] // elemento inicial e final da serie - actinides
const elementos_lantanideos = elements.filter((item) => (parseInt(item.atomicnumber) >= faixa_lantanideos[0] && parseInt(item.atomicnumber) <= faixa_lantanideos[1])) //filtra da totalidade de elementos apenas os lactineos
const elementos_actnideos = elements.filter((item) => ( parseInt(item.atomicnumber) >= faixa_actinideos[0] && parseInt(item.atomicnumber) <= faixa_actinideos[1] )) // filtra da totalidade dos elementos apenas os actinideos

let table_final = elements.map(item => item) //copia a tabela do data.js
table_final = table_final.slice(0, faixa_lantanideos[0]).concat(table_final.slice(faixa_lantanideos[1],faixa_actinideos[0])).concat(table_final.slice(faixa_actinideos[1], elements.length)) // retira as series dos lantanideos e actinideos
/**
 * Função mouseOverElement
 * 
 * cria a função que mostrará detalhes do elemento químico ao se passar o mouse em cima do elemento
 * 
 * @param {Object} element - elemento que será inserido no botão
 */
function mouseOverElement(element){
    header.innerHTML = `${element.name}` // inserção do nome do elemento no cabeçalho
    header.setAttribute('id','selected') // atribuição do Id ao cabeçalho para auxílio no CSS

    details.innerHTML = `
        <div class="information">
            <div class="information_element">
                <div class="information_electronic_configuration">${element.ec}</div>
                <div class="information_symbol">${element.symbol}</div>
                <div class="information_name">${element.name}</div>
                <div class="other_informations">
                    <div class="information_atomic_number">${element.atomicnumber}</div>
                    <div class="information_atomic_mass">${element.atomicmass}</div>
                </div>
            </div>
            <div class="information_table">
                <p>Símbolo: <span class="info">${element.symbol}</span></p>
                <p>Número Atômico: <span class="info">${element.atomicnumber}</span></p>
                <p>Massa atômica: <span class="info">${element.atomicmass} u</span></p>
                <p>Configuração eletrônica: <span class="info">${element.ec}</span></p>
                <p>Descoberta: <span class="info">${element.year}</span></p>
            </div>
        </div>
     ` // inserção de dados nos detalhes
}
/**
 * Função mouseOverSeries
 * 
 * parecida com a mouseOverElement, porém feita para uma série inteira de elementos
 * 
 * @param {Number} index_serie - Indice que determina que série será mostrada: 0 - Lantanídeos, 1 - Actinídeos
 * @param {Array} elementos - Array contendo os elementos da série
 */
function mouseOverSeries(index_serie, elementos){
    let serie = `${nome_das_series[index_serie]}` //Nome da série selecionada
    header.innerHTML = `Série dos ${serie}` // inserção do nome da série no cabeçalho
    header.removeAttribute('id') // remoção do ID 
    let other = (index_serie == 0) ? nome_das_series[1] : nome_das_series[0] // nome da Série que não é a selecionada
    let text = `Os ${nome_das_series[index_serie]} são parte dos elementos de transição interna, juntamente com os ${other}. São pertencentes ao período ${elementos[0].period} da tabela periódica. O primeiro elemento é o ${elementos[0].name} (${elementos[0].symbol}) (daí o nome).
    `// detalhes da série 
    details.innerHTML = text // inserção de dados nos detalhes
}
/**
 * Função mouseOutElement
 * 
 * cria a função que retornará detalhes padrões
 * 
 */
function mouseOutElement(){
    header.innerHTML = text_header // inserção do texto padrão no cabeçalho
    header.removeAttribute('id') // remoção do Id
    details.innerHTML = text_details // inserção do texto padrão nos detalhes
}
/**
 * Função makeButtons
 * 
 * função que cria a tabela em si, criando cada elemento através de um botão e inserindo-os na div inicial 
 * 
 * @param {Object} element - Elemento que será inserido no botão
 * @param {Number} id - Id do elemento para auxílio no CSS
 * 
 * @returns element_button - botão contendo dados iniciais sobre o elemento (numero atômico e simbolo)
 */
function makeButtons(element, id){
    let element_button = document.createElement('button') // criação do botão
    let Z = document.createElement('p') // criação de paragrafo para  dado do número atômico do elemento
    let symbol = document.createElement('p') // criação de paragrafo para dado do símbolo do elemento
    // atribuição de classe e id no botão
    element_button.setAttribute('class','element')
    element_button.setAttribute('id', id)
    
    Z.setAttribute('class','atomic_number') // atribuição de classe no dado numero atômico
    symbol.setAttribute('class','symbol') // atribuição de classe no dado símbolo

    Z.innerHTML = `${element.atomicnumber}` // inserção do dado de número atômico no paragrafo
    symbol.innerHTML = `${element.symbol}` // inserção de dado se símbolo do elemento no parágrafo

    // inserção das funções de mouseover e mouseout dependendo do id do elemento
    if(id == faixa_lantanideos[0]-1){ //serie dos lantanideos
        let indice = 0 // indice auxiliar
        // adicionando mouseOver
        element_button.addEventListener('mouseover',() => {
            mouseOverSeries(indice, elementos_lantanideos) //mouseOverSeries -> serie lantanideos
        })
        // adicionando mouseOut
        element_button.addEventListener('mouseout',() => {
            mouseOutElement()
        })
        //inserindo dado somente com a faixa de número atômico dos lantanídeos (57 - 71) e sem símbolo
        Z.innerHTML = `${faixa_lantanideos[0]} - ${faixa_lantanideos[1]}`
        symbol.innerHTML= ""
    }
    else if(id == faixa_actinideos[0]-15){ //serie dos actinideos
        let indice = 1// indice auxiliar
        // adicionando mouseOver
        element_button.addEventListener('mouseover',() => {
            mouseOverSeries(indice, elementos_actnideos) //mouseOverSeries -> serie actinideos
        })
        // adicionando mouseOut
        element_button.addEventListener('mouseout',() => {
            mouseOutElement()
        })
        //inserindo dado somente com a faixa de número atômico dos actinídeos (89 - 103) e sem símbolo
        Z.innerHTML = `${faixa_actinideos[0]} - ${faixa_actinideos[1]}`
        symbol.innerHTML= ""
    }
    else { // demais elementos fora das séries
        // adicionando mouseOver
        element_button.addEventListener('mouseover',() => {
            mouseOverElement(table_final[id]) //mouseOverElement
        })
        // adicionando mouseOut
        element_button.addEventListener('mouseout',() => {
            mouseOutElement()
        })
    }
    //inserindo os parágrafos de número atômico e símbolo dentro do button
    element_button.appendChild(Z)
    element_button.appendChild(symbol)
    //retornando o botão criado
    return element_button
}
// criação de todos os botões com inserção na div inicial
for(let index = 0; index < table_final.length; index++){   
    divs.appendChild(makeButtons(table_final[index], index))    
} 
// criação das constantes para estilo dinâmico CSS
const buttons = divs.getElementsByClassName('element') // array com todos os botões
const naometais = [0,5,6,7,14,15,33] // id dos botões dos não metais
const gasesnobres = [1,9,17,35,53,71,89]  // id dos botões dos gases nobres
const metaisalcalinos = [2,10,18,36,54,72]  // id dos botões dos metais alcalinos
const metaisalcalinoterrosos=[3,11,19,37,55,73]  // id dos botões dos metais alcalino terrosos
const semimetais = [4,13,31,32,50,51,69]  // id dos botões dos semi-metais
const halogenios = [8,16,34,52,70,88]  // id dos botões dos halogênios
const outrosmetais = [12,30,48,49,66,67,68,84,85,86,87]  // id dos botões dos metais restantes da família A

for(let i = 0; i < buttons.length; i++){
    buttons[i].style.background = "#E77878" //pinta toda a tabela
    naometais.forEach(numero => { if (i == numero) buttons[i].style.background="#A1D344"}) //pinta não metais
    gasesnobres.forEach(numero => {if (i == numero) buttons[i].style.background="#3D9EE3"}) // pinta gases nobres
    metaisalcalinos.forEach(numero => {if (i == numero) buttons[i].style.background="#F1B200"}) // pinta alcalinos
    metaisalcalinoterrosos.forEach(numero => {if (i == numero) buttons[i].style.background="#EADA00"}) // pinta alcalinos terrosos
    semimetais.forEach(numero => {if (i == numero) buttons[i].style.background="#3D9EE3"}) // pinta semi-metais
    halogenios.forEach(numero => {if (i == numero) buttons[i].style.background="#70CBEB"}) // pinta halogenios
    outrosmetais.forEach(numero => {if (i == numero) buttons[i].style.background="#91BDCB"}) // pinta outros metais 
    if(i == 56 || i == 74){buttons[i].style.background="#FFFFFF"} //retira a pintura das séries
}

//insere tabela no elemento raiz
root.appendChild(divs)
