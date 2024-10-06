import  './index.css';
import {} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';

import FormValidation from '../components/validate.js';
import { profileUtils, cardsUtils } from '../components/utils.js';

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
