const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const botaoEntrar = document.querySelector('#btn-entrar');
const concorda = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const checkbox = document.querySelectorAll('label [type=checkbox]');
// --------- Iputs do Form ----------
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelectorAll('.family-item');
// const materia = document.querySelector('');
const avaliacao = document.querySelectorAll('input[name="rate"]');
const comentario = document.querySelector('#textarea');

function login() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', login);

// ---------- Função de ativar e desativar o botão enviar ----------

function ativarBtn() {
  if (concorda.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}
concorda.addEventListener('click', ativarBtn);

// --------- Contador de caracteres do textArea ----------

function contar() {
  contador.innerText = 500 - textArea.value.length;
}
textArea.addEventListener('keyup', contar);

// ---------- Requisito 21 ----------

// let lis = [];
/* function exe(event){
  let newForm = document.createElement('form')
  event.preventDefault()
  let form = document.getElementById('evaluation-form')
  var elementos = document.querySelector('#evaluation-form').elements

  for (let a of elementos){
    if (a.type == 'checkbox' || a.type == 'radio'){
      if (a.checked){
        lis.push(a.value)
      }
    }else if {

    }else{
      lis.push(a.value)
    }
    /* var =
    if (a.type == 'text'){
      var x = document.createElement('div')
      x.innerText = x.innerText + a.value

    }else if (a.type == 'textarea'){
      console.log(a.value)
    }
  }
  //newForm.appendChild(x)
  //form.innerHTML = newForm.innerHTML
} */

for (let x = 0; x < checkbox.length; x += 1) {
  const xis = checkbox[x];
  xis.classList.add('subject');
}

/* For usado acima
for (let x of checkbox) {
  x.classList.add('subject');
} */

const form = document.getElementById('evaluation-form');
const newForm = document.createElement('form');

const nomeV = document.createElement('div');
const emailN = document.createElement('div');
const casaN = document.createElement('div');
const familiaN = document.createElement('div');
const materiaN = document.createElement('div');
const avaliaN = document.createElement('div');
const comentN = document.createElement('div');
const lis = [nomeV, emailN, casaN, familiaN, materiaN, avaliaN, comentN];

function nameCompleto() {
  nomeV.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
}

function correio() {
  emailN.innerText = `Email: ${email.value}`;
}

function house() {
  casaN.innerText = `Casa: ${casa.value}`;
}

function family() {
  for (let i = 0; i < familia.length; i += 1) {
    const check = familia[i];
    if (check.checked) {
      familiaN.innerText = `Família: ${check.value}`;
    }
  }
}

let flip = true;
function checar(check) {
  if (check.checked) {
    if (flip) {
      materiaN.innerText += ` ${check.value}`;
      flip = false;
    } else {
      materiaN.innerText += `, ${check.value}`;
    }
  }
}

function lessons() {
  materiaN.innerText = 'Matérias: ';
  for (let i = 0; i < checkbox.length; i += 1) {
    const check = checkbox[i];
    checar(check);
  }
}

function rate() {
  for (let i = 0; i < avaliacao.length; i += 1) {
    const check = avaliacao[i];
    if (check.checked) {
      avaliaN.innerText = `Avaliação: ${check.value}`;
    }
  }
}

function coment() {
  comentN.innerText = `Observações: ${comentario.value}`;
}

function exe(event) {
  event.preventDefault();
  nameCompleto();
  correio();
  house();
  family();
  lessons();
  rate();
  coment();
  for (let e = 0; e < lis.length; e += 1) {
    newForm.appendChild(lis[e]);
  }
  form.innerHTML = newForm.innerHTML;
}
// For usado na função exe;
/* for (let i of checkbox) {
    if (i.checked) {
      materiaN.innerText += i.value+' ';
    }
  } */

btnEnviar.addEventListener('click', exe);
/* --------------- Referencias ---------------
https://www.horadecodar.com.br/2020/07/28/como-verificar-se-um-checkbox-esta-checado-c-javascript-ou-jquery/
https://www.delftstack.com/pt/howto/javascript/javascript-disable-button/#:~:text=A%20melhor%20maneira%20de%20fazer,alternar%20seu%20estado%20on%20%2F%20off%20.
*/
