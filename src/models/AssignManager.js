class AssignManager {
  #assignedWorkers;
  #date;

  constructor(date) {
    this.#assignedWorkers = [];
    this.#date = date;
  }

  assignWorkers(weekDayWorkers, holidayWorkers) {
    const totalDate = this.#date.getTotalDays();

    for (let day = 1; day <= totalDate; day++) {
      const dateType = this.#date.getDayType(day);

      // 평일
      if (dateType === "WEEKDAY") {
        const nextWorker = weekDayWorkers.assignWorker();

        // 겹친다
        if (
          this.#assignedWorkers.length > 0 &&
          nextWorker === this.#assignedWorkers[this.#assignedWorkers.length - 1].worker
        ) {
          const changedWorker = weekDayWorkers.changeOrder(nextWorker);

          this.#assignedWorkers.push({
            type: dateType,
            worker: changedWorker,
          });

          continue;
        }

        // 겹치지 않음
        this.#assignedWorkers.push({
          type: dateType,
          worker: nextWorker,
        });

        continue;
      }

      // 주말
      const nextWorker = holidayWorkers.assignWorker();

      if (
        this.#assignedWorkers.length > 0 &&
        nextWorker === this.#assignedWorkers[this.#assignedWorkers.length - 1].worker
      ) {
        const changedWorker = holidayWorkers.changeOrder(nextWorker);

        this.#assignedWorkers.push({
          type: dateType,
          worker: changedWorker,
        });

        continue;
      }

      // 겹치지 않음
      this.#assignedWorkers.push({
        type: dateType,
        worker: nextWorker,
      });
    }

    return this.#assignedWorkers;
  }
}

export default AssignManager;
