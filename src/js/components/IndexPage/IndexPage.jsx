import React from 'react';

import HeaderComponent from '../base/header/component';
import FooterComponent from '../base/footer/component';
import IntroComponent from '../IntroComponent/IntroComponent.jsx';

export default class ContestItem extends React.Component {
  render() {
    return (
      <div className={'index__page'}>
        <div className={'intro__section'}>
          <HeaderComponent />
          <IntroComponent />
        </div>
        <div className={'section'}>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
