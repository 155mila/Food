import { getResource } from '../services/services.js';

function cards() {
  //use Class for cards

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.price = price;
      this.transfer = 2.5;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.className = 'menu-item';
        element.classList.add(this.className);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
      <img src=${this.src} alt=${this.alt} />
      <h3 class="menu-item-subtitle">${this.title}</h3>
      <div class="menu-item-descr">
        ${this.descr}
      </div>
      <div class="menu-item-divider"></div>
      <div class="menu-item-price">
        <div class="menu-item-cost">Цена:</div>
        <div class="menu-item-total"><span>${this.price}</span> руб/день</div>
      </div>`;
      this.parent.append(element);
    }
  }

  new MenuCard(
    'img/tabs/veger.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/premium.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, овощи, а также спелые и вкусные фрукты - ресторанное меню без похода в ресторан!',
    13,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и вегетарианских стейков.',
    10,
    '.menu .container'
  ).render();

  new MenuCard(
    'img/tabs/balance.jpg',
    'post',
    'Меню "Сбалансированное"',
    'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.',
    11,
    '.menu .container'
  ).render();

  /*getResource('http://localhost:3000/menu').then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        '.menu .container'
      ).render();
    });
  });*/
}

export default cards;
