const immagineMembro = document.getElementById("immagine-membro");
const nomeMembro = document.getElementById("nome-membro");
const ruoloMembro = document.getElementById("ruolo-membro");
const mailMembro = document.getElementById("mail-membro");

let membriTeam = [
  {
    immagine: "female1.png",
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
    immagine: "female1.png",
    nome: "Giorgio Verdi",
    ruolo: "Back-end Developer",
    mail: "giorgioverdi@team.com",
  },

  {
    immagine: "female1.png",
    nome: "Marta Ipsum",
    ruolo: "SEO Specialist",
    mail: "martaipsum@team.com",
  },

  {
    immagine: "female1.png",
    nome: "Roberto Lorem",
    ruolo: "SEO Specialist",
    mail: "robertolorem@team.com",
  },

  {
    immagine: "female1.png",
    nome: "Daniela Amet",
    ruolo: "Analyst",
    mail: "danielaamet@team.com",
  },
];

const membroCard = document.getElementById("membro-card");

const stampaCard = () => {
  membriTeam.forEach(
    (cardDelMembro = membroCard.innerHTML =
      ` <div class="d-flex justify-content-between">
          <div class="col-4 bg-dark text-white mx-3">
            <div class="row">
              <div class="col-6">
                <img
                  id="${membriTeam.immagine}"
                  class="img-fluid"
                  src="./img/female1.png"
                  alt=""
                />
              </div>
              <div class="col-6">
                <div class="container d-flex flex-column align-items-start">
                  <h3 id="nome-membro">${membriTeam.name}</h3>
                  <span id="ruolo-membro">${membriTeam.ruolo}</span>
                  <a id="mail-membro" href="#">${membriTeam.mail}</a>
                </div>
              </div>
            </div>
          </div>
        </div>`)
  );
  return cardDelMembro;
};

stampaCard();
