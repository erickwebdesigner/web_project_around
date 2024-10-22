export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Método para abrir o popup
  open() {
    if (this._popupElement.classList.contains('imagebox')) {
      this._popupElement.classList.add("imagebox__visible");
    } else {
      this._popupElement.classList.add("form_visible");
    }

    document.addEventListener("keydown", this._handleEscClose);
  }

  // Método para fechar o popup
  close() {
    if (this._popupElement.classList.contains('imagebox')) {
      this._popupElement.classList.remove("imagebox__visible");
    } else {
      this._popupElement.classList.remove("form_visible");
    }

    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Fechar o popup com a tecla ESC
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  // Adiciona os listeners de fechar no botão e clicando fora do popup
  setEventListeners() {
    const closeIcon = this._popupElement.querySelector(".imagebox__close, .form__reset-button");

    if (closeIcon) {
      closeIcon.addEventListener("click", () => {
        this.close();
      });
    }

    // Fechar ao clicar fora do conteúdo
    this._popupElement.addEventListener("mousedown", (event) => {
      if (event.target === this._popupElement) {
        this.close();
      }
    });
  }
}
