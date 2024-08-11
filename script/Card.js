export default class Card {
  constructor({ name, link }, templateSelector) {
    this._name = name;
    this._link = link;
    this._template = document.querySelector(templateSelector).content;
  }

  _getTemplate() {
    return this._template.cloneNode(true);
  }

  _setEventListeners() {
    this._element.querySelector('.cards__delete').addEventListener('click', (event) => {
      event.target.parentElement.remove('cards__itens');
    });

    this._element.querySelector('.cards__info-button').addEventListener('click', (event) => {
      event.target.classList.toggle('cards__button-liked');
    });

    this._element.querySelector('.cards__image').addEventListener('click', () => {
      this._openImagebox();
    });
  }

  _openImagebox() {
    const imageboxImage = document.querySelector('#imagebox-image');
    const imageboxCaption = document.querySelector('#imagebox-caption');
    const imagebox = document.querySelector('#imagebox');

    imageboxImage.setAttribute('src', this._link);
    imageboxImage.setAttribute('alt', this._name);
    imageboxCaption.textContent = this._name;
    imagebox.classList.add('imagebox__visible');
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.cards__image');
    const cardTitle = this._element.querySelector('.cards__info-title');

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
