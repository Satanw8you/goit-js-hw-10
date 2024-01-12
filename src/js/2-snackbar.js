import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const handleOnSubmitForm = event => {
  event.preventDefault();
  const form = event.target;
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;
  const promise = createPromise(delay, state);
  promise.then(delay => {
    iziToast.success({
      title: 'Fulfilled',
      message: `✅ Fulfilled promise in ${delay}ms`,
    });
  });
  promise.catch(delay => {
    iziToast.error({
      title: 'Rejected',
      message: `❌ Rejected promise in ${delay}ms`,
    });
  });
  form.reset();
};

form.addEventListener('submit', handleOnSubmitForm);

const createPromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    const resolveOrReject = state === 'fulfilled' ? resolve : reject;
    setTimeout(() => {
      resolveOrReject(delay);
    }, delay);
  });
};
