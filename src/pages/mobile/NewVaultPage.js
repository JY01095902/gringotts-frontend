import React, { Component } from 'react';
import NewVaultContainer from '../../containers/mobile/NewVaultContainer';

class NewVaultPage extends Component {
    render() {
        return (
            <NewVaultContainer {...this.props}/>
        );
    }
}

export default NewVaultPage;