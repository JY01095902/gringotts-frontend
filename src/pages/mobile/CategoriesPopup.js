import React, { Component } from 'react';
import CategoriesContainer from '../../containers/mobile/CategoriesContainer';

class CategoriesPopup extends Component {
    render() {
        return (
            <CategoriesContainer {...this.props} />
        );
    }
}

export default CategoriesPopup;
