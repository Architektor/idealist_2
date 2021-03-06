import React from 'react';
import { Link } from 'react-router';

export default class IntroComponent extends React.Component {
  render() {
    return (
      <div className={'intro__component'}>
        <div className={'header__content'}>
          <h1 style={{paddingTop: 100}}>Проведите конкурс и получите много оригинальных дизайнов</h1>
          <span>Заполните бриф, а мы возьмем на себя все сложности с генерацией идей</span>
        </div>
        <Link to="/addtask"><button style={{ marginTop: 30 }} className={'ui blue button'}>Заказать креатив</button></Link>
      </div>
    );
  }
}
