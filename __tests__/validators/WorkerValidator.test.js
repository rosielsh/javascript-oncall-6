import WorkerValidator from "../../src/validators/WorkerValidator.js";

describe("WorkerValidatorTest 클래스 테스트", () => {
  test("근무자의 닉네임 중복될 수 없다", () => {
    const workers = ["루루", "루루", "슬링키", "글로", "참새"];

    expect(() => WorkerValidator.validateWorker(workers)).toThrow("[ERROR]");
  });

  test("닉네임은 최대 5자까지만 작성할 수 있다", () => {
    const workers = ["루루루루루루", "루루", "슬링키", "글로", "참새"];

    expect(() => WorkerValidator.validateWorker(workers)).toThrow("[ERROR]");
  });

  test("비상 근무자는 최소 5명 ~ 최대 35명 등록할 수 있습니다.", () => {
    const workers = [
      Array.from({ length: 3 }, (_, idx) => `참새${idx}`),
      Array.from({ length: 40 }, (_, idx) => `참새${idx}`),
    ];

    workers.forEach((worker) => {
      expect(() => WorkerValidator.validateWorker(worker)).toThrow("[ERROR]");
    });
  });

  test("비상 근무자는 평일 순번, 휴일 순번에 각각 1회 편성되어야 한다", () => {
    const weekDayWorkers = ["루루", "수아", "슬링키", "글로", "참새"];
    const holidayWorkers = ["수아", "글로", "참새", "루루", "슬링키"];

    expect(() => WorkerValidator.validateWorkers(weekDayWorkers, holidayWorkers)).toThrow("[ERROR]");
  });
});
