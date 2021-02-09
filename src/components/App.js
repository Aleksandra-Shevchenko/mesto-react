import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import ImagePopup from './ImagePopup.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';



function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false, element: {}});
  const [currentUser, setCurrentUser] = React.useState({});


  //при загрузке страницы получаем данные пользователя
  React.useEffect(() => {
    api.getUserData()
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  


  function handleEditAvatarClick() {
    setEditAvatarClick(true);
  }

  function handleEditProfileClick() {
    setEditProfileClick(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceClick(true);
  }

  function handleCardClick(card) {
    setSelectedCard({...selectedCard, isOpen: true, element: card});
  }

  function closeAllPopups() {
    setEditAvatarClick(false);
    setEditProfileClick(false);
    setAddPlaceClick(false);
    setSelectedCard({...selectedCard, isOpen: false});
  }

  function handleUpdateUser(newUserData) {
    api.saveUserChanges(newUserData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleUpdateAvatar({ avatar }) {
    api.changedAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />

      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick} 
      onCardClick={handleCardClick} 
      />

      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/> 

        
      <PopupWithForm
      title='Новое место'
      name='add-card'
      isOpen={isAddPlacePopupOpen}
      btnName='Создать' onClose={closeAllPopups}>
        <input id="card-name-input" type="text" placeholder="Название" className="popup__input popup__input_add-card_name" name="name" minLength="2" maxLength="30" required />
        <span id="card-name-input-error" className="popup__input-error"></span>
        <input id="card-link-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_add-card_link" name="link" required />
        <span id="card-link-input-error" className="popup__input-error"></span>
      </PopupWithForm>
                              
      <PopupWithForm
      title='Вы уверены?'
      name='confirm'
      btnName='Да'>
      </PopupWithForm>          
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
