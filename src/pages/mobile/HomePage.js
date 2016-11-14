import React, { Component } from 'react';
import HomeContainer from '../../containers/mobile/HomeContainer';

class HomePage extends Component {
    render() {
        return (
            <HomeContainer {...this.props}/>
        );
    }
}

export default HomePage;