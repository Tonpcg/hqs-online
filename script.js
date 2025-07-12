const hqs = [
  {
    nome: "Action Comics #1 (1938)",
    imagem: "https://archive.org/download/ActionComics001/ActionComics001.jpg",
    pdf: "https://archive.org/download/ActionComics001/ActionComics001.pdf"
  },
  {
    nome: "Superman #1 (1939)",
    imagem: "https://archive.org/download/Superman_1/Superman1.jpg",
    pdf: "https://archive.org/download/Superman_1/Superman_1.pdf"
  },
  {
    nome: "Batman (Detective Comics #27)",
    imagem: "https://upload.wikimedia.org/wikipedia/en/0/0d/Detective_Comics_27.jpg",
    pdf: "https://archive.org/download/DetectiveComics27/DetectiveComics27.pdf"
  },
  {
    nome: "Wonder Woman #1",
    imagem: "https://upload.wikimedia.org/wikipedia/en/f/f8/Wonder_Woman_1.jpg",
    pdf: "https://archive.org/download/WonderWoman1/WonderWoman1.pdf"
  },
  {
    nome: "The Spirit #1",
    imagem: "https://archive.org/download/TheSpirit1/TheSpirit1.jpg",
    pdf: "https://archive.org/download/TheSpirit1/TheSpirit1.pdf"
  },
  {
    nome: "Captain Marvel #1",
    imagem: "https://upload.wikimedia.org/wikipedia/en/d/d7/Captain_Marvel_Whiz_Comics_No_1.jpg",
    pdf: "https://archive.org/download/WhizComics_v1n02/WhizComics_v1n02.pdf"
  }
];

const hqList = document.getElementById("hq-list");
hqs.forEach(hq => {
  const card = document.createElement("div");
  card.className = "hq-card";
  card.innerHTML = `
    <img src="${hq.imagem}" alt="${hq.nome}">
    <h3>${hq.nome}</h3>
    <a href="${hq.pdf}" target="_blank" rel="noopener noreferrer">Ler HQ</a>
  `;
  hqList.appendChild(card);
});



