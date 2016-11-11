import React, { Component } from 'react';
import {showPrompt, showConfirm} from '../../actions/application';
import {checkCategory, addCategory, fetchCategories, deleteCategory, patchCategory} from '../../actions/categories';
import { connect } from 'react-redux';
import Preloader from '../../components/Preloader';
import {ADD_CATEGORY_REQUEST, DELETE_CATEGORY_REQUEST, PATCH_CATEGORY_REQUEST} from '../../constants/ActionTypes';

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
        const {categories, onClose} = this.props;
        if(onClose){

            let checkedCategory = null;
            for(let key in categories.items){
                if(categories.items[key]){
                    const category = categories.items[key];
                    if(category.checked){
                        checkedCategory = category;
                        break;
                    }
                }
            }
            onClose(checkedCategory);
        }
    }
    handleCheck(id, event){   
        const {categories, checkCategory} = this.props;
        if(categories.items[id].dataStatus === PATCH_CATEGORY_REQUEST
            || categories.items[id].dataStatus === DELETE_CATEGORY_REQUEST){
            if (event && event.preventDefault ) {
                event.preventDefault();
            } else {
                window.event.returnValue = false;
            }
            return;
        }
        checkCategory(id);

        setTimeout((function(){
            this.handleClose();
        }).bind(this), 500);
    }
    handleTabSelect(event){
        this.setState({ categoryType: event.target.dataset.categoryType });
    }
    render() {
        const {showPrompt, showConfirm, addCategory, deleteCategory, categories, modifyCategoryName} = this.props;
        const modalStateClass = this.props.show ? 'modal-in' : 'modal-out'; 
        let PayoutCategories = [], IncomeCategories = [];
        for(let key in categories.items){
            if(categories.items[key]){
                const category = categories.items[key];

                const preloaderStyle = {color: '#757575'};
                const indicatorConfig = {width: '16px', height: '16px', left: '16%', top: '104%', thickness: '3px'};
                //删除分类按钮部分
                const DeleteCategoryPreloader = category.dataStatus === DELETE_CATEGORY_REQUEST ?
                                <Preloader text='正在删除...' style={preloaderStyle} indicatorConfig={indicatorConfig} />
                                :null;

                //修改分类按钮部分
                const PatchCategoryPreloader = category.dataStatus === PATCH_CATEGORY_REQUEST ?
                                <Preloader text='正在修改...' style={preloaderStyle} indicatorConfig={indicatorConfig} />
                                :null;
                const Category = <li key={key} className="swipeout">
                                    <div className="swipeout-content" onClick={(event) => this.handleCheck(category.id, event)}>
                                        <label className="label-radio item-content" style={{marginBottom: 0}}>
                                            <input type="radio" name="ks-radio" checked={category.checked}/>
                                            <div className="item-media"><i className="icon icon-form-radio"></i></div>
                                            <div className="item-inner">
                                                <div className="item-title-row">
                                                    <div className="item-title">{category.name}</div>
                                                    <div className="item-after">
                                                        {DeleteCategoryPreloader}
                                                        {PatchCategoryPreloader}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="swipeout-actions-right">
                                        <a onClick={() => {showPrompt({
                                                title: '修改分类名称',
                                                text: '请输入分类名称',
                                                value: category.name,
                                                helpBlock: {
                                                    text: '修改后的分类名称不会适用到以前的消费记录中',
                                                    style: {color: '#f44336'}
                                                },
                                                onOk: (value) => {
                                                    if(modifyCategoryName && value.length > 0){
                                                        modifyCategoryName(category.id, value);
                                                    }
                                                    window.app.swipeoutClose(document.getElementsByClassName('swipeout-opened')[0]);
                                                },
                                                onCancel: () => {
                                                    window.app.swipeoutClose(document.getElementsByClassName('swipeout-opened')[0]);
                                                }
                                            });
                                        }}>修改</a>
                                        <a style={{backgroundColor: '#f44336'}}
                                            onClick={() => {showConfirm({
                                                title: '删除分类',
                                                text: `确定要删除 "${category.name}" 分类吗?`,
                                                onOk: () => {
                                                    if(deleteCategory){
                                                        deleteCategory(category.id);
                                                    }
                                                    window.app.swipeoutClose(document.getElementsByClassName('swipeout-opened')[0]);
                                                },
                                                onCancel: () => {
                                                    window.app.swipeoutClose(document.getElementsByClassName('swipeout-opened')[0]);
                                                }
                                            });
                                        }}>删除</a>
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
            PayoutTab = <div className="list-block media-list">
                            <ul>
                                {PayoutCategories}
                            </ul>
                        </div>;
        }else{
            PayoutTab = <EmptyCategoriesPanel categoryType='payment' />;
        }

        if(IncomeCategories.length > 0){
            IncomeTab = <div className="list-block media-list">
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

        //添加分类按钮部分
        const AddCategoryButton = categories.status === ADD_CATEGORY_REQUEST ?
                                <Preloader text='正在添加分类...' 
                                    style={{fontSize: '16px'}} indicatorConfig={{width: '18px', height: '18px', thickness: '3px'}} />
                                :<a className="link" 
                                    onClick={() => {
                                            showPrompt({
                                                    title: '添加新分类',
                                                    text: '请输入分类名称',
                                                    onOk: (value) => {
                                                        addCategory({name: value, type: this.state.categoryType});
                                                    }
                                                });
                                            }}>
                                    <i className="icon icon-plus"></i>
                                </a>;

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
                                        {AddCategoryButton}
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
                                    <div id="payoutTab" className="page-content tab swiper-slide" style={{width: '375px'}}>
                                        <div className="page-content">
                                            {PayoutTab}
                                        </div>
                                    </div>
                                    <div id="incomeTab" className="page-content tab swiper-slide swiper-slide-prev" style={{width: '375px'}}>
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
        showConfirm: (config) => dispatch(showConfirm(config)),
        checkCategory: (id) => dispatch(checkCategory(id)),
        addCategory: (category) => dispatch(addCategory(category)),
        fetchCategories: () => dispatch(fetchCategories()),
        deleteCategory: (id) => dispatch(deleteCategory(id)),
        modifyCategoryName: (id, categoryName) => dispatch(patchCategory(id, {id: id, name: categoryName}))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
