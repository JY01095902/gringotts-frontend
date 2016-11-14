import React, { Component } from 'react';
import ApplicationContainer from '../../containers/mobile/ApplicationContainer';
import '../../css/mobile/MainPage.css';

class MainPage extends Component {
    render() {
        return (
            <div className='views theme-teal'>
                {this.props.children}
                <ApplicationContainer />
            </div>
        );
    }
}

export default MainPage;
