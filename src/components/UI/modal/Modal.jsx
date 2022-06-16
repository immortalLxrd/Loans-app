import React from 'react'
import cl from './Modal.module.scss'
import {ReactComponent as CloseBtn} from '../button/CloseBtn.svg'


const Modal = ({ activeModal, setActiveModal, children }) => {
  const rootClasses = [cl.modal]

  function closeModal(e) {
    e.preventDefault()
    setActiveModal(false)
  }

  if (activeModal) {
    rootClasses.push(cl.modal__active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={closeModal}>
      <div className={cl.modal__inner} onClick={e => e.stopPropagation()}>
        <button className={cl.modal__close_btn} onClick={closeModal}>
          <CloseBtn />
        </button>
        {children}
      </div>
    </div>
  )
}


export default Modal