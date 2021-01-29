//--- Компонент попапов ---

function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : false}`} >
      <div className={`popup__container popup__container_type_${props.name}`}>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={`popup-form-${props.name}`} noValidate>
          <>{props.children}</>
          <button className="popup__submit-btn" type="submit">{props.btnName}</button>
        </form>
        <button onClick={props.onClose} className="popup__close" type="button" aria-label="Закрыть окно"></button>
      </div>
    </section>
  )
}
  
export default PopupWithForm;
  