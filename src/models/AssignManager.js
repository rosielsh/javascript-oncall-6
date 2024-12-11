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

      if (dateType === "WEEKDAY") {
        this.#processAssign(dateType, weekDayWorkers);
        continue;
      }

      this.#processAssign(dateType, holidayWorkers);
    }

    return this.#assignedWorkers;
  }

  #processAssign(dateType, worker) {
    const nextWorker = worker.assignWorker();

    if (this.#isDuplicatedWorker(nextWorker)) {
      const changedWorker = worker.changeOrder(nextWorker);
      this.#addWorker(dateType, changedWorker);
      return;
    }

    this.#addWorker(dateType, nextWorker);
  }

  #addWorker(dateType, worker) {
    this.#assignedWorkers.push({
      type: dateType,
      worker: worker,
    });
  }

  #isDuplicatedWorker(nextWorker) {
    return (
      this.#assignedWorkers.length > 0 && nextWorker === this.#assignedWorkers[this.#assignedWorkers.length - 1].worker
    );
  }
}

export default AssignManager;
