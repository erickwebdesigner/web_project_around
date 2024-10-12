export default class Card {
  constructor({ cardItem, handleDeleteClick, handleLikeClick, handleCardClick }, templateSelector) {
    this._name = cardItem.name;
    this._link = cardItem.link;
    this._templateSelector = templateSelector;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    const cardTemplate = this._templateSelector.content
      .querySelector('.card__itens')
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    // Evento de deletar o card
    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._handleDeleteClick(this);
    });

    // Evento de curtir o card
    this._element.querySelector('.card__info-like').addEventListener('click', () => {
      this._handleLikeClick(this);
    });

    this._element.querySelector('.card__image').addEventListener
    ('click', () => {
      this._handleCardClick({
        title:this._name,
        link:this._link
      })
    })
  }

  generateCard() {
    this._element = this._getCardTemplate();
    const cardImage = this._element.querySelector('.card__image');
    const cardTitle = this._element.querySelector('.card__info-title');

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
