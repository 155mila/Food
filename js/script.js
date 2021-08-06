window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader-item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader-items');

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach((item) => {
      item.classList.remove('tabheader-item-active');
    });
  }

  function showTadContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader-item-active');
  }

  hideTabContent();
  showTadContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tabheader-item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTadContent(i);
        }
      });
    }
  });
});
