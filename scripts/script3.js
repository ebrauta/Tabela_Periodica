/**
 *  
 * Parte 3 - aprendendo a manipular e iterar arrays
 * 
 * ==========  Criando arrays ==========
 * 4 formas de criar array 
 *  ArrayNovo = [itens]
 *  ArrayNovo = new Array(itens)
 *  ArrayNovo = Array.of(itens)
 *  ArrayNovo = Array(itens) -> nesta opção se o parêmetro for um número N, ele cria um array vazio 
 * com N posições
 * 
 * ArrayNovo = Array.from(Lista) -> transforma outros tipos de Listas em Array
 * 
 * ========== Inserindo Elementos ==========
 * ----- unshift -----
 * Adicionando no início do array 
 *   Array.unshift(item) 
 *   retorno: o numero de elementos do array
 * ----- push -----
 * Adiciona no fim do array 
 *   Array.push(item)
 *   retorno:  numero de elementos do array
 * 
 * ========== Removendo Elementos ==========
 * ----- shift -----
 * Removendo do início d array 
 *   Array.shift()
 *   retorno: o elemento removido
 * ----- pop -----
 * Removendo do fim do array
 *   Array.pop()
 *   retorno: o elemento removido
 * 
 * ========== Unindo dois arrays ==========
 * ----- concat -----
 *  ArrayNovo = Array1.concat(Array2) - concatena dois arrays 
 *   retorna: um novo array com os arrays unidos
 *  ArrayNovo = [Array1, Array2]
 * 
 * ========== Dividindo arrays ==========
 * ----- slice -----
 * ArrayNovo = Array.slice() -> fatia o array
 *   retorno: array com a parte fatiada
 *  slice(posInicial, posFinal) -> corta parte da posição inicial(incluida) até a final
 *  slice(posicao) -> corta parte começando na posição(incluida) e indo até final
 *  slice(-posicao) -> corta parte contando de trás pra frente até o final
 *  
 * ========== Alterando itens no array ==========
 * ----- splice -----
 * ArrayNovo = Array.splice() -> altera um array adicionando elementos e retirando outros 
 *  retorno:  retorna os elementos retirados -> (mexe no array  inicial)
 *  splice(posicao) -> altera para nulo a partir da posicao
 *  splice(posicao, qtdeElem, itensInserir) -> altera 'qtdeElem' elementos na posicao e troca por itensInserir
 * 
 * ========== Iterando elementos ==========
 * ----- forEach -----
 * intera um por um sem criar novo array
 * Array.forEach((valor, indice, array) => função)
 *  valor: mostra o valor do item
 *  indice: mostra o indice do item
 *  array: mostra o array inteiro onde está o item
 *   retorno: nenhum
 * ----- map -----
 * itera um por um criando novo array
 * NovoArray = Array.map((valor, indice, array) => função)
 *   valor, indice e array iguais ao forEach
 *   retorno: novo Array de acordo com o retorno da função
 * ----- flat -----
 * itera procurando arrays dentro do array e tornando os arrays como itens de acordo com o numero
 * ArrayFlat(numero)
 *   numero: quantidade de "profundidade"
 *   retorno: nenhum
 * ----- flatMap -----
 * junção do flat com o map - faz uma iteração com cada numero iniciando de 0 até concluir um array puro    
 *   NovoArray = Array.flatMap((valor, indice, array) => função)
 *   valor, indice e array iguais ao map
 *   retorno: novo Array de acordo com o retorno da função 
 * ----- Iterators -----
 * keys() -> retorna as keys
 * NovoArray = Array.keys()
 * values ->  retorna os values
 * NovoArray = Array.values()
 * entries -> retorna todos (keys e values)
 * NovoArray = Array.entries()
 * 
 * Array Iterator tem a função next() que passar de item para item
 * 
 * ========== Buscando elementos ==========
 * ----- find -----
 * busca o primeiro item que satisfaz um certa condição
 * Item = Array.find(condição)
 *  retorno: primeiro item que satisfaz a condição
 * ----- findIndex -----
 * identico ao find, porém retorna o índice do item
 * ItemIndex = Array.findIndex(condição)
 * retorno: índice do item que satisfaz a condição
 * ----- filter -----
 * busca todos os itens que satisfazem a condição
 * NovoArray = Array.filter(condição)
 * retorno: array com todos os items que satisfazem a condição
 * ----- indexOf -----
 * busca o primeiro índice(caso tenho mais de um) que um elemento pode ser encontrado no array
 * ItemIndex = Array.indexOf(item)
 * retorno: indice da primeira vez que o item aparece no array
 * ----- lastIndexOf ----
 * semelhante ao indexOf, porém busca o último índice do elemento
 * ItemIndex = Array.lastIndexOf(item)
 * retorno: indice da última vez que o item aparece no array
 * ----- includes -----
 * verifica se existe ou não o item no array
 * Booleano = Array.includes(item)
 * retorno: true (caso exista), false (caso não exista)
 * ----- some -----
 * verifica se algum item safistaz um condição
 * Booleano = Array.some((item) => condição)
 * retorno: true (caso satisfaça), false (caso não satisfaça)
 * ----- every -----
 * verifica se todos os itens satisfazem a condição
 * Booleano = Array.every((item) => condição)
 * retorno: true (caso satisfaça), false (caso não satisfaça)
 * 
 * ========== Ordenando elementos ==========
 * ----- sort -----
 * Ordena os elementos de acordo com a condição
 * Array.sort((itemAtual, proxItem) => condição)
 *  retorno: nenhum
 * ----- reverse -----
 * Inverte os elementos de um array
 * Array.reverse()
 *  retorno: nenhum
 * 
 * ========== Transformando arrays em outro tipo de dados ==========
 * ----- join -----
 * Junta os elementos de um array separados por um delimitador e transforma em uma string
 * NovaString = Array.join(delimitador)
 * retorno: uma string com elementos separados pelo delimitador
 * ----- reduce -----
 * Retorna um novo tipo de dado iterando cada posição de um array
 * Array.reduce((variavelFinal, valor, index, arr) => função, valorInicialDaVariavel)
 * valor, indice e array iguais ao forEach e ao map
*/

// Criando Arrays

const Pessoas1 = ['Jhon', 'Chris', 'Jane'] 
const Pessoas2 = new Array('Jhon', 'Chris', 'Jane') 
const Pessoas3 = Array.of('Jhon','Chris','Jane') 
const Pessoas4 = Array('Jhon','Chris','Jane')  // cons x = Array(4) --> x = [null, null, null, null]

const divs = document.querySelectorAll('div') //NodeList
console.log(divs)
const divArray = Array.from(divs)
console.log(divArray)
divArray.pop()
console.log(divArray)

// Inserir e remover elementos

const frutas = ['melancia', 'banana']
const frutasSize = frutas.push('laranja');
console.log(frutasSize)
console.log(frutas)

const frutaRemoved = frutas.pop()
console.log(frutaRemoved)
console.log(frutas)

const frutasSize2 = frutas.unshift('laranja')
console.log(frutasSize)
console.log(frutas)

const frutaRemoved2 = frutas.shift()
console.log(frutaRemoved2)
console.log(frutas)

const salgados = ['coxinha', 'quibe', 'empada']

// concatenar arrays

const alimentos1 = frutas.concat(salgados);
const alimentos2 = salgados.concat(frutas);
console.log(alimentos1)
console.log(alimentos2)

//fatiar Arrays 

console.log('slice0: ' + alimentos2) 

// 5 elementos -> [0,1,2,3,4]
console.log('slice1: ' + alimentos2.slice(0,2)) // arr = [0,1]
console.log('slice2: ' + alimentos2.slice(2))  //arr = [2,3,4]
console.log('slice3: ' + alimentos2.slice(-1)) //arr = [4]
console.log('slice4: ' + alimentos2.slice(-3)) // arr = [3,4]

// 5 elementos -> [0,1,2,3,4]
console.log(alimentos2.splice(2)); // arr = [0,1]
console.log(alimentos2.splice(0, 0, 1)) // arr = [1,0,1,2,3,4]
console.log(alimentos2.splice(2, 1, 'laranja', 'amora')) // arr = [0,1,'laranja','amora',3,4]
console.log(alimentos2)

// Iterando elementos
//forEach
const alimEach = Array.from(alimentos1);
alimEach.forEach((value, index) => {
    console.log(`alimEach: ${index}: ${value}`);
})

//map()
const aliMap = alimentos1.map((fruta, index) => {
    console.log(`aliMap: ${index} - ${fruta}`);
    return fruta;
})

//flat()
const idades = [20, 34, [35, 60, [70, 40]]]; // array com arrays internos
console.log(idades)
console.log(idades.flat(1)) //retira 1 array -> [20, 34, 35, 60, [70,40]]
console.log(idades.flat(2)) //retira 2 arrays --> [20, 34, 35, 60, 70, 40]

//flatmap()
const idadesFlatMap = idades.flatMap((value, index) => {
    console.log(`idadesflatMap: ${index} - ${value}`);
    return value;
})

//iterator - keys(), values() e entries()
const alimentosIterator1 = alimentos1.keys()
const alimentosIterator2 = alimentos1.values()
const alimentosIterator3 = alimentos1.entries()

console.log(alimentosIterator1.next())
console.log(alimentosIterator2.next())
console.log(alimentosIterator3.next())

//find
const numeros = [1, 2, 3, 4]
const primeiroItem = numeros.find(value => value > 2)
const primeiroIndex = numeros.findIndex(value => value > 2)
console.log(numeros)
console.log(primeiroItem)
console.log(primeiroIndex)

//filter
const buscaItems = numeros.filter(value => value > 2)
console.log(buscaItems)

//indexOf
const numeros2 = [1, 3 , 3 , 4 , 3]
const primeiroIndexOf = numeros2.indexOf(3)
console.log(primeiroIndexOf)

//lastIndexOf
const ultimoIndexOf = numeros2.lastIndexOf(3)
console.log(ultimoIndexOf)

//includes
const temItem1 = numeros2.includes(1)
const temItem2 = numeros2.includes(2)
console.log(temItem1)
console.log(temItem2)

//some
const students = [
    {name: 'Jonh', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4}
]
const temAlgumItem = students.some(student => student.grade >= 7)
const quaisItems = students.find(student => student.grade >= 7)
const quaisItemsIndex = students.findIndex(student => student.grade >= 7)
console.log(students)
console.log(temAlgumItem)
console.log(quaisItems)
console.log(quaisItemsIndex)

//every
const allEvenNumber = numeros2.every(value => value % 2 == 0)
console.log(allEvenNumber)
const todosPassaram = students.every(student =>  student.grade >= 7)
console.log(todosPassaram)

//sort
console.log(students.sort((atual, prox) => atual.grade - prox.grade))

//reverse
console.log(numeros2.reverse())

//join
const numerosString = numeros2.join('x')
console.log(numerosString)

//reduce
console.log(numeros2.reduce((total, value) => total += value, 0))
console.log(students.reduce((totalGrades, student) => totalGrades += student.grade, 0)/students.length)
console.log(students.reduce((studentNames, student) => studentNames += student.name + " ", ""))