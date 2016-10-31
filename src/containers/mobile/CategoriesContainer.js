import React, { Component } from 'react';
import {showPrompt} from '../../actions/application';
import {addCategory, fetchCategories, checkCategory} from '../../actions/categories';
import { connect } from 'react-redux';

const EmptyCategoriesPanel = ({ categoryType }) => (
    <div style={{color: '#777', textAlign: 'center'}}>
        <p style={{color: '#c7c7cc', fontSize: '64px', textAlign: 'center'}}>:-(</p>
        <p>抱歉，您还没有添加过任何的{categoryType === 'payment'? '支出': '收入'}分类；</p>
        <p>点击右上角的 “+” 号，添加一个吧。</p>
    </div>
);

class CategoriesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryType: 'payout'
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleTabSelect = this.handleTabSelect.bind(this);
    }
    componentDidMount(){
        this.props.fetchCategories();
    }
    handleClose(){
        const {onClose} = this.props;
        onClose(this.state.checkedCategory);
    }
    handleCheck(id){
        const {categories, checkCategory} = this.props;
        checkCategory(id);
        this.setState({
            checkedCategory: categories.items[id]
        });
        
        setTimeout((function(){
            const {onClose} = this.props;
            onClose(this.state.checkedCategory);
        }).bind(this), 500);
    }
    handleTabSelect(event){
        this.setState({ categoryType: event.target.dataset.categoryType });
    }
    render() {
        const {showPrompt, addCategory, categories} = this.props;
        const modalStateClass = this.props.show ? 'modal-in' : 'modal-out'; 
        let PayoutCategories = [], IncomeCategories = [];
        for(let key in categories.items){
            if(categories.items[key]){
                const category = categories.items[key];
                // const Category = <li key={key}>
                //                         <label className="label-radio item-content">
                //                             <input type="radio" name="ks-radio" checked={category.checked}
                //                                 onChange={() => this.handleCheck(category.id)}/>
                //                             <div className="item-media"><i className="icon icon-form-radio"></i></div>
                //                             <div className="item-inner">
                //                                 <div className="item-title">{category.name}</div>
                //                             </div>
                //                         </label>
                //                     </li>;
                const Category = <li key={key} className="swipeout transitioning">
                                        <div className="swipeout-content">
                                            <label className="label-radio item-content">
                                                <input type="radio" name="ks-radio" checked={category.checked}
                                                    onChange={() => this.handleCheck(category.id)}/>
                                                <div className="item-media"><i className="icon icon-form-radio"></i></div>
                                                <div className="item-inner">
                                                    <div className="item-title">{category.name}</div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="swipeout-actions-right">
                                            <a href="#" className="swipeout-delete">Delete</a>
                                        </div>
                                    </li>;
                if(category.type === 'payout'){
                    PayoutCategories.push(Category);
                }else{
                    IncomeCategories.push(Category);
                }
            }
        }

        let PayoutTab = null, IncomeTab = null;
        if(PayoutCategories.length > 0){
            PayoutTab = <div className="list-block">
                            <ul>
                                {PayoutCategories}
                            </ul>
                        </div>;
        }else{
            PayoutTab = <EmptyCategoriesPanel categoryType='payment' />;
        }

        if(IncomeCategories.length > 0){
            IncomeTab = <div className="list-block">
                            <ul>
                                {IncomeCategories}
                            </ul>
                        </div>;
        }else{
            IncomeTab = <EmptyCategoriesPanel categoryType='income' />;
        }

        //Tab
        let payoutTabActiveClass = null, incomeTabActiveClass = null;
        let tabbarTranslate3dX = '0%', tabTranslate3dX = '0px';
        if(this.state.categoryType === 'payout'){ 
            payoutTabActiveClass = 'active'; 
        };
        if(this.state.categoryType === 'income'){ 
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
                                        <a className="link" onClick={() => {showPrompt({
                                            title: '添加新分类',
                                            text: '请输入分类名称',
                                            onOk: (value) => {
                                                addCategory({
                                                    name: value,
                                                    type: this.state.categoryType
                                                });
                                            }
                                        });
                                    }}><i className="icon icon-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="toolbar tabbar">
                                <div className="toolbar-inner">
                                    <a className={`tab-link ${payoutTabActiveClass}`} style={{textDecoration: 'none'}}
                                        onClick={this.handleTabSelect} data-category-type='payout'>Payout</a>
                                    <a className={`tab-link ${incomeTabActiveClass}`} style={{textDecoration: 'none'}}
                                        onClick={this.handleTabSelect} data-category-type='income'>Income</a>
                                    <span className="tab-link-highlight" style={{width: '50%', transform: `translate3d(${tabbarTranslate3dX}, 0px, 0px)`}}></span>
                                </div>
                            </div>
                            <div className="tabs-swipeable-wrap swiper-container swiper-container-horizontal">
                                <div className="tabs swiper-wrapper" style={{transform: `translate3d(${tabTranslate3dX}, 0px, 0px)`, transitionDuration: '0ms'}}>
                                    <div id="tab1" className="page-content tab swiper-slide" style={{width: '375px'}}>
                                        <div className="page-content">
                                            {PayoutTab}
                                        </div>
                                    </div>
                                    <div id="tab2" className="page-content tab swiper-slide swiper-slide-prev" style={{width: '375px'}}>
                                        <div className="page-content">
                                            {IncomeTab}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showPrompt: (config) => dispatch(showPrompt(config)),
        addCategory: (category) => dispatch(addCategory(category)),
        fetchCategories: () => dispatch(fetchCategories()),
        checkCategory: (id) => dispatch(checkCategory(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
