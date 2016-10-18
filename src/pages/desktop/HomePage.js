import React, { Component } from 'react';
import { Media, Label } from 'react-bootstrap';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Media>
          <Media.Body>
            <Media.Heading>我很囧，你保重我很囧，你保重....晒晒旅行中的那些囧！</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            <p>
              <Label bsStyle="default">Default</Label>&nbsp;
              <Label bsStyle="primary">Primary</Label>&nbsp;
              <Label bsStyle="success">Success</Label>&nbsp;
            </p>
          </Media.Body>
          <Media.Right>
            <h5>￥100.20</h5>
          </Media.Right>
        </Media>
      </div>
    );
  }
}

export default HomePage;
