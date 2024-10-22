import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js"; // Importando a classe UserInfo
import {
  cardsContainer,
  templateCardSelector,
  initialCards,
  profileEditButton,
  cardEditButton,
  profileName,
  profileJob,
  editProfileModal,
  editCardModal,
  openImageModal,
} from '../utils/constants.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

document.addEventListener('DOMContentLoaded', () => {
  const templateCardElement = document.querySelector(templateCardSelector); // Template do card
  const cardsContainer = document.querySelector('.cards'); // Container onde os cards serão adicionados

  // Instância da classe UserInfo para gerenciar informações do usuário
  const userInfo = new UserInfo({
    userName: profileName.textContent, // Nome inicial do perfil
    userJob: profileJob.textContent,   // Trabalho inicial do perfil
  });

  // Popup de imagem
  const popupWithImage = new PopupWithImage(openImageModal);
  popupWithImage.setEventListeners();

  // Função para renderizar um card
  function render(card) {
    const createdCard = new Card({
      cardItem: card,
      handleDeleteClick: (card) => {
        card._element.remove(); // Remove o card da DOM
        card._element = null; // Limpa a referência ao elemento para evitar memory leaks
      },
      handleLikeClick: (card) => {
        const likeButton = card._element.querySelector('.card__info-like');
        likeButton.classList.toggle('card__button-liked'); // Altera a classe para o botão curtido
      },
      handleCardClick: ({ title, link }) => {
        popupWithImage.open(title, link);
      },
    }, templateCardElement).generateCard(); // Gera o card com o template

    // Adiciona o card ao container
    listItem.addItem(createdCard);
  }

  // Instância da seção de cards
  const listItem = new Section({
    items: initialCards,
    renderer: render
  }, cardsContainer);

  // Renderiza os cards iniciais
  listItem.renderItems();

  // Popup de editar perfil
  const popupEditProfile = new PopupWithForm({
    popupSelector: '#editProfileModal',
    handleFormSubmit: (formData) => {
      // Atualiza o nome e o trabalho do perfil usando a instância de UserInfo
      userInfo.updateUserInfo({ name: formData.name, job: formData.job });
      userInfo.setUserInfo(); // Atualiza a interface com os novos dados do usuário
      popupEditProfile.close();
    }
  });
  popupEditProfile.setEventListeners();

  // Evento de clique no botão de editar perfil
  profileEditButton.addEventListener('click', () => {
    popupEditProfile.open(); // Abre o modal de editar perfil
  });

  // Popup de adicionar card
  const popupAddCard = new PopupWithForm({
    popupSelector: '#editCardModal', // Seletor correto para o formulário de adicionar card
    handleFormSubmit: (formData) => {
      // Cria um novo objeto de card com o título e o link do formulário
      const newCard = { title: formData.title, link: formData.link };

      // Renderiza o novo card
      render(newCard);

      popupAddCard.close();
    }
  });

  popupAddCard.setEventListeners();

  // Evento de clique no botão de adicionar card
  cardEditButton.addEventListener('click', () => {
    popupAddCard.open(); // Abre o modal de adicionar card
  });
});
