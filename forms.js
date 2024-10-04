const btncadastro = document.getElementById('cadastro')
btncadastro.addEventListener ('click', () => {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value
    let data = document.getElementById('data').value

    document.getElementById('lnome').innerHTML = 'Nome: ' + (nome)
    document.getElementById('lemail').innerHTML = 'Email : ' + (email)
    document.getElementById('ldata').innerHTML = 'Data: ' + (data)
}) 

const btnlimpar = document.getElementById('limpar')
btnlimpar.addEventListener ('click', () => {
   let nome = ''
   let email = ''
   let data = ''

  document.getElementById('nome').value = (nome)
  document.getElementById('email').value = (email)
  document.getElementById('data').value = data

   document.getElementById('lnome').innerHTML = 'Nome: ' + (nome)
   document.getElementById('lemail').innerHTML = 'Email : ' + (email)
   document.getElementById('ldata').innerHTML = 'Data: ' + (data)
})