import React, { Component } from 'react';

class CategoriesPopup extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: {
                1: {id: 1, name: 'Books', checked: true},
                2: {id: 2, name: 'Movies', checked: false},
                3: {id: 3, name: 'Food', checked: false},
                4: {id: 4, name: 'Drinks', checked: false}
            },
            checkedCategory: {id: 1, name: 'Books', checked: true}
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
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
    render() {
        const modalStateClass = this.props.show ? 'modal-in' : 'modal-out'; 
        let Categories = [];
        for(let key in this.state.categories){
            if(this.state.categories[key]){
                const category = this.state.categories[key];
                Categories.push(<li key={key}>
                                    <label className="label-radio item-content">
                                        <input type="radio" name="ks-radio" value="Books" checked={category.checked}
                                            onChange={() => this.handleCheck(category.id)}/>
                                        <div className="item-media"><i className="icon icon-form-radio"></i></div>
                                        <div className="item-inner">
                                            <div className="item-title">{category.name}</div>
                                        </div>
                                    </label>
                                </li>);
            }
        }
        return (
            <div className={`popup ${modalStateClass}`} style={{display: 'block'}}>
                <div className="view navbar-fixed">
                    <div className="pages">
                        <div className="page">
                            <div className="navbar">
                                <div className="navbar-inner">
                                    <div className="center">分类</div>
                                    <div className="right">
                                        <a className="link" onClick={this.handleClose}>关闭</a>
                                    </div>
                                </div>
                            </div>
                            <div className="page-content">
                                <div className="list-block">
                                    <ul>
                                        {Categories}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoriesPopup;
