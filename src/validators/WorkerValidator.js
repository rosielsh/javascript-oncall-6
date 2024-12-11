import { generateError } from "../utils/generateError.js";

class WorkerValidator {
  static validateWorker(workers) {
    this.#validateDuplicate(workers);
    this.#validateNameLength(workers);
    this.#validateTotalCount(workers);
  }

  static validateWorkers(weekDayWorkers, holidayWorkers) {
    this.#validateSame(weekDayWorkers, holidayWorkers);
  }

  static #validateDuplicate(workers) {
    const set = new Set(workers);

    if (set.size !== workers.length) {
      generateError("중복된 닉네임이 있습니다.");
    }
  }

  static #validateNameLength(workers) {
    if (workers.some((name) => name.length > 5)) {
      generateError("닉네임은 최대 5자까지 작성할 수 있습니다.");
    }
  }

  static #validateTotalCount(workers) {
    if (workers.length < 5 || workers.length > 35) {
      generateError("비상 근무자는 최소 5명 ~ 최대 35명 등록할 수 있습니다.");
    }
  }

  static #validateSame(a, b) {
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();

    for (let i = 0; i < a.length; i++) {
      if (sortedA[i] !== sortedB[i]) {
        generateError("비상 근무자는 평일 순번, 휴일 순번에 각각 1회 편성되어야 합니다.");
      }
    }
  }
}

export default WorkerValidator;
