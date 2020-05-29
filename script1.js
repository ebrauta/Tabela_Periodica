/* Parte 1 - aprendendo filter(), map() e reduce() */
const moedas = [
    {
        name: "Reais",
        simb : "R$",
        local: "América"
    },
    {   
        name: "Ienes",
        simb: "JP¥",
        local: "Ásia"
    },
    {   
        name: "Libras esterlinas", 
        simb: "£",
        local: "Europa"
    },
    {
        name: "Dólares americanos", 
        simb: "US$",
        local: "América"
    },
    {   
        name: "Euros", 
        simb: "€",
        local: "Europa"
    },
    {   
        name: "Yuans", 
        simb: "CN¥",
        local: "Ásia" 
    },
    {   
        name: "Rublos russos",
        simb: "₽",
        local: "Europa"
    }
]

const divfilter = document.createElement('div')
const divmap = document.createElement('div')
const divreduce = document.createElement('div')

divfilter.setAttribute('id','filtro')
divmap.setAttribute('id','mapa')
divreduce.setAttribute('id','reduz')

//filtra de acordo com a constante loc
const loc = "América"
var filtro = moedas.filter(item => item.local == loc)

divfilter.innerHTML = JSON.stringify(filtro);

//mapeia e cria um array somente com os nomes das moedas
const key = 'name'
var mapa = moedas.map((item) => {
    return item[key]
})

divmap.innerHTML = JSON.stringify(mapa);

//separa as moedas por local
var reduza = moedas.reduce((prop, item) => {
    let what = 'local'
    let key = item[what]
    if(!prop[key]){
        prop[key] = []
    }
    prop[key].push(item)
    return prop;
}, {});


function locs(loc){
    switch(loc){
        case 'América':
            return reduza.América
            break
        case 'Europa':
            return reduza.Europa
            break
        case 'Ásia':
            return reduza.Ásia
            break
        default:
            return null
            break
    }
}

const localName = 'América'
divreduce.innerHTML = JSON.stringify(locs(localName));
                
var root1 = document.getElementById('root1');
root1.appendChild(divfilter);
root1.appendChild(document.createElement('p'))
root1.appendChild(divmap);
root1.appendChild(document.createElement('p'))
root1.appendChild(divreduce);
