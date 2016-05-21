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
        <div className="description_with_icons">
            <img src="../../../screen.png" style={{width: '70vw', float: 'right'}} />
          <div style={{padding: 40, float: 'left', height: 680, width:'30vw', backgroundColor: 'rgba(255, 139, 0, 0.8)'}}>
            <div style={{color: 'white'}}><h2>Заставь тысячи креативных умов работать на ваш бизнес!</h2></div>
            <div style={{color: 'white', paddingTop: 40}}>Проведите конкурс и получите самые креативные идеи для вашего проекта.<br/> 

<p style={{paddingTop: 20}}>Заполните бриф, а все остальное доверьте профессиональным креативщикам со всего земного шара.</p></div>
          </div>
        </div>
      </div>
    );
  }
}
