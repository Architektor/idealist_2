import React from 'react';
import SubmitIdea from '../SumbitIdea/component.jsx';

export default class IkeaContest extends React.Component {
  handleClick = () => {
    document.getElementById('participate_ikea').scrollIntoView();
  }
  render() {
    return (
      <div className={'ikea__contest'}>
        <div className={'wrapper'}>
          <div className={'caption'}>
            <h1>Креативный конкурс от IKEA </h1>
            <p>Присылайте ваши идеи о том, каких товаров не хватает в ассортименте магазинов IKEA. <br /> Авторы лучших идей получат ценные призы.</p>
            <button className={'ui blue button'} onClick={this.handleClick}>Участвовать</button>
          </div>
        </div>
        <div className={'ikea__description ui'}>
          <div className={'ui desc__ segment'}>
            <h2> Описание </h2>
            <p>
              Миссия ИКЕА: «Изменить к лучшему повседневную жизнь многих людей». Бизнес-идея ИКЕА: «Предлагать широкий ассортимент удобных и функциональных товаров для обустройства дома по таким низким ценам, чтобы как можно больше людей имели возможность их купить».
            </p>
          </div>
          <div className={'ui desc__ segment'}>
            <h2> Призы </h2>
              <ul className={'ui list'}>
              <li>
                Лучшая идея вне зависимости от категорий - <strong>100,000 рублей</strong> и встреча с директором по маркетингу IKEA Россия  с проведением экскурсии по офису
              </li>
              <li>
                Лучшая идея продукта для спальни - Сертификат на покупку кровати и постельных принадлежностей в магазине IKEA на сумму <strong>50 тысяч рублей </strong>
              </li>
              <li>
                Лучшая идея уличной мебели IKEA - Сертификат на <strong>30,000 рублей</strong> в магазины IKEA Россия
              </li>
              </ul>
          </div>
          <div className={'ui desc__ segment'}>
            <h2> Сроки </h2>
            <p className={'text-center'}>
              Работы принимаются с 21 мая 2016 года по 20 июля 2016 года
            </p>
          </div>
          <div id="participate_ikea">
            <SubmitIdea />
          </div>
        </div>
      </div>
    );
  }
}

