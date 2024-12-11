import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printError(message) {
    Console.print(message);
    this.#printEmptyLine();
  }

  static printResult(month, startDay, assignedInfo) {
    const logs = [];
    const startIdx = {
      월: 0,
      화: 1,
      수: 2,
      목: 3,
      금: 4,
      토: 5,
      일: 6,
    };

    const DAY_OF_WEEK = ["월", "화", "수", "목", "금", "토", "일"];

    let idx = startIdx[startDay];
    for (let day = 1; day <= assignedInfo.length; day++) {
      logs.push(
        `${month}월 ${day}일 ${DAY_OF_WEEK[idx++ % 7]}${
          assignedInfo[day - 1].type === "WEEKDAY_LEGAL" ? "(휴일)" : ""
        } ${assignedInfo[day - 1].worker}`
      );
    }

    Console.print(logs.join("\n"));
  }

  static #printEmptyLine() {
    Console.print("");
  }
}

export default OutputView;
