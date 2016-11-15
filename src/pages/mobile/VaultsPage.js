import React, { Component } from 'react';
import VaultsContainer from '../../containers/mobile/VaultsContainer';

class VaultsPage extends Component {
    render() {
        return (
            <VaultsContainer {...this.props}/>
        );
    }
}

export default VaultsPage;