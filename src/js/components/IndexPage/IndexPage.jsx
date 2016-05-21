import React from 'react';

import IntroComponent from '../IntroComponent/IntroComponent.jsx';

export default class ContestItem extends React.Component {
  render() {
    return (
      <div className={'index__page'}>
        <div className={'intro__section'}>
          <IntroComponent />

        </div>
        <div className={'intro__ section'}>
        </div>
        <div className="roboto" style={{padding: '2px 40px', position: 'absolute', top: 691, left: 855, backgroundColor: 'white'}}>IDEALIST</div>
        <div className="description_with_icons">
            <img src="../../../screen.png" style={{width: '50vw', float: 'right', paddingRight: 30, marginRight: 140}} />
          <div style={{padding: 40, float: 'left', height: 500, width:'30vw', backgroundColor: 'rgba(255, 139, 0, 0.8)'}}>
            <div style={{color: 'white'}}><h2>Заставь тысячи креативных умов работать на ваш бизнес!</h2></div>
            <div style={{color: 'white', paddingTop: 50}}>Проведите конкурс и получите самые креативные идеи для вашего проекта.<br/> 

<p style={{paddingTop: 20}}>Заполните бриф, а все остальное доверьте профессиональным креативщикам со всего земного шара.</p></div>
          </div>
        </div>
        <div style={{width:'100vw', borderBottom: '1px solid rgba(0,0,0,0.5)', marginBottom: 30}}/>
        <div className="description_with_icons">
            <img src="../../../screen2.png" style={{width: '50vw', float: 'right', paddingRight: 30, marginRight: 140}} />
          <div style={{marginTop: -30, padding: 40, float: 'left', height: 680, width:'30vw', backgroundColor: 'rgba(88, 40, 114, 0.8)'}}>
            <div style={{color: 'white'}}><h2>Конфиденциальность для заказчиков</h2></div>
            <div style={{color: 'white', paddingTop: 50}}>Конкурсы бывают открытыми и закрытыми.</div>
          </div>
        </div>
      </div>
    );
  }
}
