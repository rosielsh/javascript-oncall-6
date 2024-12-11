class Date {
  static DAYS_PER_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  static LEGAL_HOLIDAY = {
    1: [1],
    3: [1],
    5: [5],
    6: [6],
    8: [15],
    10: [3, 9],
    12: [25],
  };

  #month;
  #startDay;
  #dayType;

  constructor(month, startDay) {
    this.#month = month;
    this.#startDay = startDay;
    this.#dayType = this.#setDayType(this.#startDay);
  }

  getTotalDays() {
    return Date.DAYS_PER_MONTH[this.#month];
  }

  getDayType(day) {
    const type = this.#dayType[(day - 1) % 7];

    // 주말
    if (!type) return "WEEKEND";

    // 평일
    const legalHolidays = Date.LEGAL_HOLIDAY[this.#month];

    if (legalHolidays && legalHolidays.includes(day)) {
      return "WEEKDAY_LEGAL";
    }

    return "WEEKDAY";
  }

  #setDayType(startDay) {
    if (startDay === "월") {
      return [1, 1, 1, 1, 1, 0, 0]; // 월화수목금토일
    } else if (startDay === "화") {
      return [1, 1, 1, 1, 0, 0, 1];
    } else if (startDay === "수") {
      return [1, 1, 1, 0, 0, 1, 1];
    } else if (startDay === "목") {
      return [1, 1, 0, 0, 1, 1, 1];
    } else if (startDay === "금") {
      return [1, 0, 0, 1, 1, 1, 1];
    } else if (startDay === "토") {
      return [0, 0, 1, 1, 1, 1, 1];
    } else if (startDay === "일") {
      return [0, 1, 1, 1, 1, 1, 0];
    }
  }
}

export default Date;
