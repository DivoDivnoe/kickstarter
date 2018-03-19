const searchContainer = document.querySelector('.user__search');
const nav = document.querySelector('.main-nav');
const toggle = searchContainer.querySelector('.user__search-toggle');
const field = searchContainer.querySelector('.user__search-field');
const button = searchContainer.querySelector('.user__search-btn');
const explore = nav.querySelector('.main-nav__item--explore');
const categories = nav.querySelector('.main-nav__item--categories');

const activateSearch = () => {
  searchContainer.classList.add('user__search--active');
  explore.hidden = true;
  categories.hidden = true;
};
const deactivateSearch = () => {
  searchContainer.classList.remove('user__search--active');
  explore.hidden = false;
  categories.hidden = false;
};

const activateButton = () => {
  if (!button.classList.contains('user__search-btn--active')) {
    button.classList.add('user__search-btn--active');
    button.disabled = false;
  }
};
const deactivateButton = () => {
  if (button.classList.contains('user__search-btn--active')) {
    button.classList.remove('user__search-btn--active');
    button.disabled = true;
  }
};

const initSearch = () => {
  toggle.addEventListener('click', evt => {
    !searchContainer.classList.contains('user__search--active')
      ? activateSearch()
      : deactivateSearch();
  });

  field.addEventListener('input', evt => {
    evt.target.value ? activateButton() : deactivateButton();
  });
};

export default initSearch;
