import throttle from 'lodash.throttle';

const LS_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(LS_TIME_KEY, e.seconds);
  }, 1000),
);

// * Первый вариант
// ? Может быть не правильное решение, точно не уверен, но ошибку в консоли не выдет.
player.setCurrentTime(localStorage.getItem(LS_TIME_KEY)).catch(error => {
  console.log(error.name, error.message);
});

// * Второй вариант
// let currentTime = localStorage.getItem(LS_TIME_KEY);
// currentTime = currentTime ? currentTime : 0;
// player.setCurrentTime(currentTime);
