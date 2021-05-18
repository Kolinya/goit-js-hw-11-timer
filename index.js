const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
};

class CountdownTimer {
  timeComponents = { days: 0, hours: 0, mins: 0, secs: 0 };

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
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
    refs.days.textContent = this.timeComponents.days;
    refs.hours.textContent = this.timeComponents.hours;
    refs.mins.textContent = this.timeComponents.mins;
    refs.secs.textContent = this.timeComponents.secs;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 01, 2021"),
});
