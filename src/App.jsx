import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, createEffect } from 'solid-js';


function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}



// get the current time since November 29th, 2022
function TimeSince(_) {
  const [time, setTime] = createSignal(new Date("February 27, 2024 14:30:00"));

  // calculate the difference between now and then
  const now = new Date();
  const difference = (now.getTime() - time().getTime()) / 1000;
  const seconds = Math.floor(difference % 60);
  const minutes = Math.floor(difference / 60 % 60);
  const hours = Math.floor(difference / 3600 % 24);
  const days = Math.floor(difference / 86400 % 30);
  const months = monthDiff(time(), now) % 12;
  const years = Math.floor(difference / 31536000);


  // update the time every second
  createEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  });

  return (
    <div id="timer-container">
      <div class="timer-item years">{years} years</div>
      <div class="timer-item monts">{months} months</div>
      <div class="timer-item days">{days} days</div>
      <div class="timer-item hours">{hours} hours</div>
      <div class="timer-item minutes">{minutes} minutes</div>
      <div class="timer-item seconds">{seconds} seconds</div>
      </div>
  );
}

function App() {
  return (
    <>
    <h1>Tanvi & Rahul</h1>
    <h2>Together for:</h2>
    {TimeSince()}
    <p>I love you &#128150;</p>
    </>
  );
}

export default App;
