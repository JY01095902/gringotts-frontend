import React, { PropTypes } from 'react';
import {closePopover} from '../actions/application';
import { connect } from 'react-redux';

const Overlay = ({ show, closePopover }) => (
    <div className={`modal-overlay ${show ? 'modal-overlay-visible' : ''}`}
      onClick={() => closePopover()}></div> 
);

Overlay.propTypes = {
  show: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        closePopover: () => dispatch(closePopover())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
