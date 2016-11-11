import React, { Component } from 'react';
import {formatDate} from '../../js/common';
import '../../css/mobile/NewPaymentPage.css';
import CategoriesPopup from './CategoriesPopup' 

class NewPaymentPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            payment: {
                name: '',
                amount: '',
                vault: {id: '', name: ''},
                category: {id: '', name: ''},
                date: new Date(),
                remark: ''
            },
            focusInput: null,
            showCategoriesPopup: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleInputChange(event){
        const input = event.target;
        const name = input.name;
        let payment = this.state.payment;
        if(name === 'name'){
            payment.name = input.value;
        }else if(name === 'amount'){
            const value = input.value;
            if(Number.isNaN(parseFloat(value))){
                payment.amount = '';
                input.value = '';
            }else{
                payment.amount = value;
            }
        }else if(name === 'vault'){
            payment.vault.id = input.value;
        }else if(name === 'category'){
            payment.category.id = input.category.id;
            payment.category.name = input.category.name;
        }else if(name === 'date'){
            payment.date = new Date(input.value);
        }else if(name === 'remark'){
            payment.remark = input.value;
        }else{ }
        
        this.setState({payment: payment});
    }
    handleComplete(){
        console.log(this.state.payment)
    }
    componentDidMount(){
        this.refs.name.focus();
    }
    render() {
        let inputNameFocusStateClass = null, inputAmountFocusStateClass = null, inputVaultFocusStateClass = null,
            inputCategoryFocusStateClass = null, inputDateFocusStateClass = null, inputRemarkFocusStateClass = null;
        let inputNameNotEmptyStateClass = null, inputAmountNotEmptyStateClass = null, inputVaultNotEmptyStateClass = null,
            inputCategoryNotEmptyStateClass = null, inputDateNotEmptyStateClass = null, inputRemarkNotEmptyStateClass = null;
        if(this.state.focusInput === 'inputName'){
            inputNameFocusStateClass = 'focus-state';
        }else{
            if(this.state.payment.name){
                inputNameNotEmptyStateClass = 'not-empty-state';
            }
        }
        if(this.state.focusInput === 'inputAmount'){
            inputAmountFocusStateClass = 'focus-state';
        }else{
            if(this.state.payment.amount){
                inputAmountNotEmptyStateClass = 'not-empty-state';
            }
        }
        if(this.state.focusInput === 'inputVault'){
            inputVaultFocusStateClass = 'focus-state';
        }else{
            if(this.state.payment.vault.id){
                inputVaultNotEmptyStateClass = 'not-empty-state';
            }
        }
        if(this.state.focusInput === 'inputCategory'){
            inputCategoryFocusStateClass = 'focus-state';
        }else{
            if(this.state.payment.category.id){
                inputCategoryNotEmptyStateClass = 'not-empty-state';
            }
        }
        if(this.state.focusInput === 'inputDate'){
            inputDateFocusStateClass = 'focus-state';
        }else{
            if(this.state.payment.date){
                inputDateNotEmptyStateClass = 'not-empty-state';
            }
        }
        if(this.state.focusInput === 'inputRemark'){
            inputRemarkFocusStateClass = 'focus-state';
        }else{
            if(this.state.payment.remark){
                inputRemarkNotEmptyStateClass = 'not-empty-state';
            }
        }

        return (
            <div className="view view-main">
                <div className="pages navbar-fixed">
                  <div className="page" data-page="home">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="center">New Payment</div>
                        </div>
                    </div>
                    <div className="toolbar toolbar-bottom">
                        <div className="toolbar-inner">
                            <a href="#/mobile" className="link"><i className="icon icon-back"></i></a>
                            <a className="link"
                                onClick={this.handleComplete}>
                                <i className="icon icon-check"></i>{}<span style={{marginLeft: '3px'}}>完成</span>
                            </a>
                        </div>
                    </div>
                    <div className="page-content">
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
                                                    value={this.state.payment.name}
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
                                                    value={this.state.payment.amount}
                                                    onFocus={() => {this.setState({focusInput: 'inputAmount'})}}
                                                    onBlur={() => {this.setState({focusInput: null})}}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="material-icons">account_balance_wallet</i></div>
                                        <div className={`item-inner ${inputVaultFocusStateClass} ${inputVaultNotEmptyStateClass}`}>
                                            <div className="item-title floating-label">Vault</div>
                                            <div className={`item-input item-input-field ${inputVaultFocusStateClass} ${inputVaultNotEmptyStateClass}`}>
                                                <select className={`${inputVaultFocusStateClass} ${inputVaultNotEmptyStateClass}`}
                                                    name='vault'
                                                    value={this.state.payment.vault.id}
                                                    onFocus={() => {this.setState({focusInput: 'inputVault'})}}
                                                    onBlur={() => {this.setState({focusInput: null})}}
                                                    onChange={this.handleInputChange}>
                                                    <option value=''> </option>
                                                    <option value='1'>Cash</option>
                                                    <option value='2'>Card</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="material-icons">games</i></div>
                                        <div className={`item-inner ${inputCategoryFocusStateClass} ${inputCategoryNotEmptyStateClass}`}>
                                            <div className="item-title floating-label">分类</div>
                                            <div className={`item-input item-input-field ${inputCategoryFocusStateClass} ${inputCategoryNotEmptyStateClass}`}
                                                 onClick={()=>{
                                                    this.setState({focusInput: 'inputCategory'});
                                                    this.setState({showCategoriesPopup: true});
                                                        return;
                                                    }}>
                                                <div className={`${inputNameFocusStateClass} ${inputNameNotEmptyStateClass}`}
                                                    style={{fontSize: '16px', height: '36px', paddingTop: '7px'}}>{this.state.payment.category.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="material-icons">date_range</i></div>
                                        <div className={`item-inner ${inputDateFocusStateClass} ${inputDateNotEmptyStateClass}`}>
                                            <div className="item-title floating-label">日期</div>
                                            <div className={`item-input item-input-field ${inputDateFocusStateClass} ${inputDateNotEmptyStateClass}`}>
                                                <input type="date" placeholder="" className={`${inputDateFocusStateClass} ${inputDateNotEmptyStateClass}`}
                                                    name='date'
                                                    value={formatDate(this.state.payment.date, 'yyyy-MM-dd')}
                                                    onFocus={() => {this.setState({focusInput: 'inputDate'})}}
                                                    onBlur={() => {this.setState({focusInput: null})}}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="align-top">
                                    <div className="item-content">
                                        <div className="item-media"><i className="material-icons">message</i></div>
                                        <div className={`item-inner ${inputRemarkFocusStateClass} ${inputRemarkNotEmptyStateClass}`}>
                                            <div className="item-title floating-label">Resizeable Textarea</div>
                                            <div className={`item-input item-input-field ${inputRemarkFocusStateClass} ${inputRemarkNotEmptyStateClass}`}>
                                                <textarea className={`resizable ${inputRemarkFocusStateClass} ${inputRemarkNotEmptyStateClass}`}
                                                    name='remark'
                                                    value={this.state.payment.remark}
                                                    onFocus={() => {this.setState({focusInput: 'inputRemark'})}}
                                                    onBlur={() => {this.setState({focusInput: null})}}
                                                    onChange={this.handleInputChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                </div>
                <CategoriesPopup show={this.state.showCategoriesPopup}
                    onClose={(checkedCategory) => {
                        if(checkedCategory){
                            this.handleInputChange({
                                target: {
                                    name: 'category',
                                    category: checkedCategory
                                }
                            });
                        }
                        this.setState({
                            focusInput: null,
                            showCategoriesPopup: false
                        });
                    }}/>
            </div>
        );
    }
}

export default NewPaymentPage;