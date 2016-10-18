import React, { Component } from 'react';
import NavbarContainer from '../../containers/desktop/NavbarContainer';
import '../../vendors/bootstrap-3.3.0-dist/dist/css/bootstrap.min.css';

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
