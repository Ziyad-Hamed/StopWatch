function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.reset = function () {
    startTime = 0;
    endTime = 0;
    duration = 0;
    running = 0;
    // make stop watch to the initial state
  };
  this.start = function () {
    if (running != 0) {
      throw new Error("Stopwatch has already started");
    } else {
      startTime = new Date().getTime();
      endTime = 0;
      running = 1;
    }
    // if start the stop watch towic throw an error say : Stopwatch has already started
  };
  this.stop = function () {
    if (running == 0) {
      throw new Error("StopWatch is not Started");
    } else {
      endTime = new Date().getTime();
      running = 0;
    }
    // if stop the stop watch towic without start throw an error say : stop is not started
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      if (startTime == 0 || endTime == 0) {
        return (duration = 0);
      } else if (endTime < 0 || running != 0) {
        return (duration = 0);
      }
      return (duration = (endTime - startTime) / 1000);
    },
  });
}
const sw = new Stopwatch();
