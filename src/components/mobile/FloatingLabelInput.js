import React, { Component } from 'react';

class FloatingLabelInput extends Component {
    constructor(props){
        super(props);
        const {value = ''} = this.props;
        this.state = {
            value: value,
            focused: false
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }
    handleValueChange(event){
        const {onChange} = this.props;
        const input = event.target;
        if(input.type === 'number'){
            if(Number.isNaN(parseFloat(input.value))){
                input.value = '';
                this.setState({value: ''});
            }else{
                this.setState({value: input.value});
            }
        }else{
            this.setState({value: input.value});
        }
        if(onChange){
            onChange(event);
        }
    }
    render() {
        const {name, type = 'text', label} = this.props;
        let focusStateClass = null, notEmptyStateClass = null;
        if(this.state.focused){
            focusStateClass = 'focus-state';
        }else{
            if(this.state.value){
                notEmptyStateClass = 'not-empty-state';
            }
        }
        return (
            <div className={`item-inner ${focusStateClass} ${notEmptyStateClass}`}>
                <div className="item-title floating-label">{label}</div>
                <div className={`item-input item-input-field ${focusStateClass} ${notEmptyStateClass}`}>
                    <input type={type} name={name}  placeholder="" className={`${focusStateClass} ${notEmptyStateClass}`}
                        value={this.state.value}
                        onFocus={() => {this.setState({focused: true})}}
                        onBlur={() => {this.setState({focused: false})}}
                        onChange={this.handleValueChange}/>
                </div>
            </div>
        )
     }
}

export default FloatingLabelInput;