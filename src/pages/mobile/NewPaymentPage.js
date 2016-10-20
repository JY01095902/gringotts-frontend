import React, { Component } from 'react';
import {formatDate} from '../../js/common';
import '../../css/mobile/NewPaymentPage.css';

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
            focusInput: null
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
            payment.category.id = input.value;
        }else if(name === 'date'){
            payment.date = new Date(input.value);
        }else if(name === 'remark'){
            payment.remark = input.value;
        }else{ }
        
        this.setState({payment: payment});
    }
    handleComplete(){
        console.log('点击了完成')
    }
    render() {
        let inputNameFocusStateClass, inputAmountFocusStateClass, inputVaultFocusStateClass,
            inputCategoryFocusStateClass, inputDateFocusStateClass, inputRemarkFocusStateClass = null;
        let inputNameNotEmptyStateClass, inputAmountNotEmptyStateClass, inputVaultNotEmptyStateClass,
            inputCategoryNotEmptyStateClass, inputDateNotEmptyStateClass, inputRemarkNotEmptyStateClass = null;
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
                        <div className="content-block-title">With Floating Labels</div>
                        <div className="list-block inputs-list">
                            <ul>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="icon icon-form-name"></i></div>
                                        <div className={`item-inner ${inputNameFocusStateClass} ${inputNameNotEmptyStateClass}`}>
                                            <div className="item-title floating-label">Your name</div>
                                            <div className={`item-input item-input-field ${inputNameFocusStateClass} ${inputNameNotEmptyStateClass}`}>
                                                <input type="text" placeholder="" className={`${inputNameFocusStateClass} ${inputNameNotEmptyStateClass}`}
                                                    name='name'
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
                                        <div className="item-media"><i className="icon icon-form-email"></i></div>
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
                                        <div className="item-media"><i className="icon icon-form-gender"></i></div>
                                        <div className={`item-inner ${inputVaultFocusStateClass} ${inputVaultNotEmptyStateClass}`}>
                                            <div className="item-title floating-label">Gender</div>
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
                                        <div className="item-media"><i className="icon icon-form-gender"></i></div>
                                        <div className={`item-inner ${inputCategoryFocusStateClass} ${inputCategoryNotEmptyStateClass}`}>
                                            <div className="item-title floating-label">分类</div>
                                            <div className={`item-input item-input-field ${inputCategoryFocusStateClass} ${inputCategoryNotEmptyStateClass}`}>
                                                <select className={`${inputCategoryFocusStateClass} ${inputCategoryNotEmptyStateClass}`}
                                                    name='category'
                                                    value={this.state.payment.category.id}
                                                    onFocus={() => {this.setState({focusInput: 'inputCategory'})}}
                                                    onBlur={() => {this.setState({focusInput: null})}}
                                                    onChange={this.handleInputChange}>
                                                    <option value=''> </option>
                                                    <option value='1'>分类1</option>
                                                    <option value='2'>分类2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="icon icon-form-url"></i></div>
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
                                        <div className="item-media"><i className="icon icon-form-comment"></i></div>
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
            </div>
        );
    }
}

export default NewPaymentPage;