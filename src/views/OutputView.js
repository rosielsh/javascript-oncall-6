import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message);
    this.#printEmptyLine();
  }

  static printResult(month, startDay, assignedInfo) {}

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
