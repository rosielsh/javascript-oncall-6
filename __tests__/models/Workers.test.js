import Workers from "../../src/models/Workers.js";

describe("Workers 클래스 테스트 작성", () => {
  test("다음 근무할 순번의 근무자를 알 수 있다", () => {
    const workersInput = ["루루", "솔로스타", "수아", "슬링키", " 참새"];
    const workers = new Workers(workersInput);

    workersInput.forEach((worker) => {
      expect(workers.getNextWorker()).toEqual(worker);
    });
  });
});
