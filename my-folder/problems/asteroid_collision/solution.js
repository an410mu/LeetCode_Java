/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    
    //iterate the array, push all positive
    //if negative, check condition
    //if less than top of stack, do nothing 
    //if equal to top of stack, pop
    //if greater than top, loop till less than top of stack 
    let stack = []
    for (let i =0; i < asteroids.length; i++) {
        if (asteroids[i] > 0 || stack.length === 0) {
            stack.push(asteroids[i])
        } else {
            while (true) {
                if (stack[stack.length - 1] < 0) {
                    stack.push(asteroids[i])
                    break
                } else if (asteroids[i] * -1 < stack[stack.length - 1]) {
                    break
                } else if (asteroids[i] * -1 === stack[stack.length - 1]) {
                    stack.pop()
                    break
                } else {
                    stack.pop()
                    if (stack.length === 0) {
                         stack.push(asteroids[i])
                        break
                    }
                }
            }
        }
    }
    return stack
};


