/* formas de referenciar variaveis em JS:
var = escopo global, funciona em todo código.
let = escopo local, funciona só dentro do perimetro ex: p{
    let nome.
}
const = escopo global, mas é constante não muda valor.
*/


/*
BUSCAS NO DOM:
( lembrando que é Case Sensitive )
busca por tag: getElementByTagName()
*busca por ID: getElementById()
busca por Nome: getElementsByName()
busca por classe: getElementsByClassName()
*busca por seletor: querySelector()
*mais usadas
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("input#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

/* no JS nós trabalhamos com eventos e funções, usamos a lógica de programação para construir condições */
function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red' 
    } else {
       txtNome.innerHTML = 'Nome Válido'
       txtNome.style.color = 'green'
       nomeOk = true
    }
 
 }

 function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'green'
       emailOk = true
    }
 }

 function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 100) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none' /* tira o espaço da mensagem de erro.*/
       assuntoOk = true
    }
 }

 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }

 /* ao passar o mouse da zoom no mapa */
 function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }
 
 /* quando saimos com o mouse de cima do mapa ele volta ao tamnho normal */
 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }