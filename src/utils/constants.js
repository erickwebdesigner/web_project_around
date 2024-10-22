export const initialCards = [
  { title: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
  { title: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
  { title: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
  { title: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
  { title: "Parque Nacional da Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
  { title: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" }
];

const templateCardSelector = "#card-template"; // Defina a constante

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

// Exportando a constante templateCardSelector
export { templateCardSelector };