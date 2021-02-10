import React from 'react';

//--- Компонент попапа с картинкой ---
function ImagePopup({ onClose, card:{ isOpen, element:{name, link} } }) {

  //---ЗАКРЫТИЕ ПО ОВЕРЛЕЮ И ESC---
  React.useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, [isOpen, onClose]);

  function handleOverlayClickClose(evt) {
    if (evt.target.classList.contains("popup")) onClose();
  }

  //---РАЗМЕТКА JSX---
  return (
    <section className={`popup popup_type_image ${isOpen ? 'popup_opened' : false}`} onClick={handleOverlayClickClose}>
      <div className="popup__container popup__container_type_image">
        <img className="popup__photo" src={link} alt={`Фото ${name}`} />
        <h2 className="popup__photo-title">{name}</h2>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть окно" />
      </div>
    </section>
  )
}
    
export default ImagePopup;
    