import Workers from "../../src/models/Workers.js";

describe("Workers 클래스 테스트 작성", () => {
  test("다음 근무할 순번의 근무자를 알 수 있다", () => {
    const workersInput = ["루루", "솔로스타", "수아", "슬링키", " 참새"];
    const workers = new Workers(workersInput);

    workersInput.forEach((worker) => {
      expect(workers.assignWorker()).toEqual(worker);
    });
  });

  test("이전 근무자와 순번이 겹치면 다음 근무자와 자리를 바꾸어야 한다", () => {
    const workersInput = ["루루", "솔로스타", "수아", "슬링키", " 참새"];
    const workers = new Workers(workersInput);

    expect(workers.assignWorker()).toEqual(workersInput[0]); // 루루 할당
    expect(workers.changeOrder(workersInput[1])).toEqual(workersInput[2]); // 자리를 바꿨으니 솔로스타가 아니라 수아를 배정
    expect(workers.assignWorker()).toEqual(workersInput[1]); // 다시 원래대로 솔로스타
  });
});
