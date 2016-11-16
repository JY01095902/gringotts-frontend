import React, { Component, PropTypes } from 'react';

class NewVaultForm extends Component {
    constructor(props){
        super(props);
        const types = {
            cash: 'Cash',
            weChatPay: 'WeChatPay',
            aliPay: 'AliPay',
            creditCard: 'CreditCard',
            savingsCard: 'SavingsCard'  
        };
        this.state = {
            vault: {
                name: '',
                type: types[this.props.type],
                amount: '',
                style: {},
                details: null
            },
            focusInput: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleInputChange(event){
        const input = event.target;
        const name = input.name;
        let vault = this.state.vault;
        if(name === 'name'){
            vault.name = input.value;
        }else if(name === 'amount'){
            const value = input.value;
            if(Number.isNaN(parseFloat(value))){
                vault.amount = '';
                input.value = '';
            }else{
                vault.amount = value;
            }
        }else{ }
        
        this.setState({vault: vault});
    }
    handleComplete(){
        console.log(this.state.vault)
    }
    render() {
        const {type} = this.props;
        let inputNameFocusStateClass = null, inputAmountFocusStateClass = null, inputVaultFocusStateClass = null,
            inputCategoryFocusStateClass = null, inputDateFocusStateClass = null, inputRemarkFocusStateClass = null;
        let inputNameNotEmptyStateClass = null, inputAmountNotEmptyStateClass = null, inputVaultNotEmptyStateClass = null,
            inputCategoryNotEmptyStateClass = null, inputDateNotEmptyStateClass = null, inputRemarkNotEmptyStateClass = null;
        if(this.state.focusInput === 'inputName'){
            inputNameFocusStateClass = 'focus-state';
        }else{
            if(this.state.vault.name){
                inputNameNotEmptyStateClass = 'not-empty-state';
            }
        }
        if(this.state.focusInput === 'inputAmount'){
            inputAmountFocusStateClass = 'focus-state';
        }else{
            if(this.state.vault.amount){
                inputAmountNotEmptyStateClass = 'not-empty-state';
            }
        }
        return (
            <div className="list-block inputs-list">
                <ul>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="material-icons">event_note</i></div>
                            <div className={`item-inner ${inputNameFocusStateClass} ${inputNameNotEmptyStateClass}`}>
                                <div className="item-title floating-label">My name</div>
                                <div className={`item-input item-input-field ${inputNameFocusStateClass} ${inputNameNotEmptyStateClass}`}>
                                    <input type="text" placeholder="" className={`${inputNameFocusStateClass} ${inputNameNotEmptyStateClass}`}
                                        name='name' ref='name'
                                        value={this.state.vault.name}
                                        onFocus={() => {this.setState({focusInput: 'inputName'})}}
                                        onBlur={() => {this.setState({focusInput: null})}}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="material-icons">attach_money</i></div>
                            <div className={`item-inner ${inputAmountFocusStateClass} ${inputAmountNotEmptyStateClass}`}>
                                <div className="item-title floating-label">Amount</div>
                                <div className={`item-input item-input-field ${inputAmountFocusStateClass} ${inputAmountNotEmptyStateClass}`}>
                                    <input type="number" placeholder="" className={`${inputAmountFocusStateClass} ${inputAmountNotEmptyStateClass}`}
                                        name='amount'
                                        value={this.state.vault.amount}
                                        onFocus={() => {this.setState({focusInput: 'inputAmount'})}}
                                        onBlur={() => {this.setState({focusInput: null})}}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
     }
}

NewVaultForm.propTypes = {
  type: PropTypes.string.isRequired
};

export default NewVaultForm;