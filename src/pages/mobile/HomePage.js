import React, { Component } from 'react';
import {formatDate} from '../../js/common';

function arrayContains (array, value)
{
    for(let item of array){
        if (item === value){
            return true;
        }
    }
}

function arrayRemove(array, value){
    const index = array.indexOf(value);
    if(index > -1){
        array.splice(index, 1);
    }
    return array;
}

class HomePage extends Component {
    constructor(props){
        super(props);
        let payments = {};
        const startDate = new Date(2016, 9, 31);
        const endDate = new Date(2016, 9, 1);
        for(let i = startDate.valueOf(); i >= endDate.valueOf(); i -= 24 * 60 * 60 * 1000){
            const date = new Date(i);
            for(let i = 0; i < 5; i ++){
                const payment =
                {
                    id: `${formatDate(date, 'yyyy-MM-dd')}_${i}`, 
                    date: date,
                    name: `黄色潜艇 ${i}`, 
                    amount: i * date.getDate(),
                    vault: {style:{backgroundColor: '#8bc34a'}, name: 'personal-cash'},
                    category: {name: '这是中文'}
                };
                payments[payment.id] = payment;
            }
        }
        
        this.state = {
            payments: payments
        };
    }
    // speed-dial 例子
    // handleSpeedDialClick(event){
    //     const speedDial = event.target.tagName === 'A' ? event.target.parentNode : event.target.parentNode.parentNode;    
    //     const classNames = speedDial.className.split(' ');
    //     if(arrayContains(classNames, 'speed-dial-opened')){
    //         speedDial.className = arrayRemove(classNames, 'speed-dial-opened').join(' ');
    //     }else{
    //         classNames.push('speed-dial-opened');
    //         speedDial.className = classNames.join(' ');
    //     }
    // }
    handleMenuOpen(){
        const menu = document.getElementById('menu');
        const body = document.body;
        const classNames = menu.className.split(' ');
        if(arrayContains(classNames, 'active')){
            menu.className = arrayRemove(classNames, 'active').join(' ');
            menu.style.display = 'none';
            body.className = '';
        }else{
            classNames.push('active');
            menu.className = classNames.join(' ');
            menu.style.display = 'block';
            body.className = 'with-panel-left-cover';
        }
    }
    render() {
        let payments = {};
        for(let key in this.state.payments){
            if(this.state.payments[key] !== undefined){
                const payment = this.state.payments[key];
                const date = formatDate(payment.date, 'yyyy-MM-dd');
                if(!arrayContains(Object.getOwnPropertyNames(payments), date)){
                    payments[date] = {
                        title: {date: formatDate(payment.date, 'yyyy年MM月dd日'), totalAmount: 0},
                        payments: {}
                    }
                }
                payments[date].payments[key] = payment;
            }
        }
        console.log('payments-2',payments)
        let Payments = [];
        for(let key in payments){
            if(payments[key] !== undefined){
                let OneDayPayments = [];
                const oneDayPayment = payments[key];
                const subPayments = oneDayPayment.payments;
                let totalAmount = 0;
                for(let key in subPayments){
                    if(subPayments[key] !== undefined){
                        const payment = subPayments[key];
                        totalAmount += payment.amount;
                        OneDayPayments.push(
                        <li key={key}>
                            <div className="item-content">
                                <div className="item-inner">
                                    <div className="item-title-row">
                                        <div className="item-title">{payment.name}</div>
                                        <div className="item-after">￥{payment.amount}</div>
                                    </div>
                                    <div className="item-text">
                                        <span className="f7-badge" style={payment.vault.style}>{payment.vault.name}</span>
                                        <span className="f7-badge" style={{marginLeft: '5px'}}>{payment.category.name}</span>
                                    </div>
                                </div>
                            </div>
                        </li>);
                    }
                }
                Payments.push(
                    <div key={key}>
                        <div className="content-block-title">
                            {oneDayPayment.title.date}
                            <span className='color-red' style={{float:'right'}}>￥{totalAmount}</span>
                        </div>
                        <div className="list-block media-list">
                            <ul>
                                {OneDayPayments}
                            </ul>
                        </div>
                    </div>);
            }
        }
        
        // speed-dial 例子
        // <div className="speed-dial">
        //     <a className="floating-button" style={{background: '#e91e63'}}
        //         onClick={this.handleSpeedDialClick}>
        //         <i className="icon icon-plus"></i>
        //         <i className="icon icon-close"></i>
        //     </a>
        //     <div className="speed-dial-buttons">
        //         <a style={{background: '#e91e63'}}><i className="icon ks-icon-email"></i></a>
        //         <a style={{background: '#e91e63'}}><i className="icon ks-icon-calendar"></i></a>
        //         <a style={{background: '#e91e63'}}><i className="icon ks-icon-upload"></i></a>
        //     </div>
        // </div>
        return (
            <div className="view view-main">
                <div className="pages navbar-fixed">
                  <div className="page" data-page="home">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="center">明细</div>
                            <div className="right">
                                <a className="link open-panel icon-only"
                                    onClick={this.handleMenuOpen}>
                                    <i className="material-icons">menu</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href='#/mobile/newPayment' className="floating-button" style={{background: '#e91e63'}}>
                        <i className="material-icons">add</i>
                    </a>
                    <div className="page-content" style={{paddingBottom: '56px'}}>
                        {Payments}
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
