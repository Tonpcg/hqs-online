
const hqs = [
  {
    nome: "Superman (1939)",
    imagem: "https://upload.wikimedia.org/wikipedia/en/7/77/Superman1.jpg",
    link: "https://www.gutenberg.org/ebooks/31379"
  },
  {
    nome: "Batman #27",
    imagem: "https://upload.wikimedia.org/wikipedia/en/0/0d/Detective_Comics_27.jpg",
    link: "https://example.com/batman27.pdf"
  },
  {
    nome: "Wonder Woman #1",
    imagem: "https://upload.wikimedia.org/wikipedia/en/f/f8/Wonder_Woman_1.jpg",
    link: "https://example.com/wonderwoman1.pdf"
  },
  {
    nome: "Capitão Marvel #1",
    imagem: "https://upload.wikimedia.org/wikipedia/en/d/d7/Captain_Marvel_Whiz_Comics_No_1.jpg",
    link: "https://example.com/captainmarvel1.pdf"
  }
];

const hqList = document.getElementById("hq-list");
hqs.forEach(hq => {
  const card = document.createElement("div");
  card.className = "hq-card";
  card.innerHTML = `
    <img src="${hq.imagem}" alt="${hq.nome}">
    <h3>${hq.nome}</h3>
    <a href="${hq.link}" target="_blank">Ler HQ</a>
  `;
  hqList.appendChild(card);
});
