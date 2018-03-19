const searchContainer = document.querySelector('.user__search');
const nav = document.querySelector('.main-nav');
const button = searchContainer.querySelector('.user__search-toggle');
const field = searchContainer.querySelector('.user__search-field');
const explore = nav.querySelector('.main-nav__item--explore');
const categories = nav.querySelector('.main-nav__item--categories');

const initSearch = () => {
  button.addEventListener('click', evt => {
    if (!searchContainer.classList.contains('user__search--active')) {
      searchContainer.classList.add('user__search--active');
      explore.hidden = true;
      categories.hidden = true;
    } else {
      searchContainer.classList.remove('user__search--active');
      explore.hidden = false;
      categories.hidden = false;
    }
  });
};

export default initSearch;
