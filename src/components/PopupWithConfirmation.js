import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleConfirm }) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._confirmButton = this._popupElement.querySelector(".form__submit-button");
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      this._handleConfirm();
      this.close();
    });
  }
}
