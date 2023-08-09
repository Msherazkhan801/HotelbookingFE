import React from 'react';
import { createPortal } from 'react-dom';
import './modal.css'
const mount = document.getElementById('portal');
const Modal = ({
  show,
  setShow,
  children,
  className,
  variant,
}) => {
  const myClass = className ? `modalWrapper ${className}` : 'modalWrapper';

  

  let content;
  if (variant === 'link') {
    content = (
      <div className='link-overly' onClick={() => setShow()}>
        <div className='link-modal' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }  else {
    content = createPortal(
      <div className={myClass }>
        <div className='modalInner o-table '>
          <span className='closeIcon' onClick={()=>setShow()}>
          &times;
          </span>
          <div className='modalBody'>{children}</div>
        </div>
      </div>,
      mount
    );
  }

  return show && content;
};

export default Modal;
