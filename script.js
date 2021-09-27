const capturar = () => {

  document.getElementById("nome").value
  document.getElementById("cpf").value
  document.getElementById("identidade").value
  document.getElementById("nasc").value
  document.getElementById("filiacao").value
  document.getElementById("catasus").value
  document.getElementById("email").value
  document.getElementById("tel").value
  document.getElementById("endereco").value
  document.getElementById("bairro").value
  document.getElementById("cep").value
  document.getElementById("municipio").value
  document.getElementById("estado").value
  document.getElementById("complemento").value

  const atendido = {
    nome,
    cpf,
    identidade,
    nasc,
    filiacao,
    catasus,
    email,
    tel,
    endereco,
    bairro,
    cep,
    municipio,
    estado,
    complemento,
  }

  const atendidoEL = `<div>
<br>

${[
      'Nome :' + nome.value + '<br><br>' +
      'Cpf :' + cpf.value + '<br><br>' +
      'Identidade :' + identidade.value + '<br><br>' +
      'Nascimento :' + nasc.value + '<br><br>' +
      'Filiação :' + filiacao.value + '<br><br>' +
      'Cartão do SUS :' + catasus.value + '<br><br>' +
      'E-mail :' + email.value + '<br><br>' +
      'Telefonetel :' + tel.value + '<br><br>' +
      'Endereço :' + endereco.value + '<br><br>' +
      'Bairro :' + bairro.value + '<br><br>' +
      'Cep :' + cep.value + '<br><br>' +
      'Municipio :' + municipio.value + '<br><br>' +
      'Estado :' + estado.value + '<br><br>' +
      'Complemento :' + complemento.value + '<br><br>'
    ]
    }</div>`

  document.getElementById("atendidos").innerHTML = atendidoEL

  console.log(atendidoEL)
}