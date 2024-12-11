import MonthValidator from "../../src/validators/MonthValidator.js";

describe("MonthValidator 클래스 테스트", () => {
  test("월은 숫자가 아니면 에러를 발생한다", () => {
    const months = ["", undefined, null, NaN, "string"];

    months.forEach((month) => {
      expect(() => MonthValidator.validate(month)).toThrow("[ERROR]");
    });
  });

  test("월은 1~12사이의 숫자가 아니면 에러를 발생한다", () => {
    const months = [0, 13, Infinity, -Infinity];

    months.forEach((month) => {
      expect(() => MonthValidator.validate(month)).toThrow("[ERROR]");
    });
  });
});
