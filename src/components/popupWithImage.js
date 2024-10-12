import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  // Adds image to the popup, image src attribute and caption to the image
  open(name, link) {
    const imagePopupElement = this._popupElement.querySelector(".imagebox__image");
    const imagePopupCaption = this._popupElement.querySelector(".imagebox__caption");

    imagePopupElement.src = link;
    imagePopupCaption.textContent = name;
    imagePopupElement.alt = name;
    super.open();
  }
}
