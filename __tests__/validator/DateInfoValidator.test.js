describe("DateInfoValidator 클래스 테스트", () => {
  test("월은 1~12 사이의 숫자가 아니면 에러를 발생한다", () => {
    const months = [undefined, null, NaN, "string", false, 0, 13];

    months.forEach((month) => {
      expect(() => DateInfoValidator.validate(month)).toThrow("[ERROR]");
    });
  });
});
