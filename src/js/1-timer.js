import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast/dist/js/iziToast';
import 'izitoast/dist/css/iziToast.min.css';

const btn = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userSelectDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectDate < currentDate) {
      btn.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      btn.disabled = false;
      iziToast.success({
        title: 'Awesome',
        message: 'You need to press START',
      });
    }
  },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

btn.addEventListener('click', startTimer);

function startTimer() {
  btn.disabled = true;
  input.disabled = true;
  const now = new Date();
  const targetDate = new Date(input.value);
  const timer = setInterval(() => {
    const currentDate = new Date();
    const timeDiff = targetDate - currentDate;
    if (timeDiff <= 0) {
      clearInterval(timer);
      input.disabled = false;
      iziToast.success({
        title: 'Time is up!',
        message: 'The timer has finished.',
      });
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(timeDiff);
    daysSpan.textContent = addLeadingZero(days);
    hoursSpan.textContent = addLeadingZero(hours);
    minutesSpan.textContent = addLeadingZero(minutes);
    secondsSpan.textContent = addLeadingZero(seconds);
  }, 1000);
}

function calculateRemainingTime(targetDate) {
  const currentDate = new Date();
  const timeDiff = targetDate - currentDate;
  const remainingTime = convertMs(timeDiff);
  return remainingTime;
}
