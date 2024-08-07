import Card from './Card.js';
import FormValidation from './validate.js';

document.addEventListener('DOMContentLoaded', function() {
  const validationConfig = {
      seletores: {
          input: '.profile__input, .cards__input',
          submitButton: '.profile__form-submit, .cards__form-submit'
      },
      classes: {
          inactiveButton: 'profile__form-submit_disabled',
          inputError: 'profile__input_type_error',
          error: 'profile__error_visible'
      }
  };

  // Inicializar a validação dos formulários
  const profileFormValidator = new FormValidation(validationConfig, '#profile-form');
  const cardFormValidator = new FormValidation(validationConfig, '#card-form');

  profileFormValidator.enableValidation();
  cardFormValidator.enableValidation();

  // Restante do código para manipular os formulários e interações da página
  const profbtn = document.querySelector('.profile__btn-info');
  const formclose = document.querySelector('.profile__form-close');
  const nameProfile = document.querySelector('.profile__name');
  const jobProfile = document.querySelector('.profile__job');
  const nameInput = document.querySelector('.profile__form-name');
  const jobInput = document.querySelector('.profile__form-job');
  const formEdit = document.querySelector('.profile__form');

  function openForm() {
      formEdit.classList.add('profile__form-open');
  }

  function closeForm() {
      formEdit.classList.remove('profile__form-open');
  }

  function handleSubmit(event) {
      event.preventDefault();
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

  const profbtnplaces = document.querySelector('.profile__btn-card');
  const cardsEdit = document.querySelector('.cards__form');
  const formCardsclose = document.querySelector('.cards__form-close');
  const cardsSection = document.querySelector('.cards');
  const cardsName = document.querySelector('.cards__form-name');
  const cardsLink = document.querySelector('.cards__form-link');

  function cardsForm() {
    cardsEdit.classList.toggle('cards__form-open');
  }

  function cardsFormclose() {
    cardsEdit.classList.remove('cards__form-open');
  }

  function cardsHandleSubmit(event) {
    event.preventDefault();
    const newCard = {
      name: cardsName.value,
      link: cardsLink.value
    };
    addCard(newCard);
    cardsEdit.reset();
    cardsFormclose();
  }

  profbtnplaces.addEventListener('click', cardsForm);
  formCardsclose.addEventListener('click', cardsFormclose);
  cardsEdit.addEventListener('submit', cardsHandleSubmit);

  document.addEventListener('click', function(event) {
    if (!cardsEdit.contains(event.target) && !profbtnplaces.contains(event.target)) {
      cardsFormclose();
    }
  });

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

  initialCards.forEach(card => addCard(card));

  function addCard(cardData) {
      const card = new Card(cardData, '#card-template');
      const cardElement = card.generateCard();
      cardsSection.prepend(cardElement);
  }

  cardsSection.addEventListener('click', function(event) {
      if (event.target.classList.contains('cards__image')) {
          imageboxImage.setAttribute('src', event.target.src);
          imageboxImage.setAttribute('alt', event.target.alt);
          imageboxCaption.textContent = event.target.nextElementSibling.textContent;
          imagebox.classList.add('imagebox__visible');
      }
  });

  const imagebox = document.getElementById('imagebox');
  const imageboxClose = document.getElementById('imagebox-close');
  const imageboxImage = document.getElementById('imagebox-image');
  const imageboxCaption = document.getElementById('imagebox-caption');

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