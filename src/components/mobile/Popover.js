import React, { Component, PropTypes } from 'react';

class Popover extends Component {
    render() {
        const {show, style} = this.props;
        const popoverStyle = Object.assign({}, {
            display: `${show ? 'block' : 'none'}`,
            zIndex: '13500'
        }, style);
        
        return (
            <div className={`popover popover-on-bottom ${show ? 'modal-in' : 'modal-out'}`} style={popoverStyle}>
                <div className="popover-inner">
                    {this.props.children}
                </div>
            </div>
        )
     }
}

Popover.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Popover;