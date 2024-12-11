class Validator {
  // 비정상적인 숫자 확인
  static isInvalidNumber(input) {
    if (input === "" || input === null) {
      return true;
    }
    const number = Number(input);
    return !Number.isFinite(number);
  }

  // 빈 값 확인
  static isEmpty(input) {
    return typeof input === "string" && input.trim() === "";
  }

  // 필요하다면 범위 체크 메서드 추가
  static isOutOfRange(number, min, max) {
    return number < min || number > max;
  }
}

export default Validator;
