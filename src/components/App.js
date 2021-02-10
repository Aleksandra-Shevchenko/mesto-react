import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeletePlacePopup from './DeletePlacePopup.js';



function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false, element: {}});
  const [selectedCardDeleteConfirm, setSelectedCardDeleteConfirm] = React.useState({isOpen: false, card: {}});

  const[renderSaving, setRenderSaving] = React.useState(false);



  //---ЭФФЕКТЫ---
  //при загрузке страницы получаем данные карточек
  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

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
    

  //---ОБРАБОТЧИКИ---
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
  
  function handleDeletePlaceClick(card) {
    setSelectedCardDeleteConfirm({...selectedCardDeleteConfirm, isOpen: true, card: card});
  }

  function closeAllPopups() {
    setEditAvatarClick(false);
    setEditProfileClick(false);
    setAddPlaceClick(false);
    setSelectedCard({...selectedCard, isOpen: false});
    setSelectedCardDeleteConfirm({...selectedCardDeleteConfirm, isOpen: false});
  }

  function handleUpdateUser(newUserData) {
    setRenderSaving(true);
    api.saveUserChanges(newUserData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderSaving(false);
      });
  }

  function handleUpdateAvatar(newAvatarLink) {
    setRenderSaving(true);
    api.changedAvatar(newAvatarLink)
      .then((data) => {
        setCurrentUser({...currentUser, avatar: data.avatar});
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderSaving(false);
      });
  }

  function handleAddPlaceSubmit(cardData) {
    setRenderSaving(true);
    api.postNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]); 
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderSaving(false);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => {
        console.log(err);
      });
  } 

  function handleCardDelete(card) {
    setRenderSaving(true);
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id === card._id ? false : true);
        setCards(newCards);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderSaving(false);
      });
  } 


  //---РАЗМЕТКА JSX---
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />

      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick} 
      onCardClick={handleCardClick}
      cards={cards}
      onCardLike={handleCardLike}
      onDeletePlace={handleDeletePlaceClick}
      />

      <Footer />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isRender={renderSaving}/>

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isRender={renderSaving} /> 

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} isRender={renderSaving} />

      <DeletePlacePopup deleteCard={selectedCardDeleteConfirm} onClose={closeAllPopups} onDeleteCard={handleCardDelete} isRender={renderSaving} /> 
           
             
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
