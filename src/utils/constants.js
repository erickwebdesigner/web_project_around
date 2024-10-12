export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
export const templateCardSelector = document.querySelector("#card-template");
export const cardsContainer = document.querySelector(".cards");
export const defaultConfig = {
formSelector: ".form__container",
inputSelector: ".form__input",
submitButtonSelector: ".form__submit-button",
inactiveButtonClass: "form__submit-button_disabled",
inputErrorClass: "form__input_type_error",
errorClass: "form__input-error_visible",
};
export const profileEditButton = document.querySelector(".profile__edit-button");
export const cardEditButton = document.querySelector(".profile__editcard-button");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__job");
export const closeButtonSelector = ".form__reset-button";
export const editProfileModal = ".form__edit-profile .form__container";
export const editCardModal = ".form__add-card .form__container";
export const openImageModal = ".imagebox";
export const escKey = 28;
