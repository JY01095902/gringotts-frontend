import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuContainer from './MenuContainer';
import {showPopover, closePopover} from '../../actions/application';
import icon_aliPay from '../../icons/aliPay.svg';
import icon_wechatPay from '../../icons/wechatPay.svg';
import icon_creditCard from '../../icons/creditCard.svg';
import icon_savingCard from '../../icons/savingCard.svg';

class VaultsContainer extends Component {
    render() {
        const {showPopover, closePopover} = this.props;
        const vaultTypesPopover = 
            <div className="list-block media-list">
                <ul>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile" className="item-link item-content">
                            <div className="item-media">
                                <img alt='' src={icon_aliPay} style={{width: '24px', height: '24px'}} />
                            </div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">微信</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile/vaults" className="item-link item-content">
                            <div className="item-media">
                                <img alt='' src={icon_wechatPay} style={{width: '24px', height: '24px'}} />
                            </div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">支付宝</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile/chart" className="item-link item-content">
                            <div className="item-media">
                                <img alt='' src={icon_creditCard} style={{width: '24px', height: '24px'}} />
                            </div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">信用卡</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile/menu" className="item-link item-content">
                            <div className="item-media">
                                <img alt='' src={icon_savingCard} style={{width: '24px', height: '24px'}} />
                            </div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">储蓄卡</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>;
        return (
            <div className="view view-main">
                <div className="pages navbar-fixed">
                  <div className="page">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="center">Vaults</div>
                            <div className="right">
                                <MenuContainer />
                            </div>
                        </div>
                    </div>
                    <a className="floating-button color-purple"
                        onClick={()=>showPopover({
                            style: {
                                width: '200px',
                                top: 'initial',
                                bottom: '8px',
                                left: 'initial',
                                right: '8px'
                            },
                            content: vaultTypesPopover
                        })}>
                        <i className="material-icons">add</i>
                    </a>
                    <div className="page-content">
                        <div className="list-block media-list">
                            <ul>
                                <li className="swipeout transitioning">
                                    <div className="item-content swipeout-content">
                                        <div className="item-media"><i className="material-icons">3d_rotation</i></div>
                                        <div className="item-inner">
                                            <div className="item-title-row">
                                                <div className="item-title">Swipe left on me please</div>
                                                <div className="item-after">$16</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swipeout-actions-right">
                                        <a href="#" data-confirm="Are you sure you want to delete this item?" className="swipeout-delete">Delete</a>
                                    </div>
                                </li>
                                <li className="swipeout">
                                    <div className="item-content swipeout-content">
                                        <div className="item-media"><i className="material-icons">3d_rotation</i></div>
                                        <div className="item-inner">
                                            <div className="item-title">Swipe left on me too</div>
                                        </div>
                                    </div>
                                    <div className="swipeout-actions-right">
                                        <a href="#" data-confirm="Are you sure you want to delete this item?" className="swipeout-delete">Delete</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="item-content">
                                        <div className="item-media"><i className="material-icons">3d_rotation</i></div>
                                        <div className="item-inner">
                                            <div className="item-title">I am not removable</div>
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

function mapStateToProps(state) {
    return { 
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showPopover: (config) => dispatch(showPopover(config)),
        closePopover: () => dispatch(closePopover())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VaultsContainer);