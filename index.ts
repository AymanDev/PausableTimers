export enum TimerType {
  INTERVAL = "interval",
  TIMEOUT = "timeout"
}

export class PausableTimer {
  private callback: Function;
  private startTime: number;
  public leftTime: number;
  private endTime: number;
  private betweenTime: number;
  private type: TimerType;
  private timer: number | null = null;

  constructor(
    callback: Function,
    time: number,
    type: TimerType = TimerType.TIMEOUT
  ) {
    this.callback = callback;
    const rightNow = Date.now();
    this.startTime = rightNow;
    this.leftTime = time;
    this.betweenTime = time;
    this.endTime = rightNow + time;
    this.type = type;
  }

  startTimer() {
    if (this.type === TimerType.TIMEOUT) {
      this.timer = setTimeout(this.callback, this.leftTime);
    }
    if (this.type === TimerType.INTERVAL) {
      this.timer = setInterval(() => {
        this.startTime = Date.now();
        this.leftTime = this.betweenTime;
        this.endTime = this.startTime + this.betweenTime;
        this.callback();
      }, this.leftTime);
    }
  }

  pauseTimer(unpauseTime?: number) {
    if (this.timer !== null) {
      const rightNow = Date.now();
      this.leftTime = this.endTime - rightNow;
      clearTimeout(this.timer);
    }

    if (typeof unpauseTime !== "undefined") {
      setTimeout(() => this.startTimer(), unpauseTime);
    }
  }
}

export function setPausableTimeout(callback: Function, time: number) {
  const timer = new PausableTimer(callback, time, TimerType.TIMEOUT);
  timer.startTimer();
  return timer;
}

export function setPausableInterval(callback: Function, time: number) {
  const timer = new PausableTimer(callback, time, TimerType.INTERVAL);
  timer.startTimer();
  return timer;
}