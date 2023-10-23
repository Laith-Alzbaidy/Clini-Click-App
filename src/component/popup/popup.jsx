'use client'
import React from 'react';
import { usePopup } from '../context/PopupContext';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopupModal() {
  const { showPopup, closePopup } = usePopup();

  return (
    <Popup open={showPopup} closeOnDocumentClick={false}>
      {close => (
        <div className="popup">
          <p>Modal Content</p>
          <button onClick={() => { close(); closePopup(); }}>Close</button>
        </div>
      )}
    </Popup>
  );
}

export default PopupModal;
