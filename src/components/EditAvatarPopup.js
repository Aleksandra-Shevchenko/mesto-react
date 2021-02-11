import React from 'react';
import PopupWithForm from './PopupWithForm.js';

//--- Компонент попапа изменения профиля ---
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isRender, onOverlayClose }) {
  const avatarRef = React.useRef();

  //---ОБРАБОТЧИКИ---
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  //---ЭФФЕКТЫ---
  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]); 
  
  return (
    <PopupWithForm
    title='Обновить аватар'
    name='change-avatar'
    isOpen={isOpen}
    btnName={isRender ? 'Сохранение...' : 'Сохранить'}
    onClose={onClose}
    onOverlayClose={onOverlayClose}
    onSubmit={handleSubmit}>
      <input ref={avatarRef} id="change-avatar-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_change-avatar_link" name="link" required />
      <span id="change-avatar-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}
    
export default EditAvatarPopup;
    