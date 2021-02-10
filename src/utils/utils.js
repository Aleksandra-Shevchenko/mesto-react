// --- ДАННЫЕ  ---

//объект параметров для валидации форм
const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};


//селекторы для создания экземпляров классов
const selectorObj = {
  popupImageSelector: '.popup_type_image',
  popupProfileSelector: '.popup_type_edit',
  popupAddCardSelector: '.popup_type_add-card',
  popupChangeAvatarSelector: '.popup_type_change-avatar',
  elementsSelector: '.elements',
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle',
  cardId: '#card',
  trashCard: '.element__trash',
  popupConfirmSelector: '.popup_type_confirm',
  avatarSelector:'.profile__avatar',
};


const container = document.querySelector(".container");
const editButton = container.querySelector(".profile__edit-btn");
const addPhotoButton = container.querySelector(".profile__add-btn");
const changeAvatarButton = container.querySelector(".profile__change-btn");
const popupProfile = document.querySelector('.popup_type_edit');
const popupProfileInputs = popupProfile.querySelectorAll('.popup__input');


export {
  validationObject,
  editButton,
  addPhotoButton,
  selectorObj,
  popupProfileInputs,
  changeAvatarButton
};
