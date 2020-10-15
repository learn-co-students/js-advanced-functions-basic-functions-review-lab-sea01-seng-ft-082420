// Your code here
function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(flare = "*") {
    return function(string = "special") {
        return `You are ${flare}${string}${flare}!`
    }
}

const Calculator = { "add": function(n1, n2){return n1+ n2}, "subtract": function(n1,n2){return n1-n2}, "multiply": function(n1,n2){return n1 * n2}, "divide": function(n1,n2){return n1 / n2}}

function actionApplyer(n, array) {
    // if (array = []){return n}
    // else {
    array.forEach(f => n = f(n))
    return n
    // }
}