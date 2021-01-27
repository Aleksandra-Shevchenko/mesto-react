
// import './App.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import ImagePopup from './ImagePopup.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';





function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarClick(true);
  }

  function handleEditProfileClick() {
    setEditProfileClick(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceClick(true);
  }

  function closeAllPopups() {
    setEditAvatarClick(false);
    setEditProfileClick(false);
    setAddPlaceClick(false);
  }


  return (
    <>
      <div className="page">

        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        
        <PopupWithForm title='Редактировать профиль' name='edit' isOpen={isEditProfilePopupOpen} btnName='Сохранить' onClose={closeAllPopups}>
          <input id="name-input" type="text" placeholder="Имя" className="popup__input popup__input_text_name" name="name" minLength="2" maxLength="40" required />
          <span id="name-input-error" className="popup__input-error"></span>
          <input id="job-input" type="text" placeholder="О себе" className="popup__input popup__input_text_job" name="about" minLength="2" maxLength="200" required />
          <span id="job-input-error" className="popup__input-error"></span>
        </PopupWithForm>
          
      
        {/* <section className="popup popup_type_edit">
          <div className="popup__container">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form" name="popupFormProfile" novalidate>
              <input id="name-input" type="text" placeholder="Имя" className="popup__input popup__input_text_name" name="name" minlength="2" maxlength="40" required />
              <span id="name-input-error" className="popup__input-error"></span>
              <input id="job-input" type="text" placeholder="О себе" className="popup__input popup__input_text_job" name="about" minlength="2" maxlength="200" required />
              <span id="job-input-error" className="popup__input-error"></span>
              <button className="popup__submit-btn" type="submit">Сохранить</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
          </div>
        </section> */}
        
        <PopupWithForm title='Новое место' name='add-card' isOpen={isAddPlacePopupOpen} btnName='Создать' onClose={closeAllPopups}>
          <input id="card-name-input" type="text" placeholder="Название" className="popup__input popup__input_add-card_name" name="name" minLength="2" maxLength="30" required />
          <span id="card-name-input-error" className="popup__input-error"></span>
          <input id="card-link-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_add-card_link" name="link" required />
          <span id="card-link-input-error" className="popup__input-error"></span>
        </PopupWithForm>
              

        {/* <section className="popup popup_type_add-card">
          <div className="popup__container">
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form" name="popupFormCard" novalidate>
              <input id="card-name-input" type="text" placeholder="Название" className="popup__input popup__input_add-card_name" name="name" minlength="2" maxlength="30" required />
              <span id="card-name-input-error" className="popup__input-error"></span>
              <input id="card-link-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_add-card_link" name="link" required />
              <span id="card-link-input-error" className="popup__input-error"></span>
              <button className="popup__submit-btn" type="submit">Создать</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
          </div>
        </section> */}
        
        <ImagePopup />
        
        <PopupWithForm title='Вы уверены?' name='confirm' btnName='Да'></PopupWithForm>
  
        {/* <section className="popup popup_type_confirm">
          <div className="popup__container popup__container_type_confirm">
            <h3 className="popup__title popup__title_type_confirm">Вы уверены?</h3>
            <form className="popup__form">
              <button className="popup__submit-btn popup__submit-btn_type_confirm" type="submit" aria-label="Подтвердить удаление">Да</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
          </div>
        </section> */}
        
        <PopupWithForm title='Обновить аватар' name='change-avatar' isOpen={isEditAvatarPopupOpen} btnName='Сохранить' onClose={closeAllPopups}>
          <input id="change-avatar-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_change-avatar_link" name="link" required />
          <span id="change-avatar-input-error" className="popup__input-error"></span>
        </PopupWithForm>

              

        {/* <section className="popup popup_type_change-avatar">
          <div className="popup__container popup__container_type_change-avatar">
            <h3 className="popup__title">Обновить аватар</h3>
            <form className="popup__form" name="popupFormAvatar" novalidate>
              <input id="change-avatar-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_change-avatar_link" name="link" required />
              <span id="change-avatar-input-error" className="popup__input-error"></span>
              <button className="popup__submit-btn" type="submit">Сохранить</button>
            </form>
            <button className="popup__close" type="button" aria-label="Закрыть окно"></button>
          </div>
        </section> */}
        
        {/* <template id="card">
          <article className="element">
            <img  className="element__pic" src="#" alt="#" />
            <button className="element__trash" type="button" aria-label="Удалить карточку"></button>
            <div className="element__desc">
              <h2 className="element__title"></h2>
              <div className="element__like-group">
                <button className="element__like" type="button" aria-label="Лайкнуть"></button>
                <p className="element__sum-like"></p>
              </div>
            </div>
          </article>
        </template> */}
      </div> 
    </>
  );
}

export default App;
