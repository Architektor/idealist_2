import React from 'react';

import HeaderComponent from '../base/header/component';
import FooterComponent from '../base/footer/component';

export default class ContestItem extends React.Component {
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
