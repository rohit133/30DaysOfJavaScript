class EventEmitter {

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    constructor() {
        this.eventName = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.eventName.has(eventName)) {
            this.eventName.set(eventName, []);
        }
        const listeners = this.eventName.get(eventName);
        listeners.push(callback);
        return {
            unsubscribe: () => {
                const index = listeners.indexOf(callback);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.eventName.has(eventName)) {
            return [];
        }

        const listeners = this.eventName.get(eventName);
        const results = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */