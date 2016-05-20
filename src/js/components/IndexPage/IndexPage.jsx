import React from 'react';

import HeaderComponent from '../base/header/component';
import FooterComponent from '../base/footer/component';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <h1>
          this is index page
        </h1>
        <FooterComponent />
      </div>
    );
  }
}
