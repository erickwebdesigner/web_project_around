// Função para adicionar a mensagem de erro
function addErrorMessage(tagElement, input) {
  tagElement.textContent = input.validationMessage;
}

// Função para remover a mensagem de erro
function removeErrorMessage(tagElement) {
  tagElement.textContent = '';
}

// Função para adicionar a classe de erro
function addErrorClass(input, errorClass) {
  input.classList.add(errorClass);
}

// Função para remover a classe de erro
function removeErrorClass(input, errorClass) {
  input.classList.remove(errorClass);
}

// Função para validar os inputs
function validateInputs(input, errorClass) {
  const tagElement = input.nextElementSibling;
  if (!input.validity.valid) {
      addErrorMessage(tagElement, input);
      addErrorClass(input, errorClass);
  } else {
      removeErrorMessage(tagElement);
      removeErrorClass(input, errorClass);
  }
}

// Função para verificar se algum input está inválido
function hasInvalidInput(inputList) {
  return inputList.some(input => !input.validity.valid);
}

// Função para alternar o estado do botão
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
  } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
  }
};

// Função para habilitar a validação
function enableValidation(elementos) {
  const form = document.forms[elementos.formSelector];
  const inputs = Array.from(form.querySelectorAll(elementos.inputsSelector));
  const button = form.querySelector(elementos.buttomForm);

  // Inicializa o estado do botão
  toggleButtonState(inputs, button, elementos.buttonErrorClass);

  // Adiciona evento de input para validação
  for (const input of inputs) {
      input.addEventListener('input', (event) => {
          const element = event.target;
          validateInputs(element, elementos.inputErrorClass);
          toggleButtonState(inputs, button, elementos.buttonErrorClass);
      });
  }
}

// Habilitando a validação chamando enableValidation
enableValidation({
  formSelector: 'formProfile',
  inputsSelector: '.profile__input',
  buttomForm: '.profile__form-submit',
  inputErrorClass: 'profile__form-error',
  buttonErrorClass: 'profile-submit-disabled'
});

enableValidation({
  formSelector: 'card-form',
  inputsSelector: '.cards__input',
  buttomForm: '.cards__form-submit',
  inputErrorClass: 'cards__form-error',
  buttonErrorClass: 'card-submit-disabled'
});
