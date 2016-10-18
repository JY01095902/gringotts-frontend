import React, { Component } from 'react';
import {arrayContains, arrayRemove, formatDate} from '../../js/common';

class NewPaymentPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            payment: {
                name: '测试',
                amount: '',
                vault: {id: 1, name: 'Cash'},
                category: {id: 1, name: '分类1'},
                date: new Date(),
                remark: 'no remark.'
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    componentDidMount(){
        let inputs = Array.from(document.getElementsByClassName("inputs-list")[0].getElementsByTagName('input'));
        const selects = Array.from(document.getElementsByClassName("inputs-list")[0].getElementsByTagName('select'));
        const textareas = Array.from(document.getElementsByClassName("inputs-list")[0].getElementsByTagName('textarea'));
        for(let input of  inputs.concat(selects, textareas)){
            this.setInputState(input);
        }
    }
    handleInputFocus(event){
        const input = event.target;
        const inputClassNames = input.className.split(' ');
        if(!arrayContains(inputClassNames, 'focus-state')){
            inputClassNames.push('focus-state');
            input.className= inputClassNames.join(' ');
        }
        
        const itemInput = input.parentNode;
        const itemInputClassNames = itemInput.className.split(' ');
        if(!arrayContains(itemInputClassNames, 'focus-state')){
            itemInputClassNames.push('focus-state');
            itemInput.className= itemInputClassNames.join(' ');
        }

        const itemInner = itemInput.parentNode;
        const itemInnerClassNames = itemInner.className.split(' ');
        if(!arrayContains(itemInnerClassNames, 'focus-state')){
            itemInnerClassNames.push('focus-state');
            itemInner.className= itemInnerClassNames.join(' ');
        }
    }
    handleInputBlur(event){
        const input = event.target;
        let inputClassNames = input.className.split(' ');
        if(arrayContains(inputClassNames, 'focus-state')){
            input.className = arrayRemove(inputClassNames, 'focus-state').join(' ');
        }
        
        const itemInput = input.parentNode;
        let itemInputClassNames = itemInput.className.split(' ');
        if(arrayContains(itemInputClassNames, 'focus-state')){
            itemInput.className = arrayRemove(itemInputClassNames, 'focus-state').join(' ');
        }

        const itemInner = itemInput.parentNode;
        let itemInnerClassNames = itemInner.className.split(' ');
        if(arrayContains(itemInnerClassNames, 'focus-state')){
            itemInner.className = arrayRemove(itemInnerClassNames, 'focus-state').join(' ');
        }

        this.setInputState(input);
    }
    setInputState(input){
        let inputClassNames = input.className.split(' ');

        const itemInput = input.parentNode;
        let itemInputClassNames = itemInput.className.split(' ');

        const itemInner = itemInput.parentNode;
        let itemInnerClassNames = itemInner.className.split(' ');
        if(input.value){
            inputClassNames.push('not-empty-state');
            input.className= inputClassNames.join(' ');

            itemInputClassNames.push('not-empty-state');
            itemInput.className= itemInputClassNames.join(' ');

            itemInnerClassNames.push('not-empty-state');
            itemInner.className= itemInnerClassNames.join(' ');
        }else{
            input.className = arrayRemove(inputClassNames, 'not-empty-state').join(' ');
            itemInput.className = arrayRemove(itemInputClassNames, 'not-empty-state').join(' ');
            itemInner.className = arrayRemove(itemInnerClassNames, 'not-empty-state').join(' ');
        }
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
    render() {
        return (
            <div className="view view-main">
                <div className="pages navbar-fixed">
                  <div className="page" data-page="home">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="center">New Payment</div>
                        </div>
                    </div>
                    <div className="page-content">
                        <div className="content-block-title">With Floating Labels</div>
                        <div className="list-block inputs-list">
                            <ul>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="icon icon-form-name"></i></div>
                                        <div className="item-inner">
                                            <div className="item-title floating-label">Your name</div>
                                            <div className="item-input item-input-field">
                                                <input type="text" placeholder="" className=""
                                                    name='name'
                                                    value={this.state.payment.name}
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="icon icon-form-email"></i></div>
                                        <div className="item-inner">
                                            <div className="item-title floating-label">Amount</div>
                                            <div className="item-input item-input-field">
                                                <input type="number" placeholder="" className=""
                                                    name='amount'
                                                    value={this.state.payment.amount}
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="icon icon-form-gender"></i></div>
                                        <div className="item-inner">
                                            <div className="item-title floating-label">Gender</div>
                                            <div className="item-input item-input-field">
                                                <select className=""
                                                    name='vault'
                                                    value={this.state.payment.vault.id}
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
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
                                        <div className="item-inner">
                                            <div className="item-title floating-label">分类</div>
                                            <div className="item-input item-input-field">
                                                <select className=""
                                                    name='category'
                                                    value={this.state.payment.category.id}
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
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
                                        <div className="item-inner">
                                            <div className="item-title floating-label">日期</div>
                                            <div className="item-input item-input-field">
                                                <input type="date" placeholder="" className="" 
                                                    name='date'
                                                    value={formatDate(this.state.payment.date, 'yyyy-MM-dd')}
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
                                                    onChange={this.handleInputChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="align-top">
                                    <div className="item-content">
                                        <div className="item-media"><i className="icon icon-form-comment"></i></div>
                                        <div className="item-inner">
                                            <div className="item-title floating-label">Resizeable Textarea</div>
                                            <div className="item-input item-input-field">
                                                <textarea className="resizable"
                                                    name='remark'
                                                    value={this.state.payment.remark}
                                                    onFocus={this.handleInputFocus}
                                                    onBlur={this.handleInputBlur}
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