import React, { Component } from 'react';

class Confirm extends Component {
    constructor(props){
        super(props);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
    }
    handleCancelClick(event){
        const {onCancel} = this.props;
        if(onCancel){
            onCancel();
        }
    }
    handleOkClick(event){
        const {onOk} = this.props;
        if(onOk){
            onOk();
        }
    }
    render() {
        const {show, title, text, helpBlock = {}} = this.props;
        const helpBlockStyle = Object.assign({}, {marginTop: '5px', fontSize: '14px'}, helpBlock.style);

        return (
            <div className={`modal ${show ? 'modal-in' : 'modal-out'}`} 
                style={{
                    display: 'block', 
                    marginTop: '-107px',
                    top: '50%',
                    bottom: 'initial',
                    left: '50%',
                    right: 'initial',
                    zIndex: show ? '13500': '0'
                }}>
                <div className="modal-inner">
                    <div className="modal-title">{title}</div>
                    <div className="modal-text">{text}</div>
                    <div className="modal-text" style={helpBlockStyle}>{helpBlock.text}</div>
                </div>
                <div className="modal-buttons modal-buttons-2 ">
                    <span className="modal-button" onClick={this.handleCancelClick}>取消</span>
                    <span className="modal-button modal-button-bold" onClick={this.handleOkClick}>确定</span>
                </div>
            </div>
        )
     }
}

export default Confirm;