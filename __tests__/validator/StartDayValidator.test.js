import StartDayValidator from "../../src/validators/StartDayValidator.js";

describe("StartDayValidator 클래스 테스트", () => {
  test("시작일은 월~일 사이의 문자로 입력받을 수 있다", () => {
    const days = ["월", "화", "수", "목", "금", "토", "일"];

    days.forEach((day) => {
      expect(() => StartDayValidator.validate(day)).not.toThrow("[ERROR]");
    });
  });

  test("시작일은 월~일 사이의 문자가 아니면 에러를 발생한다", () => {
    const days = ["", undefined, null, NaN, "string", "윌", "먹"];

    days.forEach((day) => {
      expect(() => StartDayValidator.validate(day)).toThrow("[ERROR]");
    });
  });
});
