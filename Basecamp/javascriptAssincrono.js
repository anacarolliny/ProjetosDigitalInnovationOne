// Atividade: API "catAPI"
// Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

// Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
// Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
// Demo


const BASE_URL = "https://thatcopy.pw/catapi/rest/" // armazena a url de busca que vamos fazer
const catBtn = document.getElementById("change-cat") //cria o link entre o botao do  html e a ação no js

//aqui é a criação da função assincrona que vai resolver o fetch e tratar esta informação
const getCats = async () => {
  try {
    const data = await fetch(BASE_URL) //aqui estamos dizendo que o data recebe o fetch já previamente armazenaod em BASE_URL
    const json = await data.json() // aqui estamos dizendo que uma variavel json armazena a transformacao desses dados para json
    return json.webpurl // e aqui dizemos o que queremos em json da url e a propriedade que queremos é a webpurl
  } catch (error) {
    console.log(error.message);
  }
}

//a função que  carrega a imagem com o id do html vai receber pelo DOM e tem como source a função fetch
const loadImg = async() =>{
  const catImg = document.getElementById("cat")
  catImg.src = await getCats()
}

//aqui o botao vai ouvir em cada click quando clicar ele tem que rodar o loadImg
catBtn.addEventListener('click', loadImg)

loadImg()