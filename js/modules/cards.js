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
      this.transfer = 27;
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

  getResource('http://localhost:3000/menu').then((data) => {
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
  });
}

export default cards;
