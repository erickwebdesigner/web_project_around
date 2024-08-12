import Card from './Card.js';

export default class Utils {
  constructor(formSelector, formCloseSelector, formToggleSelector) {
      this.formElement = document.querySelector(formSelector);
      this.formCloseElement = document.querySelector(formCloseSelector);
      this.formToggleElement = document.querySelector(formToggleSelector);

      this.formToggleElement.addEventListener('click', () => this.openForm());
      this.formCloseElement.addEventListener('click', () => this.closeForm());

      document.addEventListener('click', (event) => {
          if (!this.formElement.contains(event.target) && !this.formToggleElement.contains(event.target)) {
              this.closeForm();
          }
      });

      document.addEventListener('keydown', (event) => this.keyHandler(event));
  }

  openForm() {
      this.formElement.classList.add('cards__form-open', 'profile__form-open');
  }

  closeForm() {
      this.formElement.classList.remove('cards__form-open', 'profile__form-open');
  }

  keyHandler(event) {
      if (event.key === 'Escape') {
          this.closeForm();
      }
  }
}

export class profileUtils extends Utils {
  constructor(formSelector, formCloseSelector, formToggleSelector, nameSelector, jobSelector) {
      super(formSelector, formCloseSelector, formToggleSelector);
      this.nameProfile = document.querySelector(nameSelector);
      this.jobProfile = document.querySelector(jobSelector);
      this.nameInput = document.querySelector('.profile__form-name');
      this.jobInput = document.querySelector('.profile__form-job');
      this.formEdit = document.querySelector(formSelector);

      this.formEdit.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
      event.preventDefault();
      this.nameProfile.textContent = this.nameInput.value;
      this.jobProfile.textContent = this.jobInput.value;
      this.closeForm();
  }
}

export class cardsUtils extends Utils {
  constructor(formSelector, formCloseSelector, formToggleSelector, cardsSectionSelector) {
      super(formSelector, formCloseSelector, formToggleSelector);
      this.cardsSection = document.querySelector(cardsSectionSelector);
      this.cardsName = document.querySelector('.cards__form-name');
      this.cardsLink = document.querySelector('.cards__form-link');

      document.querySelector(formSelector).addEventListener('submit', (event) => this.cardsHandleSubmit(event));
  }

  cardsHandleSubmit(event) {
      event.preventDefault();
      const newCard = {
          name: this.cardsName.value,
          link: this.cardsLink.value
      };
      this.addCard(newCard);
      this.closeForm();
  }

  addCard(cardData) {
      const card = new Card(cardData, '#card-template');
      const cardElement = card.generateCard();
      this.cardsSection.prepend(cardElement);
  }
}
