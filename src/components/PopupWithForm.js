import React from 'react';

//--- Компонент попапов ---
function PopupWithForm({name, title, btnName, isOpen, onClose, children}) {

  //при открытии попапа вешаем слушатель закрытия по ESC
  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeClose);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  return (
    <section className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : false}`} >
      <div className={`popup__container popup__container_type_${name}`}>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" name={`popup-form-${name}`} noValidate>
          <>{children}</>
          <button className="popup__submit-btn" type="submit">{btnName}</button>
        </form>
        <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть окно"></button>
      </div>
    </section>
  )
}
  
export default PopupWithForm;
  