
var MinStack = function() {
    this.storage = []
    this.min = []
    this.length = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    this.storage.push(val)
    this.length++
    if (this.min.length === 0 || this.min[this.min.length - 1] >= val) {
        this.min.push(val)
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let output
    if (this.length > 0) {
        output = this.storage.pop()
        this.length--;
    }
    if (output === this.min[this.min.length - 1]) {
        this.min.pop()
    }
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */