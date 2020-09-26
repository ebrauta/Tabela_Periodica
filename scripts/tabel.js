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
//constante de cores utilizadas na tabela
// cores -> não metais,  gases nobres, metais alcalinos, metais alcalino terrosos, semi-metais, halogênios, metais de transição, metais representativos, lantanideos,actinideos
const cores = ["#A1D344","#3D9EE3","#F1B200","#EADA00","#4DB6AC","#70CBEB","#A2C7D3","#EB8E8E","#90E3E9","#D49BCD"]
const corestitulos = ["#3C5113","#0E3E60","#3F2E00","#383400","#173936","#3E7384","#219DA6","#A91E1E","#219DA6","#96408B"]
const coresz = ["#96CD30","#2793E0","#D89F00","#9E9300","#35817A","#3D9EE3","#91BDCB","#E77878","#7DBEE5","#DCADD6"]
// constante de elementos separados
const naometais = [0,5,6,7,14,15,33] // id dos botões dos não metais
const gasesnobres = [1,9,17,35,53,71,89]  // id dos botões dos gases nobres
const metaisalcalinos = [2,10,18,36,54,72,90]  // id dos botões dos metais alcalinos
const metaisalcalinoterrosos=[3,11,19,37,55,73]  // id dos botões dos metais alcalino terrosos
const semimetais = [4,13,31,32,50,51,69]  // id dos botões dos semi-metais
const halogenios = [8,16,34,52,70,88]  // id dos botões dos halogênios
const metaisdetransicao = [12,30,48,49,66,67,68,84,85,86,87]  // id dos botões dos metais metais representativos
// constante dos estados dos elementos a temp ambiente
const artificiais =[]
const gasosos = []
const liquidos = []
const solidos = []

elements.forEach(item => {
    if(item.state === "Artificial"){
        artificiais.push(item.atomicnumber)
    } else if(item.state === "Gasoso"){
        gasosos.push(item.atomicnumber)
    } else if(item.state === "Líquido"){
        liquidos.push(item.atomicnumber)
    } else {
        solidos.push(item.atomicnumber)
    }
})


//criando a descriçao de cores da tabela
// tipos de elementos
const description = document.querySelector('.caption')
const nomes = ["Não Metais ou Ametais","Gases Nobres","Metais Alcalinos","Metais Alcalino-terrosos","Semi-metais","Halogênios","Metais Representativos","Metais de transição","Lantanídeos","Actinídeos"];
const familias = document.querySelector('.familias')
nomes.forEach((item, index) => {
    let desc = document.createElement('div')
    let descricao = document.createElement('span')
    descricao.setAttribute('class','descricao')
    descricao.innerHTML = item
    descricao.style.paddingLeft = '5px'
    let cor = document.createElement('div')
    cor.setAttribute('class','cor')
    cor.style.background = cores[index]
    cor.style.border = `1px solid ${corestitulos[index]}`
    desc.appendChild(cor)
    desc.appendChild(descricao)
    desc.style.display = 'flex'
    desc.style.justifyContent = 'space-between'
    desc.style.alignItems = 'center'
    desc.style.margin = '2px'
    familias.appendChild(desc)
})
// estados fisicos dos elementos
const nomeEstados = ["Sólidos","Líquidos","Gasosos","Artificiais"]
const letraEstados = ["black", "blue", "red", "white"]
const estados = document.querySelector('.estados')
nomeEstados.forEach((item, index) => {
    let desc = document.createElement('div')
    let descricao = document.createElement('span')
    descricao.setAttribute('class','descricao')
    descricao.innerHTML = item
    descricao.style.paddingLeft = '5px'
    let cor = document.createElement('div')
    cor.setAttribute('class','cor')
    cor.innerHTML = `X`
    cor.style.border = "1px solid gray"
    cor.style.textAlign = "center"
    cor.style.color = letraEstados[index]
    if(index === nomeEstados.length-1){cor.style.textShadow = `1px 1px 0px ${letraEstados[0]}, -1px 1px 0px ${letraEstados[0]}, -1px -1px 0px ${letraEstados[0]},1px 1px 0px ${letraEstados[0]}`}
    desc.appendChild(cor)
    desc.appendChild(descricao)
    desc.style.display = 'flex'
    desc.style.justifyContent = 'space-between'
    desc.style.alignItems = 'center'
    desc.style.margin = '2px'
    estados.style.marginTop = '25px'
    estados.appendChild(desc)
})


//posicionando o elemento raiz
root.style.position='absolute'
root.style.top='50px'
root.style.left='180px'

// insere textos a serem inseridos no cabeçalho e detalhes
const text_header = 'Tabela Periódica'
const text_details = `<div id='texto'>A Tabela Periódica é um modelo que agrupa todos os elementos
químicos conhecidos e suas propriedades. Eles estão organizados
em ordem crescente correspondente aos números atômicos (número
de prótons).</div>`
//insere os textos no cabeçalho e descrição
header.innerHTML = text_header
header.style.background = "light gray"
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
 * Função revelaInfos
 * 
 * cria a função que mostrará detalhes do elemento químico ao se passar o mouse em cima do elemento
 * 
 * @param {Object} element - elemento que será inserido no botão
 */

function revelaInfos(element){
    header.innerHTML = `${element.name}` // inserção do nome do elemento no cabeçalho
    header.setAttribute("id", 'selected') //classList('selected') // atribuição do Id ao cabeçalho para auxílio no CSS
    details.innerHTML = `
        <div class="information">
        <table class="information_table">
        <tbody>
        
                    <tr>
                        <td rowspan=5 style="padding: 0 !important">
                            <div class="information_element">
                                <div class="information_electronic_configuration">${element.ec}</div>
                                <div class="information_symbol">${element.symbol}</div>
                                <div class="information_name">${element.name}</div>
                                <div class="other_informations">
                                    <div class="information_atomic_number">${element.atomicnumber}</div>
                                    <div class="information_atomic_mass">${element.atomicmass}</div>
                                </div>
                            </div>
                        </td>
                        <td>Símbolo:</td>
                        <td><span class="info">${element.symbol}</span></td>
                    </tr>
                    <tr>
                        <td>Número Atômico:</td>
                        <td><span class="info">${element.atomicnumber}</span></td>
                    </tr>
                    <tr>
                        <td>Massa atômica:</td>
                        <td><span class="info">${element.atomicmass} u</span></td>
                    </tr>
                    <tr>
                        <td>Configuração eletrônica:</td>
                        <td><span class="info">${element.ec}</span></td>
                    </tr>
                    <tr>
                        <td>Descoberta:</td>
                        <td><span class="info">${element.year}</span></td>
                    </tr>       
                </tbody>
            </table>
        </div>
     ` // inserção de dados nos detalhes
     let tipo = element.type
     let titulo = document.getElementById("selected")
     let elemento = document.getElementsByClassName("information_element")[0]
     let Z = elemento.children[3].children[0]
     switch (tipo){
        case "Não-metais":
             titulo.style.background = corestitulos[0]
             elemento.style.background = cores[0]
             Z.style.background = coresz[0]
             break
        case "Gases nobres":
            titulo.style.background = corestitulos[1]
            elemento.style.background = cores[1]
            Z.style.background = coresz[1]
            break
        case "Metais alcalinos":
             titulo.style.background = corestitulos[2]
             elemento.style.background = cores[2]
             Z.style.background = coresz[2]
             break
        case "Metais alcalino-terrosos":
             titulo.style.background = corestitulos[3]
             elemento.style.background = cores[3]
             Z.style.background = coresz[3]
             break
        case "Semi-metais":
             titulo.style.background = corestitulos[4]
             elemento.style.background = cores[4]
             Z.style.background = coresz[4]
             break
        case "Halogênios":
             titulo.style.background = corestitulos[5]
             elemento.style.background = cores[5]
             Z.style.background = coresz[5]
             break
        case "Metais representativos":
             titulo.style.background = corestitulos[6]
             elemento.style.background = cores[6]
             Z.style.background = coresz[6]
             break
        case "Metais de transição":
             titulo.style.background = corestitulos[7]
             elemento.style.background = cores[7]
             Z.style.background = coresz[7]
             break
        case "Lantanídeos":
            titulo.style.background = corestitulos[8]
            elemento.style.background = cores[8]
            Z.style.background = coresz[8]
            break
        case "Actinídeos":
            titulo.style.background = corestitulos[9]
            elemento.style.background = cores[9]
            Z.style.background = coresz[9] 
            break
        default:
            titulo.style.background = "light gray"
            break
     }
    
}
/**
 * Função revelaInfos
 * 
 * parecida com a mouseOverElement, porém feita para uma série inteira de elementos
 * 
 * @param {Number} index_serie - Indice que determina que série será mostrada: 0 - Lantanídeos, 1 - Actinídeos
 * @param {Array} elementos - Array contendo os elementos da série
 */
function revelaInfoSeries(index_serie, elementos){
    let serie = `${nome_das_series[index_serie]}` //Nome da série selecionada
    header.innerHTML = `Série dos ${serie}` // inserção do nome da série no cabeçalho
    header.removeAttribute('id') // remoção do ID 
    header.removeAttribute('style') //remoção do style
    let other = (index_serie == 0) ? nome_das_series[1] : nome_das_series[0] // nome da Série que não é a selecionada
    let text = `<div id='texto'>Os ${nome_das_series[index_serie]} são parte dos elementos de transição interna, juntamente com os ${other}. São pertencentes ao período ${elementos[0].period} da tabela periódica. O primeiro elemento é o ${elementos[0].name} (${elementos[0].symbol}) (daí o nome).</div>
    `// detalhes da série 
    details.innerHTML = text // inserção de dados nos detalhes
}
/**
 * Função retiraInfos
 * 
 * cria a função que retornará detalhes padrões
 * 
 */
function retiraInfos(){
    header.innerHTML = text_header // inserção do texto padrão no cabeçalho
    header.removeAttribute('id') // remoção do Id   
    header.removeAttribute('style')// volta cor padrão
    header.style.background = "light gray"
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
    // atribuição de classe e id no botão
    element_button.setAttribute('class','element')
    element_button.setAttribute('id', element.atomicnumber)
    //console.log(element.atomicnumber)

    // inserção das funções de click dependendo do id do elemento
    if(id == faixa_lantanideos[0]-1){ //serie dos lantanideos
        let buttonClicked = false; // verificação de clique no botão
        let indice = 0 // indice auxiliar
        element_button.removeAttribute('id')//retirando o id do botao da classe dos lantanideos
        // adicionando functions para visualização de infos
        element_button.addEventListener('click',(event) => {
            if(!buttonClicked){
                revelaInfoSeries(indice, elementos_lantanideos) //revelaInfos -> serie lantanideos
                buttonClicked = true
            } else {
                retiraInfos();
                buttonClicked = false;
            }
        })//inserindo dado somente com a faixa de número atômico dos lantanídeos (57 - 71) e sem símbolo
        element_button.innerHTML = `<p class='atomic_number'>${faixa_lantanideos[0]}-${faixa_lantanideos[1]}</p><p class='symbol'>X</p><p class='name'>Série dos Lantanídeos</p>`
    }
    else if(id == faixa_actinideos[0]-15){ //serie dos actinideos
        let buttonClicked = false; // verificação de clique no botão
        let indice = 1// indice auxiliar
        element_button.removeAttribute('id')//retirando o id do botao da classe dos actinideos
        // adicionando mouseOver
        element_button.addEventListener('click',(event) => {
            if(!buttonClicked){
                revelaInfoSeries(indice, elementos_actnideos) //revelaInfos -> serie actinideos
                buttonClicked = true;
            } else {
                retiraInfos();
                buttonClicked = false;
            }
        }) //inserindo dado somente com a faixa de número atômico dos actinideos (89 - 103) e sem símbolo  
        element_button.innerHTML = `<p class='atomic_number'>${faixa_actinideos[0]}-${faixa_actinideos[1]}</p><p class='symbol'>X</p><p class='name'>Série dos Actinídeos</p>`
    }
    else { // demais elementos fora das séries
        let buttonClicked = false; // verificação de clique no botão
        element_button.addEventListener('click',() => {
            if(!buttonClicked){
                revelaInfos(table_final[id]) //revelaInfos -> demais elementos
                buttonClicked = true;
            } else {
                retiraInfos();
                buttonClicked = false;
            }
        }) //inserindo dado somente com a faixa de número atômico dos actinideos (89 - 103) e sem símbolo 
        element_button.innerHTML = `<p class='atomic_number'>${element.atomicnumber} </p><p class='symbol'>${element.symbol}</p><p class='name'>${element.name}</p>`
    }
    //retornando o botão criado
    return element_button
}
// criação de todos os botões com inserção na div inicial
for(let index = 0; index < table_final.length; index++){
    divs.appendChild(makeButtons(table_final[index], index))    
} 

/**
 * Função buttonSeries
 * 
 * função que cria a linha de series, criando cada elemento através de um botão e inserindo-os na div da série 
 * 
 * @param {Object} element - Elemento que será inserido no botão
 * @param {Number} id - Id do elemento para auxílio no CSS
 * 
 * @returns element_button - botão contendo dados iniciais sobre o elemento (numero atômico e simbolo)
 */
const buttonSeries = (element, id, serie) => {
    let buttonClicked = false; // verificação de clique no botão
    let element_serie = document.createElement('button') // criação do botão
    // atribuição de classe e id no botão
    element_serie.setAttribute('class','elementSerie')
    element_serie.setAttribute('id', element.atomicnumber)
    element_serie.innerHTML = `<p class='atomic_number'>${element.atomicnumber} </p><p class='symbol'>${element.symbol}</p>`
        element_serie.addEventListener('click',() => {
            if(!buttonClicked){
                if(serie == 1) revelaInfos(elementos_lantanideos[id]) //revelaInfos -> demais elementos
                if(serie == 2) revelaInfos(elementos_actnideos[id]) //revelaInfos -> demais elementos
                buttonClicked = true;
            } else {
                retiraInfos();
                buttonClicked = false;
            }
        }) //inserindo dado somente com a faixa de número atômico dos actinideos (89 - 103) e sem símbolo 
        element_serie.innerHTML = `<p class='atomic_number'>${element.atomicnumber} </p><p class='symbol'>${element.symbol}</p><p class='name'>${element.name}</p>`
    return element_serie
} 

// criação da linha de séries
let serieLantanideos = document.createElement('div')
serieLantanideos.setAttribute('id', 'seriesL')
let serieActinideos = document.createElement('div')
serieActinideos.setAttribute('id', 'seriesA')
/**
 * Função alinhaSeries
 * 
 * função que alinha as series no documento 
 * 
 * @param {Object} serie - Elemento que será inserido no botão
 * @param {Number} altura - distancia da linha até o topo do documento
 * 
 */ 
function alinhaSeries(serie, altura){
    serie.style.position = "absolute"
    serie.style.top = altura
    serie.style.left = "135px"
    serie.style.width = '900px'
}
alinhaSeries(serieLantanideos, '450px')
alinhaSeries(serieActinideos, '510px')

for(let index = 0; index < elementos_lantanideos.length; index++){
    serieLantanideos.appendChild(buttonSeries(elementos_lantanideos[index],index,1));
}
for(let index = 0; index < elementos_actnideos.length; index++){
    serieActinideos.appendChild(buttonSeries(elementos_actnideos[index],index,2));
}

// Pintura da tabela
const buttons = divs.getElementsByClassName('element') // array com todos os botões da tabela principal
for(let i = 0; i < buttons.length; i++){
    buttons[i].style.background = cores[7] //pinta toda a tabela principal
    buttons[i].style.border = `1px solid ${coresz[7]}` //pinta toda a tabela principal
    
    naometais.forEach(numero => {if (i == numero) {
        buttons[i].style.background=cores[0]
        buttons[i].style.border = `1px solid ${coresz[0]}`
    }}) //pinta não metais

    gasesnobres.forEach(numero => {if (i == numero) {
        buttons[i].style.background=cores[1]
        buttons[i].style.border = `1px solid ${coresz[1]}`
    }}) // pinta gases nobres
    
    metaisalcalinos.forEach(numero => {if (i == numero) {
        buttons[i].style.background=cores[2]
        buttons[i].style.border = `1px solid ${coresz[2]}`
    }}) // pinta alcalinos
    
    metaisalcalinoterrosos.forEach(numero => {if (i == numero){
        buttons[i].style.background=cores[3]
        buttons[i].style.border = `1px solid ${coresz[3]}`
    }}) // pinta alcalinos terrosos
    
    semimetais.forEach(numero => {if (i == numero) {
        buttons[i].style.background=cores[4]
        buttons[i].style.border = `1px solid ${coresz[4]}`
    }}) // pinta semi-metais
    
    halogenios.forEach(numero => {if (i == numero) {
        buttons[i].style.background=cores[5]
        buttons[i].style.border = `1px solid ${coresz[5]}`
    }}) // pinta halogenios
    metaisdetransicao.forEach(numero => {if (i == numero) {
        buttons[i].style.background=cores[6]
        buttons[i].style.border = `1px solid ${coresz[6]}`
    }}) // pinta outros metais 
    
    if(i == 56 || i == 74){
        buttons[i].style.background="#FEFEFE"
        buttons[i].style.border="none"
        buttons[i].children[1].style.color="#FEFEFE"
    } //retira a pintura das séries
}
const buttonSerie1 = serieLantanideos.getElementsByClassName('elementSerie')
for(let i = 0; i<buttonSerie1.length ; i++){
    buttonSerie1[i].style.background = cores[8]
}
const buttonSerie2 = serieActinideos.getElementsByClassName('elementSerie')
for(let i = 0; i<buttonSerie2.length ; i++){
    buttonSerie2[i].style.background = cores[9]
    buttonSerie2[i].style.border = `1px solid ${coresz[9]}`
}



//insere tabela no elemento raiz
root.appendChild(divs)

//adiciona a séries abaixo da tabela principal
root.appendChild(serieLantanideos)
root.appendChild(serieActinideos)

// Pintura dos elementos por estado físico
solidos.flat().forEach((item) => {
    document.getElementById(`${item}`).children[1].style.color = `${letraEstados[0]}`
    /* document.getElementById(`${item}`).children[1].style.textShadow = `1px 1px 0px ${letraEstados[0]}, -1px 1px 0px ${letraEstados[0]}, -1px -1px 0px ${letraEstados[0]},1px 1px 0px ${letraEstados[0]}` */
})
liquidos.flat().forEach((item) => {
    document.getElementById(`${item}`).children[1].style.color = `${letraEstados[1]}`
    /* document.getElementById(`${item}`).children[1].style.textShadow = `1px 1px 0px ${letraEstados[1]}, -1px 1px 0px ${letraEstados[0]}, -1px -1px 0px ${letraEstados[1]},1px 1px 0px ${letraEstados[1]}` */
})
gasosos.flat().forEach((item) => {
    document.getElementById(`${item}`).children[1].style.color = `${letraEstados[2]}`
   /*  document.getElementById(`${item}`).children[1].style.textShadow = `1px 1px 0px ${letraEstados[2]}, -1px 1px 0px ${letraEstados[2]}, -1px -1px 0px ${letraEstados[2]},1px 1px 0px ${letraEstados[2]}` */
})
artificiais.flat().forEach((item) => {
    document.getElementById(`${item}`).children[1].style.color = `${letraEstados[3]}`
    document.getElementById(`${item}`).children[1].style.textShadow = `1px 1px 0px ${letraEstados[0]}, -1px 1px 0px ${letraEstados[0]}, -1px -1px 0px ${letraEstados[0]},1px 1px 0px ${letraEstados[0]}`
})
