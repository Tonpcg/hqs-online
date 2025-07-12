const hqs = [
  {
    nome: "Action Comics #1 (1938)",
    imagem: "https://archive.org/download/ActionComics001/ActionComics001.jpg",
    link: "https://archive.org/details/ActionComics001"
  },
  {
    nome: "Superman #1 (1939)",
    imagem: "https://archive.org/download/Superman_1/Superman1.jpg",
    link: "https://archive.org/details/Superman_1"
  },
  {
    nome: "Batman (Detective Comics #27)",
    imagem: "https://upload.wikimedia.org/wikipedia/en/0/0d/Detective_Comics_27.jpg",
    link: "https://archive.org/details/DetectiveComics27"
  },
  {
    nome: "Wonder Woman #1",
    imagem: "https://upload.wikimedia.org/wikipedia/en/f/f8/Wonder_Woman_1.jpg",
    link: "https://archive.org/details/WonderWoman1"
  },
  {
    nome: "The Spirit #1",
    imagem: "https://archive.org/download/TheSpirit1/TheSpirit1.jpg",
    link: "https://archive.org/details/TheSpirit1"
  },
  {
    nome: "Captain Marvel #1",
    imagem: "https://upload.wikimedia.org/wikipedia/en/d/d7/Captain_Marvel_Whiz_Comics_No_1.jpg",
    link: "https://archive.org/details/WhizComics_v1n02"
  }
];

const hqList = document.getElementById("hq-list");
hqs.forEach(hq => {
  const card = document.createElement("div");
  card.className = "hq-card";
  card.innerHTML = `
    <img src="${hq.imagem}" alt="${hq.nome}">
    <h3>${hq.nome}</h3>
    <a href="${hq.link}" target="_blank" rel="noopener noreferrer">Ler HQ</a>
  `;
  hqList.appendChild(card);
});

