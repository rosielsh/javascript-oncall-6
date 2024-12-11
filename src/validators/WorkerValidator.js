import { generateError } from "../utils/generateError.js";

class WorkerValidator {
  static validateWorker(workers) {
    this.#validateDuplicate(workers);
  }

  static #validateDuplicate(workers) {
    const set = new Set(workers);

    if (set.size !== workers.length) {
      generateError("중복된 닉네임이 있습니다.");
    }
  }
}

export default WorkerValidator;
