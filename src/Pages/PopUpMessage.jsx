import React from 'react';

const PopUpMessage = ({ message, onClose }) => {
  return (
    <div className="popup-message " style={{backgroundColor:'orangeRed',width:'20%'}}>
      <div className="popup-content d-flex flex-column  ">
        <div className='w-100 d-flex justify-content-end'>
        <button className="close-btn bg-transparent fs-4 fw-bold btn text-white" style={{border:'none'}} onClick={onClose}>X</button>
        </div>
        <div className='d-flex w-100 justify-content-center pb-5 text-white '>
        <h5 className='fw-bold'>{message}</h5>
        </div>
      </div>
    </div>
  );
};

export default PopUpMessage;


