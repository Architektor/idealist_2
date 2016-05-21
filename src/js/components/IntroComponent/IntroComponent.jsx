import React from 'react';

export default class IntroComponent extends React.Component {
  render() {
    return (
      <div className={'intro__component'}>
        <div className={'header__content'}>
          <h1>Проведите конкурс и получите много оригинальных дизайнов</h1>
          <span>Заполните бриф, а мы возьмем на себя все сложности с генерацией идей</span>
        </div>
        <button className={'ui orange button'}><a href="/addtask">Заказать креатив</a></button>
      </div>
    );
  }
}
