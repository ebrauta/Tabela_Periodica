const root = document.getElementById('root1')

const header = document.querySelector('#group_header')
const details = document.querySelector('#group_details')

const divs = document.createElement('div')
divs.setAttribute('class','tabela')
for(let index = 0; index < elements.length; index++){
    let divname = document.createElement('button')
    let Z = document.createElement('p')
    let symbol = document.createElement('p')
    divname.setAttribute('class','element')
    Z.setAttribute('class','atomic_number')
    symbol.setAttribute('class','symbol')
    divname.addEventListener('mouseover',() => {
        header.innerHTML = `${elements[index].name}`
        header.setAttribute('id','selected')
        details.innerHTML = `
        <div class="information">
            <div class="information_element">
                <div class="information_electronic_configuration">${elements[index].ec}</div>
                <div class="information_symbol">${elements[index].symbol}</div>
                <div class="information_name">${elements[index].name}</div>
                <div class="other_informations">
                    <div class="information_atomic_number">${elements[index].atomicnumber}</div>
                    <div class="information_atomic_mass">${elements[index].atomicmass}</div>
                </div>
            </div>
            <div class="information_table">
                <p>Símbolo: <span class="info">${elements[index].symbol}</span></p>
                <p>Número Atômico: <span class="info">${elements[index].atomicnumber}</span></p>
                <p>Massa atômica: <span class="info">${elements[index].atomicmass} u</span></p>
                <p>Configuração eletrônica: <span class="info">${elements[index].ec}</span></p>
                <p>Descoberta: <span class="info">${elements[index].year}</span></p>
            </div>
        </div>
     `
    })
    divname.addEventListener('mouseout',() => {
        header.innerHTML = 'Tabela Periódica'
        header.removeAttribute('id')
        details.innerHTML = `A Tabela Periódica é um modelo que agrupa todos os elementos
        químicos conhecidos e suas propriedades. Eles estão organizados
        em ordem crescente correspondente aos números atômicos (número
        de prótons).`
    })
    Z.innerHTML = `${elements[index].atomicnumber}`
    symbol.innerHTML = `${elements[index].symbol}`
    divname.appendChild(Z)
    divname.appendChild(symbol)
    divs.appendChild(divname)
} 

root.appendChild(divs)
//root.innerHTML="Olá Mundo!"