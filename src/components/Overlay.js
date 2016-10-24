import React, { PropTypes } from 'react';

const Overlay = ({ show }) => (
    <div className={`modal-overlay ${show ? 'modal-overlay-visible' : ''}`}></div> 
);

Overlay.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Overlay;