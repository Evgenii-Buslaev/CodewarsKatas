/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

function humanReadable(seconds) {
  let hours = 0;
  let minutes = 0;

  while (seconds >= 60) {
    seconds = seconds - 60;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  if (hours.toString().length < 2) {
    hours = "0" + hours;
  }
  if (minutes.toString().length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.toString().length < 2) {
    seconds = "0" + seconds;
  }
  let string = `${hours}:${minutes}:${seconds}`;
  return string;
}
