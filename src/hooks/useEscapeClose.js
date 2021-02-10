import React from 'react';

function useEscapeClose(isOpen, onClose) {
  //при открытии попапа вешаем слушатель закрытия по ESC и удаляем после размонтирования
  
  React.useEffect(() => {
    if (!isOpen) return;
    const handleEscapeClose = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, [isOpen, onClose]);
}

export default useEscapeClose;