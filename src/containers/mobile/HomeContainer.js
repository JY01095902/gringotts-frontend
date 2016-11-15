import React, { Component } from 'react';
import {formatDate} from '../../js/common';
import MenuContainer from './MenuContainer';

class HomeContainer extends Component {
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
    render() {
        let payments = {};
        for(let key in this.state.payments){
            if(this.state.payments[key] !== undefined){
                const payment = this.state.payments[key];
                const date = formatDate(payment.date, 'yyyy-MM-dd');
                if(!payments[date]){
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
        return (
            <div className="view view-main">
                <div className="pages navbar-fixed">
                  <div className="page">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="center">明细</div>
                            <div className="right">
                                <MenuContainer />
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

export default HomeContainer;
