import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, createEffect } from 'solid-js';

// get the current time since November 29th, 2022
function TimeSince(variable) {
  const [time, setTime] = createSignal(new Date("November 29, 2022 20:30:00"));

  // calculate the difference between now and then
  var now = new Date();
  var difference = (now.getTime() - time().getTime()) / 1000;
  var seconds = Math.floor(difference % 60);
  var minutes = Math.floor(difference / 60 % 60);
  var hours = Math.floor(difference / 3600 % 24);
  var days = Math.floor(difference / 86400 % 365);
  var years = Math.floor(difference / 31536000);

  // update the time every second
  createEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  });

  return (
    <div id="timer-container">
      <div class="timer-item years">{years} years</div>
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
    <h1>Mara & Merijn</h1>
    <h2>Together for:</h2>
    {TimeSince()}
    <p>I love you &#128150;</p>
    </>
  );
}

export default App;
