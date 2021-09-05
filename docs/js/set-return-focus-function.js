const { createFocusTrap } = require('../../dist/focus-trap');

const container = document.getElementById('setreturnfocus-function');
let clickedElement;

const setReturnFocus = ({ previousActiveElement }) => {
  if (clickedElement && clickedElement.id === 'focus-this') {
    return clickedElement;
  } else if (clickedElement && clickedElement.id === 'focus-initial') {
    return previousActiveElement;
  }
  return false;
};

const focusTrap = createFocusTrap('#setreturnfocus-function', {
  onActivate: () => container.classList.add('is-active'),
  onDeactivate: () => container.classList.remove('is-active'),
  setReturnFocus,
  allowOutsideClick: true,
});

const handleDeactivate = (e) => {
  clickedElement = e.target;
  focusTrap.deactivate();
};

document
  .getElementById('activate-setreturnfocus-function')
  .addEventListener('click', focusTrap.activate);

document
  .querySelector('#deactivate-setreturnfocus-function > #focus-this')
  .addEventListener('click', handleDeactivate);

document
  .querySelector('#deactivate-setreturnfocus-function > #focus-initial')
  .addEventListener('click', handleDeactivate);

document
  .querySelector('#deactivate-setreturnfocus-function > #no-focus')
  .addEventListener('click', handleDeactivate);
