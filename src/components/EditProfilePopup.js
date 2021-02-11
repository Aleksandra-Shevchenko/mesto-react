import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

//--- Компонент попапа изменения профиля ---
function EditProfilePopup({ isOpen, onClose, onOverlayClose, onUpdateUser, isRender}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  //---ЭФФЕКТЫ---
  //получаем текущие значения для установки в поля попапа
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  //---ОБРАБОТЧИКИ---
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  } 

  //---РАЗМЕТКА JSX---
  return (
    <PopupWithForm 
      title='Редактировать профиль'
      name='edit' isOpen={isOpen}
      btnName={isRender ? 'Сохранение...' : 'Сохранить'}
      onClose={onClose}
      onOverlayClose={onOverlayClose}
      onSubmit={handleSubmit}>
        <input value={name || ''} onChange={handleChangeName} id="name-input" type="text" placeholder="Имя" className="popup__input popup__input_text_name" name="name" minLength="2" maxLength="40" required />
        <span id="name-input-error" className="popup__input-error"></span>
        <input value={description || ''} onChange={handleChangeDescription} id="job-input" type="text" placeholder="О себе" className="popup__input popup__input_text_job" name="about" minLength="2" maxLength="200" required />
        <span id="job-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}
    
export default EditProfilePopup;
    