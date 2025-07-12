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
    nome: "Detective Comics #27 (Batman)",
    imagem: "https://upload.wikimedia.org/wikipedia/en/0/0d/Detective_Comics_27.jpg",
    pdf: "https://archive.org/download/Detective_Comics_27/Detective_Comics_27.pdf"
  },
  {
    nome: "Wonder Woman #1",
    imagem: "https://upload.wikimedia.org/wikipedia/en/f/f8/Wonder_Woman_1.jpg",
    pdf: "https://archive.org/download/Wonder_Woman_1/Wonder_Woman_1.pdf"
  },
  {
    nome: "The Spirit #1",
    imagem: "https://archive.org/download/TheSpirit1/TheSpirit1.jpg",
    pdf: "https://archive.org/download/TheSpirit1/TheSpirit1.pdf"
  },
  {
    nome: "Captain Marvel (Whiz Comics #2)",
    imagem: "https://upload.wikimedia.org/wikipedia/en/d/d7/Captain_Marvel_Whiz_Comics_No_1.jpg",
    pdf: "https://archive.org/download/WhizComicsNo.2/WhizComicsNo.2.pdf"
  },
  {
    nome: "Flash Comics #1",
    imagem: "https://archive.org/download/FlashComics001/FlashComics001.jpg",
    pdf: "https://archive.org/download/FlashComics001/FlashComics001.pdf"
  },
  {
    nome: "Green Lantern #1",
    imagem: "https://archive.org/download/GreenLantern001/GreenLantern001.jpg",
    pdf: "https://archive.org/download/GreenLantern001/GreenLantern001.pdf"
  },
  {
    nome: "Marvel Comics #1",
    imagem: "https://archive.org/download/MarvelComics001/MarvelComics001.jpg",
    pdf: "https://archive.org/download/MarvelComics001/MarvelComics001.pdf"
  },
  {
    nome: "Detective Comics #38 (Robin estreia)",
    imagem: "https://archive.org/download/DetectiveComics038/DetectiveComics038.jpg",
    pdf: "https://archive.org/download/DetectiveComics038/DetectiveComics038.pdf"
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




