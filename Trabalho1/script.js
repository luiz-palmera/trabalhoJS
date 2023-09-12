function alteraImagem1() {
  const elemento = document.getElementById("main");
  elemento.classList.add("imagem1")

  const cardapio = document.getElementById("main")
  cardapio.classList.remove("imagem3")

  const contatos = document.getElementById("main")
  contatos.classList.remove("imagem4")

  const boxContatos = document.getElementById("contatos")
  boxContatos.classList.remove("contatos")

  const boxCardapio = document.getElementById("cardapio")
  boxCardapio.classList.remove("cardapio")

  const boxQuemSomos = document.getElementById("quem-somos")
  boxQuemSomos.classList.remove("quemSomos")

  const box = document.getElementById("home")
  box.classList.add("home1")

  

  document.getElementById("contatos").style.color = "#703352"
  document.getElementById("home").style.color = "white"
  document.getElementById("quem-somos").style.color = "#703352"
  document.getElementById("cardapio").style.color = "#703352"

  document.getElementById("texto-default").innerHTML = "Página Inicial"
  document.getElementById("texto1").innerHTML = "SEJA BEM VINDO!"
  document.getElementById("texto1").style.color = "#703352"

  document.getElementById("desHome").innerHTML = "Aqui o cliente tem prioridade, sinta-se em casa!"
  document.getElementById("desHome2").innerHTML = "Consulte a unidade mais próxima."
  document.getElementById("desHome3").innerHTML = "Atendendo sempre com amor!"
  document.getElementById("desHome4").innerHTML = "Nossos funcionários estarão sempre a sua disposição!"

  document.getElementById("icone-home").src = "imagens/home.png.png"
  document.getElementById("icone-home2").src = "imagens/loc.png"
  document.getElementById("icone-home3").src = "imagens/coracao.png"
  document.getElementById("icone-home4").src = "imagens/func.png"

  document.getElementById("footer").style.background = "#703352"

}



function alteraImagem2() {
  const quemSomos = document.getElementById("main");
  quemSomos.classList.remove("imagem1")

  const cardapio = document.getElementById("main")
  cardapio.classList.remove("imagem3")

  const contatos = document.getElementById("main")
  cardapio.classList.remove("imagem4")

  const elemento = document.getElementById("main");
  elemento.classList.add("imagem2")

  const boxContatos = document.getElementById("contatos")
  boxContatos.classList.remove("contatos")

  const boxCardapio = document.getElementById("cardapio")
  boxCardapio.classList.remove("cardapio")

  const boxHome = document.getElementById("home")
  boxHome.classList.remove("home1")

  const box = document.getElementById("quem-somos")
  box.classList.add("quemSomos")

  document.getElementById("contatos").style.color = "#70333d"
  document.getElementById("home").style.color = "#70333d"
  document.getElementById("quem-somos").style.color = "white"
  document.getElementById("cardapio").style.color = "#70333d"

  document.getElementById("texto-default").innerHTML = "Quem Somos"
  document.getElementById("texto1").innerHTML = "NOS CONHEÇA MELHOR!"
  document.getElementById("texto1").style.color = "#70333d"

  document.getElementById("desHome").innerHTML = "Te servindo sempre o melhor desde 2003!"
  document.getElementById("desHome2").innerHTML = "Empresa certificada pelo Inmetro."
  document.getElementById("desHome3").innerHTML = "Nosso maior objetivo é passar amor através da culinaria!"
  document.getElementById("desHome4").innerHTML = "Nossos funcionários passam por um curso preparatório!"

  document.getElementById("icone-home").src = "imagens/calendario.png"
  document.getElementById("icone-home2").src = "imagens/certificado.png"
  document.getElementById("icone-home3").src = "imagens/carta.png"
  document.getElementById("icone-home4").src = "imagens/livro.png"

  document.getElementById("footer").style.background = "#70333d"
}

function alteraImagem3() {
  const quemSomos = document.getElementById("main");
  quemSomos.classList.remove('imagem1')

  const home = document.getElementById("main");
  home.classList.remove("imagem2")

  const contatos = document.getElementById("main")
  contatos.classList.remove("imagem4")

  const elemento = document.getElementById("main");
  elemento.classList.add("imagem3")

  const boxContatos = document.getElementById("contatos")
  boxContatos.classList.remove("contatos")

  const boxQuemSomos = document.getElementById("quem-somos")
  boxQuemSomos.classList.remove("quemSomos")

  const boxHome = document.getElementById("home")
  boxHome.classList.remove("home1")

  const box = document.getElementById("cardapio")
  box.classList.add("cardapio")

  document.getElementById("contatos").style.color = "#453370"
  document.getElementById("home").style.color = "#453370"
  document.getElementById("quem-somos").style.color = "#453370"
  document.getElementById("cardapio").style.color = "white"

  document.getElementById("texto-default").innerHTML = "Cardapio"
  document.getElementById("texto1").innerHTML = "CONHEÇA NOSSAS DELICAS!"
  document.getElementById("texto1").style.color = "#453370"

  document.getElementById("desHome").innerHTML = "Açaí"
  document.getElementById("desHome2").innerHTML = "Acompanhamentos"
  document.getElementById("desHome3").innerHTML = "Picolés"
  document.getElementById("desHome4").innerHTML = "Sorvetes"

  document.getElementById("icone-home").src = "imagens/acai.png"
  document.getElementById("icone-home2").src = "imagens/acomp.png"
  document.getElementById("icone-home3").src = "imagens/picole.png"
  document.getElementById("icone-home4").src = "imagens/sorvete.png"

  document.getElementById("footer").style.background = "#453370"
}

function alteraImagem4() {
  const quemSomos = document.getElementById("main");
  quemSomos.classList.remove('imagem1')

  const home = document.getElementById("main");
  home.classList.remove("imagem2")

  const cardapio = document.getElementById("main")
  cardapio.classList.remove("imagem3")

  const elemento = document.getElementById('main');
  elemento.classList.add('imagem4')

  const boxCardapio = document.getElementById("cardapio")
  boxCardapio.classList.remove("cardapio")

  const boxQuemSomos = document.getElementById("quem-somos")
  boxQuemSomos.classList.remove("quemSomos")

  const boxHome = document.getElementById("home")
  boxHome.classList.remove("home1")

  const box = document.getElementById("contatos")
  box.classList.add("contatos")

  document.getElementById("contatos").style.color = "white"
  document.getElementById("home").style.color = "#334570"
  document.getElementById("quem-somos").style.color = "#334570"
  document.getElementById("cardapio").style.color = "#334570"

  document.getElementById("texto-default").innerHTML = "Contato"
  document.getElementById("texto1").innerHTML = "AGUARDAMOS SEU CONTATO!"
  document.getElementById("texto1").style.color = "#334570"

  document.getElementById("desHome").innerHTML = "Whatsapp: (31)9 99155-7380"
  document.getElementById("desHome2").innerHTML = "Instagram: @FrutaRoxaOficial"
  document.getElementById("desHome3").innerHTML = "E-mail: frutaroxacontato@hotmail.com"
  document.getElementById("desHome4").innerHTML = "Fixo: (31) 3346-7784"

  document.getElementById("icone-home").src = "imagens/whatsapp1.png"
  document.getElementById("icone-home2").src = "imagens/instagram1.png"
  document.getElementById("icone-home3").src = "imagens/mail.png"
  document.getElementById("icone-home4").src = "imagens/fone.png"

  document.getElementById("footer").style.background = "#334570"
}

