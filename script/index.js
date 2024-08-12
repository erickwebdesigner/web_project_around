import Card from './Card.js';
import FormValidation from './validate.js';
import { profileUtils, cardsUtils } from './utils.js';

document.addEventListener('DOMContentLoaded', function() {
    const profileFormUtils = new profileUtils('.profile__form', '.profile__form-close', '.profile__btn-info', '.profile__name', '.profile__job');
    const cardFormUtils = new cardsUtils('.cards__form', '.cards__form-close', '.profile__btn-card', '.cards');

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

    const profileFormValidator = new FormValidation(validationConfig, '#profile-form');
    const cardFormValidator = new FormValidation(validationConfig, '#card-form');

    profileFormValidator.enableValidation();
    cardFormValidator.enableValidation();

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

    initialCards.forEach(card => cardFormUtils.addCard(card));

    const imageboxClose = document.querySelector('#imagebox-close');
    const imagebox = document.querySelector('#imagebox');

    imageboxClose.addEventListener('click', function() {
        imagebox.classList.remove('imagebox__visible');
    });

    document.addEventListener('click', function(event) {
        if (imagebox.classList.contains('imagebox__visible') && !imagebox.querySelector('.imagebox__content').contains(event.target) && !event.target.classList.contains('cards__image')) {
            imagebox.classList.remove('imagebox__visible');
        }
    });
});
