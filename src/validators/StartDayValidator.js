import { generateError } from "../utils/generateError.js";

class StartDayValidator {
  static DAY_OF_WEEK = ["월", "화", "수", "목", "금", "토", "일"];

  static validate(day) {
    this.#validateType(day);
    this.#validateValue(day);
  }

  static #validateType(day) {
    if (typeof day !== "string") {
      generateError("시작일은 숫자로 입력해야 합니다.");
    }
  }

  static #validateValue(day) {
    if (!StartDayValidator.DAY_OF_WEEK.includes(day)) {
      generateError("시작요일은 일, 월, 화, 수, 목, 금, 토의 값만 입력해야 합니다.");
    }
  }
}

export default StartDayValidator;
