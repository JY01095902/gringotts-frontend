import React, { Component } from 'react';

class Prompt extends Component {
     constructor(props){
        super(props);
     }
     render() {
        let modalStateClass = null, modalOverlayClass = null;
        if(this.props.show){
            modalStateClass = 'modal-in';
            modalOverlayClass = 'modal-overlay-visible';
        }else{
            modalStateClass = 'modal-out';
        }
        return (
            <div>
                <div className={`modal-overlay ${modalOverlayClass}`}></div>
                <div className={`modal ${modalStateClass}`} style={{
                        display: 'block', 
                        marginTop: '-107px',
                        top: '50%',
                        bottom: 'initial',
                        left: '50%',
                        right: 'initial',
                        zIndex: '13500'
                    }}>
                    <div className="modal-inner">
                        <div className="modal-title">Framework7</div>
                        <div className="modal-text">What is your name?</div>
                        <div className="input-field">
                            <input type="text" className="modal-text-input"/>
                        </div>
                    </div>
                    <div className="modal-buttons modal-buttons-2 ">
                        <span className="modal-button">Cancel</span>
                        <span className="modal-button modal-button-bold">OK</span>
                    </div>
                </div>
            </div>
        )
     }
}

export default Prompt;