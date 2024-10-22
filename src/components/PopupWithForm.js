import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector("form");
    this._inputList = this._formElement.querySelectorAll(".form__input");
  }

  _getInputValues() {
    // Cria um objeto para armazenar os valores dos inputs
    const formValues = {};

    // Itera sobre os inputs e armazena os valores no objeto
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    // Adiciona o manipulador de envio de formulário
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    // Reseta o formulário ao fechar o popup
    this._formElement.reset();
  }
}
