const list = document.querySelectorAll('.label-works__item');
const items = document.querySelectorAll('.content-works__item');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');

    for (let k = 0; k < items.length; k++) {
      items[k].classList.add('hide');
      items[k].classList.remove('active', 'fade');

      if (
        items[k].getAttribute('data-item') === dataFilter ||
        dataFilter === 'all'
      ) {
        items[k].classList.remove('hide');
        items[k].classList.add('active', 'fade');
      }
    }
  });
}
