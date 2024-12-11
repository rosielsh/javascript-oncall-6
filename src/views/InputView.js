import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async readDateInfo() {
    return await Console.readLineAsync("비상 근무를 배정할 월과 시작 요일을 입력하세요> ");
  }

  static async readWorkers(type) {
    return await Console.readLineAsync(`${type} 비상 근무 순번대로 사원 닉네임을 입력하세요> `);
  }
}

export default InputView;
