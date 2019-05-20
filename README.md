# PausableTimers



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

### How to unpause timer?
Just have to call method from timer:
```js
timer.startTimer();
```