import React from 'react';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <div className={'header'}>
        <div className={'ui text menu'}>
          <div className="header item">
            <div className="logo">
              <a href="#">
                IDEALIST
              </a>
            </div>
          </div>
            <div className="item">
              <a href="#">
                Конкурсы
              </a>
            </div>
            <div className="item">
              <a href="#">
                О нас
              </a>
            </div>
          <div className="ui right item header-right-side">
            <div className="login-item">
              Вход
            </div>
          </div>
        </div>
      </div>
    );
  }
}