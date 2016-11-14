import React, { Component } from 'react';
import ApplicationContainer from '../../containers/mobile/ApplicationContainer';
import '../../css/mobile/MainPage.css';

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
class MainPage extends Component {
    handleMenuClose(){
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
        return (
            <div className='views theme-teal'>
                <div className="panel-overlay" onClick={this.handleMenuClose}></div>
                <div id='menu' className="panel panel-left panel-cover"
                    style={{border:0, borderRadius: 0, marginBottom: 0}}>
                    <div className="view navbar-fixed" data-page="panel-left">
                        <div className="pages">
                            <div data-page="panel-left" className="page">
                                <div className="navbar">
                                    <div className="navbar-inner">
                                        <div className="center">菜单</div>
                                    </div>
                                </div>
                                <div className="page-content">
                                    <div className="list-block">
                                        <ul>
                                            <li>
                                                <a className="item-link close-panel">
                                                    <div className="item-content">
                                                        <div className="item-media"><i className="material-icons">payment</i></div>
                                                        <div className="item-inner">
                                                            <div className="item-title">明细</div>
                                                        </div>
                                                    </div>
                                                </a></li>
                                            <li>
                                                <a className="item-link close-panel">
                                                    <div className="item-content">
                                                        <div className="item-media"><i className="material-icons">pie_chart</i></div>
                                                        <div className="item-inner">
                                                            <div className="item-title">统计</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="item-link close-panel">
                                                    <div className="item-content">
                                                        <div className="item-media"><i className="material-icons">account_balance_wallet</i></div>
                                                        <div className="item-inner">
                                                            <div className="item-title">金库</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="item-link close-panel">
                                                    <div className="item-content">
                                                        <div className="item-media"><i className="material-icons">person</i></div>
                                                        <div className="item-inner">
                                                            <div className="item-title">我</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#/mobile/test' className="item-link close-panel">
                                                    <div className="item-content">
                                                        <div className="item-media"><i className="material-icons">bug_report</i></div>
                                                        <div className="item-inner">
                                                            <div className="item-title">测试</div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children}
                <ApplicationContainer />
            </div>
        );
    }
}

export default MainPage;
