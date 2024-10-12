import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { cardsContainer, templateCardSelector, initialCards, defaultConfig, profileEditButton, cardEditButton, profileName, profileJob,
  closeButtonSelector, editProfileModal, editCardModal, openImageModal, escKey
} from '../utils/constants.js';
import PopupWithImage from "../components/popupWithImage.js";



const popupWithImage = new PopupWithImage(openImageModal);
popupWithImage.setEventListeners();

// Função responsável por renderizar o card
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
  }, templateCardSelector).generateCard();

  // Adicionar o card ao container de cards
  listItem.addItem(createdCard);
}

// Instância da seção de cards, passando os dados iniciais e a função de renderização
const listItem = new Section({
  items: initialCards,
  renderer: render
}, cardsContainer);

// Renderiza todos os cards iniciais
listItem.renderItems();

