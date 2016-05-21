import React from 'react';


import IntroComponent from '../IntroComponent/IntroComponent.jsx';

export default class ContestItem extends React.Component {
  render() {
    return (
      <div className={'index__page'}>
        <div className={'intro__section'}>
          <IntroComponent />
        </div>
        <div className={'section'}>
        </div>
      </div>
    );
  }
}
