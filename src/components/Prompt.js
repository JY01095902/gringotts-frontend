import React, { Component } from 'react';

class Prompt extends Component {
    constructor(props){
        super(props);
        this.state = {
            focus: false,
            value: ''
        };
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillUpdate(nextProps, nextState){
        if(nextProps.show && !this.state.focus){
            nextState.focus = true;
        }
    }
    handleCancelClick(event){
        const {onCancel} = this.props;
        if(onCancel){
            onCancel();
        }
        this.handleClose();
    }
    handleOkClick(event){
        const {onOk} = this.props;
        if(onOk){
            onOk(this.state.value);
        }
        this.handleClose();
    }
    handleValueChange(event){
        this.setState({value: event.target.value});
    }
    handleClose(){
        this.setState({value: ''});
    }
    render() {
        const {show, title, text} = this.props;
        if(show && this.state.focus){
            setTimeout(function() {
                this.refs.input.focus();
            }.bind(this), 300);
        }
        return (
            <div className={`modal ${show ? 'modal-in' : 'modal-out'}  ${this.state.focus ? 'focus-state' : ''}`} 
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
                    <div className="input-field">
                        <input type="text" className="modal-text-input" ref='input' value={this.state.value}
                            onChange={this.handleValueChange}
                            onFocus={() => this.setState({focus: true})}
                            onBlur={() => this.setState({focus: false})}/>
                    </div>
                </div>
                <div className="modal-buttons modal-buttons-2 ">
                    <span className="modal-button" onClick={this.handleCancelClick}>取消</span>
                    <span className="modal-button modal-button-bold" onClick={this.handleOkClick}>确定</span>
                </div>
            </div>
        )
     }
}

export default Prompt;