export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closeIcon = this._popupElement.querySelector(".imagebox__close");

    // Verifica se o elemento de fechar existe antes de adicionar o listener
    if (closeIcon) {
      closeIcon.addEventListener("click", () => {
        this.close();
      });
    }

    // Fechar popup clicando fora (na área sombreada)
    this._popupElement.addEventListener("click", (event) => {
      if (event.target === this._popupElement) {
        this.close();
      }
    });
  }


  open() {
    this._popupElement.classList.add("imagebox__visible");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("imagebox__visible");
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
