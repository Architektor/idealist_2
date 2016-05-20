import React from 'react';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <div className="header-left-side">
          <div className="logo">
            IDEALIST
          </div>
          <div className="menu-items">
            <div className="menu-item">
              Конкурсы
            </div>
            <div className="menu-item">
              О нас
            </div>
            <div className="menu-item">
              Йии
            </div>
          </div>
        </div>
        <div className="header-right-side">
          <div className="login-item">
            Вход
          </div>
        </div>
      </header>
    );
  }
}
