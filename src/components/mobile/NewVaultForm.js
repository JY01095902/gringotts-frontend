import React, { Component, PropTypes } from 'react';
import FloatingLabelInput from './FloatingLabelInput';

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
                details: {}
            },
            focusInput: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const {onChange} = this.props;
        let vault = this.state.vault;
        const input = event.target;
        const name = input.name;
        const names = name.split('.');
        if(names[0] === 'details'){
            vault.details[names[1]] = input.value;
        }else{
            vault[name] = input.value;
        }
        
        this.setState({vault: vault});
        
        if(onChange){
            onChange(this.state.vault);
        }
    }
    render() {
        const {type} = this.props;
        let UserNamePanel = null, MobilePhoneNumberPanel = null, EmailPanel = null, NickNamePanel = null;
        if(type === 'aliPay' || type === 'weChatPay'){
            UserNamePanel = <li>
                                <div className="item-content">
                                    <div className="item-media"><i className="material-icons">person</i></div>
                                    <FloatingLabelInput label='用户名' name='details.user_name' value={this.state.vault.details.user_name}
                                        onChange={this.handleInputChange} />
                                </div>
                            </li>;
            MobilePhoneNumberPanel = <li>
                                        <div className="item-content">
                                            <div className="item-media"><i className="material-icons">smartphone</i></div>
                                            <FloatingLabelInput label='手机号码' type='number' name='details.mobile_phone_number' value={this.state.vault.details.mobile_phone_number}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </li>;
            EmailPanel = <li>
                            <div className="item-content">
                                <div className="item-media"><i className="material-icons">email</i></div>
                                <FloatingLabelInput label='邮箱' type='email' name='details.email' value={this.state.vault.details.email}
                                    onChange={this.handleInputChange} />
                            </div>
                        </li>;
            NickNamePanel = <li>
                                <div className="item-content">
                                    <div className="item-media"><i className="material-icons">person_outline</i></div>
                                    <FloatingLabelInput label='昵称' name='details.nick_name' value={this.state.vault.details.nick_name}
                                        onChange={this.handleInputChange} />
                                </div>
                            </li>;
        }
        return (
            <div className="list-block inputs-list">
                <ul>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="material-icons">event_note</i></div>
                            <FloatingLabelInput label='金库名称' name='name'
                                value={this.state.vault.name}
                                onChange={this.handleInputChange} />
                        </div>
                    </li>
                    <li>
                        <div className="item-content">
                            <div className="item-media"><i className="material-icons">attach_money</i></div>
                            <FloatingLabelInput type='number' name='amount' label='金额'
                                value={this.state.vault.amount}
                                onChange={this.handleInputChange} />
                        </div>
                    </li>
                    {UserNamePanel}
                    {MobilePhoneNumberPanel}
                    {EmailPanel}
                    {NickNamePanel}
                </ul>
            </div>
        )
     }
}

NewVaultForm.propTypes = {
  type: PropTypes.string.isRequired
};

export default NewVaultForm;