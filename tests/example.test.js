const test = require('ava')

function sum(a,b){
    return a+b;
}

test("Test example: Sum",t => {
    t.is(sum(1,2),3);
});