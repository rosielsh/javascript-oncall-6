describe("WorkerValidatorTest 클래스 테스트", () => {
  test("근무자의 닉네임 중복될 수 없다", () => {
    const workers = ["루루", "루루", "슬링키", "글로", "참새"];

    expect(() => WorkerValidator.validateWorker(workers)).toThrow("[ERROR]");
  });
});
