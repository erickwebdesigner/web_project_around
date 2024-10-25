import  './index.css';
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js"; // Importando a classe de validação
import {
  templateCardSelector,
  initialCards,
  profileEditButton,
  cardEditButton,
  profileName,
  profileJob,
  editProfileModal,
  editCardModal,
  openImageModal,
  defaultConfig // Configuração de validação
} from '../utils/constants.js';
import PopupWithImage from "../components/PopupWithImage.js";//feito a alteração do nome
import PopupWithForm from "../components/PopupWithForm.js";

document.addEventListener('DOMContentLoaded', () => {
  const templateCardElement = document.querySelector(templateCardSelector);
  const cardsContainer = document.querySelector('.cards');

  // Instância da classe UserInfo
  const userInfo = new UserInfo({
    userName: profileName.textContent,
    userJob: profileJob.textContent,
  });

  // Instância de validação para os formulários
  const editProfileFormValidator = new FormValidator(defaultConfig, document.querySelector(editProfileModal,'.form__container'));
  const addCardFormValidator = new FormValidator(defaultConfig, document.querySelector(editCardModal,'.form__container'));

  // Ativando a validação
  editProfileFormValidator.enableValidation();
  addCardFormValidator.enableValidation();

  // Popup de imagem
  const popupWithImage = new PopupWithImage(openImageModal);
  popupWithImage.setEventListeners();

  // Função para renderizar um card
  function render(card) {
    const createdCard = new Card({
      cardItem: card,
      handleDeleteClick: (card) => {
        card._element.remove();
        card._element = null;
      },
      handleLikeClick: (card) => {
        const likeButton = card._element.querySelector('.card__info-like');
        likeButton.classList.toggle('card__button-liked');
      },
      handleCardClick: ({ title, link }) => {
        popupWithImage.open(title, link);
      },
    }, templateCardElement).generateCard();

    listItem.addItem(createdCard);
  }

  // Instância da seção de cards
  const listItem = new Section({
    items: initialCards,
    renderer: render
  }, cardsContainer);

  listItem.renderItems();

  // Popup de editar perfil
  const popupEditProfile = new PopupWithForm({
    popupSelector: '#editProfileModal',
    handleFormSubmit: (formData) => {
      userInfo.updateUserInfo({ name: formData.name, job: formData.job });
      userInfo.setUserInfo();
      popupEditProfile.close();
      editProfileFormValidator.resetValidation(); // Resetar a validação ao fechar o modal
    }
  });

  popupEditProfile.setEventListeners();

  // Evento de clique no botão de editar perfil
  profileEditButton.addEventListener('click', () => {
    editProfileFormValidator.resetValidation(); // Reseta a validação ao abrir o modal
    popupEditProfile.open();
  });

  // Popup de adicionar card
  const popupAddCard = new PopupWithForm({
    popupSelector: '#editCardModal',
    handleFormSubmit: (formData) => {
      const newCard = { title: formData.title, link: formData.link };
      render(newCard);
      popupAddCard.close();
      addCardFormValidator.resetValidation(); // Resetar a validação ao fechar o modal
    }
  });

  popupAddCard.setEventListeners();

  // Evento de clique no botão de adicionar card
  cardEditButton.addEventListener('click', () => {
    addCardFormValidator.resetValidation(); // Reseta a validação ao abrir o modal
    popupAddCard.open();
  });
});