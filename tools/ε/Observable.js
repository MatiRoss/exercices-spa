class Observable {
    constructor() {
        this.callbacks = [];
    }

    subscribe(fn) {
        this.callbacks.push(fn);
    }

    publish(data) {
        this.callbacks.forEach(fn => fn(data));
    }
}

export default Observable
