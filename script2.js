/* Parte 2 - Aprendendo a criar heranças de protótipos e classes*/
'use strict'
// criando uma função animal que servirá como modelo
function Animal1(){}
Animal1.prototype.qtdePatas = 0;
Animal1.prototype.nome = '';
Animal1.prototype.movimentar = function () {}

// função cachorro herdará os protótipo de Animal 
function Cachorro1(nome, morde){
    this.nome = nome
    this.qtdePatas = 4
    this.morde = morde; 
};
Cachorro1.prototype = Object.create(Animal1) // herdando protótipos
Cachorro1.prototype.latir = function(){ // criando seu próprios protótipos
    return `O ${this.nome}  faz Au au!`;
}
// criando variavéis com a instância cachorro
const pug = new Cachorro1('pug', false);
//utilizando os protótipos
const divdog1 = document.createElement('div')
divdog1.setAttribute('id','divdog')
divdog1.innerHTML = pug.latir()

// função gato que também herdará os protótipo de Animal 
function Gato1(nome, arranha){
    this.nome = nome
    this.qtdePatas = 4;
    this.arranha = arranha;
}
Gato1.prototype = Object.create(Animal1) // herdando protótipos
Gato1.prototype.miar = function(){ // criando seu próprios protótipos
    return `O ${this.nome} faz Miau!`;
}
// criando variavéis com a instância gato
const siames = new Gato1('siamês', true);
//utilizando os protótipos
const divcat1 = document.createElement('div')
divcat1.setAttribute('id','divcat1')
divcat1.innerHTML = siames.miar()
// criando a mesma coisa utilizando classes

class Animal2 {
    constructor(qtdePatas){
        this.qtdePatas = qtdePatas; 
    }
    movimentar(){}
}

class Cachorro2 extends Animal2 {
    constructor(nome, morde){
        super();
        this.qtdePatas = 4;
        this.nome = nome;
        this.morde = morde;
    }
    latir(){
        return `O ${this.nome} faz Au au!`;
    }
}
const basset = new Cachorro2('basset', false)
const divdog2 = document.createElement('div')
divdog2.setAttribute('id','divdog2')
divdog2.innerHTML = basset.latir()
class Gato2 extends Animal2{
    constructor(nome, arranha){
        super();
        this.qtdePatas = 4;
        this.nome = nome;
        this.arranha = arranha;
    }
    miar(){
        return `O ${this.nome} faz Miau!`;
    }
}
const viralata = new Gato2('viralata', true)
const divcat2 = document.createElement('div')
divcat2.setAttribute('id','divcat2')
divcat2.innerHTML = viralata.miar()

var root2 = document.getElementById('root2');
root2.appendChild(divdog1);
root2.appendChild(document.createElement('p'))
root2.appendChild(divcat1);
root2.appendChild(document.createElement('p'))
root2.appendChild(divdog2);
root2.appendChild(document.createElement('p'))
root2.appendChild(divcat2);
root2.appendChild(document.createElement('p'))
