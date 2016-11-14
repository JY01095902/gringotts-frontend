import React, { Component } from 'react';
import {showPopover, closePopover} from '../../actions/application';
import { connect } from 'react-redux';

class MenuContainer extends Component {
    render() {
        const {showPopover, closePopover} = this.props;
        const menuPopoverContent = 
            <div className="list-block media-list">
                <ul>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile" className="item-link item-content">
                            <div className="item-media"><i className='material-icons'>payment</i></div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">明细</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile/vaults" className="item-link item-content">
                            <div className="item-media"><i className='material-icons'>account_balance_wallet</i></div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">Vaults</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile/chart" className="item-link item-content">
                            <div className="item-media"><i className='material-icons'>pie_chart</i></div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">统计</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile/menu" className="item-link item-content">
                            <div className="item-media"><i className='material-icons'>person</i></div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">我</div>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li onClick={() => closePopover()}>
                        <a href="#/mobile/test" className="item-link item-content">
                            <div className="item-media"><i className='material-icons'>bug_report</i></div>
                            <div className="item-inner">
                                <div className="item-title-row">
                                    <div className="item-title">测试</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>;
        return (
            <a className="link open-panel icon-only"
                onClick={()=>showPopover({
                    style: {
                        width: '200px',
                        top: '8px',
                        left: `${screen.width - 200 - 8}px`
                    },
                    content: menuPopoverContent
                })}>
                <i className="material-icons">menu</i>
            </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);