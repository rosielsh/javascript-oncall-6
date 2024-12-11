import Converter from "../converter/Converter.js";
import AssignManager from "../models/AssignManager.js";
import Date from "../models/Date.js";
import Workers from "../models/Workers.js";
import InputHandler from "../utils/InputHandler.js";
import MonthValidator from "../validators/MonthValidator.js";
import StartDayValidator from "../validators/StartDayValidator.js";
import WorkerValidator from "../validators/WorkerValidator.js";

class AssignController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async assign() {
    const [month, startDay] = await InputHandler.repeatUntilValidInput(() => this.#getDateInfo(), this.#outputView);
    const [weekDayWorkerArr, holidayWorkerArr] = await InputHandler.repeatUntilValidInput(
      () => this.#getWorkers(),
      this.#outputView
    );

    const date = new Date(month, startDay);
    const weekDayWorkers = new Workers(weekDayWorkerArr);
    const holidayWorkers = new Workers(holidayWorkerArr);

    const assignManager = new AssignManager(date);
    const assignedInfo = assignManager.assignWorkers(weekDayWorkers, holidayWorkers);

    this.#outputView.printResult(month, startDay, assignedInfo);
  }

  async #getDateInfo() {
    const dateInfo = await this.#inputView.readDateInfo();
    const [month, startDay] = Converter.splitByComma(dateInfo);
    MonthValidator.validate(month);
    StartDayValidator.validate(startDay);
    return [month, startDay];
  }

  async #getWorkers() {
    const weekDayWorkers = await this.#inputView.readWorkers("평일");
    const weekDayWorkersArr = Converter.splitByComma(weekDayWorkers);
    WorkerValidator.validateWorker(weekDayWorkersArr);

    const holidayWorkers = await this.#inputView.readWorkers("휴일");
    const holidayWorkersArr = Converter.splitByComma(holidayWorkers);
    WorkerValidator.validateWorker(holidayWorkersArr);

    WorkerValidator.validateWorkers(weekDayWorkersArr, holidayWorkersArr);
    return [weekDayWorkersArr, holidayWorkersArr];
  }
}

export default AssignController;
