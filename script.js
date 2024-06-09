'use strict';
let rand_number = Math.floor(Math.random() * 20 + 1);
console.log(rand_number);
document.querySelector('.check').addEventListener('click', function () {
  let score = Number(document.querySelector('.score').textContent);
  let guess = document.querySelector('.guess').value;
  let highscore = document.querySelector('.highscore').textContent;
  if (score > 1) {
    if (guess == rand_number) {
      document.querySelector('.message').textContent = 'You Win!!';
      document.querySelector('.number').textContent = rand_number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.check').style.display = 'none';
      if (highscore < score) {
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      if (guess > rand_number) {
        document.querySelector('.message').textContent = 'Guess a lower value';
      } else {
        document.querySelector('.message').textContent = 'Guess a higher value';
      }
    }
  } else if (score == 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You Lost! Try Again';
    document.querySelector('.check').style.display = 'none';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  rand_number = Math.floor(Math.random() * 20 + 1);
  console.log(rand_number);
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').style.display = 'block';
});
