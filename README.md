# PausableTimers
[![Build Status](https://img.shields.io/travis/AymanDev/PausableTimers.svg?style=for-the-badge)](https://travis-ci.org/AymanDev/PausableTimers) [![Repo Size](https://img.shields.io/github/repo-size/AymanDev/PausableTimers.svg?style=for-the-badge)](https://github.com/AymanDev/PausableTimers) ![License](https://img.shields.io/github/license/aymandev/pausabletimers.svg?style=for-the-badge) [![npm](https://img.shields.io/npm/v/@aymandev/pausabletimers.svg?style=for-the-badge)](https://www.npmjs.com/package/@aymandev/pausabletimers)

## Getting Started
### Installation 
```sh
npm install @aymandev/pausabletimers
```

### How to use this timers?
Almost same as default `setTimeout` and `setInterval`.
First need to declare timer variable:
```js
const timer = setPausableTimeout(() => console.log("message"), 5000);
```
This timeout will execute after 5 seconds.
#### How to use interval timer?
Just have to change function name little bit:
```js
const timer = setPausableInterval(() => console.log("message"), 5000);
```

### How to pause timer?
Just have to call method from timer:
```js
timer.pauseTimer();
```

Also you can pause timer for N milliseconds:
```js
timer.pauseTimer(3000); // Timer will unpause after 3 seconds
```

### How to unpause timer?
Just have to call method from timer:
```js
timer.startTimer();
```