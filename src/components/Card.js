function Card(props) {
  return (
    <article className="element">
      <img  className="element__pic" src={props.card.link} alt={`Фото ${props.card.name}`} />
      <button className="element__trash" type="button" aria-label="Удалить карточку"></button>
      <div className="element__desc">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button" aria-label="Лайкнуть"></button>
          <p className="element__sum-like">{props.card.likes.length}</p>
        </div>
       </div>
    </article>
  )
}
    
export default Card;