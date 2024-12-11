class Workers {
  #workers;
  #idx;
  #previousChangedOrder;

  constructor(workers) {
    this.#workers = workers;
    this.#idx = 0;
    this.#previousChangedOrder = null; // 이전에 순서 바꿔준 사람
  }

  getNextWorker() {
    if (this.#previousChangedOrder !== null) {
      const next = this.#previousChangedOrder;
      this.#previousChangedOrder = null;
      return next;
    }

    const next = this.#workers[this.#idx++];

    if (this.#idx === this.#workers.length) this.#idx = 0;

    return next;
  }
}

export default Workers;
