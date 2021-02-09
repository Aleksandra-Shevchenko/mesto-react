import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

//--- Компонент основного контента страницы ---
function Main(props) { 
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

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


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    });
} 

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
        // После запроса в API, обновите стейт cards с помощью метода filter: создайте копию массива, исключив из него удалённую карточку.
      const newCards = cards.filter((c) => c._id === card._id ? false : true);
      // Обновляем стейт
      setCards(newCards);
    });
} 

  return (
    <main className="container">
      <section className="profile page__center">
        <div className="profile__content">
          <div className="profile__pic">
            <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__avatar" />
            <button className="profile__change-btn" type="button" aria-label="Изменить аватар пользователя" onClick={props.onEditAvatar} />
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фото" onClick={props.onAddPlace} />
      </section>
        
      <section className="elements page__center" aria-label="Фотографии">
        {cards.map((item) => (
          <Card key={item['_id']} card={item} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>)
        )}
      </section>
    </main>
  );
}

export default Main;
  