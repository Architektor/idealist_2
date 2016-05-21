import React from 'react';
import { Link } from 'react-router';

export default class IntroComponent extends React.Component {
  render() {
    return (
      <div className={'intro__component'}>
        <div className={'header__content'}>
          <h1>Проведите конкурс и получите много оригинальных дизайнов</h1>
          <span>Заполните бриф, а мы возьмем на себя все сложности с генерацией идей</span>
        </div>
<<<<<<< HEAD
        <button className={'ui orange button huge'}><a href="/addtask">Заказать креатив</a></button>
=======
        <button className={'ui orange button'}><Link to="/addtask">Заказать креатив</Link></button>
>>>>>>> 7398dbe3922b0a98d597c50fd8e131a88fc2779c
      </div>
    );
  }
}
