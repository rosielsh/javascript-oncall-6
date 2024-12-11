import { generateError } from "../utils/generateError.js";
import Validator from "./Validator.js";

class MonthValidator {
  static validate(date) {
    this.#validateInvalidNumber(date);
    this.#validateRange(date);
  }

  static #validateInvalidNumber(date) {
    if (Validator.isInvalidNumber(date)) {
      generateError("월은 숫자로 입력해야 합니다.");
    }
  }

  static #validateRange(date) {
    if (Validator.isOutOfRange(date, 1, 12)) {
      generateError("월은 1~12사이의 숫자로 입력해야 합니다.");
    }
  }
}

export default MonthValidator;
