const immagineMembro = document.getElementById("immagine-membro");
const nomeMembro = document.getElementById("nome-membro");
const ruoloMembro = document.getElementById("ruolo-membro");
const mailMembro = document.getElementById("mail-membro");

let membriTeam = [
  {
    immagine: "male1.png",
    nome: "Marco Bianchi",
    ruolo: "Designer",
    mail: "marcobianchi@team.com",
  },

  {
    immagine: "female1.png",
    nome: "Laura Rossi",
    ruolo: "Front-end Developer",
    mail: "laurarossi@team.com",
  },

  {
    immagine: "male2.png",
    nome: "Giorgio Verdi",
    ruolo: "Back-end Developer",
    mail: "giorgioverdi@team.com",
  },

  {
    immagine: "female2.png",
    nome: "Marta Ipsum",
    ruolo: "SEO Specialist",
    mail: "martaipsum@team.com",
  },

  {
    immagine: "male3.png",
    nome: "Roberto Lorem",
    ruolo: "SEO Specialist",
    mail: "robertolorem@team.com",
  },

  {
    immagine: "female3.png",
    nome: "Daniela Amet",
    ruolo: "Analyst",
    mail: "danielaamet@team.com",
  },
];

const membroCard = document.getElementById("membro-card");
let cardsHtml = ``;

membriTeam.forEach((membro) => {
  const memberCard = `
        <div class="d-flex justify-content-between">
          <div class="col-4 bg-dark text-white mx-3">
            <div class="row">
              <div class="col-6">
                <img
                  id="immagine-membro"
                  class="img-fluid"
                  src="./img/${membro.immagine}"
                  alt=""
                />
              </div>
              <div class="col-6">
                <div class="container d-flex flex-column align-items-start">
                  <h3 id="nome-membro">${membro.nome}</h3>
                  <span id="ruolo-membro">${membro.ruolo}</span>
                  <a id="mail-membro" href="#">${membro.mail}</a>
                </div>
              </div>
            </div>
          </div>
        </div>`;

  cardsHtml += memberCard;
});

membroCard.innerHTML = cardsHtml;
