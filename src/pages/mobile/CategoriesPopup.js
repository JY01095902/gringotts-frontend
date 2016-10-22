import React, { Component } from 'react';
import Prompt from '../../components/Prompt';

class CategoriesPopup extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: {
                1: {id: 1, name: 'Books', type: 'payout', checked: true},
                2: {id: 2, name: 'Movies', type: 'payout', checked: false},
                3: {id: 3, name: 'Food', type: 'payout', checked: false},
                4: {id: 4, name: 'Drinks', type: 'payout', checked: false},
                5: {id: 5, name: 'Income', type: 'income', checked: false}
            },
            checkedCategory: {id: 1, name: 'Books', checked: true},
            selectedTab: 'payout',
            showNewPaymentPrompt: true
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleTabSelect = this.handleTabSelect.bind(this);
    }
    handleClose(){
        const {onClose} = this.props;
        onClose(this.state.checkedCategory);
    }
    handleCheck(id){
        let categories = this.state.categories;
        let checkedCategory;
        for(let key in categories){
            if(categories[key]){
                const category = categories[key];
                if(category.id === id){
                    category.checked = true;
                    checkedCategory = category;
                }else{
                    category.checked = false;
                }
            }
        }
        this.setState({
            categories: categories,
            checkedCategory: checkedCategory
        });
        
        setTimeout((function(){
            const {onClose} = this.props;
            onClose(checkedCategory);
        }).bind(this), 500);
    }
    handleTabSelect(event){
        const tabName = event.target.dataset.tabName;
        this.setState({ selectedTab: tabName });
    }
    render() {
        const modalStateClass = this.props.show ? 'modal-in' : 'modal-out'; 
        let PayoutCategories = [], IncomeCategories = [];
        for(let key in this.state.categories){
            if(this.state.categories[key]){
                const category = this.state.categories[key];
                const Category = <li key={key}>
                                        <label className="label-radio item-content">
                                            <input type="radio" name="ks-radio" value="1" checked={category.checked}
                                                onChange={() => this.handleCheck(category.id)}/>
                                            <div className="item-media"><i className="icon icon-form-radio"></i></div>
                                            <div className="item-inner">
                                                <div className="item-title">{category.name}</div>
                                            </div>
                                        </label>
                                    </li>;
                if(category.type === 'payout'){
                    PayoutCategories.push(Category);
                }else{
                    IncomeCategories.push(Category);
                }
            }
        }

        //Tab
        let payoutTabActiveClass = null, incomeTabActiveClass = null;
        let tabbarTranslate3dX = '0%', tabTranslate3dX = '0px';
        if(this.state.selectedTab === 'payout'){ 
            payoutTabActiveClass = 'active'; 
        };
        if(this.state.selectedTab === 'income'){ 
            incomeTabActiveClass = 'active'; 
            tabbarTranslate3dX = '100%';
            tabTranslate3dX = '-375px';
        };

        return (
            <div className={`popup ${modalStateClass}`} style={{display: 'block'}}>
                <div className="view navbar-fixed">
                    <div className="pages">
                        <div className="page">
                            <div className="navbar">
                                <div className="navbar-inner">
                                    <div className="left">
                                        <a className="link" onClick={this.handleClose}><i className="icon icon-close"></i></a>
                                    </div>
                                    <div className="center">分类</div>
                                    <div className="right">
                                        <a className="link" onClick={() => {prompt();}}><i className="icon icon-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="toolbar tabbar">
                                <div className="toolbar-inner">
                                    <a className={`tab-link ${payoutTabActiveClass}`} style={{textDecoration: 'none'}}
                                        onClick={this.handleTabSelect} data-tab-name='payout'>Payout</a>
                                    <a className={`tab-link ${incomeTabActiveClass}`} style={{textDecoration: 'none'}}
                                        onClick={this.handleTabSelect} data-tab-name='income'>Income</a>
                                    <span className="tab-link-highlight" style={{width: '50%', transform: `translate3d(${tabbarTranslate3dX}, 0px, 0px)`}}></span>
                                </div>
                            </div>
                            <div className="tabs-swipeable-wrap swiper-container swiper-container-horizontal">
                                <div className="tabs swiper-wrapper" style={{transform: `translate3d(${tabTranslate3dX}, 0px, 0px)`, transitionDuration: '0ms'}}>
                                    <div id="tab1" className="page-content tab swiper-slide" style={{width: '375px'}}>
                                        <div className="page-content">
                                            <div className="list-block">
                                                <ul>
                                                    {PayoutCategories}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab2" className="page-content tab swiper-slide swiper-slide-prev" style={{width: '375px'}}>
                                        <div className="page-content">
                                            <div className="list-block">
                                                <ul>
                                                    {IncomeCategories}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Prompt show={this.state.showNewPaymentPrompt} />
            </div>
        );
    }
}

export default CategoriesPopup;
