/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() { 
    return this.length === 0 ? -1 : this[this.length - 1]
};

const arr = [];
console.log(arr.last());
