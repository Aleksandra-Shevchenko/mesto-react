import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

//--- Компонент основного контента страницы ---
function Main(props) { 
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCard] = React.useState([]);

  //при загрузке страницы получаем данные пользователя
  React.useEffect(() => {
    api.getUserData()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  //при загрузке страницы получаем данные карточек
  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCard(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);


  return (
    <main className="container">
      <section className="profile page__center">
        <div className="profile__content">
          <div className="profile__pic">
            <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar" />
            <button className="profile__change-btn" type="button" aria-label="Изменить аватар пользователя" onClick={props.onEditAvatar} />
          </div>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile} />
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фото" onClick={props.onAddPlace} />
      </section>
        
      <section className="elements page__center" aria-label="Фотографии">
        {cards.map((item) => (
          <Card key={item['_id']} card={item} onCardClick={props.onCardClick}/>)
        )}
      </section>
    </main>
  );
}

export default Main;
  