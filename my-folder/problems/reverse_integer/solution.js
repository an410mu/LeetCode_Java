/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

   if (x > 2**31-1 || x < 2**31 * -1) return 0
    let body;
    if (x < 0) {
       body = x.toString().slice(1)
    } else {
        body = x.toString()
    }  

    
    let reversed = []
    for (let i=0; i < body.length; i++ ) {
       console.log(body[body.length - 1 -i])
        reversed.push(body[body.length - 1 -i])
        while (reversed[0] === 0){
            reversed.shift()
        }
    }

   let output = Number(reversed.join(''))
    if(output > 2**31-1) return 0

   return x > 0 ? output : -output
};