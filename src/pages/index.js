import Card from "../components/Card.js";
import Section from "../components/Section.js";
import { cardsContainer, templateCardSelector, initialCards } from '../utils/constants.js';

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
    }
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
