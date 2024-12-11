import { generateError } from "../utils/generateError.js";

class WorkerValidator {
  static validateWorker(workers) {
    this.#validateDuplicate(workers);
    this.#validateNameLength(workers);
  }

  static #validateDuplicate(workers) {
    const set = new Set(workers);

    if (set.size !== workers.length) {
      generateError("중복된 닉네임이 있습니다.");
    }
  }

  static #validateNameLength(workers) {
    console.log(workers);
    if (workers.some((name) => name.length > 5)) {
      generateError("닉네임은 최대 5자까지 작성할 수 있습니다.");
    }
  }
}

export default WorkerValidator;
