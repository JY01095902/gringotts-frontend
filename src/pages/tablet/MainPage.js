import React, { Component } from 'react';
import NavbarContainer from '../../containers/tablet/NavbarContainer';

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavbarContainer/>
        {this.props.children}
      </div>
    );
  }
}

export default MainPage;
