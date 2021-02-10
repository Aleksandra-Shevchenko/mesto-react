
//функция закрытия попапа при клике по оверлею

function useCloseByOverlayClick(onClose) {
    return function handleOverlayClickClose(evt) {
      if (evt.target.classList.contains("popup")) onClose();
    }
}

export default useCloseByOverlayClick;