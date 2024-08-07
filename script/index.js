const profbtn = document.querySelector('.profile__btn-info');
const formclose = document.querySelector('.profile__form-close');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');
const nameInput = document.querySelector('.profile__form-name');
const jobInput = document.querySelector('.profile__form-job');
const formEdit = document.querySelector('.profile__form');
const submitButton = document.querySelector('.profile__form-submit');

// Inicializar os campos do perfil
nameProfile.textContent = 'Jaques Costeau';
jobProfile.textContent = 'Explorador';

function openForm() {
    formEdit.classList.add('profile__form-open');
}

function closeForm() {
    formEdit.classList.remove('profile__form-open');
}

function handleSubmit(event) {
    event.preventDefault();
    // Atualizar os valores do perfil com os valores dos inputs
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeForm();
}

profbtn.addEventListener('click', openForm);
formclose.addEventListener('click', closeForm);
formEdit.addEventListener('submit', handleSubmit);

document.addEventListener('click', function(event) {
    if (!formEdit.contains(event.target) && !profbtn.contains(event.target)) {
        closeForm();
    }
});
/// funções relacionadas ao formulário do places

const profbtnplaces = document.querySelector('.profile__btn-card');
const cardsEdit = document.querySelector('.cards__form');
const formCardsclose = document.querySelector('.cards__form-close');
const cardsElement = document.querySelector('.cards__form');
const cardsName = document.querySelector('.cards__form-name');
const cardsLink = document.querySelector('.cards__form-link');
const cardsSubmit = document.querySelector('.cards__form-submit');

function cardsForm() {
  if (cardsEdit.classList.contains('cards__form-open')) {
    cardsEdit.classList.remove('cards__form-open');
  } else {
    cardsEdit.classList.add('cards__form-open');
  }
}

function cardsFormclose() {
  cardsEdit.classList.remove('cards__form-open');
}

function cardsHandleSubmit(event) {
  event.preventDefault();
  cardsFormclose();
}

profbtnplaces.addEventListener('click', cardsForm);
formCardsclose.addEventListener('click', cardsFormclose);
cardsElement.addEventListener('submit', cardsHandleSubmit);

document.addEventListener('click', function(event) {
  if (!cardsEdit.contains(event.target) && !profbtnplaces.contains(event.target)) {
    cardsFormclose();
  }
});

////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  const cardsForm = document.querySelector('.cards__form');
  const cardsSection = document.querySelector('.cards');
  const template = document.querySelector('.cards__box');
  const imagebox = document.getElementById('imagebox');
  const imageboxClose = document.getElementById('imagebox-close');
  const imageboxImage = document.getElementById('imagebox-image');
  const imageboxCaption = document.getElementById('imagebox-caption');

  const initialCards = [
    {
        name: "Vale de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
        name: "Montanhas Carecas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
        name: "Parque Nacional da Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];

  initialCards.forEach(card => addCard(card.name, card.link));

  function addCard(title, link) {
    const clone = template.content.cloneNode(true);
    const titleElement = clone.querySelector('.cards__info-title');
    const imageElement = clone.querySelector('.cards__image');

    titleElement.textContent = title;
    imageElement.setAttribute('src', link);
    imageElement.setAttribute('alt', title);
    cardsSection.insertBefore(clone, cardsSection.firstChild);
  }

  cardsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const titleInput = document.querySelector('.cards__form-name');
    const linkInput = document.querySelector('.cards__form-link');

    if (titleInput.value && linkInput.value) {
      const title = titleInput.value;
      const link = linkInput.value;
      addCard(title, link);
      initialCards.push({ name: title, link: link });
      cardsForm.reset();
      cardsFormclose();
    }
  });

  cardsSection.addEventListener('click', function(event) {
    if (event.target.classList.contains('cards__delete')) {
      const item = event.target.closest('.cards__itens');
      item.remove();
    }

    if (event.target.classList.contains('cards__info-button')) {
      event.target.classList.toggle('cards__button-liked');
    }

    if (event.target.classList.contains('cards__image')) {
      imageboxImage.setAttribute('src', event.target.src);
      imageboxImage.setAttribute('alt', event.target.alt);
      imageboxCaption.textContent = event.target.nextElementSibling.textContent;
      imagebox.classList.add('imagebox__visible');
    }
  });

  imageboxClose.addEventListener('click', function() {
    imagebox.classList.remove('imagebox__visible');
  });

  document.addEventListener('click', function(event) {
    if (imagebox.classList.contains('imagebox__visible') && !imagebox.querySelector('.imagebox__content').contains(event.target) && !event.target.classList.contains('cards__image')) {
      imagebox.classList.remove('imagebox__visible');
    }
  });

  function keyHandler(event) {
    if (event.key === 'Escape') {
      closeForm();
      cardsFormclose();
      if (imagebox.classList.contains('imagebox__visible')) {
        imagebox.classList.remove('imagebox__visible');
      }
    }
  }

  document.addEventListener('keydown', keyHandler);
});
