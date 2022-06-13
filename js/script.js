import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import slider from './modules/slider';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 50000);

  tabs(
    '.tabheader-item',
    '.tabcontent',
    '.tabheader-items',
    'tabheader-item-active'
  );
  modal('[data-modal]', '.modal', modalTimer);
  timer('.timer', '2022-08-20');
  slider({
    container: '.offer-slider',
    slide: '.offer-slide',
    nextArrow: '.offer-slider-next',
    prewArrow: '.offer-slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer-slider-wrapper',
    field: '.offer-slider-inner',
  });
  forms(modalTimer, 'form');
  cards();
  calc();
});
