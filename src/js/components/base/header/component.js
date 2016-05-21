import React from 'react';
import { Link } from 'react-router';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <div className={window.location.pathname === '/' ? 'header main-header' : 'header'}>
        <div className={'ui text menu'} style={{ margin: 0 }}>
          <div className="item">
            <div className="logo">
              <Link to="/">
                IDEALIST
              </Link>
            </div>
          </div>
            <div className="item">
              <Link to="/taskscatalog">
                Конкурсы
              </Link>
            </div>
            <div className="item">
              <Link to="/about">
                О нас
              </Link>
            </div>
          <div className="ui right item header-right-side">
            <Link to="/login">
              <div className="login-item">
                Вход
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
