import React, { Component } from 'react';

class VaultsPage extends Component {
    render() {
        return (
            <div className="view view-main">
                <div className="pages navbar-fixed">
                  <div className="page" data-page="home">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <div className="center">Test</div>
                        </div>
                    </div>
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

export default VaultsPage;