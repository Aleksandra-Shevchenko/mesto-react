function ImagePopup() {
    return (
      <section className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <img className="popup__photo" src="#" alt="#" />
          <h2 className="popup__photo-title"></h2>
          <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
        </div>
      </section>
    )
  }
    
    export default ImagePopup;
    