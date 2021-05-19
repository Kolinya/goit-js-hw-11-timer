class CountdownTimer {
  timeComponents = { days: 0, hours: 0, mins: 0, secs: 0 };

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
    this.count();
  }

  count() {
    const startTime = this.targetDate;
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      this.getTime(deltaTime);
      this.updateClockface();
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTime(time) {
    this.timeComponents.days = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24))
    );
    this.timeComponents.hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    this.timeComponents.mins = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    this.timeComponents.secs = this.pad(
      Math.floor((time % (1000 * 60)) / 1000)
    );
  }

  updateClockface() {
    this.refs.days.textContent = this.timeComponents.days;
    this.refs.hours.textContent = this.timeComponents.hours;
    this.refs.mins.textContent = this.timeComponents.mins;
    this.refs.secs.textContent = this.timeComponents.secs;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 01, 2021"),
});
