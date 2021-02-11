import React from 'react';
import PopupWithForm from './PopupWithForm.js';

//--- Компонент попапа добавления карточки ---
function AddPlacePopup({ isOpen, onClose, onOverlayClose, onAddPlace, isRender}) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  
  //---ОБРАБОТЧИКИ---
  function handleAddName(e) {
    setName(e.target.value);
  }

  function handleAddLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  //---ЭФФЕКТЫ---
  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]); 
  
  
  //---РАЗМЕТКА JSX---
  return (
    <PopupWithForm
      title='Новое место'
      name='add-card'
      isOpen={isOpen}
      btnName={isRender ? 'Сохранение...' :'Создать'}
      onClose={onClose}
      onOverlayClose={onOverlayClose}
      onSubmit={handleSubmit}>
        <input value={name} onChange={handleAddName} id="card-name-input" type="text" placeholder="Название" className="popup__input popup__input_add-card_name" name="name" minLength="2" maxLength="30" required />
        <span id="card-name-input-error" className="popup__input-error"></span>
        <input value={link} onChange={handleAddLink} id="card-link-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_add-card_link" name="link" required />
        <span id="card-link-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}
      
export default AddPlacePopup;